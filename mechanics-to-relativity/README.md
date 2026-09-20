# Mechanics to Relativity — course materials

`CURRICULUM.html` explains what the course covers and why — open it in a browser
first. This file explains how the materials are laid out and used.

Each unit has two parts, both read in a browser. The **theory** is a slide deck
with speaker notes written for someone studying alone: the full proofs, the
history and the traps live there. The **practice** is a problem page on which
every problem has a ladder of hints and a complete worked solution folded under
it, because there is nobody to ask. The problems are solved on paper. There is
no lab, no test suite and no code to write: comparison against the worked
solution is the whole assessment model.

## Setup, once

None. The `mr` command is standard-library Python 3 — there is no virtualenv to
create and nothing to install. Decks fetch reveal.js, KaTeX and the fonts from
cdnjs, so reading slides needs a network connection.

## Before unit 00

```fish
./mr ready              # the readiness sheet: the assumed background, tested, with where to fill gaps
```

## Working a unit

```fish
./mr slides 06          # theory: N = notes beside the slide, R = reading mode, G = glossary
./mr problems 06        # practice: each problem, its hint ladder and its worked solution, folded
./mr done 06            # record that you met the checkpoint
./mr status             # every unit, and which checkpoints you have met
./mr site --serve       # the whole course as a static site on localhost:8000
```

The order that works: read the deck with the notes panel open (`N`), work the
problems on paper, open the hints rung by rung when stuck — each rung appears
only once the one before it is open — and open the worked solution only
afterwards, including for the problems you got right, since several give a
second route that is better than the first. On the problem page, `F` folds
everything back and `D` switches dark and light, as in the decks.

## Layout

```
CURRICULUM.html         the proposal: what the course is, all 41 units, the dependency map
AUTHORING.md            the contract a unit keeps, and the file formats — read before writing one
BUILD.md, build/        how the units are being built, and how any session resumes that
CITATIONS.md            the citations no online source could settle, and what was already tried
CLAUDE.md               what a Claude Code session opened here must do to keep the build running
mr                      the command; mrlib/ is its implementation (standard library only)
mrlib/cli.py            the subcommands above
mrlib/glossary.py       GLOSSARY.org -> glossary.js, and the warnings `mr glossary` reports
mrlib/site_build.py     the static site: an allow-list copy of decks, problem pages, glossaries and the curriculum
map/mkmap.py            generates the dependency map inside CURRICULUM.html, between its MAP markers
slides/deck.css         the shared theme: one palette, six part colours, light and dark
slides/deck.js          the shared boot: KaTeX, reveal, the notes panel, reading mode, glossary popovers
slides/sheet.css, .js   the same palette and KaTeX for the problem pages, laid out for reading beside paper
slides/tools/           authoring checks — deck-check.sh (overflow, terms, keys), sheet-check.mjs, org-latex-check.sh
units/NN-slug/
  slides.html           the theory, with <aside class="notes"> on every content slide
  problems.html         the practice: every problem with its hint ladder and worked solution folded under it
  GLOSSARY.org          the unit's terms in deck order, each naming its slide
  glossary.js           generated from GLOSSARY.org by `mr glossary`; committed
progress.json           what `mr done` records; not committed
BUILD-STATE.json        the build's state: verified units, the batch in flight, a quota block, history
```

## Conventions

- **Nothing is used before the unit that introduces it.** The learner starts
  with linear algebra and single-variable analysis and no physics; vector
  calculus, ODE methods, Fourier, complex analysis, PDEs, asymptotics, the
  calculus of variations, tensors and differential geometry are all taught here,
  in dependency order. `CURRICULUM.html` is the record of that order.
- **Mathematics carries the definition, physics carries the motivation.** A
  tensor is a multilinear map; the transformation law of its components is a
  theorem. The physics is always given too — it is why the object exists.
- **Every claim is proved or explicitly cited.** Short proofs on the slide,
  longer ones in the notes, imported results labelled with where they are
  proved. The citations were checked against sources on 2026-09-20 — 1,461 of
  them, 33 corrected — but not all of them could be: `CITATIONS.md` lists what
  no online source would settle. Those are not known to be wrong, and the rule
  there is that an unconfirmed locator stays exactly as it is, because a
  swapped-in guess looks checked.
- **A unit is finished when its checkpoint is true**, not when the deck has been
  read. Checkpoints are falsifiable on purpose, and most of them end in a number
  the world can refute.

`AUTHORING.md` has the rest, including the exact shape of a deck and the checks
to run before calling a unit built.
