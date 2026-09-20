// Generated from GLOSSARY.org by `mr glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "pseudo-Riemannian metric",
"html": "A \\((0,2)\\)-tensor field \\(g\\) that is symmetric and nondegenerate at every point, with constant signature. Riemannian if positive definite, Lorentzian if of signature \\((-,+,\\dots,+)\\).",
"section": "What a metric measures",
"slide": "The definition, with the positivity dropped",
"keys": [
"pseudo-riemannian metric"
]
},
{
"term_html": "signature",
"html": "The numbers of negative and positive eigenvalues of \\(g_{ij}\\) at a point, well defined by Sylvester's law of inertia and constant on a connected manifold. It is the only part of a metric's algebra that is physics.",
"section": "What a metric measures",
"slide": "The definition, with the positivity dropped",
"keys": [
"signature"
]
},
{
"term_html": "musical isomorphism",
"html": "The map \\(\\flat: T_pM\\to T_p^*M\\), \\(X\\mapsto g(X,\\cdot)\\), and its inverse \\(\\sharp\\). An isomorphism exactly because \\(g\\) is nondegenerate; in components it lowers and raises an index.",
"section": "What a metric measures",
"slide": "Raising and lowering is an isomorphism, not a notation",
"keys": [
"musical isomorphism"
]
},
{
"term_html": "inverse metric",
"html": "\\(g^{ij}\\), the matrix inverse of \\(g_{ij}\\). Its entries are the components of a \\((2,0)\\)-tensor — a theorem, proved from \\(\\tilde g = S^{\\mathsf T}gS\\).",
"section": "What a metric measures",
"slide": "Raising and lowering is an isomorphism, not a notation",
"keys": [
"inverse metric"
]
},
{
"term_html": "arc length",
"html": "\\(L[\\gamma] = \\int\\sqrt{g_{ij}\\dot x^i\\dot x^j}\\,\\mathrm{d}\\lambda\\) for a curve with \\(g(\\dot\\gamma,\\dot\\gamma)\\gt0\\). Unchanged by reparametrisation, which is the root of the affine-parameter subtlety.",
"section": "What a metric measures",
"slide": "Length, proper time, and the volume element",
"keys": [
"arc length"
]
},
{
"term_html": "proper time",
"html": "For a timelike curve in Lorentzian signature, \\(\\tau = c^{-1}\\int\\sqrt{-g_{\\mu\\nu}\\dot x^\\mu\\dot x^\\nu}\\,\\mathrm{d}\\lambda\\): the time an ideal clock carried along the curve records.",
"section": "What a metric measures",
"slide": "Length, proper time, and the volume element",
"keys": [
"proper time"
]
},
{
"term_html": "volume element",
"html": "\\(\\sqrt{|\\det g_{ij}|}\\,\\mathrm{d}^nx\\), the same on every chart overlap because the Jacobians cancel. Needs no orientation, unlike the volume form of unit 34.",
"section": "What a metric measures",
"slide": "Length, proper time, and the volume element",
"keys": [
"volume element"
]
},
{
"term_html": "affine connection",
"html": "A map \\((X,Y)\\mapsto\\nabla_XY\\) on vector fields, \\(C^\\infty\\)-linear in \\(X\\), \\(\\mathbb R\\)-linear in \\(Y\\), and Leibniz: \\(\\nabla_X(fY) = (Xf)Y + f\\nabla_XY\\). Tensorial in the direction slot, not in the differentiated one.",
"section": "A derivative that is a tensor",
"slide": "What a connection is",
"keys": [
"affine connection"
]
},
{
"term_html": "Christoffel symbols",
"html": "The components \\(\\Gamma^k{}_{ij}\\) defined by \\(\\nabla_{\\partial_i}\\partial_j = \\Gamma^k{}_{ij}\\partial_k\\) in a chart. Not a tensor: their transformation law has an inhomogeneous term built from second derivatives of the chart change.",
"section": "A derivative that is a tensor",
"slide": "What a connection is",
"keys": [
"christoffel symbols"
]
},
{
"term_html": "covariant derivative",
"html": "\\(\\nabla_iV^j = \\partial_iV^j + \\Gamma^j{}_{ik}V^k\\), and on a general tensor one \\(+\\Gamma\\) per upper index and one \\(-\\Gamma\\) per lower index. The inhomogeneous part of \\(\\Gamma\\) cancels that of \\(\\partial\\).",
"section": "A derivative that is a tensor",
"slide": "What a connection is",
"keys": [
"covariant derivative"
]
},
{
"term_html": "torsion",
"html": "\\(T(X,Y) = \\nabla_XY - \\nabla_YX - [X,Y]\\), a \\((1,2)\\)-tensor with components \\(\\Gamma^k{}_{ij} - \\Gamma^k{}_{ji}\\). Zero exactly when the Christoffel symbols are symmetric in their lower pair.",
"section": "A derivative that is a tensor",
"slide": "Torsion, and metric compatibility",
"keys": [
"torsion"
]
},
{
"term_html": "metric compatible",
"html": "Of a connection: \\(\\nabla g = 0\\), equivalently \\(Xg(Y,Z) = g(\\nabla_XY,Z) + g(Y,\\nabla_XZ)\\). Makes parallel transport an isometry and lets \\(\\nabla\\) commute with raising and lowering.",
"section": "A derivative that is a tensor",
"slide": "Torsion, and metric compatibility",
"keys": [
"metric compatible"
]
},
{
"term_html": "Levi-Civita connection",
"html": "The unique torsion-free metric-compatible connection of a pseudo-Riemannian manifold. Its components are \\(\\Gamma^k{}_{ij} = \\tfrac12g^{kl}(\\partial_ig_{jl}+\\partial_jg_{il}-\\partial_lg_{ij})\\).",
"section": "A derivative that is a tensor",
"slide": "The fundamental theorem, in six lines",
"keys": [
"levi-civita connection"
]
},
{
"term_html": "Koszul formula",
"html": "\\(2g(\\nabla_XY,Z) = Xg(Y,Z) + Yg(Z,X) - Zg(X,Y) + g([X,Y],Z) - g([X,Z],Y) - g([Y,Z],X)\\). Derived from the two axioms, so it proves uniqueness; read as a definition, it proves existence.",
"section": "A derivative that is a tensor",
"slide": "The fundamental theorem, in six lines",
"keys": [
"koszul formula"
]
},
{
"term_html": "covariant derivative along a curve",
"html": "\\(DV^k/\\mathrm{d}\\lambda = \\mathrm{d}V^k/\\mathrm{d}\\lambda + \\Gamma^k{}_{ij}\\dot x^iV^j\\) for a field \\(V\\) defined only along \\(\\gamma\\).",
"section": "Parallel transport, and what a gyroscope does",
"slide": "Differentiating along a curve",
"keys": [
"covariant derivative along a curve"
]
},
{
"term_html": "parallel",
"html": "Of a field along a curve: \\(DV/\\mathrm{d}\\lambda = 0\\). A linear first-order ODE, so it has a unique solution for each initial vector.",
"section": "Parallel transport, and what a gyroscope does",
"slide": "Differentiating along a curve",
"keys": [
"parallel"
]
},
{
"term_html": "parallel transport",
"html": "The linear isomorphism \\(T_{\\gamma(\\lambda_0)}M\\to T_{\\gamma(\\lambda_1)}M\\) sending an initial vector to its parallel continuation. An isometry for a metric-compatible connection.",
"section": "Parallel transport, and what a gyroscope does",
"slide": "Differentiating along a curve",
"keys": [
"parallel transport"
]
},
{
"term_html": "Fermi–Walker transport",
"html": "The transport law of a torque-free spin on an accelerated worldline, \\(DS^\\mu/\\mathrm{d}\\tau = c^{-2}(u^\\mu a_\\nu - a^\\mu u_\\nu)S^\\nu\\). Reduces to parallel transport on a geodesic.",
"section": "Parallel transport, and what a gyroscope does",
"slide": "What a gyroscope does, and why the path matters",
"keys": [
"fermi–walker transport"
]
},
{
"term_html": "holonomy",
"html": "The transport map \\(P_\\gamma\\in GL(T_pM)\\) round a loop based at \\(p\\), in general not the identity. Round the latitude \\(\\theta_0 = \\pi/3\\) of the sphere it is a rotation by \\(\\pi\\).",
"section": "Parallel transport, and what a gyroscope does",
"slide": "What a gyroscope does, and why the path matters",
"keys": [
"holonomy"
]
},
{
"term_html": "geodesic",
"html": "A curve whose tangent is parallel along itself, \\(\\nabla_{\\dot\\gamma}\\dot\\gamma = 0\\). On the sphere, the great circles.",
"section": "Geodesics, two ways",
"slide": "Straightest: the curve that transports its own tangent",
"keys": [
"geodesic"
]
},
{
"term_html": "geodesic equation",
"html": "\\(\\ddot x^k + \\Gamma^k{}_{ij}\\dot x^i\\dot x^j = 0\\). A second-order ODE, so one geodesic through each point in each direction.",
"section": "Geodesics, two ways",
"slide": "Straightest: the curve that transports its own tangent",
"keys": [
"geodesic equation"
]
},
{
"term_html": "auto-parallel",
"html": "Another name for a geodesic in the sense of \\(\\nabla_{\\dot\\gamma}\\dot\\gamma = 0\\), stressing that it is defined by the connection alone, with no mention of length.",
"section": "Geodesics, two ways",
"slide": "Straightest: the curve that transports its own tangent",
"keys": [
"auto-parallel"
]
},
{
"term_html": "affine parameter",
"html": "A parameter in which the geodesic equation holds. Unique up to \\(s = a\\lambda + b\\); in any other parameter the equation acquires a term proportional to the tangent.",
"section": "Geodesics, two ways",
"slide": "Straightest: the curve that transports its own tangent",
"keys": [
"affine parameter"
]
},
{
"term_html": "energy functional",
"html": "\\(E[\\gamma] = \\tfrac12\\int g_{ij}\\dot x^i\\dot x^j\\, \\mathrm{d}\\lambda\\). Its Euler–Lagrange equation is the geodesic equation, and unlike length it picks out the affine parametrisation.",
"section": "Geodesics, two ways",
"slide": "Shortest: the same curves, from unit 11",
"keys": [
"energy functional"
]
},
{
"term_html": "Clairaut's relation",
"html": "On a surface of revolution, \\(r\\sin\\psi\\) is constant along a geodesic. On the sphere it is the Beltrami constant of the length functional, or the momentum \\(R^2\\sin^2\\theta\\,\\dot\\varphi\\) conjugate to the absent coordinate \\(\\varphi\\).",
"section": "Geodesics, two ways",
"slide": "Worked example 4 — great circles, twice, and one curve that is not",
"keys": [
"clairaut's relation"
]
},
{
"term_html": "exponential map",
"html": "\\(\\exp_p(v) = \\gamma_v(1)\\), where \\(\\gamma_v\\) is the geodesic from \\(p\\) with initial velocity \\(v\\). Its differential at \\(0\\) is the identity, so it is a diffeomorphism near \\(0\\).",
"section": "Normal coordinates, and the equivalence principle stated exactly",
"slide": "The exponential map",
"keys": [
"exponential map"
]
},
{
"term_html": "normal coordinates",
"html": "The chart \\(\\exp_p(y^ie_i)\\mapsto(y^i)\\) for an orthonormal basis \\(e_i\\) of \\(T_pM\\). Geodesics through \\(p\\) are straight lines through the origin.",
"section": "Normal coordinates, and the equivalence principle stated exactly",
"slide": "The exponential map",
"keys": [
"normal coordinates"
]
},
{
"term_html": "local flatness theorem",
"html": "At any point there are coordinates with \\(g = \\eta\\), \\(\\partial g = 0\\) and \\(\\Gamma = 0\\) there; the second derivatives of \\(g\\) cannot in general be removed. The equivalence principle, stated as a fact about connections.",
"section": "Normal coordinates, and the equivalence principle stated exactly",
"slide": "The local flatness theorem",
"keys": [
"local flatness theorem"
]
},
{
"term_html": "geodesic postulate",
"html": "A test body under no non-gravitational force follows a timelike geodesic, affinely parametrised by proper time; light follows a null geodesic. Replaces \\(m\\ddot{\\vec x} = \\vec F\\), and turns out to follow from \\(\\nabla_\\mu T^{\\mu\\nu} = 0\\).",
"section": "Free fall is a straight line",
"slide": "The geodesic postulate, and why it is the only candidate",
"keys": [
"geodesic postulate"
]
},
{
"term_html": "minimal coupling",
"html": "Carry a special-relativistic law to curved spacetime by \\(\\eta\\to g\\), \\(\\partial\\to\\nabla\\), \\(\\mathrm{d}^4x\\to\\sqrt{-g}\\,\\mathrm{d}^4x\\). A choice, not a theorem: ambiguous in the order of derivatives and blind to curvature terms.",
"section": "Free fall is a straight line",
"slide": "Minimal coupling, and the ambiguity nobody should hide",
"keys": [
"minimal coupling"
]
},
{
"term_html": "comma-goes-to-semicolon rule",
"html": "The same prescription in the notation \\(T_{,\\mu}\\) for \\(\\partial_\\mu T\\) and \\(T_{;\\mu}\\) for \\(\\nabla_\\mu T\\).",
"section": "Free fall is a straight line",
"slide": "Minimal coupling, and the ambiguity nobody should hide",
"keys": [
"comma-goes-to-semicolon rule"
]
}
];
