// Generated from GLOSSARY.org by `mr glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "reduced mass",
"html": "\\(\\mu = m_1m_2/(m_1+m_2)\\), equivalently \\(1/\\mu = 1/m_1 + 1/m_2\\). The mass that appears in the relative equation of motion \\(\\mu\\ddot{\\vec r} = f(r)\\hat r\\); always less than either mass, and tends to the lighter one as the heavier grows without bound; equal masses give \\(\\mu = m/2\\). For gravity \\(k/\\mu = G(m_1+m_2)\\), which is why Kepler's third law carries the total mass. Met on the overview, defined on",
"section": "Overview",
"slide": "Reduced mass, and how much it actually matters",
"keys": [
"reduced mass"
]
},
{
"term_html": "scalar triple product",
"html": "\\(\\vec a\\cdot(\\vec b\\times\\vec c)\\), equal to \\(\\det[\\vec a\\,\\vec b\\,\\vec c]\\) and hence unchanged by cyclic permutation of the three vectors. The signed volume of the parallelepiped they span.",
"section": "Angular momentum, and why the orbit is flat",
"slide": "The identities unit 03 owed you",
"keys": [
"scalar triple product"
]
},
{
"term_html": "BAC–CAB rule",
"html": "\\(\\vec a\\times(\\vec b\\times\\vec c) = \\vec b\\,(\\vec a\\cdot\\vec c) - \\vec c\\,(\\vec a\\cdot\\vec b)\\). Proved by checking basis vectors, both sides being bilinear in \\(\\vec b,\\vec c\\). The identity that makes the Runge–Lenz computation work.",
"section": "Angular momentum, and why the orbit is flat",
"slide": "The identities unit 03 owed you",
"keys": [
"bac–cab rule"
]
},
{
"term_html": "Lagrange's identity",
"html": "\\((\\vec a\\times\\vec b)\\cdot(\\vec c\\times\\vec d) = (\\vec a\\cdot\\vec c)(\\vec b\\cdot\\vec d) - (\\vec a\\cdot\\vec d)(\\vec b\\cdot\\vec c)\\). With \\(\\vec c = \\vec a\\), \\(\\vec d = \\vec b\\) it gives \\(\\lVert\\vec a\\times\\vec b\\rVert = \\lVert\\vec a\\rVert\\lVert\\vec b\\rVert\\sin\\varphi\\), the area of the parallelogram — which is why Kepler's second law is about area.",
"section": "Angular momentum, and why the orbit is flat",
"slide": "The identities unit 03 owed you",
"keys": [
"lagrange's identity"
]
},
{
"term_html": "angular momentum",
"html": "\\(\\vec L = \\vec r\\times\\vec p\\) about a chosen origin, of dimension \\(\\mathsf{ML^2T^{-1}}\\). A pseudovector: it depends on the origin and on the handedness of the frame.",
"section": "Angular momentum, and why the orbit is flat",
"slide": "Torque, and the derivative of \\(\\vec r\\times\\vec p\\)",
"keys": [
"angular momentum"
]
},
{
"term_html": "torque",
"html": "\\(\\vec N = \\vec r\\times\\vec F\\) about the same origin. The theorem \\(\\dot{\\vec L} = \\vec N\\) is Newton's second law crossed with \\(\\vec r\\).",
"section": "Angular momentum, and why the orbit is flat",
"slide": "Torque, and the derivative of \\(\\vec r\\times\\vec p\\)",
"keys": [
"torque"
]
},
{
"term_html": "central force (central)",
"html": "A force field on \\(\\mathbb R^3\\setminus\\{\\vec 0\\}\\) pointing along the radius everywhere, \\(\\vec F = f(\\vec r)\\,\\hat r\\). Enough, on its own, for \\(\\vec L\\) to be conserved and the motion to be planar.",
"section": "Angular momentum, and why the orbit is flat",
"slide": "Central forces, and the first conservation law",
"keys": [
"central force (central)",
"central force",
"central"
]
},
{
"term_html": "isotropic",
"html": "Of a central force: \\(f\\) depends on \\(\\vec r\\) only through \\(r\\). A separate hypothesis from centrality, and the one that makes the force conservative, with \\(V(r) = -\\int^r f\\).",
"section": "Angular momentum, and why the orbit is flat",
"slide": "Central forces, and the first conservation law",
"keys": [
"isotropic"
]
},
{
"term_html": "effective potential",
"html": "\\(V_{\\mathrm{eff}}(r) = V(r) + L^2/2\\mu r^2\\), with \\(L\\) a fixed parameter. The energy then reads \\(E = \\tfrac12\\mu\\dot r^2 + V_{\\mathrm{eff}}(r)\\), a one-dimensional problem to which unit 00's reading of a potential graph applies unchanged. The added term is transverse kinetic energy, not the potential of any force.",
"section": "The effective potential",
"slide": "Energy, with \\(\\dot\\theta\\) eliminated",
"keys": [
"effective potential"
]
},
{
"term_html": "centrifugal barrier",
"html": "The term \\(L^2/2\\mu r^2\\) of the effective potential, whose force \\(L^2/\\mu r^3\\) pushes outwards and beats any attraction weaker than \\(r^{-3}\\) at small \\(r\\). The reason a body with \\(L\\ne0\\) in an inverse-square field never reaches the centre.",
"section": "The effective potential",
"slide": "The same radial equation, by two routes",
"keys": [
"centrifugal barrier"
]
},
{
"term_html": "apsidal angle",
"html": "The angle swept by the radius between one turning point of \\(r\\) and the next, \\(\\Delta\\theta = \\int_{r_-}^{r_+}L\\,\\mathrm dr/r^2\\sqrt{2\\mu(E - V_{\\mathrm{eff}})}\\). The orbit closes if and only if \\(\\Delta\\theta/\\pi\\) is rational; for the inverse-square law it is exactly \\(\\pi\\).",
"section": "The effective potential",
"slide": "Quadrature: the timetable and the shape",
"keys": [
"apsidal angle"
]
},
{
"term_html": "Binet equation",
"html": "\\(u'' + u = -(\\mu/L^2u^2)\\,f(1/u)\\) for \\(u = 1/r\\) as a function of \\(\\theta\\): the exact equation of an orbit's shape under any isotropic central force. Linear with constant coefficients only for the inverse square (constant right-hand side) and inverse cube. Unit 37 adds one term to it and gets general relativity.",
"section": "The Binet equation",
"slide": "The substitution \\(u = 1/r\\)",
"keys": [
"binet equation"
]
},
{
"term_html": "focus",
"html": "The point \\(F\\) of the focus–directrix definition of a conic; the force centre, for a Kepler orbit.",
"section": "The Binet equation",
"slide": "Conics, defined before they are met",
"keys": [
"focus"
]
},
{
"term_html": "directrix",
"html": "The line \\(D\\) of the focus–directrix definition, at distance \\(d = p/e\\) from the focus. Recedes to infinity as \\(e\\to0\\).",
"section": "The Binet equation",
"slide": "Conics, defined before they are met",
"keys": [
"directrix"
]
},
{
"term_html": "eccentricity",
"html": "The ratio \\(e\\) in \\(\\lVert X-F\\rVert = e\\,\\mathrm{dist}(X,D)\\): \\(0\\) for a circle, below \\(1\\) for an ellipse, \\(1\\) for a parabola, above \\(1\\) for a hyperbola. For a Kepler orbit \\(e = \\sqrt{1 + 2EL^2/\\mu k^2}\\).",
"section": "The Binet equation",
"slide": "Conics, defined before they are met",
"keys": [
"eccentricity"
]
},
{
"term_html": "conic",
"html": "The set \\(\\{X : \\lVert X-F\\rVert = e\\,\\mathrm{dist}(X,D)\\}\\). In polar coordinates about \\(F\\), the branch on the focus's side is \\(r = p/(1+e\\cos\\theta)\\).",
"section": "The Binet equation",
"slide": "Conics, defined before they are met",
"keys": [
"conic"
]
},
{
"term_html": "semi-latus rectum",
"html": "\\(p = ed\\), the distance from the focus to the conic measured perpendicular to the axis: \\(r(\\pm\\pi/2) = p\\). For a Kepler orbit \\(p = L^2/\\mu k\\), set by the angular momentum alone.",
"section": "The Binet equation",
"slide": "Conics, defined before they are met",
"keys": [
"semi-latus rectum"
]
},
{
"term_html": "deflection angle",
"html": "For an unbound orbit, the angle \\(\\Theta\\) between the incoming and outgoing directions of travel. For the inverse square, \\(\\sin(\\Theta/2) = 1/e\\) and \\(\\tan(\\Theta/2) = k/\\mu v_\\infty^2b\\): Rutherford's formula.",
"section": "The Binet equation",
"slide": "One family, four members",
"keys": [
"deflection angle"
]
},
{
"term_html": "impact parameter",
"html": "\\(b\\), the distance by which the incoming straight-line path would miss the centre if there were no force. Then \\(L = \\mu v_\\infty b\\).",
"section": "The Binet equation",
"slide": "One family, four members",
"keys": [
"impact parameter"
]
},
{
"term_html": "areal velocity",
"html": "The rate \\(\\mathrm dA/\\mathrm dt\\) at which the radius from the centre sweeps out area; equal to \\(\\tfrac12\\lVert\\vec r\\times\\dot{\\vec r}\\rVert = L/2\\mu\\), hence constant for every central force — Kepler's second law.",
"section": "Kepler's three laws, derived",
"slide": "Second law: equal areas in equal times",
"keys": [
"areal velocity"
]
},
{
"term_html": "apse (apsis)",
"html": "A turning point of \\(r\\) on an orbit, where \\(\\dot r = 0\\) and the velocity is perpendicular to the radius. For a solar orbit the near one is perihelion and the far one aphelion; \\(r_{\\min}v_{\\min} = r_{\\max}v_{\\max}\\) there for every central force.",
"section": "Kepler's three laws, derived",
"slide": "First law: the ellipse, with its axes named",
"keys": [
"apse (apsis)",
"apse",
"apsis"
]
},
{
"term_html": "Laplace–Runge–Lenz vector (Runge–Lenz vector)",
"html": "\\(\\vec A = \\vec p\\times\\vec L - \\mu k\\,\\hat r\\) for the force \\(-k\\hat r/r^2\\). A map from states to \\(\\mathbb R^3\\) that is constant along every solution — a vector of first integrals beyond \\(E\\) and \\(\\vec L\\). It lies in the orbital plane, points at perihelion, and has magnitude \\(\\mu k e\\). Among central forces, only the inverse-square law has it.",
"section": "The vector that did not have to exist",
"slide": "A conserved vector, and why anyone looked for one",
"keys": [
"laplace–runge–lenz vector (runge–lenz vector)",
"laplace–runge–lenz vector",
"runge–lenz vector"
]
},
{
"term_html": "Bertrand's theorem",
"html": "The only central potentials all of whose bounded orbits are closed are \\(-k/r\\) and \\(\\tfrac12\\kappa r^2\\). Cited (Goldstein, §3.6, or Appendix A of the 2nd edition; Arnold, §8); the problem sheet's P5 proves it for power laws.",
"section": "The vector that did not have to exist",
"slide": "Which forces close, and why almost none do",
"keys": [
"bertrand's theorem"
]
}
];
