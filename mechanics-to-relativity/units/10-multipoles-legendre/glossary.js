// Generated from GLOSSARY.org by `mr glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "generating function",
"html": "\\(g(x,t) = (1-2xt+t^2)^{-1/2}\\) for \\(x\\in[-1,1]\\), \\(|t|&lt;1\\). It is \\(r/|\\vec r - \\vec r\\,{}'|\\) with \\(x = \\cos\\psi\\) and \\(t = r'/r\\), which is why it matters.",
"section": "The generating function",
"slide": "The definition, and that it is legitimate",
"keys": [
"generating function"
]
},
{
"term_html": "Legendre polynomials",
"html": "The Taylor coefficients \\(P_n(x)\\) of the generating function in \\(t\\): \\(g = \\sum_n P_n(x)t^n\\). \\(P_n\\) has degree exactly \\(n\\), the parity of \\(n\\), \\(P_n(1) = 1\\) and \\(|P_n| \\le 1\\) on \\([-1,1]\\).",
"section": "The generating function",
"slide": "The definition, and that it is legitimate",
"keys": [
"legendre polynomials"
]
},
{
"term_html": "Bonnet's recurrence",
"html": "\\((n+1)P_{n+1} = (2n+1)xP_n - nP_{n-1}\\), read off from \\((1-2xt+t^2)\\partial_tg = (x-t)g\\). Generates every \\(P_n\\) from \\(P_0 = 1\\), \\(P_1 = x\\).",
"section": "The generating function",
"slide": "Everything from one derivative",
"keys": [
"bonnet's recurrence"
]
},
{
"term_html": "Legendre's equation",
"html": "\\([(1-x^2)y']' + n(n+1)y = 0\\). \\(P_n\\) solves it and is its only polynomial solution up to a scalar; the second solution \\(Q_n\\) is logarithmically singular at \\(x = \\pm1\\).",
"section": "The generating function",
"slide": "Legendre's equation",
"keys": [
"legendre's equation"
]
},
{
"term_html": "Sturm–Liouville form",
"html": "An equation written as \\([p\\,y']' + q\\,y = -\\lambda w\\,y\\). Legendre's equation is the case \\(p = 1-x^2\\), \\(q = 0\\), \\(w = 1\\), \\(\\lambda = n(n+1)\\); the form is what makes orthogonality a matter of two integrations by parts. Unit 19 gives the general theory.",
"section": "The generating function",
"slide": "Legendre's equation",
"keys": [
"sturm–liouville form"
]
},
{
"term_html": "Rodrigues' formula",
"html": "\\(P_n(x) = \\frac{1}{2^nn!}\\frac{\\mathrm d^n}{\\mathrm dx^n}(x^2-1)^n\\). Proved by showing the right side solves Legendre's equation and equals \\(1\\) at \\(x = 1\\).",
"section": "The generating function",
"slide": "Rodrigues' formula",
"keys": [
"rodrigues' formula"
]
},
{
"term_html": "orthogonality",
"html": "\\(\\int_{-1}^1P_mP_n\\,\\mathrm dx = \\frac{2}{2n+1}\\delta_{mn}\\): the \\(P_n\\) are an orthogonal, not orthonormal, family in \\(L^2[-1,1]\\). It is what lets a single coefficient be extracted from a measured field.",
"section": "The generating function",
"slide": "Orthogonality, and the norm",
"keys": [
"orthogonality"
]
},
{
"term_html": "multipole expansion",
"html": "\\(\\Phi(\\vec r) = -\\frac Gr\\sum_n r^{-n}\\int\\rho\\,r'^{\\,n}P_n(\\cos\\psi)\\,\\mathrm d^3r'\\) outside a bounded body: the potential as a series in \\(r'/r\\), each term one power of \\(r\\) weaker than the last.",
"section": "The multipole expansion",
"slide": "The expansion, and the first three terms",
"keys": [
"multipole expansion"
]
},
{
"term_html": "monopole",
"html": "The \\(n = 0\\) term, \\(-GM/r\\). Sees only the total mass.",
"section": "The multipole expansion",
"slide": "The expansion, and the first three terms",
"keys": [
"monopole"
]
},
{
"term_html": "dipole",
"html": "The \\(n = 1\\) term, \\(-G\\,\\hat{\\mathbf r}\\cdot\\vec d/r^2\\) with \\(\\vec d = M\\vec R_{\\mathrm{cm}}\\). Zero when the origin is the centre of mass, which for gravity it always can be.",
"section": "The multipole expansion",
"slide": "The expansion, and the first three terms",
"keys": [
"dipole"
]
},
{
"term_html": "quadrupole",
"html": "The \\(n = 2\\) term, \\(-G\\,Q(\\hat{\\mathbf r},\\hat{\\mathbf r})/2r^3\\): the first term that sees the body's shape and cannot be removed by moving the origin.",
"section": "The multipole expansion",
"slide": "The expansion, and the first three terms",
"keys": [
"quadrupole"
]
},
{
"term_html": "quadrupole moment",
"html": "The symmetric, trace-free bilinear form \\(Q(\\vec u,\\vec v) = \\int\\rho\\,[3(\\vec u\\cdot\\vec r\\,{}')(\\vec v\\cdot\\vec r\\,{}') - r'^2\\,\\vec u\\cdot\\vec v]\\) on \\(\\mathbb R^3\\). Its matrix \\(Q_{ij}\\) transforms as \\(R^\\top QR\\) under a change of orthonormal basis — a theorem about the components, not the definition. Equal to \\(-3I + (\\operatorname{tr}I)\\mathbb 1\\).",
"section": "The multipole expansion",
"slide": "What the quadrupole is",
"keys": [
"quadrupole moment"
]
},
{
"term_html": "principal axes",
"html": "An orthonormal basis diagonalising \\(Q\\) (equivalently the moment-of-inertia integrals \\(I\\)), which exists because \\(Q\\) is symmetric. The principal moments are written \\(A \\le B \\le C\\).",
"section": "The multipole expansion",
"slide": "What the quadrupole is",
"keys": [
"principal axes"
]
},
{
"term_html": "zonal harmonic coefficients",
"html": "The \\(J_n\\) in \\(\\Phi = -\\frac{GM}{r}[1 - \\sum_{n\\ge2}J_n(R/r)^nP_n(\\cos\\theta)]\\) for an axially symmetric body. \\(J_2 = (C-A)/MR^2\\), positive for an oblate body: \\(1.08263\\times10^{-3}\\) for the Earth.",
"section": "The multipole expansion",
"slide": "An axially symmetric body: the J_n",
"keys": [
"zonal harmonic coefficients"
]
},
{
"term_html": "the addition theorem",
"html": "The identity expressing \\(P_n(\\cos\\psi)\\) through spherical harmonics of the two directions separately. Cited here, to unit 19, for the fact that an axisymmetric body's \\(n\\)-th term is a multiple of \\(P_n(\\cos\\theta)\\) for every \\(n\\); only \\(n = 2\\) is derived and used.",
"section": "The multipole expansion",
"slide": "An axially symmetric body: the J_n",
"keys": [
"the addition theorem"
]
},
{
"term_html": "Clairaut's flattening formula",
"html": "\\(f = \\tfrac32J_2 + \\tfrac12q\\) with \\(q = \\omega^2R^3/GM\\), to first order, for a rotating body whose surface is a fluid level surface. For the Earth it predicts \\(1/298.09\\) against the measured \\(1/298.257\\). Not the same as unit 11's Clairaut relation for geodesics.",
"section": "The multipole expansion",
"slide": "A check that has no free parameters",
"keys": [
"clairaut's flattening formula"
]
},
{
"term_html": "orbital elements",
"html": "\\((a,e,i,\\Omega,\\omega,M)\\): semi-major axis, eccentricity, inclination, longitude of the ascending node, argument of perigee, mean anomaly. Coordinates on phase space in which the Kepler flow is five constants and one uniformly advancing angle.",
"section": "Orbital elements, and how to perturb them",
"slide": "Six numbers, as a change of coordinates",
"keys": [
"orbital elements"
]
},
{
"term_html": "osculating elements",
"html": "The elements of the Kepler orbit through the actual position and velocity at time \\(t\\) — the orbit the body would follow if the perturbation were switched off at that instant. Exact, not approximate.",
"section": "Orbital elements, and how to perturb them",
"slide": "Osculating elements, and the one lemma",
"keys": [
"osculating elements"
]
},
{
"term_html": "variation of parameters",
"html": "For any \\(c(\\vec r,\\vec v)\\) conserved by the Kepler flow, \\(\\dot c = \\nabla_{\\vec v}c\\cdot\\vec a_{\\mathrm p}\\) along the perturbed motion. For \\(c = \\vec L\\) it gives \\(\\dot{\\vec L} = \\vec r\\times\\vec a_{\\mathrm p}\\).",
"section": "Orbital elements, and how to perturb them",
"slide": "Osculating elements, and the one lemma",
"keys": [
"variation of parameters"
]
},
{
"term_html": "secular",
"html": "Of a perturbation: the part that accumulates, growing like \\(\\varepsilon t\\). It comes from the orbit average \\(\\bar F\\) of the right-hand side.",
"section": "Orbital elements, and how to perturb them",
"slide": "Secular versus periodic, and averaging",
"keys": [
"secular"
]
},
{
"term_html": "periodic",
"html": "Of a perturbation: the part \\(\\widetilde F = F - \\bar F\\) of zero average, which integrates to a bounded wobble of size \\(\\varepsilon\\).",
"section": "Orbital elements, and how to perturb them",
"slide": "Secular versus periodic, and averaging",
"keys": [
"periodic"
]
},
{
"term_html": "method of averaging",
"html": "Replace \\(\\dot c = \\varepsilon F(c,u)\\) by \\(\\dot{\\bar c} = \\varepsilon\\bar F(\\bar c)\\); the error is \\(O(\\varepsilon)\\) for times up to \\(O(1/\\varepsilon)\\). Cited; the average must be taken in time, with the weight \\(\\mathrm dt = (r^2/L)\\,\\mathrm du\\).",
"section": "Orbital elements, and how to perturb them",
"slide": "Secular versus periodic, and averaging",
"keys": [
"method of averaging"
]
},
{
"term_html": "argument of latitude",
"html": "\\(u\\), the angle in the orbit plane from the ascending node to the body: \\(\\vec r = r(\\cos u\\,\\hat{\\mathbf n} + \\sin u\\,\\hat{\\mathbf m})\\), \\(z = r\\sin i\\sin u\\).",
"section": "What J_2 does to an orbit",
"slide": "The torque, and what it moves",
"keys": [
"argument of latitude"
]
},
{
"term_html": "nodal precession",
"html": "The secular turning of the orbit plane about the Earth's axis, \\(\\dot\\Omega = -\\tfrac32J_2(R/a)^2n\\cos i/(1-e^2)^2\\); westward for prograde orbits, eastward for retrograde ones, zero for polar ones.",
"section": "What J_2 does to an orbit",
"slide": "Averaging, and the result",
"keys": [
"nodal precession"
]
},
{
"term_html": "sun-synchronous orbit",
"html": "One whose nodal precession is \\(360^\\circ\\) per tropical year, so its plane keeps a fixed angle to the Sun. At \\(800\\) km, circular, it needs \\(i = 98.60^\\circ\\).",
"section": "What J_2 does to an orbit",
"slide": "The sun-synchronous inclination",
"keys": [
"sun-synchronous orbit"
]
},
{
"term_html": "apsidal precession",
"html": "The secular turning of the perigee within the orbit plane, \\(\\dot\\omega = \\tfrac34J_2(R/a)^2n(5\\cos^2i - 1)/(1-e^2)^2\\). Like the nodal precession, it comes from the \\(P_2\\) term alone.",
"section": "What J_2 does to an orbit",
"slide": "The other precession: the apse line",
"keys": [
"apsidal precession"
]
},
{
"term_html": "critical inclination",
"html": "\\(i = \\arccos(1/\\sqrt5) = 63.43^\\circ\\) (or \\(116.57^\\circ\\)), where the apsidal precession vanishes; the inclination of every Molniya orbit.",
"section": "What J_2 does to an orbit",
"slide": "The critical inclination",
"keys": [
"critical inclination"
]
},
{
"term_html": "tidal tensor",
"html": "The Hessian \\(\\partial_i\\partial_j\\Phi\\) of an external potential across a body; for a point mass at distance \\(d\\) along \\(\\hat{\\mathbf n}\\) it is \\((GM/d^3)(\\delta_{ij} - 3n_in_j)\\), trace-free, eigenvalues \\((-2,1,1)GM/d^3\\). It is the Hessian of the \\(\\ell = 2\\) term.",
"section": "Tides, as the l = 2 term",
"slide": "Two bulges, because P_2 is even",
"keys": [
"tidal tensor"
]
},
{
"term_html": "tidal locking",
"html": "The state in which a body's rotation period equals its orbital period, so it keeps one face to its partner. The long axis then sits at \\(\\gamma = 0\\), the minimum of the orientation energy \\(-\\tfrac{3GM}{2d^3}(B-A)\\cos^2\\gamma\\), and dissipation is what brings it there.",
"section": "Tides, as the l = 2 term",
"slide": "Why the Moon keeps one face towards us",
"keys": [
"tidal locking"
]
},
{
"term_html": "free libration",
"html": "The small oscillation of a locked body about exact alignment, at \\(\\omega_{\\mathrm{lib}} = n\\sqrt{3(B-A)/C}\\); about \\(2.9\\) years for the Moon.",
"section": "Tides, as the l = 2 term",
"slide": "Why the Moon keeps one face towards us",
"keys": [
"free libration"
]
}
];
