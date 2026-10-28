// Render the writer and verifier briefs for units built WITHOUT a Workflow, from the same
// prompts build-units.js would send, plus the standing additions learnt building 00–02.
//
//   node build/render-briefs.mjs 03 04          -> build/briefs/write-03.md, verify-03.md, ...
//
// Then, from a Claude Code session: one Agent per writer ("your complete brief is in
// build/briefs/write-NN.md — read it in full first and follow it exactly"); when a writer
// finishes, paste a summary of its report over WRITER_REPORT in verify-NN.md — above all
// its deviations from the spec and the citations it could not confirm — and launch the
// verifier the same way. The briefs used for 01 and 02 are kept beside these as examples.
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const BUILD = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(BUILD, "..");
const slugs = JSON.parse(readFileSync(`${BUILD}/slugs.json`, "utf8"));
const units = process.argv.slice(2);
if (!units.length) { console.error("usage: node build/render-briefs.mjs NN [NN ...]"); process.exit(1); }

// Run build-units.js with stub agent()/phase()/pipeline() that record the prompts instead.
const src = readFileSync(`${BUILD}/build-units.js`, "utf8").replace("export const meta", "const meta");
const prompts = {};
const agent = async (p, o) => { prompts[o.label] = p; return { note: "WRITER_REPORT" }; };
const pipeline = async (items, ...stages) => {
  for (const it of items) { let r = await stages[0](it); for (const s of stages.slice(1)) r = await s(r, it); }
};
await new Function("args", "agent", "phase", "pipeline", `return (async () => { ${src} })()`)(
  { units, mode: "both", root: ROOT }, agent, () => {}, pipeline);

const built = (n) => `${ROOT}/units/${slugs[n]}/slides.html`;
const WEB = "To confirm a citation you may use WebSearch and WebFetch (load them with ToolSearch if they are deferred); a claim you cannot confirm is rewritten to claim only what is certain, or removed.";
mkdirSync(`${BUILD}/briefs`, { recursive: true });

for (const u of units) {
  const dir = slugs[u];
  const prev = Object.keys(slugs).filter((n) => n < u).slice(-2);
  const together = units.filter((n) => n !== u);
  let w = prompts[`write:${u}`].replace("Return the schema.", `Note on deck-check.sh: use OUT=/tmp/claude-1000/dc${u} (the browser's socket path must stay short). It also fails on KaTeX errors and unrendered maths.${together.length ? ` Other writers are working on unit${together.length > 1 ? "s" : ""} ${together.join(", ")} at the same time: if the overflow check misses its load window, wait a minute and rerun it before concluding anything.` : ""}

Keep any scratch files of your own under /tmp/claude-1000/w${u}/ and nowhere else — parallel writers sharing a scratch directory overwrote each other's drafts once.

The units before yours are built, verified and read by the learner: read ${prev.map(built).join(" and ")} before you start, and match their voice, notation (ϱ and Σ for volume and surface charge density; ℰ for EMF; r_i for internal resistance; (r, θ, z) coordinates), figure style and density. Make their forward references to your unit land.${together.length ? ` Unit${together.length > 1 ? "s" : ""} ${together.join(", ")} ${together.length > 1 ? "are" : "is"} being written at the same time: read ${together.length > 1 ? "their specs" : "its spec"} in ${BUILD}/spec/ and refer to ${together.length > 1 ? "their" : "its"} results by what the spec says.` : ""}

${WEB}

Do not edit anything outside units/${dir}/ — the tooling, AUTHORING.md, the specs and the curriculum are fixed for this run; if one of them is wrong, say so in your report instead.

Finish with a short plain-text report (it is not shown to the learner): number of slides; number of figures; number of problems; the running example; every judgement call or deviation from the spec; every citation you could not confirm (and what you did with it); and, as used_from_earlier,`).replace("In used_from_earlier, list", "list");
  writeFileSync(`${BUILD}/briefs/write-${u}.md`, w);

  let v = prompts[`verify:${u}`]
    .replace('{"note":"WRITER_REPORT"}', "WRITER_REPORT — replace this with a summary of the writer's report before launching: its counts, every deviation from the spec and addition beyond it (check those hardest), and every citation it could not confirm")
    .replace("Return the schema, with anything you could not fix listed in unfixed.", `${WEB}

Also check continuity with the units before this one (${prev.map(built).join(", ")}; read them, do not edit them): notation, numbers, and that their forward references to this unit are answered and its references back match what they say. Name any mismatch in your report and fix it on this unit's side.

Use OUT=/tmp/claude-1000/dv${u} for deck-check.sh. Edit only files under units/${dir}/; if the tooling, AUTHORING.md, a spec or the curriculum is wrong, say so in your report instead. Keep a copy of each file before your first edit, under /tmp/claude-1000/dv${u}/orig/.

Finish with a plain-text report (not shown to the learner): every defect found, as kind (physics-error, math-error, arithmetic, premature-tool, unsourced, format, incomplete, style) · where · what · fixed or not; the checks you ran; every stated number with the value you computed; how each citation was resolved; and anything you could not fix.`);
  writeFileSync(`${BUILD}/briefs/verify-${u}.md`, v);
  console.log(`build/briefs/write-${u}.md  build/briefs/verify-${u}.md`);
}
