# How a unit is written

Adapted on 2026-10-27 from Quantum Computing's `AUTHORING.md`, itself adapted
from Mechanics to Relativity's, so the decks, sheets and tooling carry over
unchanged. What differs is what is assumed, the conventions an electrical
course has to fix once, the double check every result gets (dimensions *and*
energy), and the rule on sources.

One unit is three files under `units/NN-slug/`:

```
slides.html      the theory: reveal.js deck, speaker notes on every content slide
problems.html    the practice: every problem, with its hint ladder and worked solution folded under it
GLOSSARY.org     the unit's terms in deck order; `cap glossary` compiles it to glossary.js
```

`glossary.js` is generated; everything else is written by hand. Both pages are
read in a browser, and the problems are solved on paper.

## The contract every unit keeps

1. **Nothing is used before it is introduced.** A unit may use only what its
   `needs` (transitively) have taught, plus the assumed background:
   mathematical maturity; linear algebra including kernels, images,
   orthogonal complements, rank–nullity, the spectral theorem for symmetric
   matrices and positive semi-definite forms; and **everything in Mechanics to
   Relativity units 00–24** — ODEs and the damped driven oscillator, normal
   modes, phase portraits, vector calculus and flux, the Lagrangian, the wave
   equation, Fourier series and Sturm–Liouville, the Fourier transform and
   complex analysis, static fields and conductors, Maxwell's equations,
   Poynting's theorem, potentials, radiation and Larmor. Cite those as
   `MR nn` with the unit's name, and do not re-teach them; a one-slide
   reminder is fine when a unit leans on one hard. **No electrical
   engineering at all is assumed**: no circuit diagram, sign convention,
   phasor or component has been met before this course introduces it. If a
   derivation wants a tool that has not arrived, move the derivation, or state
   the result and name the unit that proves it. `build/index.md` lists what
   every unit teaches.
2. **Mathematics carries the definition; the device carries the motivation.**
   Kirchhoff's current law is a statement about the kernel of an incidence
   matrix; impedance is a positive-real function; three-phase symmetrical
   components are a discrete Fourier transform. The real system that makes
   each definition worth having is given too, always, and described from
   nothing — the learner has never opened a fuse box with an engineer's eye.
3. **Every claim is either proved, or explicitly not proved.** A one-line proof
   goes on the slide; a longer one goes in the notes under **Full proof**. A
   result imported from elsewhere is labelled *cited*, with where it is proved.
   There is no third category.
4. **Dimensions and energy, every time.** This course's version of checking.
   Every boxed formula has its units checked on the slide, and every result
   about a circuit or a field is checked for energy balance — power delivered
   equals power dissipated plus the rate of change of stored energy — or in a
   limit already known (DC, ω → 0, ω → ∞, a short, an open circuit, R → 0).
5. **One running example per unit.** Introduced on the overview slide, returned
   to in every section, and closed at the end.
6. **The checkpoint is falsifiable.** One claim about what the learner can now
   do, phrased so that failing it is unambiguous, usually ending in a number. It
   is the last slide, and it is repeated at the head of the problem sheet.
7. **Paper only.** There is no referee and no code on the decks. A problem may
   invite a numerical check in any tool the learner likes, but its worked
   solution never depends on one.

## Sources: only what is verified

Settled by the learner on 2026-10-27: stick to things verified and backed by
resources the learner can open.

- **Every real-world fact is derived on the page or cited to a named source** —
  a textbook (with chapter), a paper (authors, journal, year), a standard
  (number and body), or an operator's or manufacturer's published data. A bare
  "(cited)" with no source named is unfinished.
- **Check a cited number against its source before stating it.** If the source
  cannot be checked from here, state the claim qualitatively or leave it out;
  never state a figure from memory as though it were sourced.
- **No events whose causes are still under investigation or in dispute.** A
  recent failure, blackout or accident appears only if an official final
  report settles its account, and then that report is the source.
- **History is attributed carefully.** Name who did what, when, only where a
  standard history supports it, and prefer "the condition now named after
  Heaviside" to a story that cannot be sourced. The reading list in
  `CURRICULUM.html` is the first place to look; add to it rather than citing
  something obscure.
- Device data (cable ratings, transformer nameplates, a car battery's internal
  resistance) are given as *representative values* with a stated source or
  labelled as an assumption for the problem — never as the spec of a
  particular product.

## Conventions, fixed for the whole course

Stated where first used, and never changed. A unit that must depart from one
(for instance to quote a source) says so in a `box warn`.

- **SI units throughout, with sourced constants.** Resistivity at 20 °C:
  copper ρ = 1.68 × 10⁻⁸ Ω·m, aluminium 2.65 × 10⁻⁸ Ω·m (CRC *Handbook of
  Chemistry and Physics*). Conduction-electron density of copper
  n = 8.47 × 10²⁸ m⁻³ (Ashcroft & Mermin, table 1.1). μ₀ = 4π × 10⁻⁷ H/m and
  ε₀ = 8.854 × 10⁻¹² F/m to the precision used here; e = 1.602 × 10⁻¹⁹ C,
  m_e = 9.109 × 10⁻³¹ kg (CODATA). A unit that needs another constant states it
  with its source.
