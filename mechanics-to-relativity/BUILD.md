# Building the units — how to resume

The 41 units are written in batches by agents, and a batch can be cut short at any
moment: a quota reset, a closed session, a machine reboot. So no plan is kept in
anyone's head. The truth is on disk, and

```fish
./mr todo
```

reads it: how many units are fully written, which are half written and exactly
which files they are missing, which are written but not yet verified, and the
next batch of each kind. Start every session with it.

## Driving the build from any session

The build survives the session that runs it only if no session is special. So
the state lives in `BUILD-STATE.json`, the decision lives in `./mr batch next`,
and a session's only job is to run ticks.

**Arming it.** In a Claude Code session opened in this directory, run

```
/loop 20m Continue building the mechanics-to-relativity course: follow BUILD.md "One tick"
```

A fixed interval, not a self-paced loop, on purpose. A fixed interval is a cron
job that fires whether or not the previous tick succeeded. A self-paced loop
re-arms itself at the end of each tick, so the one tick that dies on an
exhausted quota would end it for good. Most ticks find a batch still running
and cost next to nothing. The cron job lives as long as the session (and at most
seven days); a new session re-arms it with the same line — `CLAUDE.md` in this
directory says so to every session that opens here.

### One tick

1. `./mr batch next` and branch on its exit code.
   - **3, wait.** A batch is in flight, or the quota is blocked until the time
     it prints. Do nothing. (If the batch in flight was launched by another
     session less than 150 minutes ago, that session may still be running it:
     launching again would write the same units twice.) A quota block is a
     *guess*: the reset time comes from the failed agents' error text, which has
     been wrong once already, so a block never holds for more than 45 minutes
     before a tick tries again. If you have reason to think the quota is free
     now — the user says so, or another agent call just succeeded — run
     `./mr batch unblock` and tick again.
   - **5, stalled.** The batch is recorded as in flight but its agents have
     stopped writing — usually every one of them hit the quota, which pauses a
     workflow rather than failing it. The payload says how long they have been
     idle and, if an agent was told one, the reset time read out of its
     transcript. Do what its `do` field says: `TaskStop` the run, close it with
     `./mr batch done --outcome partial --verified <whatever passed>`, record
     `./mr batch blocked HH:MM` if a reset was given, and tick again.
   - **4, done.** Every unit is written and verified. Cancel the loop and go to
     "Next, in order" in `WHAT.md` for what remains.
   - **0, launch.** It printed `{"units": […], "mode": …}`; if it also printed
     `"stale"`, the previous batch died with its session and those units are
     simply being redone. Launch
     `Workflow({scriptPath: "<this dir>/build/build-units.js", args: {units, mode}})`
     and record it: `./mr batch start 12 13 14 15 --mode both --run <run id>`.
2. **When a batch's completion notification arrives**, read its journal (the
   notification names it) and close the batch:
   - The units whose *verify* agent returned a result passed:
     `./mr batch done --outcome ok --verified 12 13 14 15` (`partial` if some
     did not).
   - If any agent failed with *"You've hit your session limit · resets 1:10pm"*,
     close with the units that did pass, then record the block in 24-hour
     local time: `./mr batch blocked 13:10`. Ticks then wait until three minutes
     after the reset, and the next tick redoes whatever is unfinished —
     `./mr todo` shows it as half written or unverified.
   - Run the cheap checks on the new units — `./mr glossary`,
     `node slides/tools/sheet-check.mjs units/NN-*/problems.html`,
     `deck-overflow.mjs` — and fix what they report or note it in `WHAT.md`.
   - Then tick again at once rather than waiting for the cron.

`./mr batch show` prints the state and the last five batches; the full history
is in `BUILD-STATE.json`.

**Never report a batch as progressing on the strength of the record.** "In
flight" is a claim; the journal's `started` lines say what was launched, not what
is still running. A workflow whose agents have all hit the quota sits there
looking busy. `./mr batch next` measures liveness from the transcripts' mtimes
for you, which is why the tick asks it rather than reading the journal by eye.

