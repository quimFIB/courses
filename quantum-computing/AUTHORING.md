# How a unit is written

Adapted on 2026-10-27 from Mechanics to Relativity's `AUTHORING.md`, so the
decks, sheets and tooling carry over unchanged. What differs is the subject's
version of "check the dimensions", the conventions a quantum course has to fix
once, and the optional referee.

One unit is three files under `units/NN-slug/`:

```
slides.html      the theory: reveal.js deck, speaker notes on every content slide
problems.html    the practice: every problem, with its hint ladder and worked solution folded under it
GLOSSARY.org     the unit's terms in deck order; `qc glossary` compiles it to glossary.js
```

`glossary.js` is generated; everything else is written by hand. Both pages are
read in a browser, and the problems are solved on paper.

## The contract every unit keeps

1. **Nothing is used before it is introduced.** A unit may use only what its
   `needs` (transitively) have taught, plus the assumed background:
   mathematical maturity; linear algebra over ℝ including the spectral theorem
   for symmetric matrices and the SVD; elementary group theory to Lagrange and
   quotients; classical complexity (Turing machines, P, NP, reductions,
   Cook–Levin, uniform circuit families, BPP and amplification); discrete
   probability with Chernoff–Hoeffding stated; elementary number theory
   (modular arithmetic, Euclid, CRT, Euler). **No physics at all is assumed**,
   and no complex linear algebra beyond ℂ as a field: unit 00 builds complex
   inner-product spaces. If a derivation wants a tool that has not arrived,
   move the derivation, or state the result and name the unit that proves it.
   `build/index.md` lists what every unit teaches.
2. **Mathematics carries the definition; the experiment or the computational
   question carries the motivation.** A state is a unit vector up to phase; a
   measurement is a projection-valued measure; the tensor product is defined by
   its universal property. The experiment that forces each definition is given
   too, always — Stern–Gerlach, the interferometer, the two photons — because
   without it the definition is arbitrary. Physics is explained from nothing
   when it appears: the learner has never met it.
3. **Every claim is either proved, or explicitly not proved.** A one-line proof
   goes on the slide; a longer one goes in the notes under **Full proof**. A
   result imported from elsewhere is labelled *cited*, with where it is proved.
   There is no third category.
4. **Normalise and check, every time.** This subject's version of checking
   dimensions. Every state written down is normalised, on the slide. Every
   probability distribution sums to one, on the slide. An operator claimed
   unitary, Hermitian, positive or a projection is checked to be one, and a
   density operator has trace one. Every boxed result is checked in at least one
   case already known: one qubit, θ = 0, a classical basis-state input, n small
   enough to multiply out. Where physical quantities appear (units 01, 02, 25,
   26), dimensions are checked as in the sister course.
5. **One running example per unit.** Introduced on the overview slide, returned
   to in every section, and closed at the end.
6. **The checkpoint is falsifiable.** One claim about what the learner can now
   do, phrased so that failing it is unambiguous, usually ending in a number. It
   is the last slide, and it is repeated at the head of the problem sheet.
7. **Nothing needs the referee.** Every slide, solution and checkpoint is
   complete on paper. The referee is offered, never required (see below).

## Conventions, fixed for the whole course

Stated where first used, and never changed. A unit that must depart from one
(for instance to quote a source) says so in a `box warn`.

- **Inner product:** ⟨u|v⟩ is conjugate-linear in the **first** argument and
  linear in the second, as in physics. (Mechanics to Relativity, unit 19,
  uses the opposite convention; a unit that cross-references it says so.)
- **Basis and order:** |0⟩ = (1, 0)ᵀ, |1⟩ = (0, 1)ᵀ. Qubit 0 is the leftmost
  symbol of a ket and the most significant bit of an index: |01⟩ is basis
  vector 1. In circuit diagrams qubit 0 is the top wire. (Qiskit reverses
  this; say so the first time it could matter.)
- **Gates:** X, Y, Z the Pauli matrices; H = (X + Z)/√2; S = diag(1, i);
  T = diag(1, e^{iπ/4}); R_P(θ) = exp(−iθP/2), so a rotation by θ on the
  Bloch sphere. CNOT names control first: CNOT₀₁ has control 0, target 1.
- **Fourier:** the QFT on ℤ_N sends |j⟩ to N^{−1/2} Σ_k e^{+2πijk/N} |k⟩.
- **Global phase** is physically meaningless and is dropped only with the words
  "up to global phase" on the slide.
