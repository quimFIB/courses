"""`mr` — the one command for working through a unit.

    mr ready              before unit 00: the readiness sheet — does the assumed background hold?
    mr slides 01          open the unit's slides in a browser (rebuilds its glossary.js)
    mr problems 01        open the unit's problem sheet in a browser: every problem with its
                          hint ladder and its worked solution folded underneath
    mr glossary [01]      rebuild glossary.js from GLOSSARY.org, for one unit or all
    mr site [--serve]     build the static site (decks, problem sheets, curriculum) into _site/
    mr done 01            record that you met the unit's checkpoint (today's date)
    mr status             one line per unit: built, started, checkpoint met
    mr todo               what is still to build: unwritten units, unverified units, next batch
    mr batch next         the build's next step, as JSON, for whichever session is driving it
                          (see BUILD.md "One tick"); also: batch start | done | blocked | show

There is no lab and no test runner: this course is theoretical. What `mr status`
reports is what you have told it with `mr done`, plus what exists on disk.
"""

from __future__ import annotations

import argparse
import datetime
import json
import os
import re
import shutil
import subprocess
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
UNITS = ROOT / "units"
PROGRESS = ROOT / "progress.json"
BUILD = ROOT / "BUILD-STATE.json"
PARTS = 41          # units in the curriculum, 00..40


def units() -> list[Path]:
    return sorted(p for p in UNITS.iterdir() if p.is_dir() and re.match(r"\d\d-", p.name))


def find_unit(key: str) -> Path:
    key = key.zfill(2)
    hits = [p for p in units() if p.name.startswith(key)]
    if not hits:
        have = ", ".join(p.name for p in units()) or "none"
        sys.exit(f"no unit {key!r}; built so far: {have}")
    return hits[0]


