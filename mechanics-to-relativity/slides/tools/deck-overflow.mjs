// The deck's ?check=1 overflow test, run over the DevTools protocol (node >= 22). Used by
// deck-check.sh: --dump-dom returned before the report was attached, so it reported nothing.
// Prints "no overflow" or one line per problem (slide indices are 0-based), and exits 1 on
// anything it could not check: a silent pass on a page that never loaded is the one outcome
// this tool must not produce. Two ways that used to happen, both guarded below —
//   * the browser is picked up by another run: the port is random, and an instance left
//     behind by an earlier run still holds it, so the connection lands on someone else's
//     about:blank. The port is now claimed by this process before the browser starts.
//   * the deck never finishes loading: Reveal or KaTeX missing was reported as `undefined`
//     by an evaluate that returned no value, which printed as an empty object.
import { spawn } from "node:child_process";
import { createServer } from "node:net";

const [url, outdir, browserBin] = process.argv.slice(2);
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const die = (msg) => { console.error(`deck-overflow: ${msg}`); process.exit(1); };

// A port the OS says is free, held open until the moment the browser claims it.
const port = await new Promise((resolve, reject) => {
  const s = createServer();
  s.on("error", reject);
  s.listen(0, "127.0.0.1", () => { const { port } = s.address(); s.close(() => resolve(port)); });
});

const browser = spawn(browserBin, ["--headless=new", "--disable-gpu", `--remote-debugging-port=${port}`,
  `--user-data-dir=${outdir}/ov-profile`, "--window-size=1600,1000", "about:blank"], { stdio: "ignore", detached: true });  // own process group, so the kill below takes the children too
const shutdown = () => { try { process.kill(-browser.pid, "SIGKILL"); } catch { browser.kill("SIGKILL"); } };
process.on("exit", shutdown);

let targets;
for (let i = 0; i < 60 && !targets; i++) {
  try { targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json(); } catch { await sleep(250); }
}
if (!targets) die(`no DevTools endpoint on port ${port} after 15s — did ${browserBin} start?`);
const page = targets.find((t) => t.type === "page");
if (!page) die("the browser came up with no page target");

const ws = new WebSocket(page.webSocketDebuggerUrl);
await new Promise((r) => ws.addEventListener("open", r));
let id = 0; const pending = new Map();
ws.addEventListener("message", (m) => { const d = JSON.parse(m.data); if (pending.has(d.id)) { pending.get(d.id)(d); pending.delete(d.id); } });
const send = (method, params = {}) => new Promise((r) => { const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params })); });
const ev = async (expr) => {
  const { result } = await send("Runtime.evaluate", { expression: expr, awaitPromise: true, returnByValue: true });
  if (!result) die("the DevTools connection returned no result — another run may hold this browser");
  if (result.exceptionDetails) die(`the page threw: ${result.exceptionDetails.exception?.description ?? result.exceptionDetails.text}`);
  return result.result.value;
};

await send("Page.enable"); await send("Page.navigate", { url });
let ready = false;
for (let i = 0; i < 80 && !ready; i++) {
  ready = await ev("!!(window.Reveal && Reveal.isReady() && window.renderMathInElement && document.querySelector('.katex'))");
  if (!ready) await sleep(250);
}
if (!ready) die(`${url} never finished loading: Reveal, KaTeX or a rendered formula is missing after 20s. NOT a pass.`);
await sleep(1500);

const report = await ev(`(async () => { const problems = [];
  const slides = Reveal.getSlides();
  for (let i = 0; i < slides.length; i++) { const section = slides[i]; Reveal.slide(i); await new Promise(r => setTimeout(r, 60));
    section.querySelectorAll(".katex-display").forEach((el) => { if (el.scrollWidth > el.clientWidth + 1) problems.push("slide " + i + ": equation " + el.scrollWidth + " in " + el.clientWidth); });
    section.querySelectorAll(".cols > *, pre, table").forEach((el) => { if (el.scrollWidth > el.clientWidth + 4 && !el.closest(".katex-display")) problems.push("slide " + i + ": " + el.tagName.toLowerCase() + " " + el.scrollWidth + " in " + el.clientWidth); });
    if (!section.classList.contains("divider") && section.scrollHeight > Reveal.getConfig().height + 1) problems.push("slide " + i + ": content " + section.scrollHeight + "px tall (frame " + Reveal.getConfig().height + ")");
  }
  return problems.length ? problems.join("\\n") : "no overflow"; })()`);
if (typeof report !== "string") die(`the check returned ${JSON.stringify(report)} instead of a report — nothing was measured`);
console.log(report);
process.exit(report === "no overflow" ? 0 : 2);
