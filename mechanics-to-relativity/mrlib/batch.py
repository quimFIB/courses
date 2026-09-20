"""`mr batch` — the build's state machine, kept on disk so any session can drive it.

The units are built in batches by agent workflows, and a batch can die at any
moment: the session quota runs out, the session is closed, the machine reboots.
Nothing about the build may live only in a session's head, so this module keeps
three facts in BUILD-STATE.json and derives everything else from the files:

    inflight        the batch launched last and not yet reported done
    blocked_until   when a quota-exhausted batch can next be retried
    history         every batch, with how it ended

`mr batch next` is the whole decision procedure. It prints one line of JSON and
exits with a code the caller branches on:

    0  launch this batch now   {"units": [...], "mode": "write" | "verify" | "both"}
    3  wait                    a batch is in flight and alive, or the quota is blocked
    4  done                    every unit written and verified
    5  stalled                 a batch is in flight but its agents stopped writing

"In flight" is a claim, not evidence: a workflow whose agents have all hit the
quota stays in flight and does nothing, and a tick that trusts the record reports
progress that is not happening. So liveness is measured, not assumed — from the
mtimes of the run's transcripts — and a batch idle for longer than IDLE is
reported stalled, with the quota reset time if its agents left one in their
transcripts. A batch in flight for longer than STALE is taken to have died with
its session: background workflows do not outlive the session that launched them.
"""

from __future__ import annotations

import datetime as dt
import json
import re
import sys
from pathlib import Path

STALE = dt.timedelta(minutes=150)    # a four-unit write+verify batch takes ~60-80 min
IDLE = dt.timedelta(minutes=15)      # longer than any gap between an agent's transcript writes
BATCH = 4
PROBE = dt.timedelta(minutes=45)     # how long a quota block is believed before trying again


def now() -> dt.datetime:
    return dt.datetime.now().astimezone().replace(microsecond=0)


def parse(ts: str) -> dt.datetime:
    return dt.datetime.fromisoformat(ts)


QUOTA = re.compile(r"session limit[^\"]*resets (\d{1,2}):(\d{2})\s*([ap]m)", re.I)


def transcripts(run: str) -> Path | None:
    """The run's transcript directory, wherever the session that launched it kept it."""
    if not run:
        return None
    hits = sorted(Path.home().glob(f".claude/projects/*/*/subagents/workflows/{run}*"))
    return hits[-1] if hits else None