- **Logarithms** are base 2 unless written ln.
- **ħ = 1**, so evolution is e^{−iHt} with H in angular-frequency units,
  except where physical units are in play (units 02, 25, 26 and their
  numbers): there H is an energy, evolution is e^{−iHt/ħ}, and the slide says
  ħ has been restored. Unit 01 states the convention.

## The referee, and how a unit may mention it

`qclib` is a NumPy-only simulator in this directory (see `README.md`). It
exists so a learner can check an amplitude or a circuit computed by hand.

- **Decks never mention it** beyond, at most, one sentence in the overview's
  notes.
- **On the sheet**, a worked solution may end with `<h4>With the referee</h4>`
  and a few lines in `<pre><code>`, using only qclib's public API, that
  reproduce the solution's answer. It follows the paper solution; it never
  replaces a step of it. Not every problem needs one; a unit with a natural
  computational check should have two or three.
- **No other code and no other framework.** No Qiskit, no Cirq, no pseudocode
  labs. One named exception: unit 10's optional problem "write your own
  statevector simulator", whose worked solution is a short NumPy listing,
  tested against qclib on random circuits. It is marked optional, and nothing
  later depends on it.
- `tests/test_known_results.py` holds the curriculum's numbers as answers.
  Units do not cite it.

## The deck

Structure, in order:

```html
<!doctype html>
<html lang="en">
<head>
  … meta, fonts, reveal.min.css, katex.min.css, ../../slides/deck.css …
  … nothing else: no highlight.js, no <style> block …
  <title>NN · Title</title>
</head>
<body data-trunk="TRUNK">            <!-- the part letter, lower case: a–e -->
<div class="refs" hidden>
  <template data-ref="key">…</template>   <!-- the running example, once -->
</div>
<div class="reveal"><div class="slides">
  <section class="title-slide"> … </section>
  <section> overview </section>
  <section class="divider"> section 1 </section>
  … content slides …
  <section> the checkpoint </section>
</div></div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/reveal.js/5.1.0/reveal.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/katex.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.9/contrib/auto-render.min.js"></script>
<script src="../../slides/deck.js"></script>
</body>
</html>
```

The title slide carries the metadata the static site reads, so its shape is
fixed:

```html
<section class="title-slide">
  <p class="eyebrow">Part A · a finite quantum system · spine</p>
  <div class="unit-no">00</div>
  <h1>Title</h1>
  <p class="lede">One sentence saying what the unit buys you.</p>
  <p class="meta"><span>needs —</span><span>~2½ h slides + 4½ h problems</span><span>problems: <code>./qc problems 00</code></span></p>
  <aside class="notes"> … how to read this deck … </aside>
</section>
```

Available blocks, all styled by `slides/deck.css`:

| markup | use |
|---|---|
| `<div class="box def">` | a definition |
| `<div class="box thm">` | a theorem, lemma or law |
| `<div class="box proof">` | a proof on the slide |
| `<div class="box ex">` | a worked example |
| `<div class="box warn">` | a trap, a convention, a place people go wrong |
| `<div class="box good">` | a check that passed, a summary |
| `<div class="cols">`, `.cols.three`, `.cols.wide-left` | side-by-side |
| `<div class="fig">` + inline `<svg>` + `<p class="cap">` | a figure |
| `<span class="term">mutually unbiased</span>` | a glossary term (must exist in GLOSSARY.org) |
| `<span class="ref" data-ref="key">the three bases</span>` | the running example, shown on hover |

Rules of the deck:

- **Every content slide has `<aside class="notes">`.** Notes are for the
  self-studier reading alone: the full proof, the missing step, the history,
  the warning. A slide with no notes is unfinished.
- **Three to five worked examples per unit, in `box ex`**, each carrying every
  step. The learner cannot ask a question, so no step is "clearly".
- **Maths is `$…$` and `$$…$$`.** Write kets and bras with KaTeX's own
  `\ket{\psi}`, `\bra{\phi}` and `\braket{\phi|\psi}` (all three render in the
  0.16.9 the decks load), and an outer product as `\ket{u}\!\bra{v}`.
- **Slides must not overflow.** `slides/tools/deck-check.sh NN` reports slides
  taller than the frame in headless Chromium, and checks that every marked term
  resolves.
