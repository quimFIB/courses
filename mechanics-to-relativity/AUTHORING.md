# How a unit is written

One unit is three files under `units/NN-slug/`:

```
slides.html      the theory: reveal.js deck, speaker notes on every content slide
problems.html    the practice: every problem, with its hint ladder and worked solution folded under it
GLOSSARY.org     the unit's terms in deck order; `mr glossary` compiles it to glossary.js
```

`glossary.js` is generated and committed; everything else is written by hand.
Both pages are read in a browser. Nothing in this course needs an editor: the
problems are solved on paper.

## The contract every unit keeps

1. **Nothing is used before it is introduced.** A unit may use only mathematics
   that its `needs` (transitively) have taught. This is the course's one hard
   rule: the learner has linear algebra and single-variable calculus and nothing
   else. Vector calculus, ODE methods, complex analysis, Fourier, PDEs,
   variational calculus, tensors and differential geometry are all taught here,
   in order. If a derivation wants a tool that has not arrived, either move the
   derivation or state the result and name the unit that proves it.
2. **Mathematics carries the definition; physics carries the motivation.**
   Define the object properly, then show what it is for. A tensor is a
   multilinear map — the transformation law is a *theorem* about its components
   under a change of basis, never the definition. The same habit applies to
   differential forms, the Lie derivative, the connection and the curvature.
   The physics angle is given too, always: alone it is lackluster, but without
   it the mathematics has no reason to exist.
3. **Every claim is either proved, or explicitly not proved.** A one-line proof
   goes on the slide. A longer one goes in the notes under **Full proof**. A
   result imported from elsewhere is labelled *cited*, with where it is proved.
   There is no third category.
4. **Dimensions and limits, every time.** Any result worth boxing gets checked:
   dimensions on both sides, and at least one limit or special case where the
   answer is already known.
5. **One running example per unit.** Introduced on the overview slide, returned
   to in every section, and closed at the end. It is what makes a deck a unit
   rather than a list of results.
6. **The checkpoint is falsifiable.** One claim about what the learner can now
   do, phrased so that failing it is unambiguous. It is the last slide, and it
   is repeated at the head of the problem sheet.

## The deck

Structure, in order:

```html
<!doctype html>
<html lang="en">
<head>
  … meta, fonts, reveal.min.css, katex.min.css, ../../slides/deck.css …
  … nothing else: no highlight.js (there is no code in this course), no <style> block …
  <title>NN · Title</title>
</head>
<body data-trunk="TRUNK">
<div class="refs" hidden>
  <template data-ref="key">…</template>   <!-- the running example, once -->
</div>
<div class="reveal"><div class="slides">
  <section class="title-slide"> … </section>
  <section> overview </section>
  <section class="divider"> section 1 </section>
  … content slides …
  <section class="divider"> section 2 </section>
  …
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
  <p class="eyebrow">Part II · trunk A · mechanics · spine</p>
  <div class="unit-no">07</div>
  <h1>Title</h1>
  <p class="lede">One sentence saying what the unit buys you.</p>
  <p class="meta"><span>needs 03, 05</span><span>~2 h slides + 3 h problems</span><span>problems: <code>./mr problems 07</code></span></p>
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
| `<div class="box warn">` | a trap, a sign convention, a place people go wrong |
| `<div class="box good">` | a sanity check that passed, a summary |
| `<div class="cols">`, `.cols.three`, `.cols.wide-left` | side-by-side |
| `<div class="fig">` + inline `<svg>` + `<p class="cap">` | a figure |
| `<span class="term">phase space</span>` | a glossary term (must exist in GLOSSARY.org) |
| `<span class="ref" data-ref="key">the pendulum</span>` | the running example, shown on hover |

Rules of the deck:

- **Every content slide has `<aside class="notes">`.** Notes are for the
  self-studier reading alone: the full proof, the derivation's missing step, the
  history, the warning. A slide with no notes is unfinished.
- **Three to five worked examples per unit, in `box ex`**, each carrying every
  step. The learner cannot ask a question, so no step is "clearly". Five is the
  ceiling, and a fifth has to earn its place by carrying a thread of its own.
- **Math is `$…$` and `$$…$$`.** KaTeX renders before reveal lays out. Use
  `\mathrm{d}` for differentials, `\,` before them, and `\vec{}` only for
  3-vectors.
- **Slides must not overflow.** `slides/tools/deck-check.sh NN` reports slides
  taller than the frame in headless Chromium, and checks that every marked term
  resolves.
- 25–45 slides is the usual size of a unit.
- `glossary.js` needs no script tag: `deck.js` loads it from the unit's own folder.
- **Never cross-reference a slide by number.** reveal counts divider sections
  too, so "slide 7" in the prose and slide 7 in the reader's counter are
  different slides. Name it — "the small-angle solution", "the Buckingham
  slide" — which also survives inserting a slide later.
- **Reading suggestions may not send the learner into un-introduced material.**
  If a chapter is the right one but its first sections use tools this unit has
  not reached, name the sections, or say what to skip and why.

## The problem sheet

`problems.html` is one page. The learner reads a problem, works it on paper,
and only then opens what is folded under it. Its skeleton — take the `<head>`,
the header and the script tags verbatim from `units/04-work-vector-calculus/problems.html`:

```html
<body data-trunk="a">
<main class="sheet">
<header class="sheet-head">
  <p class="eyebrow">Part A · unit 07 · problems</p>
  <h1>The unit's title, as on its title slide</h1>
  <p class="sheet-links"><a href="slides.html">the slides</a> · <a href="../../CURRICULUM.html#u07">the curriculum</a></p>
  <div class="checkpoint"><b>Checkpoint.</b> The same claim as the deck's last slide.</div>
  <p class="howto"> … how to use the page: copy it from unit 04 … </p>
  <div class="preamble"><p>Thirteen problems, about five hours. Constants, conventions.</p></div>
  <ul class="toc"><li><a class="routine" href="#p1">P1</a></li> …</ul>