def _open(path: Path):
    opener = shutil.which("xdg-open") or shutil.which("open")
    if not opener:
        print(path)
        return
    subprocess.Popen([opener, str(path)], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    print(f"opened {path.relative_to(ROOT)}")




def _glossary(chosen, verbose=False) -> list[str]:
    """Rebuild each unit's glossary.js; print what doesn't resolve (a slide link that names
    no slide, a term the deck marks that the glossary lacks)."""
    sys.path.insert(0, str(ROOT))
    from mrlib import glossary
    warnings = []
    for unit in chosen:
        found = glossary.build(unit)
        warnings += found
        for w in found:
            print(f"{unit.name}: {w}", file=sys.stderr)
        if verbose and (unit / "glossary.js").exists():
            print(f"built {(unit / 'glossary.js').relative_to(ROOT)}")
    return warnings


def _progress() -> dict:
    if PROGRESS.exists():
        return json.loads(PROGRESS.read_text())
    return {}


def _title(unit: Path) -> str:
    deck = unit / "slides.html"
    if deck.exists():
        m = re.search(r'<section class="title-slide">.*?<h1>(.*?)</h1>', deck.read_text(), re.S)
        if m:
            return re.sub(r"<[^>]+>", "", m.group(1)).strip()
    return unit.name.split("-", 1)[1].replace("-", " ")


def status():
    done = _progress()
    rows = []
    for unit in units():
        no = unit.name[:2]
        has = lambda *p: (unit.joinpath(*p)).exists()
        built = "deck" if has("slides.html") else "    "
        probs = "problems" if has("problems.html") else "        "
        mark = f"met {done[no]}" if no in done else ""
        rows.append(f"  {no}  {_title(unit)[:46]:<46}  {built}  {probs}  {mark}")
    print(f"{len(rows)} units, {len(done)} checkpoints met\n")
    print("\n".join(rows))


FILES = ("slides.html", "GLOSSARY.org", "problems.html")


def written(unit: Path) -> bool:
    return all((unit / f).exists() for f in FILES)


def build_state() -> dict:
    if BUILD.exists():
        return json.loads(BUILD.read_text())
    return {"verified": []}


def todo():
    """What is left to build. The build runs in batches and can be interrupted — by a
    quota reset, a closed session, anything — so this reads the truth off disk rather
    than trusting a plan."""
    state = build_state()
    have = {u.name[:2]: u for u in units()}
    done_w = [n for n in sorted(have) if written(have[n])]
    part_w = [n for n in sorted(have) if not written(have[n])]
    todo_w = sorted([f"{i:02d}" for i in range(PARTS) if f"{i:02d}" not in have] + part_w)
    todo_v = [n for n in done_w if n not in state["verified"]]
    print(f"{len(done_w)}/{PARTS} units written, {len(state['verified'])}/{PARTS} verified\n")
    if part_w:
        print("partly written (missing files):")
        for n in part_w:
            missing = [f for f in FILES if not (have[n] / f).exists()]
            print(f"  {n} {have[n].name:<28} missing {', '.join(missing)}")
        print()
    print(f"to write  ({len(todo_w)}): {' '.join(todo_w) or '—'}")
    print(f"to verify ({len(todo_v)}): {' '.join(todo_v) or '—'}")
    if todo_w:
        print(f"\nnext write batch:  {' '.join(todo_w[:4])}")
    if todo_v:
        print(f"next verify batch: {' '.join(todo_v[:4])}")


def mark_verified(nos: list[str]):
    state = build_state()
    state["verified"] = sorted(set(state["verified"]) | set(nos))
    BUILD.write_text(json.dumps(state, indent=1) + "\n")
    print(f"verified: {' '.join(nos)}  ({len(state['verified'])}/{PARTS} total)")


def main(argv=None):
    ap = argparse.ArgumentParser(prog="mr", description=__doc__,
                                 formatter_class=argparse.RawDescriptionHelpFormatter)
    sub = ap.add_subparsers(dest="cmd", required=True)
    sub.add_parser("ready", help="open the readiness sheet: the course's assumed background, tested")
    for name in ("slides", "problems"):
        sub.add_parser(name).add_argument("unit")
    sub.add_parser("glossary").add_argument("unit", nargs="?")
    site = sub.add_parser("site")
    site.add_argument("--serve", action="store_true", help="then serve _site/ on http://localhost:8000")
    site.add_argument("--port", type=int, default=8000)
    d = sub.add_parser("done")
    d.add_argument("unit")
    d.add_argument("--undo", action="store_true")
    sub.add_parser("status")
    sub.add_parser("todo")
    v = sub.add_parser("verified", help="record that these units passed the verification pass")
    v.add_argument("units", nargs="+")
    b = sub.add_parser("batch", help="the build state machine: next | start | done | blocked | show")
    bs = b.add_subparsers(dest="action", required=True)
    bs.add_parser("next", help="print the next step as JSON; exit 0 launch, 3 wait, 4 done")
    st = bs.add_parser("start", help="record a launched batch")
    st.add_argument("units", nargs="+")
    st.add_argument("--mode", required=True, choices=("write", "verify", "both"))
    st.add_argument("--run", help="the workflow's run id")
    st.add_argument("--owner", help="who launched it: a session id or a name")
    dn = bs.add_parser("done", help="close the batch in flight")
    dn.add_argument("--outcome", default="ok", choices=("ok", "partial", "failed"))
    dn.add_argument("--verified", nargs="*", help="units that passed verification in this batch")
    bl = bs.add_parser("blocked", help="the batch died on the quota: record when it resets")
    bl.add_argument("until", help="HH:MM local, as the quota message gives it (e.g. 13:10), or ISO")
    bs.add_parser("unblock", help="clear a recorded quota block: the quota turned out to be free")
    bs.add_parser("show")
    args = ap.parse_args(argv)

    if args.cmd == "ready":
        page = UNITS / "readiness" / "problems.html"
        if not page.exists():
            sys.exit(f"{page.relative_to(ROOT)} is not written yet")
        _open(page)
    elif args.cmd == "slides":
        unit = find_unit(args.unit)
        _glossary([unit])
        _open(unit / "slides.html")
    elif args.cmd == "problems":
        page = find_unit(args.unit) / "problems.html"
        if not page.exists():
            sys.exit(f"{page.relative_to(ROOT)} is not written yet")
        _open(page)
    elif args.cmd == "glossary":
        chosen = [find_unit(args.unit)] if args.unit else units()
        sys.exit(1 if _glossary(chosen, verbose=True) else 0)
    elif args.cmd == "site":
        warnings = _glossary(units())
        out = ROOT / "_site"
        code = subprocess.call([sys.executable, str(ROOT / "mrlib" / "site_build.py"), str(out)], cwd=ROOT)
        if code or warnings:
            sys.exit(code or 1)
        if args.serve:
            print(f"serving {out.relative_to(ROOT)} on http://localhost:{args.port}  (Ctrl-C stops)")
            subprocess.call([sys.executable, "-m", "http.server", str(args.port), "--directory", str(out)])
    elif args.cmd == "done":
        unit = find_unit(args.unit)
        no = unit.name[:2]
        done = _progress()
        if args.undo:
            done.pop(no, None)
            print(f"unit {no} no longer marked")
        else:
            done[no] = datetime.date.today().isoformat()
            print(f"unit {no} — {_title(unit)}\n  checkpoint met {done[no]}")
        PROGRESS.write_text(json.dumps(dict(sorted(done.items())), indent=2) + "\n")
    elif args.cmd == "status":
        status()
    elif args.cmd == "todo":
        todo()
    elif args.cmd == "verified":
        mark_verified([u.zfill(2) for u in args.units])
    elif args.cmd == "batch":
        from mrlib import batch
        have = {u.name[:2]: u for u in units()}
        written_ = [n for n in sorted(have) if written(have[n])]
        unwritten = sorted([f"{i:02d}" for i in range(PARTS) if f"{i:02d}" not in have]
                           + [n for n in have if not written(have[n])])
        batch.main(args, BUILD, written_, unwritten)


if __name__ == "__main__":
    main()
