# Building the units

The same machinery as Quantum Computing, adapted on 2026-10-27; Mechanics to
Relativity's `BUILD.md` is the long account of why each piece is the way it
is. The truth is on disk, never in a session's head:

```fish
./cap todo           # what is written, what is verified, the next batch
./cap batch next     # the next step as JSON: exit 0 launch, 3 wait, 4 done, 5 stalled
```

## What a batch needs

```
build/build-units.js    the Workflow script: {units: [...], mode: "write" | "verify" | "both", root}
build/spec/NN.md        one unit's spec: physics, sources, tools, running example, problems, checkpoint
build/index.md          every unit and what it teaches: the prerequisite contract
build/syllabus.json     the 17 cards of CURRICULUM.html as data (the page wins if they differ)
build/slugs.json        unit number -> directory name
AUTHORING.md            the contract, the rule on sources, and the conventions every unit keeps
```

`build/index.md` and `build/syllabus.json` are generated from the curriculum
page's cards by `python3 build/mkindex.py`; rerun it whenever a card changes. Every spec carries a
**Sources** section, and nothing goes into a unit that is not derived there or
traceable to a named source (AUTHORING.md, "Sources: only what is verified").

## Running one

Each unit gets a write agent and then an independent verify agent, which
re-derives every worked example and solution, checks every number and every
source, checks the prerequisite contract, and fixes what it finds.

**As a Workflow**, when the learner has asked for one (a Workflow runs many
agents, so it is only launched on an explicit request), with the absolute path
of this directory as `<root>`:

```
Workflow({scriptPath: "<root>/build/build-units.js", args: {units: ["01"], mode: "both", root: "<root>"}})
./cap batch start 01 --mode both --run <run id>
```

**Without one**, as units 00–02 were built: render the briefs from the script
(the same prompts, plus the standing additions learnt building 00–02 — scratch
directories per writer, the approved units to match, web confirmation of
citations, the report to finish with):

```fish
node build/render-briefs.mjs 03 04      # build/briefs/write-NN.md and verify-NN.md
```

Then one Agent per writer, told only "your complete brief is in
build/briefs/write-NN.md — read it in full first and follow it exactly". Writers
of different units can run in parallel. When a writer finishes, replace
WRITER_REPORT in `verify-NN.md` with a summary of its report — its deviations
from the spec and additions beyond it above all, and the citations it could not
confirm — and launch the verifier the same way. Then read both reports, run the
mechanical checks yourself, look at a few slides, and fix what a verifier left
for the caller (it may not edit outside its unit). `build/briefs/` is gitignored:
the rendered briefs name this machine's scratch paths, and `render-briefs.mjs`
regenerates them.

If an agent dies on the session quota, its work so far is on disk and in its
transcript: resume it with SendMessage once the quota resets rather than
starting a new one.

When a run ends, close it:

```fish
./cap batch done --outcome ok --verified 00      # partial, with the units that passed, if not all did
./cap batch blocked 13:10                        # if an agent died on the session quota
```

Four units per batch is the sister courses' working size, and one batch at a
time: two in flight exhaust the quota within the hour.

## The mechanical checks

```fish
./cap glossary NN                                 # every marked term resolves, every slide link lands
slides/tools/deck-check.sh NN [i j …]             # no overflowing slide; terms and links work; screenshots of slides i, j
node slides/tools/sheet-check.mjs units/NN-*/problems.html   # every formula renders; hints and solutions present
python3 map/mkmap.py                              # after any change to the unit list
./cap site                                        # builds _site/ and fails on a broken local link
```

`deck-check.sh` exits 0 only when both the overflow and the terms check pass, and takes
its screenshots (`slide-i.png` in `$OUT`, via `deck-shot.mjs`) even when they fail. Before
2026-10-28 it took them with the browser's `--screenshot` mode, which hung and under
`set -e` ended the script, and its link check failed on slide titles containing maths.

The checks need a quiet machine: run the overflow check while agents are
working and every deck misses its load window and fails loudly.