</header>

<h2 class="group">An optional section heading, grouping problems</h2>

<section class="problem" id="p3">
  <h3><span class="pno">P3</span> Kepler's equation for a comet <span class="tag medium">medium</span></h3>
  <p class="exercises">exercises: series inversion, Bessel functions</p>
  <div class="statement"> … self-contained, with numbers where numbers make it concrete … </div>
  <details class="hints"><summary>Hints · 3 rungs</summary><div>
    <details class="rung"><summary>Rung 1</summary><div> … what kind of object the answer is …
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
<footer class="sheet-foot">When the checkpoint above is true: <code>./mr done 07</code>.</footer>
</main>
```

Rules of the sheet:

- **8–14 problems**, tagged `routine`, `medium` or `hard` (a couple of each),
  with at least one proof and at least one that ends in a number. Every problem
  says what it `exercises`, so a learner short of time can choose.
- **Every problem has both a hint ladder and a worked solution.** Solutions
  and hints are for comparison after an attempt: that is the whole assessment
  model of this course, so they must be complete. There is no lab, no test suite
  and no grader.
- **Rungs nest**, each inside the one before it, so rung n+1 cannot even be seen
  until rung n is open. They go from "what kind of object is the answer" to
  "here is the first line", and a rung never gives away the next rung's content.
- **A solution a stuck reader can learn from**: the idea first, then the working,
  then the check (dimensions, a limit, a number). A slicker second route goes
  under `<h4>Another way</h4>`.
- **Maths is `\( … \)` inline and `\[ … \]` displayed** (`$`-delimiters also
  work). `slides/sheet.js` renders it all with KaTeX on load. Escape `<`, `>` and
  `&` in HTML text as usual; inside maths write `\lt`, `\gt` or `&lt;`.
- No `<style>` block and no classes beyond those in `slides/sheet.css`.

**A KaTeX trap, for decks and sheets alike.** A prime straight after a spacing
command — `\vec c\,'` — is a parse error in KaTeX, though LaTeX accepts it.
Write `\vec c\,{}'`, or drop the space.

## Checks before a unit is called built

```fish
./mr glossary NN                      # every marked term resolves, every slide link lands
slides/tools/deck-check.sh NN         # no overflowing slide; terms, keys and links work
node slides/tools/sheet-check.mjs units/NN-slug/problems.html   # every formula renders, no raw delimiters left
./mr slides NN && ./mr problems NN    # read them
```