## The two passes

**Write** — one agent per unit produces `slides.html`, `problems.html` and
`GLOSSARY.org`, following `AUTHORING.md` and the unit's spec.

**Verify** — a second, independent agent re-derives every worked example and
every problem solution from scratch, checks every number numerically, checks
that no tool is used before the unit that introduces it, runs the mechanical
checks, and fixes what it finds. A unit is not built until it has been through
this pass; record that with

```fish
./mr verified 04 05 06 07        # appends to BUILD-STATE.json
```

`BUILD-STATE.json` is committed, because "which units have been checked by a
second pair of eyes" is a fact about the materials, not about one session.

## Running a batch

Everything a batch needs is in `build/`:

```
build/build-units.js    the Workflow script: {units: [...], mode: "write" | "verify" | "both"}
build/spec/NN.md        one unit's spec — physics, tools, worked example, problems, checkpoint
build/index.md          every unit and what it teaches: the prerequisite contract, checkable
build/syllabus.json     the agreed syllabus the specs and CURRICULUM.html were cut from
build/slugs.json        unit number -> directory name
```

In a Claude Code session opened in this directory, a batch is

```
Workflow({scriptPath: "build/build-units.js", args: {units: ["08","09","10","11"], mode: "write"}})
```

(absolute path if the tool asks for one). Four units per batch is the working
size. A write batch costs roughly 1.6M agent tokens and a verify batch about
1M, so two batches in flight at once reliably hit the session quota within an
hour; one at a time, alternating write and verify, is the pace that lasts.

If a batch dies mid-unit, nothing is lost — rerun the same units in `write`
mode. The agent overwrites its own half-finished files. A unit with only a
`slides.html` was cut off before its problems; delete the directory first if the
deck is suspect, since a writer resumes from what it finds.

## The mechanical checks, which are cheap and catch a lot

```fish
./mr glossary                                     # every marked term resolves, every slide link lands
node slides/tools/deck-overflow.mjs "file://$PWD/units/NN-slug/slides.html" /tmp/ov /usr/bin/brave
node slides/tools/sheet-check.mjs units/*/problems.html   # every formula renders; every problem has hints and a solution
python3 map/mkmap.py                              # after any change to the unit list
./mr site                                         # builds _site/ and fails on a broken local link
```

Units 00–07 were first written with their practice as three Org files each
(`problems/PROBLEMS.org`, `SOLUTIONS.org`, `HINTS.org`), copied from the sister
course, whose learner writes code in Emacs anyway. This course is solved on
paper, and a solution sheet with several hundred formulas froze Emacs on open,
so on 2026-09-19 they were converted to one `problems.html` each by
`build/org2sheet.py` (6,876 formulas, all rendering) and the Org files removed.
Units from 08 on are written straight into `problems.html`.

Three faults the first batch exposed, all fixed in the tooling rather than in
the units: a glossary entry whose definition starts on the line below `::` was
silently dropped; `deck.js` hard-required the reveal highlight plugin, so any
deck that did not load it failed to initialise and every check on it passed
vacuously; the dependency map's part labels landed on top of nodes.

A fourth, found on 2026-09-20 and the same shape as the second: `deck-overflow.mjs`
left its headless browser running after each call, and chose its debugging port at
random from a range of 150. Sweep a few dozen decks and a run eventually picks a
port an abandoned browser still holds, connects to *that* one's `about:blank`,
measures a page with no slides in it, and prints `{}` — which reads like success
and is not. It now takes a port the OS certifies free, kills its whole process
group on exit, and **exits non-zero with a reason on anything it could not
measure**; "no overflow" is now a statement about a deck that actually loaded.
One consequence worth knowing: the check needs a quiet machine. Run it while ten
agents are working and every deck will miss the 20-second load window and fail
loudly — correct, but not what you wanted to learn.