- **Draw it when it can be drawn.** The Bloch sphere, a circuit, an
  interferometer, a basis in the plane, Grover's rotation, a lattice of
  stabilisers: if a slide describes something with a shape, it gets an inline
  SVG figure. When a figure will not fit beside the prose, split the slide in
  two rather than drop or shrink the figure. The learner asked for this
  outright: more slides with more diagrams beats fewer slides dense with text.
  There is no quota — how many figures a deck needs depends entirely on the
  unit — but a slide whose subject has a shape and carries no figure is
  unfinished. Circuits are drawn with qubit 0 on
  top and time running left to right, in standard symbols (● for a control, ⊕
  for a target, a boxed letter for a gate, a meter for measurement).
- **Figure styling goes through `deck.css` classes, not inline `style`.** A
  label over busy lines takes `class="halo"`; colour comes from the trunk
  classes (`unit`, `accent`, `alt`, `warn`, `good` and their `fill-` forms), so
  both themes follow. Draw computed curves lean.
- 25–45 slides is the usual size; a unit that runs longer because its figures
  needed room is fine.
- `glossary.js` needs no script tag: `deck.js` loads it from the unit's folder.
- **Never cross-reference a slide by number.** Name it.
- **Reading suggestions may not send the learner into un-introduced material.**
  Name the sections, or say what to skip and why.

## The problem sheet

`problems.html` is one page. The learner reads a problem, works it on paper,
and only then opens what is folded under it. Its `<head>`, header block and
script tags are taken verbatim from Mechanics to Relativity's
`units/04-work-vector-calculus/problems.html` — the relative paths
(`../../slides/sheet.css`, `../../slides/sheet.js`) resolve here too — with
`./mr` replaced by `./qc` and the course name changed.

```html
<body data-trunk="a">
<main class="sheet">
<header class="sheet-head">
  <p class="eyebrow">Part A · unit 00 · problems</p>
  <h1>The unit's title, as on its title slide</h1>
  <p class="sheet-links"><a href="slides.html">the slides</a> · <a href="../../CURRICULUM.html#u00">the curriculum</a></p>
  <div class="checkpoint"><b>Checkpoint.</b> The same claim as the deck's last slide.</div>
  <p class="howto"> … how to use the page … </p>
  <div class="preamble"><p>Twelve problems, about four and a half hours. Conventions.</p></div>
  <ul class="toc"><li><a class="routine" href="#p1">P1</a></li> …</ul>
</header>

<section class="problem" id="p3">
  <h3><span class="pno">P3</span> Title <span class="tag medium">medium</span></h3>
  <p class="exercises">exercises: …</p>
  <div class="statement"> … </div>
  <details class="hints"><summary>Hints · 3 rungs</summary><div>
    <details class="rung"><summary>Rung 1</summary><div> …
      <details class="rung"><summary>Rung 2</summary><div> …
        <details class="rung"><summary>Rung 3</summary><div> … the first line of the working …
        </div></details>
      </div></details>
    </div></details>
  </div></details>
  <details class="solution"><summary>Worked solution</summary><div>
    <p><strong>Idea.</strong> … then the working … then the check …</p>
    <h4>Another way</h4> …
    <h4>With the referee</h4>
    <pre><code>from qclib import gates, linalg
…</code></pre>
  </div></details>
</section>
…
<footer class="sheet-foot">When the checkpoint above is true: <code>./qc done 00</code>.</footer>
</main>
```

Rules of the sheet:

- **8–14 problems**, tagged `routine`, `medium` or `hard`, with at least one
  proof and at least one that ends in a number. Every problem says what it
  `exercises`.
- **Every problem has both a hint ladder and a worked solution.** There is no
  grader; the folded solution is the assessment, so it must be complete.
- **Rungs nest**, each inside the one before it, from "what kind of object is
  the answer" to "here is the first line", and a rung never gives away the next.
- **A solution a stuck reader can learn from**: the idea first, then the
  working, then the check (normalisation, a special case, a number).
- **Maths is `\( … \)` inline and `\[ … \]` displayed.** Escape `<`, `>` and
  `&` in HTML text; inside maths write `\lt`, `\gt`.
- No `<style>` block and no classes beyond those in `slides/sheet.css`.

**A KaTeX trap.** A prime straight after a spacing command — `\vec c\,'` — is a
parse error in KaTeX, though LaTeX accepts it. Write `\vec c\,{}'`.

## Checks before a unit is called built

```fish
./qc glossary NN                      # every marked term resolves, every slide link lands
slides/tools/deck-check.sh NN         # no overflowing slide; terms, keys and links work
node slides/tools/sheet-check.mjs units/NN-slug/problems.html   # every formula renders
uv run python -c '…'                  # any referee snippet on the sheet runs and prints what it claims
./qc slides NN && ./qc problems NN    # read them
```
