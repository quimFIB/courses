export const meta = {
  name: 'build-units',
  description: 'Write and then independently verify a batch of quantum computing units',
  phases: [
    { title: 'Write', detail: 'one agent per unit: deck, glossary, problems, solutions, hints' },
    { title: 'Verify', detail: 'an independent agent re-derives every result and fixes what is wrong' },
  ],
}

// Adapted on 2026-10-27 from Mechanics to Relativity's build/build-units.js, whose
// format files it still reads. No import here on purpose: the runner wraps this file's
// body in a function, where import statements and import.meta are both illegal. The
// runner has no `process` global, so the launcher passes the course root as args.root.
const ROOT = args.root
if (!ROOT) throw new Error('pass the course root: Workflow({scriptPath, args: {units, mode, root}})')
const S = `${ROOT}/build`
const SIS = ROOT.replace(/\/[^/]+$/, '/mechanics-to-relativity')   // its sibling in published-courses/

const COMMON = `
THE COURSE. "Quantum Computing": a self-study curriculum of 27 units (00–26) taking one learner from "why are amplitudes complex" to the threshold theorem, Shor's algorithm and its resource estimate, maths-first. The learner is mathematically mature — proofs, linear algebra over R including the SVD, elementary group theory, classical complexity theory (P, NP, Cook–Levin, BPP), discrete probability, elementary number theory — and knows NO physics, NO quantum mechanics, and no complex linear algebra beyond C as a field. All of that is taught here. There is no lab and no grader: a unit is a slide deck with worked examples, a problem sheet whose every problem has a full worked solution and a hint ladder, and one falsifiable checkpoint. An optional NumPy simulator, qclib (the "referee"), lives in the course directory; nothing may require it.

READ FIRST, all of them:
- ${ROOT}/AUTHORING.md — the contract every unit keeps, the conventions fixed for the whole course (inner product, qubit order, gates, Fourier sign), the rules for mentioning the referee, and the exact file formats. It is binding.
- ${S}/index.md — every unit in order with what it teaches. This is how you check the course's one hard rule: NOTHING MAY BE USED BEFORE THE UNIT THAT INTRODUCES IT. Your unit may use only what its needs (transitively) have taught, plus the assumed background AUTHORING.md lists.
- ${ROOT}/CURRICULUM.html — the proposal; your unit's card (id="uNN") is the agreed syllabus entry, and the spec expands it.
- ${SIS}/units/21b-schrodinger/slides.html — the house deck format, from the sister course by the same author. Match its structure, density and voice: eyebrow + h2 per slide, box def/thm/proof/ex/warn/good, .cols, divider slides, <aside class="notes"> on every content slide, a running example threaded through via <span class="ref">, figures as inline SVG.
- ${SIS}/units/21b-schrodinger/GLOSSARY.org — the glossary's Org format.
- ${SIS}/units/04-work-vector-calculus/problems.html — the problem-sheet page: copy its <head>, header block and script tags verbatim (the ../../slides/ paths resolve in this course too), replacing ./mr by ./qc and the course name. Keep its structure exactly (section.problem, nested details.rung, details.solution).
- ${ROOT}/slides/deck.css and ${ROOT}/slides/sheet.css — the class vocabulary you may use. Do not invent classes and do not write a <style> block.
- ${ROOT}/README.md — the referee's API, if you add a "With the referee" check to a solution. Read ${ROOT}/qclib/ for exact signatures; run every snippet with \`uv run python\` from ${ROOT} before putting it on the page.

HOUSE RULES THAT ARE NOT NEGOTIABLE.
1. Mathematics carries the definition, the experiment carries the motivation — both are given, in that order. The learner has never met any physics, so an experiment is described from nothing when it is used.
2. Every claim is proved, or explicitly labelled as cited with where its proof is. A one-line proof goes on the slide; a longer one goes in the notes under a <b>Full proof</b> heading. Nothing is gestured at.
3. Normalise and check: every state normalised and every distribution summed to one on the slide; every operator claimed unitary, Hermitian, positive or a projection checked to be one; every boxed result checked in at least one known case.
4. One running example per unit, introduced on the overview slide, returned to in every section, closed at the end.
5. Numbers are real. Any number you state must be one you actually computed (use Bash and python3 — NumPy is available through \`uv run python\` in ${ROOT}) and must be right.
6. The commands are ./qc slides NN, ./qc problems NN, ./qc done NN. Hints and solutions are folded under each problem on the problems page. The only code anywhere is an optional "With the referee" block under a worked solution, as AUTHORING.md describes; decks contain none.
7. British-leaning house spelling as in the sister course, em dashes as it uses them, no emoji, no exclamation marks.
`

const WRITE_SCHEMA = {
  type: 'object',
  properties: {
    unit: { type: 'string' },
    slides: { type: 'number', description: 'number of <section> slides written' },
    problems: { type: 'number' },
    running_example: { type: 'string' },
    decisions: { type: 'array', items: { type: 'string' }, description: 'judgement calls, deviations from the spec, anything left out' },
    used_from_earlier: { type: 'array', items: { type: 'string' }, description: 'tools used that earlier units introduce, each as "tool (unit NN)"' },
  },
  required: ['unit', 'slides', 'problems', 'running_example', 'decisions', 'used_from_earlier'],
}

const VERIFY_SCHEMA = {
  type: 'object',
  properties: {
    unit: { type: 'string' },
    defects_found: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          kind: { type: 'string', enum: ['physics-error', 'math-error', 'arithmetic', 'premature-tool', 'format', 'incomplete', 'style'] },
          where: { type: 'string' },
          what: { type: 'string' },
          fixed: { type: 'boolean' },
        },
        required: ['kind', 'where', 'what', 'fixed'],
      },
    },
    checks_run: { type: 'array', items: { type: 'string' } },
    numbers_verified: { type: 'array', items: { type: 'string' }, description: 'each stated number and the value you computed' },
    unfixed: { type: 'array', items: { type: 'string' } },
  },
  required: ['unit', 'defects_found', 'checks_run', 'numbers_verified', 'unfixed'],
}

