// Generated from GLOSSARY.org by `mr glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "vector field",
"html": "A map \\(f : U \\subseteq \\mathbb{R}^n \\to \\mathbb{R}^n\\), read as attaching a velocity to each point. An autonomous differential equation and a vector field are the same object written two ways.",
"section": "Vector fields, orbits and flows",
"slide": "An autonomous system is a vector field",
"keys": [
"vector field"
]
},
{
"term_html": "equilibrium (equilibria)",
"html": "A point with \\(f(\\mathbf x^*) = 0\\); the constant curve there is an orbit, and by uniqueness the only one through it. The first thing to compute about any system.",
"section": "Vector fields, orbits and flows",
"slide": "Linearisation: what it is, and what it claims",
"keys": [
"equilibrium (equilibria)",
"equilibrium",
"equilibria"
]
},
{
"term_html": "basin of attraction",
"html": "The set of initial conditions whose orbits converge to a given attracting set. Linearisation never produces one; a Lyapunov function with a bounded sublevel set does.",
"section": "Vector fields, orbits and flows",
"slide": "The damped pendulum stops, and we can say where from",
"keys": [
"basin of attraction"
]
},
{
"term_html": "autonomous system",
"html": "\\(\\dot{\\mathbf x} = f(\\mathbf x)\\), with no explicit \\(t\\) on the right. Autonomy is what makes a phase portrait well defined: the arrow at a point never changes.",
"section": "Vector fields, orbits and flows",
"slide": "An autonomous system is a vector field",
"keys": [
"autonomous system"
]
},
{
"term_html": "solution",
"html": "A differentiable curve with \\(\\mathbf x'(t) = f(\\mathbf x(t))\\), defined on its maximal interval (unit 01).",
"section": "Vector fields, orbits and flows",
"slide": "An autonomous system is a vector field",
"keys": [
"solution"
]
},
{
"term_html": "orbit",
"html": "The image of a solution, forgetting the parametrisation. Orbits are either disjoint or identical, so they partition the state space.",
"section": "Vector fields, orbits and flows",
"slide": "An autonomous system is a vector field",
"keys": [
"orbit"
]
},
{
"term_html": "phase portrait",
"html": "Every orbit drawn at once in the state space. It is the equation drawn, not an approximation to it.",
"section": "Vector fields, orbits and flows",
"slide": "An autonomous system is a vector field",
"keys": [
"phase portrait"
]
},
{
"term_html": "flow",
"html": "The family \\(\\varphi_t\\) sending \\(\\mathbf x_0\\) to the solution through it at time \\(t\\).",
"section": "Vector fields, orbits and flows",
"slide": "The flow is a one-parameter group",
"keys": [
"flow"
]
},
{
"term_html": "one-parameter group property",
"html": "\\(\\varphi_{t+s} = \\varphi_t \\circ \\varphi_s\\) and \\(\\varphi_0 = \\mathrm{id}\\), proved from uniqueness alone. When every solution is global this makes \\(t \\mapsto \\varphi_t\\) a homomorphism \\((\\mathbb{R},+) \\to \\mathrm{Homeo}(U)\\).",
"section": "Vector fields, orbits and flows",
"slide": "The flow is a one-parameter group",
"keys": [
"one-parameter group property"
]
},
{
"term_html": "local flow",
"html": "What is left of the flow when solutions blow up in finite time: \\(\\varphi_t\\) defined only on part of \\(U\\), and no group.",
"section": "Vector fields, orbits and flows",
"slide": "The flow is a one-parameter group",
"keys": [
"local flow"
]
},
{
"term_html": "first integral",
"html": "A non-constant \\(E\\) that is constant along every solution. In the plane its level curves <em>are</em> the phase portrait.",
"section": "Vector fields, orbits and flows",
"slide": "Two flows with extra structure",
"keys": [
"first integral"
]
},
{
"term_html": "gradient system",
"html": "\\(\\dot x_i = -\\partial V/\\partial x_i\\). Then \\(\\dot V = -\\sum_i (\\partial_i V)^2 \\le 0\\), so no periodic orbit can exist. A flow with \\(\\dot V \\le 0\\) but no such potential is called <em>gradient-like</em>, and the damped pendulum is one.",
"section": "Vector fields, orbits and flows",
"slide": "Two flows with extra structure",
"keys": [
"gradient system"
]
},
{
"term_html": "differentiable",
"html": "\\(f\\) is differentiable at \\(\\mathbf a\\) if some linear map \\(A\\) has \\(f(\\mathbf a + \\mathbf h) = f(\\mathbf a) + A\\mathbf h + o(|\\mathbf h|)\\). The map is the definition; the array of partial derivatives is its matrix.",
"section": "Equilibria and linearisation",
"slide": "The derivative of a map, in one slide",
"keys": [
"differentiable"
]
},
{
"term_html": "Jacobian matrix",
"html": "The matrix \\((\\partial f_i/\\partial x_j)\\) of \\(Df(\\mathbf a)\\) in the standard bases — a theorem about the derivative, not its definition. Continuous partials imply differentiability; the converse of that is proved in unit 03.",
"section": "Equilibria and linearisation",
"slide": "The derivative of a map, in one slide",
"keys": [
"jacobian matrix"
]
},
{
"term_html": "linearisation",
"html": "The linear system \\(\\dot{\\boldsymbol\\xi} = Df(\\mathbf x^*)\\boldsymbol\\xi\\) obtained by discarding the \\(o(|\\boldsymbol\\xi|)\\) remainder at an equilibrium. Discarding it is an assumption, licensed only by hyperbolicity.",
"section": "Equilibria and linearisation",
"slide": "Linearisation: what it is, and what it claims",
"keys": [
"linearisation"
]
},
{
"term_html": "hyperbolic",
"html": "Of an equilibrium: no eigenvalue of \\(Df(\\mathbf x^*)\\) has zero real part. Exactly the hypothesis of Hartman–Grobman, and exactly what fails on the two lines \\(\\Delta = 0\\) and \\(\\tau = 0\\).",
"section": "Equilibria and linearisation",
"slide": "Hartman–Grobman, and the hole in it",
"keys": [
"hyperbolic"
]
},
{
"term_html": "trace–determinant plane",
"html": "The classification of real \\(2\\times2\\) systems by \\(\\tau = \\operatorname{tr}A\\) and \\(\\Delta = \\det A\\), since \\(\\lambda^2 - \\tau\\lambda + \\Delta = 0\\). Stability is \\(\\tau &lt; 0\\) <em>and</em> \\(\\Delta &gt; 0\\).",
"section": "Equilibria and linearisation",
"slide": "Planar linear systems: two numbers decide",
"keys": [
"trace–determinant plane"
]
},
{
"term_html": "saddle",
"html": "\\(\\Delta &lt; 0\\): real eigenvalues of opposite sign, one direction in and one out. Index \\(-1\\).",
"section": "Equilibria and linearisation",
"slide": "Planar linear systems: two numbers decide",
"keys": [
"saddle"
]
},
{
"term_html": "node",
"html": "\\(\\Delta &gt; 0\\), \\(\\tau^2 &gt; 4\\Delta\\): real eigenvalues of the same sign, orbits entering or leaving along eigendirections.",
"section": "Equilibria and linearisation",
"slide": "Planar linear systems: two numbers decide",
"keys": [
"node"
]
},
{
"term_html": "spiral",
"html": "\\(\\tau^2 &lt; 4\\Delta\\): complex eigenvalues \\(\\alpha \\pm i\\beta\\), the radius going as \\(e^{\\alpha t}\\) and the angle at rate \\(\\beta\\).",
"section": "Equilibria and linearisation",
"slide": "Planar linear systems: two numbers decide",
"keys": [
"spiral"
]
},
{
"term_html": "centre",
"html": "\\(\\tau = 0 &lt; \\Delta\\): purely imaginary eigenvalues, closed orbits in the linear system — and no information whatever about the nonlinear one.",
"section": "Equilibria and linearisation",
"slide": "Planar linear systems: two numbers decide",
"keys": [
"centre"
]
},
{
"term_html": "star node",
"html": "The case \\(A = \\lambda I\\): every ray is an orbit.",
"section": "Equilibria and linearisation",
"slide": "Solving \\(\\dot\\xi = A\\xi\\), all three cases",
"keys": [
"star node"
]
},
{
"term_html": "degenerate node",
"html": "A repeated eigenvalue with only one eigendirection; the solution picks up a factor \\(t\\), from the \\(2\\times2\\) Jordan form.",
"section": "Equilibria and linearisation",
"slide": "Solving \\(\\dot\\xi = A\\xi\\), all three cases",
"keys": [
"degenerate node"
]
},
{
"term_html": "topological conjugacy",
"html": "A homeomorphism carrying orbits of one flow onto orbits of another and preserving time. What Hartman–Grobman provides at a hyperbolic equilibrium — continuous only, so rates are not preserved.",
"section": "Equilibria and linearisation",
"slide": "Hartman–Grobman, and the hole in it",
"keys": [
"topological conjugacy"
]
},
{
"term_html": "stable",
"html": "For every \\(\\varepsilon\\) there is \\(\\delta\\) such that orbits starting within \\(\\delta\\) stay within \\(\\varepsilon\\), for all \\(t \\ge 0\\).",
"section": "Lyapunov's direct method",
"slide": "Stability, defined",
"keys": [
"stable"
]
},
{
"term_html": "asymptotically stable",
"html": "Stable, <em>and</em> nearby orbits converge to the equilibrium. Attraction alone does not imply stability: both halves are needed.",
"section": "Lyapunov's direct method",
"slide": "Stability, defined",
"keys": [
"asymptotically stable"
]
},
{
"term_html": "unstable",
"html": "Not stable. Note this is a statement about arbitrarily small neighbourhoods, not about how fast anything grows.",
"section": "Lyapunov's direct method",
"slide": "Stability, defined",
"keys": [
"unstable"
]
},
{
"term_html": "orbital derivative",
"html": "\\(\\dot V(\\mathbf x) = \\sum_i \\partial_i V(\\mathbf x)\\, f_i(\\mathbf x)\\), the rate of change of \\(V\\) along whichever orbit passes through \\(\\mathbf x\\). It is a function of position alone, so it is computable without solving anything — the \"direct\" in Lyapunov's direct method.",
"section": "Lyapunov's direct method",
"slide": "Differentiating along a solution",
"keys": [
"orbital derivative"
]
},
{
"term_html": "Lyapunov function",
"html": "\\(V\\) positive definite at an equilibrium with \\(\\dot V \\le 0\\) nearby: proves stability, and asymptotic stability when \\(\\dot V &lt; 0\\) off the equilibrium. There is no algorithm for finding one; in mechanics the energy is the standing first guess.",
"section": "Lyapunov's direct method",
"slide": "Lyapunov's theorem",
"keys": [
"lyapunov function"
]
},
{
"term_html": "omega-limit set",
"html": "\\(\\omega(\\mathbf x_0)\\), the set of limits of \\(\\varphi_{t_n}(\\mathbf x_0)\\) along sequences \\(t_n \\to \\infty\\). For a forward orbit with compact closure it is non-empty, compact, connected and invariant, and the orbit approaches it.",
"section": "Lyapunov's direct method",
"slide": "Where orbits end up: \\(\\omega\\)-limit sets",
"keys": [
"omega-limit set"
]
},
{
"term_html": "invariant",
"html": "\\(\\varphi_t(S) = S\\) for all \\(t\\). Forward invariance is the same with \\(\\subseteq\\) and \\(t \\ge 0\\).",
"section": "Lyapunov's direct method",
"slide": "Where orbits end up: \\(\\omega\\)-limit sets",
"keys": [
"invariant"
]
},
{
"term_html": "forward invariant",
"html": "\\(\\varphi_t(S) \\subseteq S\\) for \\(t \\ge 0\\): once in, never out. A bounded sublevel set \\(\\{V \\le c\\}\\) of a Lyapunov function is the standard example.",
"section": "Lyapunov's direct method",
"slide": "Where orbits end up: \\(\\omega\\)-limit sets",
"keys": [
"forward invariant"
]
},
{
"term_html": "LaSalle's invariance principle",
"html": "On a compact forward invariant \\(\\Omega\\) with \\(\\dot V \\le 0\\), every orbit approaches the largest invariant subset of \\(\\{\\dot V = 0\\}\\). It replaces Lyapunov's \"\\(\\dot V &lt; 0\\) everywhere\", which damping never satisfies, by \"nothing can stay where \\(\\dot V = 0\\)\".",
"section": "Lyapunov's direct method",
"slide": "LaSalle's invariance principle",
"keys": [
"lasalle's invariance principle"
]
},
{
"term_html": "periodic orbit",
"html": "A non-equilibrium orbit with \\(\\varphi_T(\\mathbf x_0) = \\mathbf x_0\\); the least such \\(T\\) is the period. Returning once means returning forever, by the group property.",
"section": "Periodic orbits",
"slide": "Periodic orbits and limit cycles",
"keys": [
"periodic orbit"
]
},
{
"term_html": "limit cycle",
"html": "A periodic orbit that is the \\(\\omega\\)-limit set of some orbit off it — isolated, hence attracting or repelling. Its amplitude belongs to the equations, not to the initial data. A conservative system has none.",
"section": "Periodic orbits",
"slide": "Periodic orbits and limit cycles",
"keys": [
"limit cycle"
]
},
{
"term_html": "trapping region",
"html": "A compact set whose boundary the field crosses inwards, so no orbit leaves. With no equilibrium inside, Poincaré–Bendixson turns it into an existence proof for a cycle.",
"section": "Periodic orbits",
"slide": "Poincaré–Bendixson",
"keys": [
"trapping region"
]
},
{
"term_html": "Poincaré–Bendixson theorem",
"html": "In the <em>plane</em>: a forward orbit confined to a compact set free of equilibria has a periodic orbit as its \\(\\omega\\)-limit set. Its engine is the Jordan curve theorem, so it is false in three dimensions.",
"section": "Periodic orbits",
"slide": "Poincaré–Bendixson",
"keys": [
"poincaré–bendixson theorem"
]
},
{
"term_html": "Bendixson–Dulac criterion",
"html": "If \\(\\partial_x f_1 + \\partial_y f_2\\) has one strict sign on a simply connected region, that region holds no periodic orbit. Proved by Green's theorem in unit 05. On the cylinder it rules out only the contractible cycles.",
"section": "Periodic orbits",
"slide": "Ruling cycles out",
"keys": [
"bendixson–dulac criterion"
]
},
{
"term_html": "index",
"html": "Of a closed curve on which \\(f \\ne 0\\): the net number of turns the field makes along it, \\((\\vartheta(1)-\\vartheta(0))/2\\pi \\in \\mathbb{Z}\\). Invariant under any homotopy that avoids the zeros of \\(f\\).",
"section": "The index of a vector field",
"slide": "The index of a closed curve",
"keys": [
"index"
]
},
{
"term_html": "index of an equilibrium",
"html": "The index of a small circle around it. Equal to \\(\\operatorname{sign}\\det Df\\) when that is nonzero: \\(+1\\) for nodes, spirals, stars and centres, \\(-1\\) for saddles.",
"section": "The index of a vector field",
"slide": "Indices of equilibria, and what they count",
"keys": [
"index of an equilibrium"
]
},
{
"term_html": "Poincaré index theorem",
"html": "The index of a curve bounding a disc is the sum of the indices of the equilibria inside. With the Umlaufsatz — a periodic orbit has index \\(+1\\) — it gives three non-existence results for cycles at the cost of two determinants.",
"section": "The index of a vector field",
"slide": "Indices of equilibria, and what they count",
"keys": [
"poincaré index theorem"
]
},
{
"term_html": "bifurcation",
"html": "A parameter value at which the phase portrait stops being topologically equivalent to its neighbours. By Hartman–Grobman these can only occur where hyperbolicity fails.",
"section": "Bifurcations",
"slide": "Families, and where the portrait breaks",
"keys": [
"bifurcation"
]
},
{
"term_html": "saddle-node bifurcation",
"html": "Normal form \\(\\dot x = \\mu - x^2\\): two equilibria for \\(\\mu &gt; 0\\), none for \\(\\mu &lt; 0\\), colliding at \\(\\mu = 0\\). In the plane a \\(+1\\) and a \\(-1\\) annihilate, conserving the total index.",
"section": "Bifurcations",
"slide": "Families, and where the portrait breaks",
"keys": [
"saddle-node bifurcation"
]
},
{
"term_html": "transcritical bifurcation",
"html": "Normal form \\(\\dot x = \\mu x - x^2\\): two branches that cross and exchange stability, creating and destroying nothing. Needs a branch that persists for all \\(\\mu\\).",
"section": "Bifurcations",
"slide": "Transcritical and pitchfork",
"keys": [
"transcritical bifurcation"
]
},
{
"term_html": "pitchfork bifurcation",
"html": "Normal form \\(\\dot x = \\mu x \\mp x^3\\): a symmetric pair of branches appears. <em>Supercritical</em> (\\(-x^3\\)) they are stable and the transition is soft; <em>subcritical</em> (\\(+x^3\\)) they are unstable and the system jumps. Needs a symmetry \\(f(-x) = -f(x)\\).",
"section": "Bifurcations",
"slide": "Transcritical and pitchfork",
"keys": [
"pitchfork bifurcation"
]
},
{
"term_html": "Hopf bifurcation",
"html": "A pair of eigenvalues crosses the imaginary axis and a limit cycle of amplitude \\(\\propto\\sqrt{|\\mu|}\\) is born. Normal form \\(\\dot r = \\mu r - r^3\\), \\(\\dot\\theta = \\omega_0\\). The first genuinely two-dimensional bifurcation.",
"section": "Bifurcations",
"slide": "Hopf: an equilibrium trades stability for a cycle",
"keys": [
"hopf bifurcation"
]
},
{
"term_html": "Picard–Lindelöf",
"html": "Local existence and uniqueness for \\(\\dot{\\mathbf y} = f(\\mathbf y, t)\\) with \\(f\\) locally Lipschitz in \\(\\mathbf y\\). Every \"by uniqueness\" in this unit is this theorem.",
"section": "Carried in from units 00 and 01",
"slide": "",
"keys": [
"picard–lindelöf"
]
},
{
"term_html": "continuous dependence",
"html": "The flow map depends continuously on the initial point, with Gronwall's bound \\(|\\varphi_t(x) - \\varphi_t(y)| \\le e^{Lt}|x-y|\\). It is what makes \\(\\omega\\)-limit sets invariant.",
"section": "Carried in from units 00 and 01",
"slide": "",
"keys": [
"continuous dependence"
]
},
{
"term_html": "quadrature",
"html": "Unit 00's reduction of \\(\\ddot x = F(x)\\) to an integral by multiplying through by \\(\\dot x\\). It is exactly what damping destroys, which is why this unit exists.",
"section": "Carried in from units 00 and 01",
"slide": "",
"keys": [
"quadrature"
]
}
];
