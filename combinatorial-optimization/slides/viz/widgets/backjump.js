// Backjumping figures (unit 19b): the running example replayed by chronological search and by
// conflict-directed backjumping; one recorded run per instance, variable order and search, with
// the variable at each depth and the termination measure; and the jump-target pitfall under a
// dynamic order. Needs slides/viz/viz.js and backjump.css. Data: window.VIZ_DATA, recorded by
// slides/viz/traces/u19b.py from its reference engine.
(function () {
  "use strict";
  const V = window.CoViz;
  const { el, html } = V;
  const setStr = (xs) => (xs.length ? `{${xs.join(", ")}}` : "∅");
  const big = (x) => x.toLocaleString("en-US");

  // The cells of one frame: closed values struck through, the current one outlined, the value
  // closed by this very step (fresh) in red.
  function cells(svg, x, y, vals, cur, fresh, w = 24, h = 22) {
    if (!vals.length) { V.text(svg, x, y + h / 2 + 5, "no values", "bj-small", "start"); return; }
    vals.forEach((v, i) => {
      const closed = i < cur, isFresh = i === fresh, cx = x + i * w;
      const cls = "bj-cell" + (closed ? " bj-closed" : i === cur ? " bj-current" : "") + (isFresh ? " bj-fresh" : "");
      el("rect", { x: cx, y, width: w - 3, height: h, rx: 3, class: cls }, svg);
      V.text(svg, cx + (w - 3) / 2, y + h / 2 + 5, v, closed && !isFresh ? "bj-celltext bj-closed" : "bj-celltext");
      if (closed) el("line", { x1: cx + 3, y1: y + h - 3, x2: cx + w - 6, y2: y + 3, class: isFresh ? "bj-fresh-strike" : "bj-strike" }, svg);
    });
  }

  // Which value this step closed, as [depth, index], from a recorded snapshot: a reject closes
  // the deepest frame's previous value, a jump closes the target's (the new deepest frame).
  const freshOf = (state) => {
    if (state.kind !== "reject" && state.kind !== "jump") return null;
    const d = state.stack.length - 1;
    return [d, state.stack[d][2] - 1];
  };

  // A stack of frames [variable, values, cursor, conflict set] as rows.
  //   opts: x, y, rowH, varX, cellX, csX, width, bad (Set of "depth:var" breaches),
  //         target (depth outlined as a jump's landing), fade
  function stackRows(svg, stack, state, o) {
    const fresh = freshOf(state);
    const exhausted = stack.length && stack[stack.length - 1][2] >= stack[stack.length - 1][1].length;
    stack.forEach(([v, vals, cur, cs], d) => {
      const y = o.y + d * o.rowH;
      const top = d === stack.length - 1;
      const breach = cs.filter((u) => o.bad && o.bad.has(`${d}:${u}`));
      if (breach.length) el("rect", { x: o.x, y: y - 4, width: o.width, height: o.rowH - 6, rx: 4, class: "bj-band-warn" }, svg);
      else if (top) el("rect", { x: o.x, y: y - 4, width: o.width, height: o.rowH - 6, rx: 4, class: exhausted ? "bj-band-warn" : "bj-band" }, svg);
      if (o.target === d) el("rect", { x: o.x + 1, y: y - 3, width: o.width - 2, height: o.rowH - 8, rx: 4, class: "bj-target" }, svg);
      V.text(svg, o.x + 6, y + 15, `${d}`, "bj-depth", "start");
      V.text(svg, o.x + o.varX, y + 16, v, "bj-var", "middle");
      cells(svg, o.x + o.cellX, y, vals, cur, fresh && fresh[0] === d ? fresh[1] : -1, o.cellW || 24);
      const t = V.text(svg, o.x + o.csX, y + 15, "", "bj-cs", "start");
      if (!cs.length) t.textContent = "∅";
      cs.forEach((u, i) => {
        const s = el("tspan", { class: breach.includes(u) ? "bj-cs-bad" : null }, t);
        s.textContent = (i ? ", " : "{") + u + (i === cs.length - 1 ? "}" : "");
      });
    });
  }

  // ---------------------------------------------------------------- 1. the running example
  //   data-key="cbj-replay": both runs step by step, on the tree chronological search visits
  V.register("cbj-replay", (host) => {
    const D = V.data(host, host.dataset.key || "cbj-replay");
    if (!D) return;
    if (!D.tree || !D.tree.length || D.runs.length !== 2) return V.fail(host, "cbj-replay: no tree or not two runs");
    const vars = D.vars;
    // tree layout: leaves left to right in visit order, parents over the middle of their children
    const key = (p) => p.join(",");
    const nodes = new Map(D.tree.map((p) => [key(p), { p, kids: [] }]));
    for (const nd of nodes.values()) {
      if (nd.p.length > 1) {
        const parent = nodes.get(key(nd.p.slice(0, -1)));
        if (!parent) return V.fail(host, `cbj-replay: node ${key(nd.p)} has no parent`);
        parent.kids.push(nd);
      }
    }
    const leaves = [...nodes.values()].filter((nd) => !nd.kids.length);
    leaves.forEach((nd, i) => { nd.x = 32 + i * (456 / Math.max(1, leaves.length - 1)); });
    const place = (nd) => { if (nd.x === undefined) nd.x = nd.kids.map(place).reduce((a, b) => a + b, 0) / nd.kids.length; return nd.x; };
    for (const nd of nodes.values()) { place(nd); nd.y = 26 + (nd.p.length - 1) * 50; nd.label = `${vars[nd.p.length - 1]}=${nd.p[nd.p.length - 1]}`; }

    V.stepper(host, {
      runs: D.runs, width: 520, height: 440, label: "the running example: search tree and stack",
      render({ svg, panel, run, k, state }) {
        // node status after steps 1..k
        const status = new Map(), shut = new Set();
        for (let i = 1; i <= k; i++) {
          const s = run.states[i];
          if (s.node) status.set(key(s.node), s.kind === "reject" ? "rej" : "ok");
          if (s.to) shut.add(key(s.to));
        }
        const cls = (nd) => (status.has(key(nd.p)) ? "" : " bj-ghost");
        for (const nd of nodes.values())
          for (const c of nd.kids) el("line", { x1: nd.x, y1: nd.y + 10, x2: c.x, y2: c.y - 10, class: "bj-edge" + cls(c) }, svg);
        const now = state.node ? key(state.node) : state.to ? key(state.to) : null;
        for (const nd of nodes.values()) {
          const kk = key(nd.p), st = status.get(kk);
          let c = "bj-node" + (st === "rej" ? " bj-rej" : st ? (shut.has(kk) ? " bj-shut" : "") : " bj-ghost");
          if (kk === now) c += " bj-now";
          el("rect", { x: nd.x - 17, y: nd.y - 10, width: 34, height: 20, rx: 4, class: c }, svg);
          V.text(svg, nd.x, nd.y + 4, nd.label, "bj-nodetext" + (st ? "" : " bj-ghost"));
        }
        if (state.kind === "jump" && key(state.from) !== key(state.to)) {
          const a = nodes.get(key(state.from)), b = nodes.get(key(state.to));
          if (!a || !b) throw new Error("a jump names a node outside the tree");
          const defs = el("defs", {}, svg), id = `bj-ah-${svg.dataset.vizId}`;
          const m = el("marker", { id, viewBox: "0 0 10 10", refX: 9, refY: 5, markerWidth: 6, markerHeight: 6, orient: "auto" }, defs);
          el("path", { d: "M0,0 L10,5 L0,10 z", class: "bj-jumphead" }, m);
          const x1 = a.x + 17, y1 = a.y, x2 = b.x + 19, y2 = b.y;
          el("path", { d: `M${x1},${y1} C ${x1 + 40},${y1 - 10} ${x2 + 40},${y2 + 10} ${x2 + 2},${y2}`, class: "bj-jump", "marker-end": `url(#${id})` }, svg);
        }
        V.text(svg, 10, 222, "red: rejected · grey: closed by a jump · dashed: not entered by this run (yet)", "bj-small", "start");

        // the stack
        const y0 = 262;
        V.text(svg, 10, y0 - 12, "DEPTH", "bj-colhead", "start");
        V.text(svg, 80, y0 - 12, "FRAME", "bj-colhead", "middle");
        V.text(svg, 110, y0 - 12, "VALUES", "bj-colhead", "start");
        V.text(svg, 190, y0 - 12, "CONFLICT SET", "bj-colhead", "start");
        stackRows(svg, state.stack, state, { x: 4, y: y0, rowH: 42, varX: 76, cellX: 106, csX: 186, width: 300,
                                            target: state.kind === "jump" ? state.stack.length - 1 : null });
        const top = state.stack[state.stack.length - 1];
        const ty = y0 + (state.stack.length - 1) * 42 + 15;
        if (state.kind === "unsat") V.text(svg, 312, ty, run.mode === "cbj" ? "exhausted, E = ∅: no solution" : "top frame exhausted: no solution", "bj-stop bj-ok", "start");
        else if (top[2] >= top[1].length) V.text(svg, 312, ty, "exhausted", "bj-stop bj-bad", "start");
        else if (state.kind === "jump") V.text(svg, 312, ty, "the jump landed here", "bj-small", "start");

        // panel
        const other = run === D.runs[0] ? D.runs[1] : D.runs[0];
        const f = html("div", { class: "bj-facts" }, panel);
        f.innerHTML = `step <b>${k}</b> of ${run.steps} · rejections <b>${state.rej}</b> of ${run.rejections} · jumps <b>${state.jumps}</b>`;
        html("div", { class: "bj-same" }, panel, `The other run, ${other.mode === "cbj" ? "CBJ" : "chronological"}: ${other.answer} in ${other.steps} steps, ${other.rejections} rejections.`);
        html("div", { class: "viz-explain" }, panel, explain1(run, k, state, nodes, key, status));
      },
    });
  });

  function explain1(run, k, state, nodes, key, status) {
    const st = state.stack, top = st[st.length - 1];
    if (state.kind === "start") return "One frame, for a, with nothing closed. Step with → or the step button.";
    if (state.kind === "descend") {
      const f = st[st.length - 2];
      return `${f[0]} = ${f[1][f[2]]} passes every constraint with the variables above it, so a frame opens for ${top[0]}, with an empty conflict set.`;
    }
    if (state.kind === "reject") return "The value fails a constraint whose other variable is assigned above. That variable is the reason, and joins the frame's conflict set.";
    if (state.kind === "jump") {
      const prev = run.states[k - 1].stack, x = prev[prev.length - 1][0], t = top[0];
      const skipped = prev.slice(st.length, -1).map((f) => f[0]);
      if (run.mode === "cbj")
        return `Every value of ${x} is closed; E = ${setStr(state.E)}. The deepest frame whose variable is in E is ${t}'s: the frames below it are discarded, E minus ${t} is merged into its conflict set, and its value is closed.` +
          (skipped.length ? ` The jump skips ${skipped.join(", ")}: no reason names ${skipped.length > 1 ? "them" : "it"}.` : "");
      const left = top[2] < top[1].length;
      return `Every value of ${x} is closed. Chronological search goes back to the frame just above, ${t}, whatever E = ${setStr(state.E)} says.` +
        (state.E.includes(t) ? "" : left ? ` E does not name ${t}: the failure below will be found again under ${t}'s next value. That is thrashing.`
          : ` E does not name ${t}, but ${t} has no value left to repeat the failure under: it has run out of values too.`);
    }
    if (state.kind === "unsat") {
      const ghosts = [...nodes.values()].filter((nd) => !status.has(key(nd.p)) && (nd.p.length === 1 || status.has(key(nd.p.slice(0, -1)))));
      const where = ghosts.map((nd) => nd.label + (nd.p.length > 1 ? ` under ${nd.p.slice(0, -1).map((_, i) => nodes.get(key(nd.p.slice(0, i + 1))).label).join(", ")}` : ""));
      const tail = ghosts.length ? ` Never entered: ${where.join("; ")}, the subtrees chronological search visits (dashed).` : "";
      return (run.mode === "cbj" ? `Every value of ${top[0]} is closed and E = ∅: no solution, whatever the other variables are.` : "The top frame is exhausted: no solution.") + tail;
    }
    return "";
  }

  // ---------------------------------------------------------------- 2. orders and the measure
  //   data-key="ordering": pick an instance, a variable order and a search
  // Each run is a list of tokens, one per step (see u19b.py, _events): r<i> reject with reason
  // variable i, d<i> descend opening variable i, j<k> jump to depth k, u unsat, s sat. The page
  // replays them into the stack; the replay must end at the recorded stack and measure.
  function replay(inst, run) {
    const n = inst.vars.length, B = inst.B, doms = inst.doms, name = (i) => inst.vars[i];
    const stack = [{ v: run.first, cur: 0, cs: new Set(), moved: false }];
    const lastAt = [run.first], seen = [[run.first]];
    const digitsOf = () => Array.from({ length: n }, (_, d) => (d < stack.length ? doms[stack[d].v].length - stack[d].cur : B - 1));
    const muOf = (r) => r.reduce((a, x) => a * B + x, 0);
    const sortIdx = (s) => [...s].sort((a, b) => a - b).map(name);
    const snap = (extra) => {
      const digits = digitsOf();
      return Object.assign({ digits, mu: muOf(digits), frames: stack.map((f) => ({ v: f.v, cur: f.cur, moved: f.moved })),
                             seen: seen.map((s) => s.slice()) }, extra);
    };
    const states = [snap({ kind: "start", note: `start: a frame for ${name(run.first)} at depth 0`, explain: "Nothing is closed yet. Step with → or the step button." })];
    const toks = run.events ? run.events.split(" ") : [];
    toks.forEach((tok, i) => {
      const step = i + 1, c = tok[0], arg = Number(tok.slice(1)), top = stack[stack.length - 1], d = stack.length - 1;
      let note, extra = {};
      if (c === "r") {
        const val = doms[top.v][top.cur];
        top.cur++; top.cs.add(arg);
        note = `step ${step}: ${name(top.v)} = ${val} rejected, reason {${name(arg)}}`;
      } else if (c === "d") {
        const val = doms[top.v][top.cur], moved = lastAt[d + 1] !== undefined && lastAt[d + 1] !== arg;
        extra.was = lastAt[d + 1];
        stack.push({ v: arg, cur: 0, cs: new Set(), moved });
        lastAt[d + 1] = arg;
        if (!seen[d + 1]) seen[d + 1] = [];
        if (!seen[d + 1].includes(arg)) seen[d + 1].push(arg);
        note = `step ${step}: ${name(top.v)} = ${val} ok, open ${name(arg)} at depth ${d + 1}`;
        if (moved) extra.moved = d + 1;
      } else if (c === "j") {
        const E = sortIdx(top.cs), from = name(top.v);
        stack.length = arg + 1;
        const g = stack[arg];
        for (const e of top.cs) if (e !== g.v) g.cs.add(e);
        g.cur++;
        note = `step ${step}: ${from} exhausted, E = ${setStr(E)}: jump to ${name(g.v)} at depth ${arg}`;
      } else if (c === "u") {
        note = `step ${step}: ${name(top.v)} exhausted, E = ${setStr(sortIdx(top.cs))}: unsatisfiable`;
      } else if (c === "s") {
        note = `step ${step}: ${name(top.v)} = ${doms[top.v][top.cur]} ok: a solution`;
      } else throw new Error(`ordering: unknown token ${tok}`);
      states.push(snap(Object.assign({ kind: { r: "reject", d: "descend", j: "jump", u: "unsat", s: "sat" }[c], note }, extra)));
    });
    // explanations: what happened to the digits
    states.forEach((s, i) => {
      if (!i) return;
      const p = states[i - 1];
      if (s.kind === "unsat" || s.kind === "sat") { s.explain = `The search stops here; the measure stays at ${big(s.mu)}.`; return; }
      const down = s.digits.findIndex((x, d) => x !== p.digits[d]);
      const ups = s.digits.map((x, d) => (x > p.digits[d] ? d : -1)).filter((d) => d >= 0);
      if (down < 0 || s.digits[down] >= p.digits[down] || s.mu >= p.mu) throw new Error(`ordering: the measure did not drop at step ${i}`);
      s.down = down; s.ups = ups;
      let t = `The digit at depth ${down} fell from ${p.digits[down]} to ${s.digits[down]}`;
      if (s.kind === "descend") t += ` (from ${B - 1}, no frame, to the size of ${name(s.frames[down].v)}'s domain)`;
      if (ups.length) t += `; depth${ups.length > 1 ? `s ${ups[0]}–${ups[ups.length - 1]}` : ` ${ups[0]}`} went back up to ${B - 1}, no frame`;
      t += `. The measure fell by ${big(p.mu - s.mu)}.`;
      if (s.moved !== undefined) t += ` Depth ${s.moved} held ${name(s.was)} last time; the order now puts ${name(s.frames[s.moved].v)} there.`;
      s.explain = t;
    });
    const last = states[states.length - 1];
    const lastStack = last.frames.map((f) => name(f.v)).join(" ");
    if (states[0].mu !== run.mu0 || last.mu !== run.muEnd || lastStack !== run.stackEnd)
      throw new Error("ordering: the replay does not end at the recorded stack and measure");
    return states;
  }

  V.register("ordering", (host) => {
    const D = V.data(host, host.dataset.key || "ordering");
    if (!D) return;
    const cache = new Map(), flat = [];
    try {
      D.instances.forEach((inst, ii) => D.heuristics.forEach((h, hi) => D.algos.forEach((a, ai) => {
        const id = inst.runs[hi][ai], run = D.runs[id];
        if (!run) throw new Error(`ordering: no run ${id}`);
        if (!cache.has(id)) cache.set(id, replay(inst, run));
        flat.push({ title: `${inst.label} · ${h} · ${a}`, states: cache.get(id), ii, hi, ai, id, inst, rec: run });
      })));
    } catch (err) { return V.fail(host, err.message); }
    const index = (ii, hi, ai) => (ii * D.heuristics.length + hi) * D.algos.length + ai;
    const W = 520, H = 476;
    const S = V.stepper(host, {
      runs: flat, width: W, height: H, label: "one run: the variable at each depth, the digits and the measure",
      render({ svg, panel, run, k, state }) {
        const inst = run.inst, n = inst.vars.length, B = inst.B, name = (i) => inst.vars[i];
        const rowH = Math.min(38, 250 / n), y0 = 40;
        const cols = { depth: 22, v: 74, digit: 130, cells: 154, seen: 256 };
        V.text(svg, cols.depth, 22, "DEPTH", "bj-colhead", "middle");
        V.text(svg, cols.v, 22, "VARIABLE", "bj-colhead", "middle");
        V.text(svg, cols.digit, 22, "DIGIT", "bj-colhead", "middle");
        V.text(svg, cols.cells, 22, "VALUES", "bj-colhead", "start");
        V.text(svg, cols.seen, 22, "SEEN AT THIS DEPTH SO FAR", "bj-colhead", "start");
        for (let d = 0; d < n; d++) {
          const y = y0 + d * rowH, f = state.frames[d], mid = y + Math.min(rowH, 26) / 2;
          if (f && d === state.frames.length - 1) el("rect", { x: 2, y: y - 3, width: W - 4, height: Math.min(rowH, 26) + 2, rx: 4, class: "bj-band" }, svg);
          V.text(svg, cols.depth, mid + 4, d, "bj-depth", "middle");
          const bh = Math.min(rowH - 2, 22);
          if (f && f.moved) el("rect", { x: cols.v - 20, y: mid - bh / 2, width: 40, height: bh, rx: 5, class: "bj-movedbox" }, svg);
          if (f) V.text(svg, cols.v, mid + 5, name(f.v), "bj-var" + (f.moved ? " bj-moved" : ""), "middle");
          const dig = state.digits[d];
          const down = state.down === d, up = (state.ups || []).includes(d);
          if (down) el("rect", { x: cols.digit - 13, y: mid - 11, width: 26, height: 22, rx: 11, class: "bj-downpill" }, svg);
          V.text(svg, cols.digit, mid + 6, dig, "bj-digit" + (down ? " bj-down" : up ? " bj-up" : f ? "" : " bj-empty"), "middle");
          if (f) cells(svg, cols.cells, mid - 10, inst.doms[f.v], f.cur, state.kind === "reject" && d === state.frames.length - 1 ? f.cur - 1 : state.kind === "jump" && d === state.frames.length - 1 ? f.cur - 1 : -1, 22, 20);
          const seen = state.seen[d] || [];
          const t = V.text(svg, cols.seen, mid + 4, "", "bj-seen", "start");
          seen.forEach((v, i) => {
            const s = el("tspan", { class: f && f.v === v ? "bj-seen-now" : null }, t);
            s.textContent = (i ? " " : "") + name(v);
          });
        }
        // the measure over the recorded steps, and how much each step lowered it
        const N = run.states.length, X = (i) => 90 + i * (412 / Math.max(1, N - 1));
        const mus = run.states.map((s) => s.mu), hi = mus[0], lo = mus[N - 1];
        const p0 = 332, p1 = 384, b0 = 414, b1 = 454;
        const Y = (m) => (hi === lo ? p0 : p0 + (hi - m) / (hi - lo) * (p1 - p0));
        V.text(svg, 10, p0 - 14, "the measure after each step (linear scale)", "bj-small", "start");
        V.text(svg, 84, p0 + 4, big(hi), "viz-tick", "end");
        V.text(svg, 84, p1 + 4, big(lo), "viz-tick", "end");
        el("polyline", { points: mus.map((m, i) => `${X(i)},${Y(m)}`).join(" "), class: "viz-curve-soft" }, svg);
        el("polyline", { points: mus.slice(0, k + 1).map((m, i) => `${X(i)},${Y(m)}`).join(" "), class: "bj-mu" }, svg);
        V.text(svg, 10, b0 - 8, "how much each step lowered it (log scale; blue: jumps; the stop has no bar)", "bj-small", "start");
        const full = Math.log(B ** n);
        for (let i = 1; i < N; i++) {
          const drop = mus[i - 1] - mus[i];
          if (drop <= 0) continue;                                // the stop: no bar
          const h = 3 + (Math.log(drop) / full) * (b1 - b0 - 3);
          const s = run.states[i];
          const c = "bj-bar" + (s.kind === "jump" ? " bj-bar-jump" : "") + (i === k ? " bj-bar-now" : i > k ? " bj-bar-future" : "");
          el("rect", { x: X(i) - Math.max(1, 200 / N), y: b1 - h, width: Math.max(1.5, 400 / N), height: h, class: c }, svg);
        }
        el("line", { x1: X(k), y1: p0 - 4, x2: X(k), y2: p1 + 4, class: "bj-now-line" }, svg);
        el("line", { x1: X(k), y1: b0 - 2, x2: X(k), y2: b1 + 2, class: "bj-now-line" }, svg);
        el("circle", { cx: X(k), cy: Y(mus[k]), r: 4.5, class: "bj-dot" }, svg);
        el("line", { x1: 86, y1: b1 + 0.5, x2: 506, y2: b1 + 0.5, class: "viz-axis" }, svg);
        V.text(svg, 506, H - 6, `recorded steps: ${N - 1}${run.rec.capped ? ` of ${run.rec.steps}` : ""}`, "viz-tick", "end");

        // panel
        const rec = run.rec;
        const f = html("div", { class: "bj-facts" }, panel);
        f.innerHTML = `${n} variables, ${inst.cons} constraints, radix ${B}.<br>The whole run: <b>${rec.answer}</b> in <b>${big(rec.steps)}</b> steps, ${big(rec.rejections)} rejections, ${big(rec.jumps)} jumps.` +
          (rec.capped ? `<br>Recorded here: the first ${D.cap} steps.` : "");
        html("div", { class: "bj-facts" }, panel, `measure now: ${big(state.mu)} (digits ${state.digits.join(" ")})`);
        const same = flat.filter((r) => r.id === run.id && r !== run).map((r) => `${D.heuristics[r.hi]} · ${D.algos[r.ai]}`);
        if (same.length) html("div", { class: "bj-same" }, panel, `The same run, step for step: ${same.join("; ")}.`);
      },
    });
    if (!S) return;
    // three pickers drive the stepper's own (hidden) run list, and follow it
    const pick = host.querySelector(".viz-pick");
    if (!pick) return V.fail(host, "ordering: no run list");
    pick.classList.add("bj-hidden");
    const right = host.querySelector(".viz-right");
    const wrap = html("div", { class: "bj-picks" });
    right.insertBefore(wrap, right.firstChild);
    const mk = (label, items) => {
      const s = html("select", { "aria-label": label }, wrap);
      items.forEach((t, i) => html("option", { value: i }, s, t));
      return s;
    };
    const sI = mk("instance", D.instances.map((x) => x.label)), sH = mk("variable order", D.heuristics), sA = mk("search", D.algos);
    const go = () => { pick.value = String(index(+sI.value, +sH.value, +sA.value)); pick.dispatchEvent(new Event("change")); };
    [sI, sH, sA].forEach((s) => s.addEventListener("change", go));
    pick.addEventListener("change", () => { const r = flat[+pick.value]; sI.value = r.ii; sH.value = r.hi; sA.value = r.ai; });
    // open on CBJ, the run the measure slide tabulates
    const cbj = D.algos.indexOf("CBJ");
    if (cbj < 0) return V.fail(host, "ordering: no CBJ runs");
    sA.value = String(cbj);
    go();
  });

  // ---------------------------------------------------------------- 3. the pitfall
  //   data-key="pitfall": the stack rule and the index rule (dropping) on one dynamic order
  V.register("pitfall", (host) => {
    const D = V.data(host, host.dataset.key || "pitfall");
    if (!D) return;
    const G = D.good, Bd = D.bad;
    if (!G || !Bd || D.diverge === null || D.diverge >= G.length) return V.fail(host, "pitfall: bad recording");
    const nb = Bd.length - 1;
    const states = G.map((g, k) => {
      const b = Bd[Math.min(k, nb)];
      const s = { g, b, k, bStopped: k > nb };
      s.note = k ? `step ${k}` : "start";
      s.explain = explain3(D, k, g, b, nb);
      return s;
    });
    const W = 520, H = 440;
    V.stepper(host, {
      runs: [{ title: `trial ${D.trial}: ${D.vars.length} variables, ${D.cons.length} constraints, one random order (seed ${D.trial}) for both`, states }],
      width: W, height: H, label: "two jump rules on the same dynamic order",
      render({ svg, panel, state }) {
        const cols = [
          { x: 2, head: "STACK RULE", sub: "jump to the deepest frame in E", s: state.g, stopped: false },
          { x: 264, head: "INDEX RULE, DROPPING", sub: "jump to the largest index in E", s: state.b, stopped: state.bStopped },
        ];
        el("line", { x1: 260, y1: 8, x2: 260, y2: 352, class: "viz-grid" }, svg);
        for (const c of cols) {
          V.text(svg, c.x + 6, 20, c.head, "bj-colhead", "start");
          V.text(svg, c.x + 6, 37, c.sub, "bj-small", "start");
          const bad = new Set((c.s.bad || []).map(([d, v]) => `${d}:${v}`));
          const s = c.stopped ? Object.assign({}, c.s, { kind: "stopped" }) : c.s;
          stackRows(svg, s.stack, s, { x: c.x, y: 56, rowH: 44, varX: 40, cellX: 62, csX: 134, width: 254, cellW: 22, bad,
                                        target: s.kind === "jump" ? s.stack.length - 1 : null });
          const yEnd = 56 + s.stack.length * 44 + 8;
          if (s.kind === "unsat" || c.stopped) {
            V.text(svg, c.x + 6, yEnd, `UNSAT at step ${D.badSteps}: wrong`, "bj-stop bj-bad", "start");
            if (c.s.dropped && c.s.dropped.length) V.text(svg, c.x + 6, yEnd + 18, `E was ${setStr(c.s.E)}; ${c.s.dropped.join(", ")} silently dropped`, "bj-small-warn", "start");
          } else if (s.kind === "sat") {
            V.text(svg, c.x + 6, yEnd, `SAT at step ${D.goodSteps}: correct`, "bj-stop bj-ok", "start");
          }
          for (const [d, v] of c.s.bad || []) {
            V.text(svg, c.x + 6, yEnd + 18, `${c.s.stack[d][0]}'s conflict set names ${v},`, "bj-small-warn", "start");
            V.text(svg, c.x + 6, yEnd + 34, "which is not on the stack above it", "bj-small-warn", "start");
          }
        }
        V.text(svg, 8, H - 30, `domain sizes: ${D.vars.map((v, i) => `${v} ${D.doms[i].length}`).join(", ")}`, "bj-small", "start");
        V.text(svg, 8, H - 12, `constraints: ${D.cons.join(", ")}`, "bj-small", "start");

        const side = (label, s, good, stopped) => {
          const b = html("div", { class: `bj-side ${good ? "bj-side-good" : "bj-side-bad"}` }, panel);
          html("div", { class: "bj-side-head" }, b, label);
          html("div", {}, b, stopped ? `stopped at step ${D.badSteps}: UNSAT` : s.note);
        };
        side("stack rule", state.g, true, false);
        side("index rule, dropping", state.b, false, state.bStopped);
        if (state.k === G.length - 1) {
          const sol = D.vars.map((v) => `${v} = ${D.solution[v]}`).join(", ");
          html("div", { class: "bj-facts" }, panel, `Solution: ${sol}.`);
        }
      },
    });
  });

  function explain3(D, k, g, b, nb) {
    const dv = D.diverge;
    if (k === 0) return `Both runs use the same random order, so they open the same variables, as long as their stacks agree. Step to ${dv}.`;
    if (k < dv) return `Identical so far: no frame has been exhausted yet, so the two rules have had nothing to disagree on.`;
    const prev = D.good[dv - 1].stack, depthOf = (v) => prev.findIndex((f) => f[0] === v);
    if (k === dv) {
      const E = g.E, tg = g.stack[g.stack.length - 1][0], tb = b.stack[b.stack.length - 1][0];
      const [bd, bv] = b.bad[0] || [];
      return `E = ${setStr(E)}. Under this order ${tg} sits at depth ${depthOf(tg)}, below ${tb} at depth ${depthOf(tb)}. The stack rule jumps to ${tg}, the deepest frame in E. The index rule takes ${tb}, the largest index in E, and discards ${tg}'s frame` +
        (bv ? `; ${b.stack[bd][0]}'s conflict set now names ${bv}, which is no longer on the stack. The invariant is broken: a runtime check would stop here.` : ".");
    }
    if (k === nb) return `${b.stack[b.stack.length - 1][0]} is exhausted with E = ${setStr(b.E)}. Dropping ${b.dropped.join(", ")}, which is off the stack, leaves E empty, and the run answers UNSAT. Without the drop it would crash on a jump to a missing frame.`;
    if (k < D.good.length - 1) return `The stack rule goes on; the index rule answered UNSAT at step ${nb}.`;
    return `The stack rule finds a solution at step ${k}; it satisfies all ${D.cons.length} constraints, and brute force agrees that the instance is satisfiable. The index rule's UNSAT was wrong.`;
  }
})();