def liveness(run: str) -> dict:
    """When the run's agents last wrote anything, and the quota reset they were told,
    if any. A stalled batch usually says why in the tail of an agent's transcript."""
    d = transcripts(run)
    if d is None:
        return {"known": False}
    files = list(d.glob("agent-*.jsonl")) + list(d.glob("journal.jsonl"))
    if not files:
        return {"known": False}
    last = max(f.stat().st_mtime for f in files)
    out = {"known": True, "dir": str(d),
           "last_write": dt.datetime.fromtimestamp(last).astimezone().replace(microsecond=0).isoformat(),
           # now() is truncated to the second, so a write in this very second can look future
           "idle_minutes": max(0, int((now().timestamp() - last) // 60))}
    for rank, f in enumerate(sorted(files, key=lambda f: f.stat().st_mtime, reverse=True)):
        with f.open("rb") as fh:                       # the tail is where the refusal lands
            fh.seek(max(0, f.stat().st_size - 4000))
            m = QUOTA.search(fh.read().decode("utf-8", "replace"))
        if m:
            h, mins, ampm = int(m.group(1)), int(m.group(2)), m.group(3).lower()
            h = (h % 12) + (12 if ampm == "pm" else 0)
            out["quota_reset"] = f"{h:02d}:{mins:02d}"
            # the last thing written was a refusal: the batch is over, whatever the clock says
            out["quota_fresh"] = rank == 0
            break
    return out


def load(path: Path) -> dict:
    state = json.loads(path.read_text()) if path.exists() else {}
    state.setdefault("verified", [])
    state.setdefault("history", [])
    return state


def save(path: Path, state: dict):
    path.write_text(json.dumps(state, indent=1, ensure_ascii=False) + "\n")


def plan(state: dict, written: list[str], unwritten: list[str]) -> tuple[int, dict]:
    """The next action, as (exit code, payload). Pure: reads state, changes nothing."""
    t = now()
    if state.get("blocked_until") and t < parse(state["blocked_until"]):
        return 3, {"wait": "quota", "until": state["blocked_until"],
                   "why": "the last batch died on the session quota; this tick would only repeat it. "
                          "The time is when to try again, not a promise: `mr batch unblock` overrides it."}
    fl = state.get("inflight")
    if fl:
        age = t - parse(fl["started"])
        if age < STALE:
            live = liveness(fl.get("run", ""))
            common = {"units": fl["units"], "mode": fl["mode"], "run": fl.get("run", ""),
                      "started": fl["started"], "minutes": int(age.total_seconds() // 60), **live}
            dead = live.get("known") and (live["idle_minutes"] >= IDLE.total_seconds() // 60
                                          or (live.get("quota_fresh") and live["idle_minutes"] >= 3))
            if dead:
                return 5, {**common, "stalled": True,
                           "why": ("the batch's last transcript write was a quota refusal"
                                   if live.get("quota_fresh") else
                                   "the batch is in flight but its agents stopped writing")
                                  + f", {live['idle_minutes']} minutes ago"
                                  + (f"; one was told the quota resets at {live['quota_reset']}"
                                     if "quota_reset" in live else ""),
                           "do": "TaskStop the run, close it with `mr batch done` (listing whatever "
                                 "verified), record `mr batch blocked HH:MM` if a reset is given, "
                                 "then tick again"}
            return 3, {"wait": "inflight", **common,
                       "why": "a batch is running; its completion notification is the next event"}
    unverified = [u for u in written if u not in state["verified"]]
    stale = {"stale": fl} if fl else {}
    if unverified:
        return 0, {"units": unverified[:BATCH], "mode": "verify", **stale}
    if unwritten:
        return 0, {"units": unwritten[:BATCH], "mode": "both", **stale}
    return 4, {"done": True, "verified": len(state["verified"])}


def start(state: dict, units: list[str], mode: str, run: str, owner: str):
    state.pop("blocked_until", None)
    state["inflight"] = {"units": units, "mode": mode, "run": run, "owner": owner,
                         "started": now().isoformat()}


def finish(state: dict, outcome: str, verified: list[str]):
    fl = state.pop("inflight", None) or {}
    state["verified"] = sorted(set(state["verified"]) | set(verified))
    state["history"].append({**fl, "finished": now().isoformat(), "outcome": outcome,
                             "verified": verified})


def blocked(state: dict, until: str):
    """Record a quota block. `until` is HH:MM (the next such time, local) or an ISO timestamp.

    The reset time comes from the failed agents' own error text, which has been wrong:
    it is a hint, not a fact. So the wait is capped at PROBE — a later tick tries again
    and finds out, instead of sitting out a reset that may already have happened."""
    t = now()
    if len(until) <= 5:
        h, m = (int(x) for x in until.split(":"))
        when = t.replace(hour=h, minute=m, second=0)
        if when <= t:
            when += dt.timedelta(days=1)
    else:
        when = parse(until)
    when += dt.timedelta(minutes=3)
    probe = min(when, t + PROBE)
    fl = state.pop("inflight", None) or {}
    state["blocked_until"] = probe.isoformat()
    state["history"].append({**fl, "finished": t.isoformat(), "outcome": "quota",
                             "reset_said": when.isoformat(), "retry_at": probe.isoformat()})


def main(args, state_path: Path, written: list[str], unwritten: list[str]):
    state = load(state_path)
    if args.action == "next":
        code, payload = plan(state, written, unwritten)
        print(json.dumps(payload, ensure_ascii=False))
        sys.exit(code)
    if args.action == "start":
        start(state, [u.zfill(2) for u in args.units], args.mode, args.run or "", args.owner or "")
        save(state_path, state)
        print(f"in flight: {' '.join(args.units)} ({args.mode}) {args.run or ''}")
    elif args.action == "done":
        finish(state, args.outcome, [u.zfill(2) for u in (args.verified or [])])
        save(state_path, state)
        print(f"batch closed ({args.outcome}); {len(state['verified'])} units verified")
    elif args.action == "blocked":
        blocked(state, args.until)
        save(state_path, state)
        print(f"quota blocked until {state['blocked_until']}")
    elif args.action == "unblock":
        was = state.pop("blocked_until", None)
        save(state_path, state)
        print(f"quota block cleared (was {was})" if was else "no quota block was recorded")
    elif args.action == "show":
        view = {k: v for k, v in state.items() if k != "history"}
        view["history"] = state["history"][-5:]
        print(json.dumps(view, indent=1, ensure_ascii=False))
