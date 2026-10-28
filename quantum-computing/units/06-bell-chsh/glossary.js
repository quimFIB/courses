// Generated from GLOSSARY.org by `qc glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "CHSH game",
"html": "A nonlocal game: a referee sends independent uniform bits \\(x, y\\) to two players who cannot communicate; they answer bits \\(a, b\\) and win if \\(a \\oplus b = x \\wedge y\\) — agree on \\(00, 01, 10\\), differ on \\(11\\). Its classical value is \\(\\frac34\\), its quantum value \\(\\cos^2\\frac\\pi8 \\approx 0.8536\\).",
"section": "The game",
"slide": "A game two players cannot talk their way through",
"keys": [
"chsh game"
]
},
{
"term_html": "space-like separated",
"html": "Two events, each outside the other's light cone: so far apart and so close in time that no signal at the speed of light can link them. A Bell test makes each lab's setting choice and outcome space-like separated from the other lab's.",
"section": "Local hidden variables",
"slide": "Why the timing matters: nothing outruns light",
"keys": [
"space-like separated"
]
},
{
"term_html": "light cone",
"html": "In a spacetime diagram (one space dimension across, time up, light at \\(45^\\circ\\)), the region an event can influence: everything above it between the two \\(45^\\circ\\) lines. Its past light cone is everything that could have influenced it.",
"section": "Local hidden variables",
"slide": "Why the timing matters: nothing outruns light",
"keys": [
"light cone"
]
},
{
"term_html": "local hidden-variable model",
"html": "A probability distribution \\(p\\) on a set \\(\\Lambda\\) and response functions \\(A(x, \\lambda), B(y, \\lambda) \\in \\{\\pm1\\}\\): each run draws \\(\\lambda\\), and the outcomes are fixed by \\(\\lambda\\) and the local setting alone. It builds in realism, locality and free choice.",
"section": "Local hidden variables",
"slide": "A local hidden-variable model",
"keys": [
"local hidden-variable model"
]
},
{
"term_html": "response function",
"html": "In a local hidden-variable model, the function \\(A(x, \\lambda)\\) giving Alice's outcome from her setting and the hidden variable (likewise \\(B(y, \\lambda)\\) for Bob). That \\(A\\) does not take \\(y\\) as an argument is locality.",
"section": "Local hidden variables",
"slide": "A local hidden-variable model",
"keys": [
"response function"
]
},
{
"term_html": "correlation",
"html": "For a pair of settings, \\(E(x, y)\\), the expected product of the two \\(\\pm1\\) outcomes: \\(\\Pr(\\text{same}) - \\Pr(\\text{differ})\\), in \\([-1, 1]\\). In a local model \\(\\sum_\\lambda p(\\lambda)A(x, \\lambda)B(y, \\lambda)\\); in quantum mechanics \\(\\operatorname{tr}(\\rho\\,A_x \\otimes B_y)\\).",
"section": "Local hidden variables",
"slide": "A local hidden-variable model",
"keys": [
"correlation"
]
},
{
"term_html": "free choice",
"html": "The hypothesis that the distribution of the hidden variable does not depend on the settings: \\(p(\\lambda \\mid x, y) = p(\\lambda)\\). Also called measurement independence. It is used when the four correlations, measured on different runs, are averaged over the same \\(p\\).",
"section": "Local hidden variables",
"slide": "A local hidden-variable model",
"keys": [
"free choice"
]
},
{
"term_html": "deterministic strategy",
"html": "A pair of functions \\(f, g\\colon \\{0, 1\\} \\to \\{\\pm1\\}\\), Alice answering \\(f(x)\\) and Bob \\(g(y)\\); there are sixteen. Every local hidden-variable model is a mixture of them, so any quantity linear in the correlations is maximised at one. In the CHSH game eight win on three input pairs and eight on one.",
"section": "Local hidden variables",
"slide": "Every model is a mixture of deterministic strategies",
"keys": [
"deterministic strategy"
]
},
{
"term_html": "CHSH quantity",
"html": "\\(S = E(a, b) + E(a, b') + E(a', b) - E(a', b')\\), for two settings per side (Clauser, Horne, Shimony and Holt, 1969). For every strategy, the CHSH game is won with probability \\(\\frac12 + S/8\\).",
"section": "The CHSH bound",
"slide": "The CHSH quantity, and the game in its terms",
"keys": [
"chsh quantity"
]
},
{
"term_html": "CHSH inequality",
"html": "\\(|S| \\le 2\\) in every local hidden-variable model: pointwise \\(A(B + B') + A'(B - B') = \\pm2\\) for \\(\\pm1\\) values, then average. Equivalently, the CHSH game's classical value is \\(\\frac34\\).",
"section": "The CHSH bound",
"slide": "The CHSH inequality",
"keys": [
"chsh inequality"
]
},
{
"term_html": "superdeterminism",
"html": "The failure of free choice: the settings and the hidden variable share a common cause, so a model may \"know\" the questions in advance and produce any data. A hypothesis of Bell's theorem that no experiment can test, not a flaw in its proof.",
"section": "The CHSH bound",
"slide": "Every hypothesis, used once",
"keys": [
"superdeterminism"
]
},
{
"term_html": "±1-valued observable",
"html": "A Hermitian operator \\(A\\) with \\(A^2 = I\\): equivalently \\(2P - I\\) for a projector \\(P\\), the two-outcome projective measurement \\(\\{P, I - P\\}\\) with outcomes \\(\\pm1\\). It is unitary. On a qubit, \\(\\pm I\\) or \\(\\mathbf n \\cdot \\boldsymbol\\sigma\\) with \\(|\\mathbf n| = 1\\); this unit uses \\(A(\\theta) = \\cos\\theta\\,Z + \\sin\\theta\\,X\\), and a polariser at \\(\\varphi\\) is \\(A(2\\varphi)\\).",
"section": "The singlet",
"slide": "Observables with outcomes ±1",
"keys": [
"±1-valued observable"
]
},
{
"term_html": "CHSH operator",
"html": "\\(C = A \\otimes B + A \\otimes B' + A' \\otimes B - A' \\otimes B'\\) for \\(\\pm1\\)-valued observables; a quantum strategy's CHSH value is \\(S = \\operatorname{tr}(\\rho C)\\). At the optimal qubit settings \\(C = \\sqrt2(Z \\otimes Z + X \\otimes X)\\), with eigenvalues \\(2\\sqrt2, 0, 0, -2\\sqrt2\\).",
"section": "The singlet",
"slide": "Correlations of a shared quantum state",
"keys": [
"chsh operator"
]
},
{
"term_html": "operator norm",
"html": "\\(\\lVert M\\rVert = \\max_{\\lVert v\\rVert = 1}\\lVert Mv\\rVert\\), the largest singular value. It is subadditive and submultiplicative, \\(1\\) for a unitary, \\(\\lVert M \\otimes N\\rVert \\le \\lVert M\\rVert\\lVert N\\rVert\\), and bounds every eigenvalue of a Hermitian operator.",
"section": "Tsirelson's bound",
"slide": "The operator norm",
"keys": [
"operator norm"
]
},
{
"term_html": "Tsirelson's bound",
"html": "\\(|S| \\le 2\\sqrt2\\) for every quantum strategy, in every dimension and for every state, from \\(C^2 = 4I - [A, A'] \\otimes [B, B']\\) and \\(\\lVert[A, A']\\rVert \\le 2\\). Cirel'son (Tsirelson), 1980. Attained by the singlet at the optimal settings, uniquely.",
"section": "Tsirelson's bound",
"slide": "Tsirelson's bound",
"keys": [
"tsirelson's bound"
]
},
{
"term_html": "quantum value",
"html": "Of a nonlocal game: the best winning probability over all quantum strategies. For the CHSH game, \\(\\frac12 + \\frac{\\sqrt2}4 = \\cos^2\\frac\\pi8 \\approx 0.8536\\), optimal by Tsirelson's bound.",
"section": "Tsirelson's bound",
"slide": "The quantum value of the game",
"keys": [
"quantum value"
]
},
{
"term_html": "classical value",
"html": "Of a nonlocal game: the best winning probability over all classical strategies, shared randomness included — attained by a deterministic one. For the CHSH game, \\(\\frac34\\).",
"section": "Tsirelson's bound",
"slide": "The quantum value of the game",
"keys": [
"classical value"
]
},
{
"term_html": "loophole",
"html": "A way a real Bell experiment can fail to make the theorem's hypotheses hold, so that a local model could fake \\(|S| &gt; 2\\).",
"section": "The experiments, and the PR box",
"slide": "Loopholes, and the hypothesis no experiment removes",
"keys": [
"loophole"
]
},
{
"term_html": "locality loophole",
"html": "The possibility that one lab's outcome is influenced by the other lab's setting, open unless the setting choices and measurements are space-like separated.",
"section": "The experiments, and the PR box",
"slide": "Loopholes, and the hypothesis no experiment removes",
"keys": [
"locality loophole"
]
},
{
"term_html": "detection loophole",
"html": "The possibility that runs without a detection are discarded selectively: a local model can decline to answer questions it would answer badly. Closed only by counting every run, which needs efficient detection.",
"section": "The experiments, and the PR box",
"slide": "Loopholes, and the hypothesis no experiment removes",
"keys": [
"detection loophole"
]
},
{
"term_html": "fair sampling",
"html": "The assumption, untestable, that the runs in which both detectors fire are a representative sample of all runs. Experiments before 2015 needed it; the loophole-free tests did not.",
"section": "The experiments, and the PR box",
"slide": "Loopholes, and the hypothesis no experiment removes",
"keys": [
"fair sampling"
]
},
{
"term_html": "PR box",
"html": "The Popescu–Rohrlich box (1994): \\(P(a, b \\mid x, y) = \\frac12\\) if \\(a \\oplus b = xy\\) and \\(0\\) otherwise. Each marginal is a fair coin whatever the other input, so it is no-signalling; its CHSH value is \\(4\\) and it wins the CHSH game always. It is neither local nor quantum.",
"section": "The experiments, and the PR box",
"slide": "Worked: a box that wins every time",
"keys": [
"pr box"
]
},
{
"term_html": "information causality",
"html": "A proposed principle (Pawłowski et al., 2009): receiving \\(m\\) classical bits never gives access to more than \\(m\\) bits of a distant party's data. It implies Tsirelson's bound for CHSH and rules out the PR box; whether some such principle singles out exactly the quantum correlations is open.",
"section": "The experiments, and the PR box",
"slide": "Three sets of correlations",
"keys": [
"information causality"
]
}
];
