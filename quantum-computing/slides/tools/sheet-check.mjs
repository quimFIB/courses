// Authoring check for problem sheets, in headless Brave (or Chromium) over the DevTools protocol.
//
//   node slides/tools/sheet-check.mjs units/04-work-vector-calculus/problems.html [more.html …]
//
// For each page: how many formulas KaTeX rendered, every one that failed (with its source),
// any \( \[ delimiter left in the text unrendered — which means a formula was split across
// two blocks — and every problem that lacks its hint ladder or its worked solution.
// Needs network: KaTeX comes from cdnjs. Exits 1 if any page has a problem.
import { spawn } from "node:child_process";
import { existsSync } from "node:fs";
import { resolve } from "node:path";

const pages = process.argv.slice(2);
if (!pages.length) { console.error("usage: node slides/tools/sheet-check.mjs PAGE.html …"); process.exit(2); }
const bin = ["/usr/bin/brave", "/usr/bin/chromium", "/usr/bin/google-chrome-stable"].find(existsSync);
const port = 9400 + Math.floor(Math.random() * 200);
const browser = spawn(bin, ["--headless=new", "--disable-gpu", `--remote-debugging-port=${port}`,
  `--user-data-dir=/tmp/sheet-check-${port}`, "--window-size=1200,900", "about:blank"], { stdio: "ignore" });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
let targets;
for (let i = 0; i < 80 && !targets; i++) { try { targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json(); } catch { await sleep(250); } }
const ws = new WebSocket(targets.find((t) => t.type === "page").webSocketDebuggerUrl);
await new Promise((r) => ws.addEventListener("open", r));
let id = 0; const pending = new Map();
ws.addEventListener("message", (m) => { const d = JSON.parse(m.data); if (pending.has(d.id)) { pending.get(d.id)(d); pending.delete(d.id); } });
const send = (method, params = {}) => new Promise((r) => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
const ev = async (expr) => (await send("Runtime.evaluate", { expression: expr, returnByValue: true })).result.result.value;

let bad = 0;
await send("Page.enable");
for (const page of pages) {
  await send("Page.navigate", { url: "file://" + resolve(page) });
  for (let i = 0; i < 60 && !(await ev("!!document.querySelector('.sheet-bar')")); i++) await sleep(250);
  await sleep(500);
  const r = await ev(`(() => {
    const errors = [...document.querySelectorAll('.katex-error')].map((e) => e.textContent.trim().slice(0, 100));
    const raw = [];
    const walk = document.createTreeWalker(document.querySelector('main'), NodeFilter.SHOW_TEXT);
    for (let n; (n = walk.nextNode());) {
      if (n.parentElement.closest('.katex, code, pre')) continue;
      if (/\\\\[\\(\\[\\)\\]]/.test(n.nodeValue)) raw.push(n.nodeValue.trim().slice(0, 80));
    }
    const problems = [...document.querySelectorAll('section.problem')];
    const noHints = problems.filter((p) => !p.querySelector('details.hints details.rung')).map((p) => p.id);
    const noSolution = problems.filter((p) => !p.querySelector('details.solution')).map((p) => p.id);
    return { formulas: document.querySelectorAll('.katex').length, problems: problems.length, errors, raw, noHints, noSolution };
  })()`);
  const issues = r.errors.length + r.raw.length + r.noHints.length + r.noSolution.length;
  bad += issues ? 1 : 0;
  console.log(`${page}: ${r.problems} problems, ${r.formulas} formulas` + (issues ? "" : " — ok"));
  for (const e of r.errors) console.log(`  KaTeX error: ${e}`);
  for (const e of r.raw) console.log(`  unrendered: ${e}`);
  if (r.noHints.length) console.log(`  no hint ladder: ${r.noHints.join(" ")}`);
  if (r.noSolution.length) console.log(`  no worked solution: ${r.noSolution.join(" ")}`);
}
browser.kill();
process.exit(bad ? 1 : 0);
