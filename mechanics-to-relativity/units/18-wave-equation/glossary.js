// Generated from GLOSSARY.org by `mr glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "field",
"html": "A quantity defined at every point of space and every time, here the transverse displacement \\(u(x,t)\\) of the string. The unknown of the theory is a function of two variables rather than a finite list of functions of \\(t\\), and that is the whole difference between Parts A–B and Part C.",
"section": "From N masses to a field",
"slide": "One string, four questions",
"keys": [
"field"
]
},
{
"term_html": "wavenumber",
"html": "\\(q\\), the spatial analogue of frequency: the mode \\(\\sin(qx)\\) repeats after a wavelength \\(2\\pi/q\\). For a fixed–fixed string of length \\(L\\) the allowed values are \\(q_k = k\\pi/L\\). Dimension \\(\\mathrm m^{-1}\\).",
"section": "From N masses to a field",
"slide": "Unit 07's chain, one more time",
"keys": [
"wavenumber"
]
},
{
"term_html": "dispersion relation",
"html": "The function \\(\\omega(q)\\) giving a medium's frequency at each wavenumber. Unit 07's chain has the exact relation \\(\\omega(q) = (2c/a)\\sin(qa/2)\\); the string has \\(\\omega = cq\\).",
"section": "From N masses to a field",
"slide": "Unit 07's chain, one more time",
"keys": [
"dispersion relation"
]
},
{
"term_html": "second-difference operator",
"html": "\\(\\big(f(x+a) - 2f(x) + f(x-a)\\big)/a^2\\). For \\(f \\in C^4\\) it equals \\(f''(x) + \\tfrac{a^2}{12}f^{(4)}(\\xi)\\): second-order accurate, because it is even in \\(a\\) and every odd Taylor term cancels.",
"section": "From N masses to a field",
"slide": "The second difference is a second derivative",
"keys": [
"second-difference operator"
]
},
{
"term_html": "wave equation",
"html": "\\(u_{tt} = c^2 u_{xx}\\), with \\(c = \\sqrt{T/\\mu}\\) for a string of tension \\(T\\) and mass per unit length \\(\\mu\\). Derived three times in this unit: as a continuum limit, from a force balance, and from an action.",
"section": "From N masses to a field",
"slide": "The limit, and the equation it leaves",
"keys": [
"wave equation"
]
},
{
"term_html": "non-dispersive",
"html": "Of a medium in which \\(\\omega = cq\\) exactly, so every wavenumber travels at the same speed and a pulse keeps its shape. The ideal string is non-dispersive.",
"section": "From N masses to a field",
"slide": "What the limit threw away",
"keys": [
"non-dispersive"
]
},
{
"term_html": "dispersive",
"html": "Of a medium in which \\(\\omega/q\\) depends on \\(q\\), so a pulse spreads. The bead chain is dispersive, with \\(\\omega/cq = 1 - (qa)^2/24 + \\cdots\\). Nothing to do with damping: a dispersive medium may be perfectly conservative.",
"section": "From N masses to a field",
"slide": "What the limit threw away",
"keys": [
"dispersive"
]
},
{
"term_html": "small-slope approximation",
"html": "Replacing \\(\\sqrt{1+u_x^2}\\) by \\(1\\) in the exact transverse equation, which is what turns it from nonlinear into the wave equation. The assumption is on the dimensionless slope \\(u_x\\), never on \\(u\\); the relative error is \\(2u_x^2 + O(u_x^4)\\), and for the running example it is \\(1.07\\times10^{-3}\\), or \\(0.11\\) per cent.",
"section": "The string itself",
"slide": "The small-slope approximation, and its size",
"keys": [
"small-slope approximation"
]
},
{
"term_html": "principal symbol",
"html": "For \\(P = \\sum A^{ij}\\partial_i\\partial_j + \\sum B^i\\partial_i + C\\) with \\(A\\) symmetric, the quadratic form \\(\\sigma_P(\\xi) = \\sum A^{ij}\\xi_i\\xi_j\\) on the dual space. It is the operator's action on fast oscillations: \\(P(v e^{\\mathrm i\\lambda\\xi\\cdot x}) = -\\lambda^2\\sigma_P(\\xi)\\,v e^{\\mathrm i\\lambda\\xi\\cdot x} + O(\\lambda)\\).",
"section": "What kind of equation is this?",
"slide": "The principal symbol",
"keys": [
"principal symbol"
]
},
{
"term_html": "characteristic covector",
"html": "A nonzero \\(\\xi\\) with \\(\\sigma_P(\\xi) = 0\\): a direction of oscillation the leading part of the operator does not control.",
"section": "What kind of equation is this?",
"slide": "The principal symbol",
"keys": [
"characteristic covector"
]
},
{
"term_html": "discriminant",
"html": "For \\(a\\,u_{xx} + 2b\\,u_{xy} + c\\,u_{yy}\\), the number \\(D = b^2 - ac = -\\det A\\). Its <em>sign</em> is invariant under change of coordinates, because \\(\\det \\tilde A = (\\det J)^2\\det A\\), and that sign is the type.",
"section": "What kind of equation is this?",
"slide": "Three types, in two variables",
"keys": [
"discriminant"
]
},
{
"term_html": "hyperbolic",
"html": "Symbol nondegenerate and indefinite (\\(D \\gt 0\\) in two variables): two real families of characteristics, finite propagation speed, Cauchy data on a non-characteristic curve. Model: \\(u_{tt} - c^2u_{xx} = 0\\).",
"section": "What kind of equation is this?",
"slide": "Three types, in two variables",
"keys": [
"hyperbolic"
]
},
{
"term_html": "parabolic",
"html": "Symbol degenerate (\\(D = 0\\)): one family of characteristics, infinite propagation speed, instant smoothing, one time direction only. Model: \\(u_t - ku_{xx} = 0\\), whose arrow of time lives in the lower-order term and not in the symbol.",
"section": "What kind of equation is this?",
"slide": "Three types, in two variables",
"keys": [
"parabolic"
]
},
{
"term_html": "elliptic",
"html": "Symbol definite (\\(D \\lt 0\\)): no real characteristics, solutions real-analytic inside, data on the whole boundary of a region. Model: \\(u_{xx} + u_{yy} = 0\\). Cauchy data on a curve makes it ill posed.",
"section": "What kind of equation is this?",
"slide": "Three types, in two variables",
"keys": [
"elliptic"
]
},
{
"term_html": "characteristic curve",
"html": "A curve \\(\\psi = \\mathrm{const}\\) whose conormal \\(\\mathrm d\\psi\\) is characteristic. Its slope obeys the <em>ordinary</em> equation \\(a\\,m^2 - 2b\\,m + c = 0\\), \\(m = \\mathrm dy/\\mathrm dx\\). For the wave operator, the lines \\(x \\mp ct = \\mathrm{const}\\).",
"section": "What kind of equation is this?",
"slide": "Reduction to canonical form",
"keys": [
"characteristic curve"
]
},
{
"term_html": "canonical form",
"html": "What an equation becomes in coordinates adapted to its characteristics, up to lower-order terms: \\(u_{\\xi\\eta} = \\Phi\\) (hyperbolic), \\(u_{\\eta\\eta} = \\Phi\\) (parabolic), \\(u_{\\alpha\\alpha} + u_{\\beta\\beta} = \\Phi\\) (elliptic). Three equations, and no fourth.",
"section": "What kind of equation is this?",
"slide": "Reduction to canonical form",
"keys": [
"canonical form"
]
},
{
"term_html": "Cauchy data",
"html": "A function and its normal derivative prescribed on a curve — the PDE analogue of position and velocity at an instant. Legitimate for a hyperbolic equation on a non-characteristic curve; fatal for an elliptic one.",
"section": "What kind of equation is this?",
"slide": "What each type will accept",
"keys": [
"cauchy data"
]
},
{
"term_html": "domain of dependence",
"html": "The set of initial points whose data can affect \\(u(x_0,t_0)\\): the interval \\([x_0 - ct_0,\\ x_0 + ct_0]\\), read straight off d'Alembert's formula.",
"section": "d'Alembert",
"slide": "Domain of dependence, range of influence",
"keys": [
"domain of dependence"
]
},
{
"term_html": "range of influence",
"html": "The set of spacetime points that data at \\(x_0\\) can affect: the cone \\(|x - x_0| \\le c|t|\\). The domain of dependence turned upside down.",
"section": "d'Alembert",
"slide": "Domain of dependence, range of influence",
"keys": [
"range of influence"
]
},
{
"term_html": "finite propagation speed",
"html": "The theorem that data vanishing outside \\([\\alpha,\\beta]\\) gives a solution vanishing outside \\([\\alpha - c|t|,\\ \\beta + c|t|]\\). Not an assumption: \\(c\\) entered the equation as \\(\\sqrt{T/\\mu}\\), a ratio of static material properties, and its role as a speed limit is deduced.",
"section": "d'Alembert",
"slide": "Domain of dependence, range of influence",
"keys": [
"finite propagation speed"
]
},
{
"term_html": "method of images",
"html": "Solving a boundary-value problem on \\([0,L]\\) by extending the data to the whole line so that the free-space solution automatically satisfies the boundary conditions: oddly for a fixed end, evenly for a free one.",
"section": "The finite string, by images",
"slide": "A fixed end is an odd extension",
"keys": [
"method of images"
]
},
{
"term_html": "odd periodic extension",
"html": "The extension of \\(f\\) on \\([0,L]\\) that is odd about \\(0\\) and \\(2L\\)-periodic — hence also odd about \\(L\\). It requires the compatibility conditions \\(f(0) = f(L) = 0\\), and it makes every motion of the fixed–fixed string periodic with period \\(2L/c\\).",
"section": "The finite string, by images",
"slide": "A fixed end is an odd extension",
"keys": [
"odd periodic extension"
]
},
{
"term_html": "initial-boundary-value problem",
"html": "An evolution equation with data at one time <em>and</em> conditions at the spatial ends, for all time. The string's problem; not to be confused with the pure Cauchy problem on the whole line.",
"section": "The finite string, by images",
"slide": "A fixed end is an odd extension",
"keys": [
"initial-boundary-value problem"
]
},
{
"term_html": "reflection with inversion",
"html": "What a pulse does at a fixed end: it returns reversed left-to-right <em>and</em> upside down. At a free end it returns the same way up. Same amplitude in both cases.",
"section": "The finite string, by images",
"slide": "A free end is an even extension",
"keys": [
"reflection with inversion"
]
},
{
"term_html": "Dirichlet boundary condition",
"html": "\\(u = 0\\) at an end — the string is tied down.",
"section": "The finite string, by images",
"slide": "A free end is an even extension",
"keys": [
"dirichlet boundary condition"
]
},
{
"term_html": "Neumann boundary condition",
"html": "\\(u_x = 0\\) at an end — the transverse tension \\(Tu_x\\) vanishes, so the end is free. Section 8 derives it as unit 11's natural boundary condition rather than assuming it.",
"section": "The finite string, by images",
"slide": "A free end is an even extension",
"keys": [
"neumann boundary condition"
]
},
{
"term_html": "energy density",
"html": "\\(e = \\tfrac12\\mu u_t^2 + \\tfrac12Tu_x^2\\), in \\(\\mathrm{J\\,m^{-1}}\\): kinetic plus elastic energy per unit length. Equals the Legendre transform \\(u_t\\,\\partial\\mathcal L/\\partial u_t - \\mathcal L\\) of the Lagrangian density.",
"section": "Energy",
"slide": "Energy density and energy flux",
"keys": [
"energy density"
]
},
{
"term_html": "energy flux",
"html": "\\(S = -T\\,u_t u_x\\), in watts: the power carried past a point in the \\(+x\\) direction. For a right-moving wave \\(S = c\\,e\\); for a left-moving one \\(S = -c\\,e\\).",
"section": "Energy",
"slide": "Energy density and energy flux",
"keys": [
"energy flux"
]
},
{
"term_html": "local conservation law",
"html": "\\(\\partial_t e + \\partial_x S = 0\\): the energy in any region changes only by flowing through its boundary. The template for every conservation law later in the course, including \\(\\partial_\\mu T^{\\mu\\nu} = 0\\).",
"section": "Energy",
"slide": "Energy density and energy flux",
"keys": [
"local conservation law"
]
},
{
"term_html": "Leibniz's rule (differentiation under the integral sign)",
"html": "If \\(F\\) and \\(\\partial_t F\\) are continuous on \\([0,L]\\times[t_1,t_2]\\) then \\(\\frac{\\mathrm d}{\\mathrm dt}\\int_0^L F\\,\\mathrm dx = \\int_0^L \\partial_t F\\,\\mathrm dx\\). Proved in this unit from uniform continuity on a compact rectangle.",
"section": "Energy",
"slide": "Differentiating under the integral sign",
"keys": [
"leibniz's rule (differentiation under the integral sign)",
"leibniz's rule",
"differentiation under the integral sign"
]
},
{
"term_html": "energy method",
"html": "Proving uniqueness by showing the difference of two solutions has zero energy: the energy is conserved, nonnegative, and vanishes only when \\(w_t \\equiv w_x \\equiv 0\\). It replaces unit 01's Lipschitz argument, needs no formula for the solution, and also yields continuous dependence and finite propagation speed.",
"section": "Energy",
"slide": "Uniqueness, by energy",
"keys": [
"energy method"
]
},
{
"term_html": "well-posedness",
"html": "Hadamard's three conditions on a problem \"data \\(\\mapsto\\) solution\": existence, uniqueness, and continuity of the map in named norms. Naming the norms is part of the statement.",
"section": "Well-posedness",
"slide": "Hadamard's three conditions",
"keys": [
"well-posedness"
]
},
{
"term_html": "continuous dependence",
"html": "Hadamard's third clause, and the one with content: small changes in the data give small changes in the solution. Proved for every Lipschitz ODE in unit 01; not automatic for a PDE.",
"section": "Well-posedness",
"slide": "Hadamard's three conditions",
"keys": [
"continuous dependence"
]
},
{
"term_html": "ill-posed",
"html": "Failing any one of the three conditions. The Cauchy problem for Laplace's equation fails only the third, and does so with data \\(\\tfrac1n\\sin(nx)\\) whose solution at unit distance is \\(\\sinh(n)/n^2\\): \\(6\\times10^{5}\\) at \\(n = 20\\).",
"section": "Well-posedness",
"slide": "Hadamard's example: Cauchy data on Laplace",
"keys": [
"ill-posed"
]
},
{
"term_html": "Lagrangian density",
"html": "\\(\\mathcal L = \\tfrac12\\mu u_t^2 - \\tfrac12Tu_x^2\\), a number attached to a <em>point</em>, built from the field and its first derivatives there. Locality is the whole content, and is why field theory can be made compatible with relativity.",
"section": "The string as a field theory",
"slide": "From the chain's Lagrangian to a density",
"keys": [
"lagrangian density"
]
},
{
"term_html": "action (for a field)",
"html": "\\(\\mathcal S[u] = \\int\\!\\!\\int \\mathcal L\\,\\mathrm dx\\,\\mathrm dt\\) over a spacetime rectangle. Its stationary points satisfy \\(\\partial_t\\mathcal L_{u_t} + \\partial_x\\mathcal L_{u_x} - \\mathcal L_u = 0\\), which for the string is \\(\\mu u_{tt} = Tu_{xx}\\).",
"section": "The string as a field theory",
"slide": "The Euler–Lagrange equation for a field",
"keys": [
"action (for a field)",
"action",
"for a field"
]
}
];
