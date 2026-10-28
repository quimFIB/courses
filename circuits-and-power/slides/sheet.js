// Shared boot for every unit's problem sheet (units/NN-slug/problems.html).
//
//   D   toggle dark / light — the same setting the decks use, so the two agree
//   F   fold everything back: every hint rung and every solution closed
//
// Maths is written \( … \) inline and \[ … \] displayed (the delimiters the sheets
// were first authored in), and $ … $ / $$ … $$ also work. KaTeX renders it once on
// load, including inside closed <details>, so opening a hint never waits on it.

(function () {
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (_) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (_) { /* private mode */ } },
  };
  const theme = store.get("mr-theme");
  if (theme) document.documentElement.setAttribute("data-theme", theme);

  function toggleDark() {
    const root = document.documentElement;
    const dark = root.getAttribute("data-theme") === "dark" ||
      (!root.hasAttribute("data-theme") && matchMedia("(prefers-color-scheme: dark)").matches);
    const next = dark ? "light" : "dark";
    root.setAttribute("data-theme", next);
    store.set("mr-theme", next);
  }

  function foldAll() {
    document.querySelectorAll("details[open]").forEach((d) => d.removeAttribute("open"));
  }

  function renderMath() {
    if (!window.renderMathInElement) return;
    renderMathInElement(document.body, {
      delimiters: [
        { left: "\\[", right: "\\]", display: true },
        { left: "$$", right: "$$", display: true },
        { left: "\\(", right: "\\)", display: false },
        { left: "$", right: "$", display: false },
      ],
      ignoredTags: ["script", "noscript", "style", "textarea", "pre", "code"],
      throwOnError: false,
    });
  }

  function bar() {
    const b = document.createElement("div");
    b.className = "sheet-bar";
    const mk = (label, title, fn) => {
      const el = document.createElement("button");
      el.type = "button"; el.textContent = label; el.title = title;
      el.addEventListener("click", fn);
      b.appendChild(el);
    };
    mk("D", "dark / light", toggleDark);
    mk("F", "fold every hint and solution", foldAll);
    document.body.appendChild(b);
  }

  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey || e.metaKey || e.altKey) return;
    if (/^(input|textarea|select)$/i.test(e.target.tagName)) return;
    if (e.key === "d" || e.key === "D") toggleDark();
    if (e.key === "f" || e.key === "F") foldAll();
  });

  const boot = () => { renderMath(); bar(); };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
  else boot();
})();
