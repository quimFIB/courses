// Generated from GLOSSARY.org by `mr glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "electric field",
"html": "The vector field \\(\\vec E\\) such that a test charge \\(q\\) at rest feels the force \\(q\\vec E\\). For a static charge density \\(\\rho\\) it is \\(\\frac{1}{4\\pi\\varepsilon_0}\\int\\rho(\\vec y)(\\vec x-\\vec y)/\\lVert\\vec x-\\vec y\\rVert^3\\,\\mathrm dV\\), and \\(\\vec E = -\\nabla\\varphi\\) with \\(\\varphi\\) the electrostatic potential, in volts.",
"section": "Electrostatics is gravity with two signs",
"slide": "Coulomb's law, and everything unit 05 already proved",
"keys": [
"electric field"
]
},
{
"term_html": "Coulomb's law",
"html": "The measured statement that two point charges repel with force \\(q_1q_2/4\\pi\\varepsilon_0s^2\\) along the line joining them. It is Newton's gravitation with \\(-Gm_1m_2\\) replaced by \\(q_1q_2/4\\pi\\varepsilon_0\\), so every theorem unit 05 proved from the integrals transfers.",
"section": "Electrostatics is gravity with two signs",
"slide": "Coulomb's law, and everything unit 05 already proved",
"keys": [
"coulomb's law"
]
},
{
"term_html": "conductor",
"html": "A region containing charges free to move under any force. In equilibrium the force on each vanishes, so \\(\\vec E = \\vec 0\\) inside; it follows that the interior carries no charge, the potential is constant on the conductor, and the field just outside is normal to its surface.",
"section": "Electrostatics is gravity with two signs",
"slide": "Conductors",
"keys": [
"conductor"
]
},
{
"term_html": "electrostatic equilibrium",
"html": "The state in which no charge moves. For a conductor it is what forces \\(\\vec E = \\vec 0\\) inside.",
"section": "Electrostatics is gravity with two signs",
"slide": "Conductors",
"keys": [
"electrostatic equilibrium"
]
},
{
"term_html": "surface charge density",
"html": "\\(\\sigma\\), charge per unit area on a surface, in C m\\(^{-2}\\). On a conductor it is where all the charge sits, and \\(\\sigma = \\varepsilon_0\\vec E\\cdot\\hat n\\) just outside.",
"section": "Electrostatics is gravity with two signs",
"slide": "Conductors",
"keys": [
"surface charge density"
]
},
{
"term_html": "jump conditions",
"html": "Across a surface carrying \\(\\sigma\\), the normal component of \\(\\vec E\\) jumps by \\(\\sigma/\\varepsilon_0\\) and the tangential component is continuous. The first is Gauss's law on a pillbox, the second the vanishing circulation of a gradient round a thin loop.",
"section": "Electrostatics is gravity with two signs",
"slide": "Across a charged surface",
"keys": [
"jump conditions"
]
},
{
"term_html": "Green's identities",
"html": "For \\(u, v\\in C^2(\\bar D)\\): \\(\\int_D(u\\nabla^2v + \\nabla u\\cdot\\nabla v) = \\oint u\\,\\partial_nv\\) (I) and \\(\\int_D(u\\nabla^2v - v\\nabla^2u) = \\oint(u\\,\\partial_nv - v\\,\\partial_nu)\\) (II). The product rule plus the divergence theorem. (II) says the Laplacian is symmetric under Dirichlet conditions.",
"section": "Laplace and Poisson: uniqueness, and the Green's function",
"slide": "Green's identities",
"keys": [
"green's identities"
]
},
{
"term_html": "uniqueness theorem",
"html": "Poisson's equation on a bounded region, or the exterior of one with decay at infinity, has at most one solution with given Dirichlet data, or with given total charges on bounding conductors. Proved by the maximum principle and by the energy identity.",
"section": "Laplace and Poisson: uniqueness, and the Green's function",
"slide": "Uniqueness, three ways",
"keys": [
"uniqueness theorem"
]
},
{
"term_html": "Dirichlet data",
"html": "Prescribed values of the unknown function on the boundary of the region. A grounded conductor supplies \\(\\varphi = 0\\).",
"section": "Laplace and Poisson: uniqueness, and the Green's function",
"slide": "Uniqueness, three ways",
"keys": [
"dirichlet data"
]
},
{
"term_html": "fundamental solution",
"html": "The radial function \\(\\Gamma_n\\) on \\(\\mathbb R^n\\setminus\\{0\\}\\), harmonic there, with unit outward flux of \\(-\\nabla\\Gamma_n\\) through every sphere about \\(0\\): \\(\\Gamma_1 = -|x|/2\\), \\(\\Gamma_2 = -\\frac1{2\\pi}\\log r\\), \\(\\Gamma_3 = \\frac{1}{4\\pi r}\\). The potential of a unit charge with \\(\\varepsilon_0 = 1\\); its \\(r\\)-dependence is fixed by flux conservation through spheres of area \\(\\propto r^{n-1}\\).",
"section": "Laplace and Poisson: uniqueness, and the Green's function",
"slide": "Worked: the constant, in one, two and three dimensions",
"keys": [
"fundamental solution"
]
},
{
"term_html": "Green's representation formula",
"html": "For \\(u\\in C^2(\\bar D)\\), \\(u(\\vec x) = \\int_D\\Gamma(\\vec x-\\vec y)(-\\nabla^2u)\\,\\mathrm dV + \\oint_{\\partial D}(\\Gamma\\,\\partial_nu - u\\,\\partial_n\\Gamma)\\,\\mathrm dA\\). Identity (II) with a small ball cut out round \\(\\vec x\\). It is the precise content of the shorthand \\(-\\nabla^2\\Gamma = \\delta\\), which unit 20 makes legitimate.",
"section": "Laplace and Poisson: uniqueness, and the Green's function",
"slide": "The representation formula, and the Green's function of a region",
"keys": [
"green's representation formula"
]
},
{
"term_html": "Green's function",
"html": "Of a region \\(D\\): \\(G(\\vec x,\\vec y) = \\Gamma(\\vec x-\\vec y) - h_{\\vec x}(\\vec y)\\), with \\(h_{\\vec x}\\) harmonic in \\(D\\) and equal to \\(\\Gamma\\) on \\(\\partial D\\), so that \\(G = 0\\) on the boundary. Physically, \\(\\varepsilon_0^{-1}G\\) is the potential of a unit charge beside a grounded boundary; it solves every Dirichlet problem on \\(D\\) by one integral.",
"section": "Laplace and Poisson: uniqueness, and the Green's function",
"slide": "The representation formula, and the Green's function of a region",
"keys": [
"green's function"
]
},
{
"term_html": "Earnshaw's theorem",
"html": "A point charge in a fixed electrostatic field, in a region with no other charge, has no stable equilibrium: its potential energy is harmonic, and by the mean value property it cannot have a strict local minimum. Unit 05's theorem for gravity, renamed.",
"section": "Laplace and Poisson: uniqueness, and the Green's function",
"slide": "Earnshaw, transferred",
"keys": [
"earnshaw's theorem"
]
},
{
"term_html": "axisymmetric harmonic expansion",
"html": "A harmonic function independent of \\(\\phi\\) on a shell is \\(\\sum_\\ell(A_\\ell r^\\ell + B_\\ell r^{-\\ell-1})P_\\ell(\\cos\\theta)\\), converging in mean square on each sphere. The coefficient functions obey Euler's equation; completeness of the \\(P_\\ell\\) (unit 19) makes the sum the whole function.",
"section": "The grounded sphere, twice",
"slide": "Separation in spherical coordinates",
"keys": [
"axisymmetric harmonic expansion"
]
},
{
"term_html": "induced dipole",
"html": "The dipole moment of the charge a field induces on a body. For a conducting sphere, \\(p = 4\\pi\\varepsilon_0a^3E_0\\); the ratio \\(p/E_0\\) is its polarisability.",
"section": "The grounded sphere, twice",
"slide": "Reading the answer: charge, dipole, and a factor of three",
"keys": [
"induced dipole"
]
},
{
"term_html": "method of images",
"html": "Solving a problem in a region bounded by grounded conductors by placing fictitious charges outside the region so that the total potential vanishes on the boundary. Legitimate by the uniqueness theorem; meaningful only inside the region.",
"section": "The grounded sphere, twice",
"slide": "The method of images, and why it is allowed",
"keys": [
"method of images"
]
},
{
"term_html": "Kelvin image",
"html": "The image of a charge \\(q\\) at distance \\(R\\) from the centre of a grounded sphere of radius \\(a\\): charge \\(-qa/R\\) at distance \\(a^2/R\\) on the same ray. The sphere is then an Apollonius sphere of the pair, with distance ratio \\(a/R\\).",
"section": "The grounded sphere, twice",
"slide": "The method of images, and why it is allowed",
"keys": [
"kelvin image"
]
},
{
"term_html": "multipole moments",
"html": "For an axisymmetric charge distribution, \\(q_\\ell = \\int\\rho\\,r'^\\ell P_\\ell(\\cos\\theta')\\,\\mathrm dV'\\); outside all the charge, \\(\\varphi = \\frac{1}{4\\pi\\varepsilon_0}\\sum q_\\ell P_\\ell(\\cos\\theta)/r^{\\ell+1}\\). They are the \\(B_\\ell\\) of the exterior expansion, found from the values on the axis. A neutral body's dipole is the same about every origin.",
"section": "The grounded sphere, twice",
"slide": "Multipoles, as a boundary-value tool",
"keys": [
"multipole moments"
]
},
{
"term_html": "Lorentz force",
"html": "\\(\\vec F = q(\\vec E + \\vec v\\times\\vec B)\\), the force on a charge moving with velocity \\(\\vec v\\). The velocity-dependent part defines \\(\\vec B\\); the form of the law is measured. The magnetic part does no work.",
"section": "Magnetostatics: the field with no sources",
"slide": "The Lorentz force, currents, and unit 12's Lagrangian",
"keys": [
"lorentz force"
]
},
{
"term_html": "current density",
"html": "\\(\\vec J\\), in A m\\(^{-2}\\): the rate at which charge crosses unit area, so the current through \\(S\\) is \\(\\int_S\\vec J\\cdot\\mathrm d\\vec A\\).",
"section": "Magnetostatics: the field with no sources",
"slide": "The Lorentz force, currents, and unit 12's Lagrangian",
"keys": [
"current density"
]
},
{
"term_html": "continuity equation",
"html": "\\(\\partial_t\\rho + \\nabla\\cdot\\vec J = 0\\), local charge conservation, from the integral statement by the localisation lemma. Statics means \\(\\nabla\\cdot\\vec J = 0\\).",
"section": "Magnetostatics: the field with no sources",
"slide": "The Lorentz force, currents, and unit 12's Lagrangian",
"keys": [
"continuity equation"
]
},
{
"term_html": "Biot–Savart law",
"html": "The measured field of a steady current, \\(\\vec B = \\frac{\\mu_0}{4\\pi}\\int\\vec J(\\vec y)\\times(\\vec x-\\vec y)/\\lVert\\vec x-\\vec y\\rVert^3\\,\\mathrm dV\\). It implies \\(\\nabla\\cdot\\vec B = 0\\) and, for steady currents, \\(\\nabla\\times\\vec B = \\mu_0\\vec J\\).",
"section": "Magnetostatics: the field with no sources",
"slide": "Biot–Savart, and the two equations it hides",
"keys": [
"biot–savart law"
]
},
{
"term_html": "Ampère's law",
"html": "\\(\\oint_{\\partial S}\\vec B\\cdot\\mathrm d\\vec r = \\mu_0\\int_S\\vec J\\cdot\\mathrm d\\vec A\\): Stokes' theorem applied to \\(\\nabla\\times\\vec B = \\mu_0\\vec J\\). The answer is independent of the spanning surface exactly because \\(\\nabla\\cdot\\vec J = 0\\).",
"section": "Magnetostatics: the field with no sources",
"slide": "Ampère's law is Stokes' theorem applied to \\(\\vec B\\)",
"keys": [
"ampère's law"
]
},
{
"term_html": "vector potential",
"html": "A field \\(\\vec A\\) with \\(\\nabla\\times\\vec A = \\vec B\\). It exists on any star-shaped region where \\(\\nabla\\cdot\\vec B = 0\\), hence globally on \\(\\mathbb R^3\\) for every static magnetic field; it is determined only up to a gauge transformation.",
"section": "Magnetostatics: the field with no sources",
"slide": "The vector potential: Poincaré's lemma one degree up",
"keys": [
"vector potential"
]
},
{
"term_html": "Poincaré lemma for divergence-free fields",
"html": "On an open set star-shaped about \\(\\vec 0\\), a \\(C^1\\) field with zero divergence is the curl of \\(\\vec A(\\vec x) = \\int_0^1t\\,\\vec B(t\\vec x)\\times\\vec x\\,\\mathrm dt\\). The monopole field \\(\\hat r/r^2\\) on \\(\\mathbb R^3\\setminus\\{0\\}\\) shows the hypothesis cannot be dropped.",
"section": "Magnetostatics: the field with no sources",
"slide": "The vector potential: Poincaré's lemma one degree up",
"keys": [
"poincaré lemma for divergence-free fields"
]
},
{
"term_html": "gauge transformation",
"html": "\\(\\vec A\\mapsto\\vec A + \\nabla\\chi\\). It leaves \\(\\vec B\\) unchanged because the curl of a gradient is zero; a choice of \\(\\vec A\\) within its class is a gauge.",
"section": "Magnetostatics: the field with no sources",
"slide": "Gauge freedom, and the Coulomb gauge",
"keys": [
"gauge transformation"
]
},
{
"term_html": "Coulomb gauge",
"html": "The condition \\(\\nabla\\cdot\\vec A = 0\\), always attainable by solving one Poisson equation for \\(\\chi\\). In it each Cartesian component obeys \\(\\nabla^2A_i = -\\mu_0J_i\\).",
"section": "Magnetostatics: the field with no sources",
"slide": "Gauge freedom, and the Coulomb gauge",
"keys": [
"coulomb gauge"
]
},
{
"term_html": "symmetric gauge",
"html": "For a uniform \\(\\vec B\\), \\(\\vec A = \\frac12\\vec B\\times\\vec x\\): the Poincaré lemma's formula, symmetric under rotations about \\(\\vec B\\).",
"section": "Magnetostatics: the field with no sources",
"slide": "Worked: a uniform field, in two gauges",
"keys": [
"symmetric gauge"
]
},
{
"term_html": "Landau gauge",
"html": "For \\(\\vec B = B\\hat z\\), \\(\\vec A = (0, Bx, 0)\\), independent of \\(y\\). It differs from the symmetric gauge by \\(\\nabla(\\frac B2xy)\\). The other Landau gauge, \\((-By, 0, 0)\\), used in unit 12, is independent of \\(x\\).",
"section": "Magnetostatics: the field with no sources",
"slide": "Worked: a uniform field, in two gauges",
"keys": [
"landau gauge"
]
},
{
"term_html": "magnetic scalar potential",
"html": "A function \\(\\psi\\) with \\(\\vec B = -\\nabla\\psi\\) on a simply connected region free of current; it is harmonic there because \\(\\nabla\\cdot\\vec B = 0\\).",
"section": "Magnetostatics: the field with no sources",
"slide": "The sphere in a magnetic field",
"keys": [
"magnetic scalar potential"
]
},
{
"term_html": "Neumann data",
"html": "Prescribed values of the normal derivative on the boundary. A perfect diamagnet imposes \\(\\partial_n\\psi = 0\\); the solution is then unique up to a constant.",
"section": "Magnetostatics: the field with no sources",
"slide": "The sphere in a magnetic field",
"keys": [
"neumann data"
]
},
{
"term_html": "Helmholtz theorem",
"html": "A \\(C^2\\) field on \\(\\mathbb R^3\\) tending to zero at infinity, whose divergence \\(D\\) and curl \\(\\vec C\\) are \\(C^1\\) with compact support, equals \\(-\\nabla\\Phi + \\nabla\\times\\vec A\\) with \\(\\Phi = \\frac1{4\\pi}\\int D/|\\vec x-\\vec y|\\) and \\(\\vec A = \\frac1{4\\pi}\\int\\vec C/|\\vec x-\\vec y|\\), and is the only decaying field with that divergence and curl. Without decay it fails: a uniform field has zero divergence and curl.",
"section": "Helmholtz: why four equations",
"slide": "The Helmholtz theorem",
"keys": [
"helmholtz theorem"
]
}
];