const UNITS = args.units
const MODE = args.mode || 'both'   // 'write' | 'verify' | 'both'

phase('Write')
const WRITE = (u) => agent(`${COMMON}

YOUR JOB: write unit ${u} in full. Its spec is ${S}/spec/${u}.md — read it first; it fixes the directory, the part, the prerequisites, the physics, the mathematical tools, the running example, what the problems exercise, and the checkpoint. Follow it.

Create these three files in the unit's directory (make it with mkdir -p; if the directory already holds a half-written slides.html from an interrupted run, read it, keep what is right, and finish or replace it):
  slides.html              25-45 slides. Title slide exactly as AUTHORING.md prescribes (eyebrow "Part X · <part title short> · spine|branch", unit number, h1, lede, meta with needs + hours + "problems: <code>./mr problems ${u}</code>"). body data-trunk is the part letter in lower case. Then an overview slide that sets up the running example and says how to read the deck, divider slides between sections, content slides, and a final checkpoint slide. Three to five worked examples in <div class="box ex">, each with every step shown. Draw whatever has a shape as an inline SVG figure — bases as arrows in the plane, the Bloch sphere, circuits, interferometers, a rotation, a lattice — as many as the unit's subject calls for, with no quota, but a slide whose subject has a shape gets a figure; split a slide rather than drop a figure (AUTHORING.md, \"Draw it when it can be drawn\"). <aside class="notes"> on every content slide, carrying the full proofs, the history, and the warnings.
  GLOSSARY.org             every term the deck marks with <span class="term">, in deck order, sectioned like the sister course's, each entry naming its slide with /Slide: Title./
  problems.html            8-14 problems on one page, modelled on unit 04's. Each problem: statement, difficulty tag (routine/medium/hard), an "exercises" line saying what it drills, then a folded hint ladder (rungs NESTED, each inside the one before, from "what kind of object is the answer" to "here is the first line") and a folded worked solution (the idea, then the working, then the check: dimensions, a limit, a number). At least one proof problem and at least one that ends in a number. Where a problem has a natural computational check, end its solution with a short \"With the referee\" block, run first. Maths is \\( … \\) and \\[ … \\].

Then, from ${ROOT}: run \`./qc glossary ${u}\` and fix every warning it prints; run \`slides/tools/deck-check.sh ${u}\` and fix overflowing slides (shorten prose, split the slide, move detail to the notes); run \`node slides/tools/sheet-check.mjs units/<dir>/problems.html\` and fix every KaTeX error, unrendered delimiter and problem missing its hints or solution; compute every number you state with python3 and correct any that is wrong. Re-read your own deck once, end to end, and fix what reads badly.

Return the schema. In used_from_earlier, list every mathematical tool your unit uses and the earlier unit that introduced it — if something has no earlier unit, you must teach it here or drop it.`,
    { label: `write:${u}`, phase: 'Write', schema: WRITE_SCHEMA })
const VERIFY = (written, u) => agent(`${COMMON}

YOUR JOB: verify unit ${u}, adversarially, and FIX what is wrong. Its spec is ${S}/spec/${u}.md. Its files are under ${ROOT}/units/ (the spec names the directory). The author reported: ${JSON.stringify(written)}.

Do all of this, with Bash and python3 where arithmetic is involved:
1. Re-derive every worked example on the slides yourself, from scratch. Do not read the author's algebra and nod: do it independently and compare. Same for every result stated in a box.
2. Work every problem in problems.html yourself and compare with its folded worked solution. A solution that is wrong, incomplete, or that silently uses a tool the course has not introduced is a defect. Check that every problem HAS a solution and a nested hint ladder whose rungs do not give away the next rung.
3. Check every number in the unit numerically. Report each in numbers_verified as "claim -> computed value".
4. Check the prerequisite contract against ${S}/index.md: every tool used must be introduced by this unit or by a transitive prerequisite. Name any violation precisely.
5. Check the mathematics and physics: the course conventions in AUTHORING.md kept throughout (inner product, qubit order, gate definitions, Fourier sign), every state normalised, every claimed unitary/Hermitian/positive operator actually so, special cases as claimed, dimensions right wherever physical quantities appear, named results attributed correctly (person, and date if stated), no hand-waving where AUTHORING.md requires a proof or an explicit citation.
6. Check the format: every content slide has notes; every <span class="term"> resolves in GLOSSARY.org (run \`./qc glossary ${u}\` from ${ROOT} and fix warnings); the deck loads ../../slides/deck.css and the three cdnjs scripts plus glossary.js and ../../slides/deck.js; no <style> block; no invented classes; no code on the deck; every \"With the referee\" snippet on the sheet runs under \`uv run python\` from ${ROOT} and prints what the solution claims.
7. Run \`slides/tools/deck-check.sh ${u}\` and \`node slides/tools/sheet-check.mjs units/<dir>/problems.html\` from ${ROOT}, and fix every overflowing slide, KaTeX error and unrendered formula they report.

Fix everything you find, in place, preserving the author's voice. Then re-run the mechanical checks. Return the schema, with anything you could not fix listed in unfixed.`,
    { label: `verify:${u}`, phase: 'Verify', schema: VERIFY_SCHEMA, effort: 'high' })

const stages = MODE === 'write' ? [WRITE]
  : MODE === 'verify' ? [(u) => VERIFY({ note: 'written in an earlier run; read the files as they stand' }, u)]
  : [WRITE, VERIFY]
const results = await pipeline(UNITS, ...stages)
return results
