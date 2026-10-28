// Screenshot chosen slides of a deck over the DevTools protocol (node >= 22 for WebSocket):
// load the deck once, step to each slide, capture it. Called by deck-check.sh with the reveal
// indices (0-based) after the output directory and browser; writes slide-<i>.png there.
// The browser's own --screenshot mode replaced this before 2026-10-28 and hung on these
// decks often enough that the screenshots were mostly missing.
import { spawn } from "node:child_process";
import { writeFileSync } from "node:fs";

const [url, outdir, browserBin, ...indices] = process.argv.slice(2);
const port = 9300 + Math.floor(Math.random() * 500);
const browser = spawn(browserBin, ["--headless=new", "--disable-gpu", "--hide-scrollbars", `--remote-debugging-port=${port}`,
  `--user-data-dir=${outdir}/shot-profile`, "--window-size=1400,830", "about:blank"], { stdio: "ignore" });
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const done = (code) => { browser.kill(); process.exit(code); };

let targets;
for (let i = 0; i < 60 && !targets; i++) {
  try { targets = await (await fetch(`http://127.0.0.1:${port}/json/list`)).json(); } catch { await sleep(250); }
}
if (!targets) { console.log("screenshots: the browser did not start"); done(1); }
const ws = new WebSocket(targets.find((t) => t.type === "page").webSocketDebuggerUrl);
await new Promise((r) => ws.addEventListener("open", r));
let id = 0;
const pending = new Map();
ws.addEventListener("message", (m) => {
  const d = JSON.parse(m.data);
  if (pending.has(d.id)) { pending.get(d.id)(d); pending.delete(d.id); }
});
const send = (method, params = {}) => new Promise((r) => {
  const i = ++id; pending.set(i, r); ws.send(JSON.stringify({ id: i, method, params }));
});
const ev = async (expr) =>
  (await send("Runtime.evaluate", { expression: expr, awaitPromise: true, returnByValue: true })).result.result.value;

await send("Page.enable");
await send("Page.navigate", { url });
let ready = false;
for (let i = 0; i < 120 && !ready; i++) { ready = await ev("!!(window.Reveal && Reveal.isReady())"); if (!ready) await sleep(250); }
if (!ready) { console.log("screenshots: the deck did not finish loading"); done(1); }
await sleep(1500);                                  // fonts and KaTeX settle after Reveal is ready

let failed = 0;
for (const i of indices) {
  await ev(`Reveal.slide(${Number(i)})`);
  await sleep(600);                                 // the slide transition
  const shot = await send("Page.captureScreenshot", { format: "png" });
  if (shot.result?.data) {
    writeFileSync(`${outdir}/slide-${i}.png`, Buffer.from(shot.result.data, "base64"));
    console.log(`screenshot ${outdir}/slide-${i}.png`);
  } else { console.log(`screenshot of slide ${i}: none taken`); failed++; }
}
done(failed ? 1 : 0);
