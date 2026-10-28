# Building the units

The same machinery as Mechanics to Relativity, adapted on 2026-10-27; its
`BUILD.md` is the long account of why each piece is the way it is. The truth is
on disk, never in a session's head:

```fish
./qc todo           # what is written, what is verified, the next batch
./qc batch next     # the next step as JSON: exit 0 launch, 3 wait, 4 done, 5 stalled
```

## What a batch needs

```
build/build-units.js    the Workflow script: {units: [...], mode: "write" | "verify" | "both", root}
build/spec/NN.md        one unit's spec: physics, tools, running example, problems, checkpoint
build/index.md          every unit and what it teaches: the prerequisite contract
build/syllabus.json     the 27 cards of CURRICULUM.html as data (the page wins if they differ)
build/slugs.json        unit number -> directory name
AUTHORING.md            the contract and conventions every unit keeps
```

A unit is not launched until its spec exists and has been read by the learner.

## Running one

From a Claude Code session, with the absolute path of this directory as `<root>`:

```
Workflow({scriptPath: "<root>/build/build-units.js", args: {units: ["00"], mode: "both", root: "<root>"}})
./qc batch start 00 --mode both --run <run id>
```

`root` is required: the runner has no `process` global. Each unit gets a write
agent and then an independent verify agent, which re-derives every worked
example and solution, checks every number, checks the prerequisite contract,
runs every referee snippet, and fixes what it finds. When the notification
arrives, read the journal it names and close the batch:

```fish
./qc batch done --outcome ok --verified 00      # partial, with the units that passed, if not all did
./qc batch blocked 13:10                        # if an agent died on the session quota
```

Four units per batch is the sister course's working size, and one batch at a
time: two in flight exhaust the quota within the hour.

## After every batch, before the next

```fish
python3 build/check_batch.py 17 18 19 20 --run <run id>
```

It prints the journal's results (defects fixed, anything left unfixed), then
glossary, sheet-check, deck-overflow (with figure counts and inline styles),
every referee block on the units' sheets run under `.venv`, cross-unit
quotations that match nothing, the curriculum page's well-formedness (verifiers
sometimes correct a card) and `./qc site`. Read the unfixed list and any
unmatched quotation by eye — most quotations are emphasis, not citations. A batch
is closed `ok` only when this is clean; `python3 build/check_batch.py --referee`
reruns every referee block in the course.

## When the quota stops a batch

Agents that hit the session limit pause rather than fail, so the run sits "in
flight" doing nothing. `./qc batch next` names the reset time it finds in the
transcripts. Once the limit has lifted, stop the run and resume it from its own
cache, which replays every agent that already finished and reruns only the rest:

```
TaskStop(<the workflow's task id>)
Workflow({scriptPath: "<root>/build/build-units.js", resumeFromRunId: "<run id>",
          args: {units: [...], mode: "both", root: "<root>"}})
```

The run id stays the same, so the batch record in `BUILD-STATE.json` needs no
change. A writer that restarts finds its half-written files and finishes them.
Done this way on 2026-10-27 for 13–16. If the session that launched the run is
gone, its task id is gone too: close the batch as `partial` with whatever
verified (`./qc batch done --outcome partial --verified …`) and launch the
unfinished units afresh.

## The mechanical checks

```fish
./qc glossary NN                                  # every marked term resolves, every slide link lands
slides/tools/deck-check.sh NN [i j …]             # no overflowing slide; terms and links work; screenshots of slides i, j
node slides/tools/sheet-check.mjs units/NN-*/problems.html   # every formula renders; hints and solutions present
python3 map/mkmap.py                              # after any change to the unit list
./qc site                                         # builds _site/ and fails on a broken local link
```

The checks need a quiet machine: run the overflow check while agents are
working and every deck misses its load window and fails loudly.
