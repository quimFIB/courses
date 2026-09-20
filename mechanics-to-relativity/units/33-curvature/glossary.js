// Generated from GLOSSARY.org by `mr glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "Riemann curvature tensor",
"html": "The \\((1,3)\\)-tensor field measuring the failure of covariant derivatives to commute: \\([\\nabla_\\mu,\\nabla_\\nu]V^\\rho = R^\\rho{}_{\\sigma\\mu\\nu}V^\\sigma\\). Defined invariantly as the curvature operator; the component formula in \\(\\Gamma\\) is a computation, not the definition.",
"section": "The thing no chart removes",
"slide": "What this unit is for",
"keys": [
"riemann curvature tensor"
]
},
{
"term_html": "normal coordinates",
"html": "Unit 32's chart at \\(p\\) with \\(g_{\\mu\\nu}(p) = \\eta_{\\mu\\nu}\\) and \\(\\partial_\\lambda g_{\\mu\\nu}(p) = 0\\), hence \\(\\Gamma(p) = 0\\). The second derivatives of \\(g\\) cannot also be removed: \\(100 - 80 = 20\\) of them survive in four dimensions, and those twenty are the curvature. The standard device for proving tensor identities.",
"section": "The thing no chart removes",
"slide": "Where to look for it",
"keys": [
"normal coordinates"
]
},
{
"term_html": "curvature operator",
"html": "\\(R(X,Y)Z = \\nabla_X\\nabla_YZ - \\nabla_Y\\nabla_XZ - \\nabla_{[X,Y]}Z\\). Manifestly coordinate-free; the bracket term is what makes it frame-independent, as a non-coordinate frame on the flat plane shows.",
"section": "The thing no chart removes",
"slide": "The curvature operator",
"keys": [
"curvature operator"
]
},
{
"term_html": "Lie bracket",
"html": "Unit 31's \\([X,Y]\\), the failure of two flows to commute. It appears in the curvature operator solely to subtract the part of the non-commutation that is not curvature.",
"section": "The thing no chart removes",
"slide": "The curvature operator",
"keys": [
"lie bracket"
]
},
{
"term_html": "tensoriality",
"html": "That \\(R(X,Y)Z\\) is \\(C^\\infty(M)\\)-linear in each slot, so its value at \\(p\\) depends only on \\(X_p, Y_p, Z_p\\). Proved by watching the Leibniz terms cancel in the antisymmetrised pair. \\(\\nabla_XZ\\) alone has no such property.",
"section": "The thing no chart removes",
"slide": "It is a tensor, and that is the surprise",
"keys": [
"tensoriality"
]
},
{
"term_html": "Ricci identity",
"html": "\\([\\nabla_\\mu,\\nabla_\\nu]V^\\rho = R^\\rho{}_{\\sigma\\mu\\nu}V^\\sigma\\) and \\([\\nabla_\\mu,\\nabla_\\nu]\\omega_\\rho = -R^\\sigma{}_{\\rho\\mu\\nu}\\omega_\\sigma\\); one \\(+R\\) term per upper index, one \\(-R\\) per lower. On a scalar it gives zero, because the connection is torsion-free.",
"section": "The thing no chart removes",
"slide": "Components, and the Ricci identity",
"keys": [
"ricci identity"
]
},
{
"term_html": "holonomy",
"html": "The linear map a vector undergoes on being parallel-transported once round a closed loop. For an infinitesimal coordinate parallelogram, \\(\\Delta V^\\rho = -R^\\rho{}_{\\sigma\\mu\\nu}V^\\sigma\\,\\delta a^\\mu\\delta b^\\nu\\): curvature is holonomy per unit area. Metric compatibility makes it an isometry of the tangent space.",
"section": "The thing no chart removes",
"slide": "Curvature is the holonomy of a small loop",
"keys": [
"holonomy"
]
},
{
"term_html": "flatness theorem",
"html": "\\(R = 0\\) on a simply connected open set iff parallel transport there is path-independent, iff some chart has constant \\(g_{\\mu\\nu}\\). <em>Cited</em>: Lee, <em>Introduction to Riemannian Manifolds</em> (2nd ed.), Thm 7.10. Simple connectivity is essential — the cone is the counterexample.",
"section": "The thing no chart removes",
"slide": "Curvature is the holonomy of a small loop",
"keys": [
"flatness theorem"
]
},
{
"term_html": "angle excess",
"html": "For a geodesic triangle, the sum of its angles minus \\(\\pi\\). Equal to \\(\\int K\\,\\mathrm{d}A\\), and so equal to the holonomy angle. The octant triangle has excess \\(\\pi/2\\); Gauss's survey triangle of area \\(2929\\ \\mathrm{km^2}\\) has \\(14.9''\\).",
"section": "The thing no chart removes",
"slide": "Worked example 2 — round the octant, by hand",
"keys": [
"angle excess"
]
},
{
"term_html": "Gauss–Bonnet theorem",
"html": "\\(\\int_M K\\,\\mathrm{d}A = 2\\pi\\chi(M)\\) for a closed oriented surface, with a boundary version adding the geodesic curvature. <em>Cited</em>: do Carmo, <em>Curves and Surfaces</em>, §4-5. The holonomy theorem proved in the deck is its local half.",
"section": "The thing no chart removes",
"slide": "Worked example 2 — round the octant, by hand",
"keys": [
"gauss–bonnet theorem"
]
},
{
"term_html": "Ambrose–Singer theorem",
"html": "The Lie algebra of the holonomy group is spanned by the curvature operators, transported to a base point. <em>Cited</em>: the \\(n\\)-dimensional statement of \"holonomy is curvature\".",
"section": "The thing no chart removes",
"slide": "Worked example 2 — round the octant, by hand",
"keys": [
"ambrose–singer theorem"
]
},
{
"term_html": "first Bianchi identity",
"html": "\\(R_{\\rho[\\sigma\\mu\\nu]} = 0\\), equivalently \\(R_{\\rho\\sigma\\mu\\nu}+R_{\\rho\\mu\\nu\\sigma}+R_{\\rho\\nu\\sigma\\mu}=0\\). Proved in three lines in normal coordinates; it needs torsion-freeness and nothing else.",
"section": "How many numbers is that?",
"slide": "Four symmetries",
"keys": [
"first bianchi identity"
]
},
{
"term_html": "pair symmetry",
"html": "\\(R_{\\rho\\sigma\\mu\\nu} = R_{\\mu\\nu\\rho\\sigma}\\). A <em>consequence</em> of the other three symmetries, not an axiom — four copies of the first Bianchi identity, two added and two subtracted.",
"section": "How many numbers is that?",
"slide": "Pair symmetry is a consequence, not an axiom",
"keys": [
"pair symmetry"
]
},
{
"term_html": "algebraic curvature tensor",
"html": "A \\((0,4)\\)-tensor obeying S1–S4. Equivalently, a symmetric bilinear form on the space of index pairs whose totally antisymmetric part vanishes.",
"section": "How many numbers is that?",
"slide": "How many independent components",
"keys": [
"algebraic curvature tensor"
]
},
{
"term_html": "counting theorem",
"html": "An algebraic curvature tensor in \\(n\\) dimensions has \\(n^2(n^2-1)/12\\) independent components: \\(\\binom n2\\)-by-\\(\\binom n2\\) symmetric, minus \\(\\binom n4\\) for the first Bianchi identity, which given the other symmetries says exactly that the totally antisymmetric part vanishes. One at \\(n=2\\), six at \\(n=3\\), twenty at \\(n=4\\), fifty at \\(n=5\\).",
"section": "How many numbers is that?",
"slide": "How many independent components",
"keys": [
"counting theorem"
]
},
{
"term_html": "second Bianchi identity",
"html": "\\(\\nabla_{[\\lambda}R^\\rho{}_{|\\sigma|\\mu\\nu]} = 0\\), equivalently \\(\\nabla_{[\\lambda}R_{\\rho\\sigma]\\mu\\nu} = 0\\): the derivative index cycles with an antisymmetric pair. The only differential constraint curvature obeys, true for every metric. Proved in normal coordinates from the symmetry of second partial derivatives. Contracted twice it gives \\(\\nabla^\\mu G_{\\mu\\nu} = 0\\).",
"section": "How many numbers is that?",
"slide": "The second Bianchi identity",
"keys": [
"second bianchi identity"
]
},
{
"term_html": "sectional curvature",
"html": "For a plane \\(\\Pi\\) spanned by \\(X, Y\\) in \\(T_pM\\), \\(K(\\Pi) = R_{\\rho\\sigma\\mu\\nu}X^\\rho Y^\\sigma X^\\mu Y^\\nu\\) divided by the Gram determinant \\(|X|^2|Y|^2 - \\langle X,Y\\rangle^2\\). Independent of the basis chosen for \\(\\Pi\\); the collection over all planes determines \\(R\\). Curvature is indexed by planes, never by directions.",
"section": "Curvature belongs to the space",
"slide": "Sectional curvature: one number per plane",
"keys": [
"sectional curvature"
]
},
{
"term_html": "constant curvature",
"html": "\\(K(\\Pi)\\) the same for every plane at every point, so \\(R_{\\rho\\sigma\\mu\\nu} = K(g_{\\rho\\mu}g_{\\sigma\\nu}-g_{\\rho\\nu}g_{\\sigma\\mu})\\) — the only tensor with S1–S4 built from \\(g\\) alone. Sphere, hyperbolic space, flat space; needed again for unit 39's cosmology.",
"section": "Curvature belongs to the space",
"slide": "Sectional curvature: one number per plane",
"keys": [
"constant curvature"
]
},
{
"term_html": "Gaussian curvature",
"html": "On a surface, the single sectional curvature \\(K = R_{1212}/\\det g\\). The whole curvature of a 2-manifold, one function. \\(1/a^2\\) on \\(S^2_a\\), \\(-1/a^2\\) on the hyperbolic plane of radius \\(a\\), \\(0\\) on the cylinder and the cone.",
"section": "Curvature belongs to the space",
"slide": "In two dimensions there is only one plane",
"keys": [
"gaussian curvature"
]
},
{
"term_html": "conformal factor",
"html": "The \\(e^{2\\varphi}\\) in \\(g = e^{2\\varphi}(\\mathrm{d}x^2 + \\mathrm{d}y^2)\\). Then \\(K = -e^{-2\\varphi}\\Delta\\varphi\\) with \\(\\Delta\\) the ordinary flat Laplacian — the fastest route to \\(K\\), with no Christoffel symbols at all.",
"section": "Curvature belongs to the space",
"slide": "In two dimensions there is only one plane",
"keys": [
"conformal factor"
]
},
{
"term_html": "isothermal coordinates",
"html": "Coordinates in which a surface metric is conformally flat. Every smooth surface metric has them locally. <em>Cited</em>: Chern, <em>Proc. AMS</em> 1955. A two-dimensional fact with no higher-dimensional analogue.",
"section": "Curvature belongs to the space",
"slide": "In two dimensions there is only one plane",
"keys": [
"isothermal coordinates"
]
},
{
"term_html": "intrinsic",
"html": "Computable from the metric alone, with no reference to any surrounding space. Gaussian curvature is intrinsic — that is Gauss's <em>Theorema Egregium</em> — which is what licenses a course on spacetime, where there is no surrounding space at all.",
"section": "Curvature belongs to the space",
"slide": "Theorema Egregium",
"keys": [
"intrinsic"
]
},
{
"term_html": "Theorema Egregium",
"html": "Gauss 1827: for a surface in \\(\\mathbb R^3\\), the product of the principal curvatures equals the Gaussian curvature of the induced metric. <em>Cited</em> (do Carmo §4-3); the corollary that an isometry preserves \\(K\\) is proved in the deck in one line. Consequence: no flat map of any region of the Earth.",
"section": "Curvature belongs to the space",
"slide": "Theorema Egregium",
"keys": [
"theorema egregium"
]
},
{
"term_html": "deficit angle",
"html": "For the cone \\(\\mathrm{d}r^2 + r^2\\sin^2\\alpha\\,\\mathrm{d}\\phi^2\\), the angle \\(2\\pi(1-\\sin\\alpha)\\) missing from a circuit of the apex — \\(\\pi\\) exactly for \\(\\alpha = 30^\\circ\\). Curvature zero everywhere off the apex, holonomy nonzero: all of it is concentrated in a delta function, and this is the point mass of three-dimensional gravity.",
"section": "Curvature belongs to the space",
"slide": "Theorema Egregium",
"keys": [
"deficit angle"
]
},
{
"term_html": "deviation vector",
"html": "For a one-parameter family of geodesics \\(\\gamma(\\tau,s)\\), the field \\(\\xi = \\partial\\gamma/\\partial s\\) pointing to the neighbouring geodesic. Since \\(\\tau\\) and \\(s\\) are coordinates, \\([u,\\xi] = 0\\), and torsion-freeness gives \\(\\nabla_u\\xi = \\nabla_\\xi u\\).",
"section": "Geodesic deviation",
"slide": "A family of geodesics, and the field between them",
"keys": [
"deviation vector"
]
},
{
"term_html": "geodesic deviation equation",
"html": "\\(\\mathrm D^2\\xi^\\rho/\\mathrm{d}\\tau^2 = -R^\\rho{}_{\\sigma\\mu\\nu}u^\\sigma\\xi^\\mu u^\\nu\\). Four one-line steps from the definition of \\(R\\). No force, no \\(\\Gamma\\), no first derivative of the metric appears: the relative acceleration of two freely falling particles is curvature and nothing else.",
"section": "Geodesic deviation",
"slide": "The geodesic deviation equation",
"keys": [
"geodesic deviation equation"
]
},
{
"term_html": "Jacobi field",
"html": "A solution of the geodesic deviation equation along a fixed geodesic. The solution space has dimension \\(2n\\) by unit 01's uniqueness theorem. Two points joined by a nontrivial Jacobi field vanishing at both are <em>conjugate</em> — on \\(S^2_a\\), every pair of antipodes, which is why a great circle stops minimising once it passes the antipode of its starting point.",
"section": "Geodesic deviation",
"slide": "The geodesic deviation equation",
"keys": [
"jacobi field"
]
},
{
"term_html": "weak-field metric",
"html": "\\(g_{00} = -(1+2\\Phi/c^2)\\), \\(g_{ij} = \\delta_{ij}\\), static and slow, from unit 32. The only surviving Christoffel symbol is \\(\\Gamma^i_{00} = \\partial_i\\Phi/c^2\\), and the factor of two in \\(g_{00}\\) is fixed by demanding Newton's law, not chosen.",
"section": "Geodesic deviation",
"slide": "The Newtonian limit, set up",
"keys": [
"weak-field metric"
]
},
{
"term_html": "tidal tensor",
"html": "Unit 05's \\(T_{ij} = \\partial_i\\partial_j\\Phi\\), the Hessian of the Newtonian potential; trace \\(4\\pi G\\rho\\), eigenvalues \\((-2,1,1)GM/r^3\\) for a point mass. This unit's result: \\(R^i{}_{0j0} = \\partial_i\\partial_j\\Phi/c^2\\), so the tidal tensor <em>is</em> six components of the Riemann tensor.",
"section": "Geodesic deviation",
"slide": "Worked example 5 — Riemann is the tidal tensor",
"keys": [
"tidal tensor"
]
},
{
"term_html": "electric part of the curvature",
"html": "\\(E_{ij} = R_{i0j0}\\) relative to an observer with four-velocity \\(u\\): symmetric, six components, and the only part with a Newtonian counterpart. The magnetic part \\(R_{i0jk}\\) has none, and is what makes frame dragging (unit 40) possible.",
"section": "Geodesic deviation",
"slide": "What the identification settles",
"keys": [
"electric part of the curvature"
]
},
{
"term_html": "Ricci tensor",
"html": "\\(R_{\\sigma\\nu} = R^\\rho{}_{\\sigma\\rho\\nu}\\), the only trace of Riemann up to sign, and symmetric by pair symmetry. A small ball of dust released at rest has \\(\\ddot V/V = -R_{\\mu\\nu}u^\\mu u^\\nu\\): the trace of the deviation equation, and in the Newtonian limit unit 05's \\(\\operatorname{tr} T = 4\\pi G\\rho\\).",
"section": "The traces, and the one that is conserved",
"slide": "Ricci and the scalar curvature",
"keys": [
"ricci tensor"
]
},
{
"term_html": "scalar curvature",
"html": "\\(R = g^{\\mu\\nu}R_{\\mu\\nu}\\). Measures the deficit in the volume of a small geodesic ball: \\(\\mathrm{vol} = \\omega_n r^n(1 - Rr^2/(6(n+2)) + O(r^4))\\) — <em>cited</em>: Gray, <em>Tubes</em>, ch. 9. \\(2/a^2\\) on \\(S^2_a\\), and \\(R = 2K\\) on any surface.",
"section": "The traces, and the one that is conserved",
"slide": "Ricci and the scalar curvature",
"keys": [
"scalar curvature"
]
},
{
"term_html": "Weyl tensor",
"html": "The completely trace-free part of Riemann, \\(n \\ge 3\\); the unique such combination with S1–S4. Component count \\(n(n+1)(n+2)(n-3)/12\\): zero at \\(n=3\\), ten at \\(n=4\\). Conformally invariant (<em>cited</em>: Wald, <em>General Relativity</em>, App. D). In vacuum \\(C = R\\), so the tides of empty space — the Moon's on the ocean, unit 38's waves — are Weyl curvature.",
"section": "The traces, and the one that is conserved",
"slide": "The Weyl tensor: what the traces leave behind",
"keys": [
"weyl tensor"
]
},
{
"term_html": "conformal invariance",
"html": "\\(C^\\rho{}_{\\sigma\\mu\\nu}\\) is unchanged by \\(g \\to e^{2\\omega}g\\); and for \\(n\\ge4\\), \\(C = 0\\) on an open set iff the metric is conformally flat there (Weyl–Schouten, <em>cited</em>).",
"section": "The traces, and the one that is conserved",
"slide": "The Weyl tensor: what the traces leave behind",
"keys": [
"conformal invariance"
]
},
{
"term_html": "Einstein tensor",
"html": "\\(G_{\\mu\\nu} = R_{\\mu\\nu} - \\tfrac12 Rg_{\\mu\\nu}\\), the trace-reversed Ricci tensor. \\(\\nabla^\\mu G_{\\mu\\nu} = 0\\) <em>identically</em>, for every metric, as a consequence of the contracted second Bianchi identity — which is why unit 35's field equation can be consistent with \\(\\nabla^\\mu T_{\\mu\\nu} = 0\\) and why \\(R_{\\mu\\nu} = \\kappa T_{\\mu\\nu}\\) cannot.",
"section": "The traces, and the one that is conserved",
"slide": "The Einstein tensor is divergence-free, and nobody chose that",
"keys": [
"einstein tensor"
]
},
{
"term_html": "contracted Bianchi identity",
"html": "\\(2\\nabla^\\mu R_{\\rho\\mu} - \\nabla_\\rho R = 0\\), got by contracting the second Bianchi identity twice. An identity, not a conservation law: it holds off shell, like \\(\\nabla\\cdot\\nabla\\times = 0\\) of unit 04.",
"section": "The traces, and the one that is conserved",
"slide": "The Einstein tensor is divergence-free, and nobody chose that",
"keys": [
"contracted bianchi identity"
]
},
{
"term_html": "trace reversal",
"html": "\\(\\bar S_{\\mu\\nu} = S_{\\mu\\nu} - \\tfrac12 (g^{\\alpha\\beta} S_{\\alpha\\beta})\\,g_{\\mu\\nu}\\); in four dimensions it negates the trace and is its own inverse. \\(G\\) is the trace-reversed Ricci tensor, and unit 38's \\(\\bar h_{\\mu\\nu}\\) is the trace-reversed metric perturbation.",
"section": "The traces, and the one that is conserved",
"slide": "The Einstein tensor is divergence-free, and nobody chose that",
"keys": [
"trace reversal"
]
},
{
"term_html": "Kretschmann scalar",
"html": "\\(R_{\\rho\\sigma\\mu\\nu}R^{\\rho\\sigma\\mu\\nu}\\), a curvature invariant that does not vanish when Ricci does. Unit 36 uses it to decide which of Schwarzschild's two singularities is real.",
"section": "The traces, and the one that is conserved",
"slide": "The Einstein tensor is divergence-free, and nobody chose that",
"keys": [
"kretschmann scalar"
]
},
{
"term_html": "Ricci-flat",
"html": "\\(R_{\\mu\\nu} = 0\\). At \\(n = 3\\) this forces \\(R = 0\\) entirely, so vacuum is flat and there are no gravitational waves; at \\(n = 4\\) it leaves the ten Weyl components free, which is the whole of vacuum general relativity.",
"section": "The traces, and the one that is conserved",
"slide": "Three dimensions: Ricci is everything",
"keys": [
"ricci-flat"
]
}
];
