// Generated from GLOSSARY.org by `mr glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "determinism",
"html": "The assertion that a law \\(\\dot y = f(y,t)\\) together with a state \\(y_0\\) at time \\(t_0\\) admits <strong>exactly one</strong> solution. Three separable claims: existence, uniqueness, and existence for all time.",
"section": "The claim, and phase space",
"slide": "Laplace, made precise",
"keys": [
"determinism"
]
},
{
"term_html": "initial value problem (IVP)",
"html": "The pair (equation, initial state) whose solutions determinism is a claim about: \\(\\dot y = f(y,t)\\), \\(y(t_0) = y_0\\).",
"section": "The claim, and phase space",
"slide": "Laplace, made precise",
"keys": [
"initial value problem (ivp)",
"initial value problem",
"ivp"
]
},
{
"term_html": "state",
"html": "The finitely many numbers whose present values, with the law, fix the future. For a mechanical system it is the pair \\(y = (x, \\dot x)\\), never the position alone.",
"section": "The claim, and phase space",
"slide": "The state is a point of phase space",
"keys": [
"state"
]
},
{
"term_html": "phase space",
"html": "The space \\(\\mathbb{R}^{2n}\\) of states of a system with configuration space \\(\\mathbb{R}^n\\). What a law of motion propagates is a point of phase space, not a point of space.",
"section": "The claim, and phase space",
"slide": "The state is a point of phase space",
"keys": [
"phase space"
]
},
{
"term_html": "phase-space reduction",
"html": "The theorem that \\(m\\ddot x = F(x,\\dot x,t)\\) on \\(\\mathbb{R}^n\\) is equivalent to the first-order system \\(\\dot y = f(y,t)\\) on \\(\\mathbb{R}^{2n}\\) with \\(f((x,v),t) = (v, F(x,v,t)/m)\\). Every theorem of this unit is therefore about first-order systems only.",
"section": "The claim, and phase space",
"slide": "Every Newtonian law is a first-order system",
"keys": [
"phase-space reduction"
]
},
{
"term_html": "first-order system",
"html": "\\(\\dot y = f(y,t)\\) with \\(y\\) taking values in \\(\\mathbb{R}^N\\) and \\(f\\) defined on an open \\(\\Omega \\subseteq \\mathbb{R}^N \\times \\mathbb{R}\\). Autonomous when \\(f\\) does not depend on \\(t\\).",
"section": "The claim, and phase space",
"slide": "Every Newtonian law is a first-order system",
"keys": [
"first-order system"
]
},
{
"term_html": "Norton's dome",
"html": "The frictionless surface of revolution \\(h(r) = -\\frac{2k}{3g} r^{3/2}\\), with \\(r\\) the arc length from the apex down a meridian. Tangential Newton gives \\(\\ddot r = k \\sqrt r\\); the surface exists only for \\(r \\le g^2/k^2\\), which is 96.17 m when \\(k = 1\\,\\mathrm{m^{1/2}s^{-2}}\\).",
"section": "The claim, and phase space",
"slide": "Norton's dome: the surface, and its equation",
"keys": [
"norton's dome"
]
},
{
"term_html": "Picard integral equation",
"html": "\\(y(t) = y_0 + \\int_{t_0}^t f(y(s),s)\\,\\mathrm{d}s\\), equivalent to the initial value problem for continuous \\(y\\), and the form in which the problem is solved. It absorbs the initial condition and asks only for continuity of the candidate.",
"section": "Existence, and exactly one of them",
"slide": "Step one: turn the ODE into an integral equation",
"keys": [
"picard integral equation"
]
},
{
"term_html": "Lipschitz in \\(y\\), Lipschitz condition",
"html": "\\(\\|f(y,t) - f(z,t)\\| \\le L\\|y-z\\|\\) for all \\((y,t), (z,t)\\) in a set, with one constant \\(L\\). Compared at the same instant; no regularity in \\(t\\) is asked for. The one hypothesis this unit is about.",
"section": "Existence, and exactly one of them",
"slide": "The Lipschitz condition",
"keys": [
"lipschitz in y, lipschitz condition",
"lipschitz in y",
"lipschitz condition"
]
},
{
"term_html": "locally Lipschitz",
"html": "Lipschitz in \\(y\\) on a neighbourhood of every point of the domain, with a constant that may vary from place to place but is finite everywhere. Enough for Picard–Lindelöf, since a compact set then carries a single constant.",
"section": "Existence, and exactly one of them",
"slide": "The Lipschitz condition",
"keys": [
"locally lipschitz"
]
},
{
"term_html": "Hölder continuous, Hölder continuity",
"html": "\\(|g(a)-g(b)| \\le C|a-b|^\\alpha\\) for some \\(\\alpha \\in (0,1]\\). The square root is Hölder with \\(\\alpha = 1/2\\) and Lipschitz with none: \\(\\alpha = 1\\) is the Lipschitz case, and everything below it is on the wrong side of Osgood's line.",
"section": "Existence, and exactly one of them",
"slide": "The Lipschitz condition",
"keys": [
"hölder continuous, hölder continuity",
"hölder continuous",
"hölder continuity"
]
},
{
"term_html": "contraction",
"html": "A map \\(P\\) of a metric space to itself with \\(d(Pu,Pw) \\le q\\, d(u,w)\\) for a fixed \\(q &lt; 1\\). Strict decrease of distances is <strong>not</strong> enough.",
"section": "Existence, and exactly one of them",
"slide": "The contraction mapping principle",
"keys": [
"contraction"
]
},
{
"term_html": "Banach fixed-point theorem",
"html": "A contraction of a non-empty complete metric space has exactly one fixed point, the iterates \\(u_{n+1} = Pu_n\\) converge to it from any start, and \\(d(u_n, u^\\ast) \\le \\frac{q^n}{1-q} d(u_1,u_0)\\). Constructive: it names the sequence and bounds the error.",
"section": "Existence, and exactly one of them",
"slide": "The contraction mapping principle",
"keys": [
"banach fixed-point theorem"
]
},
{
"term_html": "sup norm (uniform norm)",
"html": "\\(\\|y\\|_\\infty = \\sup_{t \\in J}\\|y(t)\\|\\) on \\(C(J,\\mathbb{R}^N)\\), which is complete in it — the reason the problem was moved to continuous functions.",
"section": "Existence, and exactly one of them",
"slide": "The space the contraction acts on",
"keys": [
"sup norm (uniform norm)",
"sup norm",
"uniform norm"
]
},
{
"term_html": "weighted sup norm (Bielecki norm)",
"html": "\\(\\|y\\|_\\lambda = \\sup_{t \\in J} e^{-\\lambda|t-t_0|}\\|y(t)\\|\\). Equivalent to the sup norm on a compact \\(J\\), so completeness transfers, and it makes the Picard operator a contraction with factor \\(L/\\lambda\\) for any \\(L\\) — which is what keeps the existence interval from shrinking as the force stiffens.",
"section": "Existence, and exactly one of them",
"slide": "The space the contraction acts on",
"keys": [
"weighted sup norm (bielecki norm)",
"weighted sup norm",
"bielecki norm"
]
},
{
"term_html": "compact cylinder",
"html": "\\(\\mathcal{C} = \\{(y,t) : \\|y-y_0\\| \\le b,\\ |t-t_0| \\le c\\} \\subseteq \\Omega\\), on which \\(f\\) is bounded by \\(M\\) and Lipschitz with constant \\(L\\). Its shape alone fixes the guaranteed interval, \\(a = \\min(c, b/M)\\).",
"section": "Existence, and exactly one of them",
"slide": "Picard–Lindelöf",
"keys": [
"compact cylinder"
]
},
{
"term_html": "Picard–Lindelöf (the Cauchy–Lipschitz theorem)",
"html": "If \\(f\\) is continuous and locally Lipschitz in \\(y\\) on an open \\(\\Omega\\), every initial value problem in \\(\\Omega\\) has exactly one solution on \\([t_0-a, t_0+a]\\) with \\(a = \\min(c, b/M)\\). The course's licence to write <em>the</em> solution.",
"section": "Existence, and exactly one of them",
"slide": "Picard–Lindelöf",
"keys": [
"picard–lindelöf (the cauchy–lipschitz theorem)",
"picard–lindelöf",
"the cauchy–lipschitz theorem"
]
},
{
"term_html": "Picard operator",
"html": "\\((Py)(t) = y_0 + \\int_{t_0}^t f(y(s),s)\\,\\mathrm{d}s\\), acting on the tube \\(X = \\{y \\in C(J,\\mathbb{R}^N) : \\|y(t)-y_0\\| \\le b\\}\\). Solutions are exactly its fixed points.",
"section": "Existence, and exactly one of them",
"slide": "Proof, part 1: the operator maps the tube into itself",
"keys": [
"picard operator"
]
},
{
"term_html": "Picard iteration",
"html": "The sequence \\(y^{(n+1)} = P y^{(n)}\\) from any starting curve, usually the constant \\(y_0\\). For \\(\\ddot x = -x\\) it produces the Taylor partial sums of \\(\\cos\\) and \\(-\\sin\\).",
"section": "Existence, and exactly one of them",
"slide": "Picard's iteration, run",
"keys": [
"picard iteration"
]
},
{
"term_html": "Peano existence theorem",
"html": "Continuity of \\(f\\) alone gives <strong>at least one</strong> solution through every point. Cited, not proved here: it needs Arzelà–Ascoli. So a continuous force law never lacks a trajectory — it may only have too many.",
"section": "Where the hypothesis fails",
"slide": "Continuity alone: Peano, and the sharp line",
"keys": [
"peano existence theorem"
]
},
{
"term_html": "Osgood's criterion",
"html": "Uniqueness already follows from \\(\\|f(y,t)-f(z,t)\\| \\le \\omega(\\|y-z\\|)\\) with \\(\\int_{0^+}\\mathrm{d}u/\\omega(u) = \\infty\\). Lipschitz is \\(\\omega(u) = Lu\\); the dome has \\(\\omega(u) \\sim k\\sqrt u\\), whose integral converges. The sharp line the dome is on the far side of.",
"section": "Where the hypothesis fails",
"slide": "Continuity alone: Peano, and the sharp line",
"keys": [
"osgood's criterion"
]
},
{
"term_html": "Grönwall's inequality",
"html": "If \\(u \\ge 0\\) is continuous and \\(u(t) \\le A + L\\int_{t_0}^t u\\), then \\(u(t) \\le A e^{L(t-t_0)}\\). Turns an implicit bound into an explicit one; with \\(A = 0\\) it is a one-line uniqueness proof.",
"section": "How far the guarantee reaches",
"slide": "Grönwall's inequality",
"keys": [
"grönwall's inequality"
]
},
{
"term_html": "continuous dependence, continuous dependence on initial data",
"html": "\\(\\|y(t)-z(t)\\| \\le \\|y(t_0)-z(t_0)\\|e^{L(t-t_0)}\\) for two solutions of the same \\(L\\)-Lipschitz equation. The third of Hadamard's conditions for a well-posed problem, and a worst case over all equations with that \\(L\\), not a prediction for one of them.",
"section": "How far the guarantee reaches",
"slide": "Continuous dependence on the initial state",
"keys": [
"continuous dependence, continuous dependence on initial data",
"continuous dependence",
"continuous dependence on initial data"
]
},
{
"term_html": "maximal interval of existence",
"html": "The open interval \\((T_-,T_+)\\) on which the unique solution through a point lives and which extends every other solution. Open, because a solution reaching an interior point of \\(\\Omega\\) could be continued.",
"section": "How far the guarantee reaches",
"slide": "The maximal interval of existence",
"keys": [
"maximal interval of existence"
]
},
{
"term_html": "leaves every compact subset, escape lemma",
"html": "If \\(T_+ &lt; \\infty\\) the solution leaves every compact \\(K \\subseteq \\Omega\\) before \\(T_+\\). So a solution can end only by going to infinity or by reaching the boundary of \\(\\Omega\\); it cannot merely stop.",
"section": "How far the guarantee reaches",
"slide": "The maximal interval of existence",
"keys": [
"leaves every compact subset, escape lemma",
"leaves every compact subset",
"escape lemma"
]
},
{
"term_html": "blow-up in finite time",
"html": "The first mode of the escape lemma, \\(\\|y(t)\\| \\to \\infty\\) as \\(t \\to T_+ &lt; \\infty\\). Happens for perfectly smooth right-hand sides: \\(\\dot x = x^2\\) with \\(x(0) = x_0 &gt; 0\\) ends at \\(t = 1/x_0\\).",
"section": "How far the guarantee reaches",
"slide": "Two solutions that end",
"keys": [
"blow-up in finite time"
]
},
{
"term_html": "global existence",
"html": "Every solution lives on all of \\(\\mathbb{R}\\). Guaranteed by linear growth, \\(\\|f(y,t)\\| \\le C(1+\\|y\\|)\\) on each finite strip of time — which the pendulum satisfies, so the pendulum is deterministic as a theorem.",
"section": "How far the guarantee reaches",
"slide": "When does a solution live forever?",
"keys": [
"global existence"
]
}
];
