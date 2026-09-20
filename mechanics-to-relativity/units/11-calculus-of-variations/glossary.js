// Generated from GLOSSARY.org by `mr glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "functional",
"html": "A map from a space of functions to \\(\\mathbb R\\), here always of the form \\(J[y] = \\int_a^b F(x, y, y')\\,\\mathrm dx\\). It eats a whole curve and returns one number.",
"section": "Functionals, and what it means to vary one",
"slide": "One question, asked of a curve",
"keys": [
"functional"
]
},
{
"term_html": "first variation",
"html": "\\(\\delta J[y;\\eta] = \\frac{\\mathrm d}{\\mathrm d\\varepsilon}J[y+\\varepsilon\\eta]\\) at \\(\\varepsilon = 0\\): the directional derivative of \\(J\\) at \\(y\\) in the direction \\(\\eta\\). Linear in \\(\\eta\\), and equal to \\(\\int(F_y\\eta + F_{y'}\\eta')\\,\\mathrm dx\\).",
"section": "Functionals, and what it means to vary one",
"slide": "One question, asked of a curve",
"keys": [
"first variation"
]
},
{
"term_html": "Euler–Lagrange equation",
"html": "\\(\\frac{\\mathrm d}{\\mathrm dx}F_{y'} = F_y\\), the differential equation every \\(C^2\\) extremal satisfies. For a \\(C^1\\) extremal the integrated form \\(F_{y'} = \\int F_y\\,\\mathrm dx + \\text{const}\\) holds. Second order, so its solutions carry two constants for two boundary conditions.",
"section": "Functionals, and what it means to vary one",
"slide": "The Euler–Lagrange equation",
"keys": [
"euler–lagrange equation"
]
},
{
"term_html": "brachistochrone",
"html": "The curve of quickest descent between two points under gravity, for a bead released from rest; Johann Bernoulli's challenge of 1696. The answer is a cycloid.",
"section": "Functionals, and what it means to vary one",
"slide": "Three problems with one shape",
"keys": [
"brachistochrone"
]
},
{
"term_html": "Snell's law",
"html": "\\(n_1\\sin\\theta_1 = n_2\\sin\\theta_2\\), angles from the normal: the condition that a ray crossing an interface takes least time. Its continuous version, \\(\\sin\\phi/v\\) constant, is the brachistochrone's first integral.",
"section": "Functionals, and what it means to vary one",
"slide": "Worked: Snell's law, from Fermat",
"keys": [
"snell's law"
]
},
{
"term_html": "admissible set",
"html": "The curves a functional is minimised over: \\(\\mathcal A = \\{y\\in C^1[a,b] : y(a) = \\alpha,\\ y(b) = \\beta\\}\\). An affine subspace, not a vector space.",
"section": "Functionals, and what it means to vary one",
"slide": "The space the unknown lives in",
"keys": [
"admissible set"
]
},
{
"term_html": "admissible variation",
"html": "A direction \\(\\eta\\) with \\(y + \\varepsilon\\eta\\) admissible for all \\(\\varepsilon\\): for fixed ends, \\(\\eta\\in C^1_0\\), vanishing at both ends.",
"section": "Functionals, and what it means to vary one",
"slide": "The space the unknown lives in",
"keys": [
"admissible variation"
]
},
{
"term_html": "Gateaux derivative",
"html": "The derivative of a map between function spaces along one direction at a time, \\(\\lim_{\\varepsilon\\to0}(J[y+\\varepsilon\\eta]-J[y])/\\varepsilon\\). Weaker than the Fréchet derivative, and all a necessary condition needs.",
"section": "Functionals, and what it means to vary one",
"slide": "The first variation is a directional derivative",
"keys": [
"gateaux derivative"
]
},
{
"term_html": "weak local minimum",
"html": "\\(J[y]\\le J[\\tilde y]\\) for all admissible \\(\\tilde y\\) close to \\(y\\) in position and slope, \\(\\lVert\\tilde y - y\\rVert_1\\) small.",
"section": "Functionals, and what it means to vary one",
"slide": "Which minimum? Two norms, two answers",
"keys": [
"weak local minimum"
]
},
{
"term_html": "strong local minimum",
"html": "The same with only closeness in position, \\(\\max\\lvert\\tilde y - y\\rvert\\) small. More competitors, so a stronger property.",
"section": "Functionals, and what it means to vary one",
"slide": "Which minimum? Two norms, two answers",
"keys": [
"strong local minimum"
]
},
{
"term_html": "stationary",
"html": "Having zero first variation in every admissible direction. Stationary action is the correct principle; \"least\" action is often false.",
"section": "Functionals, and what it means to vary one",
"slide": "Which minimum? Two norms, two answers",
"keys": [
"stationary"
]
},
{
"term_html": "extremal",
"html": "A curve on which the functional is stationary; equivalently, for \\(C^2\\) curves, a solution of the Euler–Lagrange equation. Not necessarily a minimum.",
"section": "Functionals, and what it means to vary one",
"slide": "Which minimum? Two norms, two answers",
"keys": [
"extremal"
]
},
{
"term_html": "bump function",
"html": "A function positive on a chosen interval \\((c,d)\\) and zero elsewhere, smooth enough to be a variation; here \\([(x-c)(d-x)]^3\\), which is \\(C^2\\).",
"section": "From \"for every η\" to one equation",
"slide": "The tool: a bump",
"keys": [
"bump function"
]
},
{
"term_html": "fundamental lemma",
"html": "If \\(M\\) is continuous and \\(\\int_a^b M\\eta\\,\\mathrm dx = 0\\) for every \\(\\eta\\) vanishing at the ends, then \\(M\\equiv0\\). Proved with a bump.",
"section": "From \"for every η\" to one equation",
"slide": "The fundamental lemma of the calculus of variations",
"keys": [
"fundamental lemma"
]
},
{
"term_html": "du Bois-Reymond lemma",
"html": "If \\(N\\) is continuous and \\(\\int_a^b N\\eta'\\,\\mathrm dx = 0\\) for every \\(\\eta\\in C^1_0\\), then \\(N\\) is constant. Gives the Euler–Lagrange equation for \\(C^1\\) curves without assuming \\(y''\\) exists.",
"section": "From \"for every η\" to one equation",
"slide": "The du Bois-Reymond lemma",
"keys": [
"du bois-reymond lemma"
]
},
{
"term_html": "first integral",
"html": "A quantity constant along every extremal. When \\(F\\) has no \\(y\\), \\(F_{y'}\\) is one; when it has no \\(x\\), the Beltrami quantity is one. Each lowers the order of the equation by one.",
"section": "From \"for every η\" to one equation",
"slide": "Worked: the shortest path, and what the derivation assumed",
"keys": [
"first integral"
]
},
{
"term_html": "Beltrami identity",
"html": "Along a \\(C^2\\) extremal, \\(\\frac{\\mathrm d}{\\mathrm dx}(F - y'F_{y'}) = F_x\\); so \\(F - y'F_{y'}\\) is constant when \\(F\\) does not contain \\(x\\). Its negative becomes the Hamiltonian of unit 14. The converse fails where \\(y' = 0\\).",
"section": "From \"for every η\" to one equation",
"slide": "The Beltrami identity: when \\(x\\) is absent",
"keys": [
"beltrami identity"
]
},
{
"term_html": "cycloid",
"html": "The curve \\(x = a(\\theta-\\sin\\theta)\\), \\(y = a(1-\\cos\\theta)\\) traced by a point on the rim of a circle of radius \\(a\\) rolling along a line. It solves the brachistochrone, leaving the start vertically.",
"section": "Solving it: the cycloid",
"slide": "Worked: integrating the first integral",
"keys": [
"cycloid"
]
},
{
"term_html": "tautochrone",
"html": "A curve on which a bead released from rest reaches the bottom in the same time from any starting point. The inverted cycloid is one, with time \\(\\pi\\sqrt{a/g}\\) (Huygens, 1673).",
"section": "Solving it: the cycloid",
"slide": "Checking the answer from both ends",
"keys": [
"tautochrone"
]
},
{
"term_html": "natural boundary condition",
"html": "At an end left free, an extremal must satisfy \\(F_{y'} = 0\\) there, in addition to the Euler–Lagrange equation. Nobody imposes it; the minimisation produces it.",
"section": "Constraints and free ends",
"slide": "A free end: the natural boundary condition",
"keys": [
"natural boundary condition"
]
},
{
"term_html": "isoperimetric problem",
"html": "Extremising \\(J\\) subject to an integral constraint \\(K[y] = \\ell\\). An extremal that is not an extremal of \\(K\\) satisfies the Euler–Lagrange equation of \\(F - \\lambda G\\) for a constant multiplier \\(\\lambda\\), which equals \\(\\mathrm dJ^*/\\mathrm d\\ell\\).",
"section": "Constraints and free ends",
"slide": "An integral constraint: a multiplier in function space",
"keys": [
"isoperimetric problem"
]
},
{
"term_html": "catenary",
"html": "The curve \\(y = c\\cosh(x/c)\\) (up to shifts) in which a uniform chain hangs. Its multiplier is minus the tension at the supports.",
"section": "Constraints and free ends",
"slide": "Worked: the hanging chain",
"keys": [
"catenary"
]
},
{
"term_html": "Euler–Poisson equation",
"html": "\\(F_y - (F_{y'})' + (F_{y''})'' = 0\\), the extremal condition when \\(F\\) contains \\(y''\\) and both \\(y\\) and \\(y'\\) are fixed at the ends.",
"section": "Constraints and free ends",
"slide": "Several unknowns, and higher derivatives",
"keys": [
"euler–poisson equation"
]
},
{
"term_html": "holonomic constraint",
"html": "A constraint on the position alone, holding at every instant, such as \\(G(\\mathbf q) = 0\\). Its multiplier is a function \\(\\lambda(t)\\), physically the force of constraint.",
"section": "Constraints and free ends",
"slide": "A pointwise constraint: curves on a surface",
"keys": [
"holonomic constraint"
]
},
{
"term_html": "second variation",
"html": "\\(\\delta^2J[y;\\eta] = \\frac{\\mathrm d^2}{\\mathrm d\\varepsilon^2}J[y+\\varepsilon\\eta]\\) at \\(\\varepsilon = 0\\); along a \\(C^2\\) extremal it equals \\(\\int(P\\eta'^2 + Q\\eta^2)\\,\\mathrm dx\\) with \\(P = F_{y'y'}\\) and \\(Q = F_{yy} - (F_{yy'})'\\). Non-negative at a minimum.",
"section": "Stationary is not minimal",
"slide": "The second variation",
"keys": [
"second variation"
]
},
{
"term_html": "Legendre condition",
"html": "\\(P = F_{y'y'}\\ge0\\) along a weak local minimum. Necessary, not sufficient. Proved by a squeezed bump.",
"section": "Stationary is not minimal",
"slide": "The Legendre condition",
"keys": [
"legendre condition"
]
},
{
"term_html": "accessory equation (Jacobi equation)",
"html": "\\((Ph')' = Qh\\), the Euler–Lagrange equation of the second variation. Linear in \\(h\\).",
"section": "Stationary is not minimal",
"slide": "The accessory equation and conjugate points",
"keys": [
"accessory equation (jacobi equation)",
"accessory equation",
"jacobi equation"
]
},
{
"term_html": "conjugate point (conjugate)",
"html": "A point \\(c\\) is conjugate to \\(a\\) if a non-zero solution of the accessory equation vanishes at both. Past one, an extremal is not a minimum: the antipode on a sphere, \\(\\pi\\) for \\(\\int(y'^2-y^2)\\).",
"section": "Stationary is not minimal",
"slide": "The accessory equation and conjugate points",
"keys": [
"conjugate point (conjugate)",
"conjugate point",
"conjugate"
]
},
{
"term_html": "Jacobi field",
"html": "A solution of the accessory equation, typically \\(\\partial_\\alpha y\\) for a family of extremals \\(y(x;\\alpha)\\): how an infinitesimally nearby extremal separates.",
"section": "Stationary is not minimal",
"slide": "The accessory equation and conjugate points",
"keys": [
"jacobi field"
]
},
{
"term_html": "Picone identity",
"html": "\\(P\\eta'^2 + Q\\eta^2 = P(\\eta' - \\eta u'/u)^2 + (P\\eta^2u'/u)'\\) for a solution \\(u\\) of the accessory equation; with \\(u &gt; 0\\) on the whole interval it proves the second variation positive.",
"section": "Stationary is not minimal",
"slide": "Jacobi's theorem",
"keys": [
"picone identity"
]
},
{
"term_html": "field of extremals",
"html": "A family of extremals covering a region exactly once. The cycloids through \\(A\\) form one; Weierstrass showed a field makes an extremal a strong minimum (cited).",
"section": "Stationary is not minimal",
"slide": "Worked: the cycloid has no conjugate point",
"keys": [
"field of extremals"
]
},
{
"term_html": "direct method",
"html": "Prove a minimiser exists by taking a minimising sequence, extracting a convergent subsequence, and showing the functional is lower semicontinuous along it.",
"section": "Does a minimum exist at all?",
"slide": "The direct method",
"keys": [
"direct method"
]
},
{
"term_html": "minimising sequence",
"html": "Admissible curves \\(y_n\\) with \\(J[y_n]\\to\\inf J\\). One always exists when \\(J\\) is bounded below; its limit need not.",
"section": "Does a minimum exist at all?",
"slide": "The direct method",
"keys": [
"minimising sequence"
]
},
{
"term_html": "lower semicontinuity",
"html": "\\(J[\\lim y_n]\\le\\liminf J[y_n]\\). Convexity of \\(F\\) in \\(y'\\) is what provides it.",
"section": "Does a minimum exist at all?",
"slide": "The direct method",
"keys": [
"lower semicontinuity"
]
},
{
"term_html": "Tonelli's theorem",
"html": "Continuity, convexity in \\(y'\\) and growth faster than \\(\\lvert y'\\rvert\\) guarantee a minimiser. Cited.",
"section": "Does a minimum exist at all?",
"slide": "The direct method",
"keys": [
"tonelli's theorem"
]
},
{
"term_html": "Dirichlet's principle",
"html": "The assumption, used by Riemann, that the energy \\(\\int\\lvert\\nabla u\\rvert^2\\) attains its minimum among functions with given boundary values. Weierstrass's example \\(\\int x^2y'^2\\) of 1870 showed such assumptions can fail; Hilbert repaired it in 1900.",
"section": "Does a minimum exist at all?",
"slide": "Weierstrass against Dirichlet",
"keys": [
"dirichlet's principle"
]
}
];
