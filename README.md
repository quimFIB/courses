# Courses

Two independent self-study courses, sharing one repository and one GitHub Pages
deployment and nothing else. Each course keeps its own CLI (`co`, `mr`), its own
`slides/`, its own `CURRICULUM.html`, its own README and its own toolchain.
Nothing about how either course is built or studied is shared.

## The site

Published at <https://quimfib.github.io/courses/>, one subdirectory per course.

- `combinatorial-optimization/` — Combinatorial & constrained optimization.
  See `combinatorial-optimization/README.md`.
- `mechanics-to-relativity/` — Mechanics to Relativity.
  See `mechanics-to-relativity/README.md`.

## They differ in kind, not just in subject

The optimization course is worked through by writing Python against a test
suite: the library supplies everything that is not the lesson, and each
implementation is then benchmarked against the industrial solver that does the
same job. The mechanics course is worked through on paper: every problem carries
a hint ladder and a full worked solution, and there is no code to write.

The published site is therefore a different fraction of each. For the
optimization course it is the theory half — the labs, their tests and their
reference solutions live in this repository and never reach the site. For the
mechanics course it is the whole thing: decks, problems, hints, solutions and
the readiness sheet.

## A course in this repository is a published course

That is the organising idea, and it is why the courses sit one level down
inside `published-courses/` rather than beside the working directories above
it. Publishing a course is moving its directory into this repository;
withholding one is moving it out, or never moving it in. There is no flag, no
branch and no per-course setting that says whether a course ships — its
presence in this tree is the whole act. What a course must declare instead is
what it *is*: five fields in a `course.json` at its own root, which is all the
landing-page generator reads.

## Building the site locally

```fish
python site/build_all.py _site      # standard library only
python -m http.server -d _site      # then open localhost:8000
```

`build_all.py` discovers every directory holding a `course.json`, runs that
course's declared builder into `_site/<dirname>`, and writes the landing page.
Each course can still be built alone by running its own builder, which produces
exactly what it always did.

## Licensing

The course prose, slides, figures, problem sheets and solutions in both courses
are CC BY-NC-SA 4.0 — see `LICENSE-CONTENT`.

The code is MIT — see `LICENSE-CODE`, whose scope note matters, because "code"
means something different in each course.
