# quantum-computing

A 27-unit self-study course in quantum computing, maths-first, inside
`published-courses/` and therefore **published** (since 2026-10-28): a push to
`main` redeploys it. `WHAT.md` is the state and
the ordered next steps; read it first. `AUTHORING.md` is the contract every unit
keeps; `BUILD.md` is how units get built and checked.

## Resuming the build

The learner chose (2026-10-27) to have the remaining batches **chained**: each
one launched as soon as the previous one passes its checks, with the units read
afterwards rather than part by part. All 27 specs are approved. So, in a session
asked to continue:

1. `./qc todo` and `./qc batch next` — the truth is on disk.
2. If a batch is in flight from a session that no longer exists, follow
   `BUILD.md`, "When the quota stops a batch", last paragraph.
3. Otherwise launch the batch `./qc batch next` names (`BUILD.md`, "Running
   one"), record it with `./qc batch start`, and when it completes run
   `python3 build/check_batch.py <units> --run <run id>`, close it, update
   `WHAT.md`, and launch the next.

One batch at a time. (All 27 are built as of 2026-10-28, so `./qc batch next`
reports done.)

## Publishing

This directory is tracked by the `published-courses/` repository (remote
`quimFIB/courses`), and its site is built by `qctool/site_build.py`, which
`site/build_all.py` finds through `course.json`. Commit as the repository's
local noreply identity, and push only `main`: that is what deploys.
`courses/PUBLISHING.md` has the scheme.