- **The imaginary unit is i**, as in Mechanics to Relativity; engineers write
  j, and unit 05 says so once.
- **Time dependence e^{+iωt}**, as in MR 06's driven oscillator: a physical
  quantity is the real part, v(t) = Re(√2 V e^{iωt}). (MR 24 writes waves as
  e^{i(k·x − ωt)}; unit 08, which meets both, says how they translate.)
- **Phasors are RMS**, as power engineers use them, so P = |V||I| cos φ with no
  ½. Peak amplitudes are written with a hat, V̂ = √2|V|, and appear only where
  a unit says so (branch 16's radiation resistance is stated for peak current
  and the slide says so).
- **Impedance** Z = R + iX, admittance Y = 1/Z = G + iB. An inductor is iωL, a
  capacitor 1/(iωC).
- **Complex power** S = V I* = P + iQ. Q > 0 for an inductive load (current
  lagging voltage). Power factor cos φ with φ = arg V − arg I.
- **The passive sign convention**: for a two-terminal component, the current
  arrow enters the + terminal, so p = vi > 0 means the component absorbs power.
  Sources therefore show p < 0 when delivering; unit 02 states this.
- **Graphs**: n nodes, m edges, c connected components; the incidence matrix A
  is n × m with A_{ke} = +1 if edge e leaves node k, −1 if it enters. Branch
  voltages v = Aᵀφ for node potentials φ; KCL is A i = s for injected
  currents s (s = 0 for an isolated network).
- **Three-phase**: phase sequence a, b, c with b lagging a by 120°; the
  operator a = e^{i2π/3} is written α to avoid clashing with phase a; line
  voltages in a 400/230 V system are 400 V, phase voltages 230 V.

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
<body data-trunk="TRUNK">            <!-- the part letter, lower case: a–f -->
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
  <p class="eyebrow">Part A · from fields to circuits · spine</p>
  <div class="unit-no">00</div>
  <h1>Title</h1>
  <p class="lede">One sentence saying what the unit buys you.</p>
  <p class="meta"><span>needs MR 23, MR 24</span><span>~2 h slides + 3½ h problems</span><span>problems: <code>./cap problems 00</code></span></p>
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
| `<span class="term">drift velocity</span>` | a glossary term (must exist in GLOSSARY.org) |
| `<span class="ref" data-ref="key">the kettle cable</span>` | the running example, shown on hover |

Rules of the deck:

- **Every content slide has `<aside class="notes">`.** Notes are for the
  self-studier reading alone: the full proof, the missing step, the history,
  the warning. A slide with no notes is unfinished.
- **Three to five worked examples per unit, in `box ex`**, each carrying every
  step. The learner cannot ask a question, so no step is "clearly".
- **Maths is `$…$` and `$$…$$`.** Vectors as `\vec E` or bold `\mathbf J`, as
  the sister course does; units in upright type with a thin space,
  `10\ \mathrm{A}`, `2.5\ \mathrm{mm^2}`; phasors in upper case (`V`, `I`),
  instantaneous values in lower case (`v(t)`, `i(t)`).
- **Slides must not overflow.** `slides/tools/deck-check.sh NN` reports slides
  taller than the frame in headless Chromium, and checks that every marked term
  resolves.
- **Draw it when it can be drawn.** A circuit, field lines around a
  wire, the Poynting vector entering a resistor, a phasor diagram, a graph and
  its spanning tree, a bounce diagram, a power–angle curve, a phase portrait:
  if a slide describes something with a shape, it gets an inline
  SVG figure. When a figure will not fit beside the prose, split the slide in
  two rather than drop or shrink the figure. The learner asked for this
  outright: more slides with more diagrams beats fewer slides dense with text.
  There is no quota — how many figures a deck needs depends entirely on the
  unit — but a slide whose subject has a shape and carries no figure is
  unfinished. Circuit diagrams use IEC
  symbols — a rectangle for a resistor, as in European practice, with the
  zigzag named once as the American form — and mark every voltage with its
  + and − and every current with its arrow, under the passive sign convention.
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
`./mr` replaced by `./cap` and the course name changed.

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
  </div></details>
</section>
…
<footer class="sheet-foot">When the checkpoint above is true: <code>./cap done 00</code>.</footer>
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
  working, then the check (dimensions, energy balance, a limit, a number).
- **Maths is `\( … \)` inline and `\[ … \]` displayed.** Escape `<`, `>` and
  `&` in HTML text; inside maths write `\lt`, `\gt`.
- No `<style>` block and no classes beyond those in `slides/sheet.css`.

**A KaTeX trap.** A prime straight after a spacing command — `\vec c\,'` — is a
parse error in KaTeX, though LaTeX accepts it. Write `\vec c\,{}'`.

## Checks before a unit is called built

```fish
./cap glossary NN                     # every marked term resolves, every slide link lands
slides/tools/deck-check.sh NN         # no overflowing slide; terms, keys and links work
node slides/tools/sheet-check.mjs units/NN-slug/problems.html   # every formula renders
python3 -c '…'                        # recompute every number the unit states
./cap slides NN && ./cap problems NN  # read them
```
