// Generated from GLOSSARY.org by `mr glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "Euler–Lagrange equations",
"html": "\\(\\frac{\\mathrm d}{\\mathrm dt}\\,\\partial L/\\partial\\dot q_a = \\partial L/\\partial q_a\\), one for each coordinate: unit 11's equation with the independent variable renamed \\(t\\) and the integrand renamed \\(L\\). The equations of motion, in any coordinates.",
"section": "Overview",
"slide": "One bead, one hoop, three lines",
"keys": [
"euler–lagrange equations"
]
},
{
"term_html": "holonomic constraint",
"html": "An equation \\(G(x, t) = 0\\) restricting the positions of the particles. With \\(k\\) independent ones among \\(3N\\) Cartesian coordinates, \\(3N - k\\) coordinates remain free.",
"section": "The principle",
"slide": "Generalised coordinates and constraints",
"keys": [
"holonomic constraint"
]
},
{
"term_html": "scleronomic",
"html": "Said of a holonomic constraint with no explicit time dependence, like a fixed wire.",
"section": "The principle",
"slide": "Generalised coordinates and constraints",
"keys": [
"scleronomic"
]
},
{
"term_html": "rheonomic",
"html": "Said of a holonomic constraint that depends explicitly on time, like a wire turned by a motor. Still a constraint on positions, not on velocities.",
"section": "The principle",
"slide": "Generalised coordinates and constraints",
"keys": [
"rheonomic"
]
},
{
"term_html": "generalised coordinates",
"html": "Coordinates \\(q = (q_1, \\dots, q_n)\\) such that the allowed positions are \\(x(q, t)\\), with \\(q \\mapsto x(q, t)\\) injective and \\(\\partial x/\\partial q\\) of rank \\(n\\). The constraints then hold automatically.",
"section": "The principle",
"slide": "Generalised coordinates and constraints",
"keys": [
"generalised coordinates"
]
},
{
"term_html": "degrees of freedom",
"html": "The number \\(n\\) of generalised coordinates needed: \\(3N\\) minus the number of independent holonomic constraints.",
"section": "The principle",
"slide": "Generalised coordinates and constraints",
"keys": [
"degrees of freedom"
]
},
{
"term_html": "configuration space",
"html": "The set of allowed configurations, as a space in its own right: a circle for the bead on a hoop, a torus for the double pendulum. A manifold, defined properly in unit 31.",
"section": "The principle",
"slide": "Generalised coordinates and constraints",
"keys": [
"configuration space"
]
},
{
"term_html": "virtual displacement",
"html": "A displacement \\(\\delta\\vec x_k = \\sum_a(\\partial\\vec x_k/\\partial q_a)\\,\\delta q_a\\) tangent to the constraint set with time held fixed.",
"section": "The principle",
"slide": "Virtual displacements and d'Alembert's principle",
"keys": [
"virtual displacement"
]
},
{
"term_html": "ideal constraint",
"html": "One whose forces do no work on any virtual displacement: \\(\\sum_k\\vec R_k\\cdot\\delta\\vec x_k = 0\\). True of smooth surfaces, rigid rods and rolling without slipping; false for sliding friction. A rheonomic ideal constraint may still do real work.",
"section": "The principle",
"slide": "Virtual displacements and d'Alembert's principle",
"keys": [
"ideal constraint"
]
},
{
"term_html": "d'Alembert's principle",
"html": "\\(\\sum_k(\\vec F_k - m_k\\ddot{\\vec x}_k)\\cdot\\delta\\vec x_k = 0\\) for all virtual displacements: Newton's law with the unknown constraint forces removed by the assumption that they are ideal.",
"section": "The principle",
"slide": "Virtual displacements and d'Alembert's principle",
"keys": [
"d'alembert's principle"
]
},
{
"term_html": "Lagrange's equations",
"html": "\\(\\frac{\\mathrm d}{\\mathrm dt}\\,\\partial T/\\partial\\dot q_a - \\partial T/\\partial q_a = Q_a\\), or with a potential, the Euler–Lagrange equations of \\(L = T - V\\). Derived from d'Alembert's principle by two identities.",
"section": "The principle",
"slide": "From d'Alembert to Lagrange's equations",
"keys": [
"lagrange's equations"
]
},
{
"term_html": "generalised force",
"html": "\\(Q_a = \\sum_k\\vec F_k\\cdot\\partial\\vec x_k/\\partial q_a\\): the applied force paired with the \\(a\\)-th direction of virtual displacement. A torque when \\(q_a\\) is an angle.",
"section": "The principle",
"slide": "From d'Alembert to Lagrange's equations",
"keys": [
"generalised force"
]
},
{
"term_html": "Lagrangian",
"html": "\\(L(q, \\dot q, t) = T - V\\), a function of positions, velocities and time whose action is stationary on the motion. Not unique, and not an energy.",
"section": "The principle",
"slide": "Hamilton's principle",
"keys": [
"lagrangian"
]
},
{
"term_html": "action",
"html": "The functional \\(S[q] = \\int_{t_0}^{t_1}L(q, \\dot q, t)\\,\\mathrm dt\\) on paths with fixed ends. Dimension \\(\\mathrm{J\\,s}\\).",
"section": "The principle",
"slide": "Hamilton's principle",
"keys": [
"action"
]
},
{
"term_html": "Hamilton's principle",
"html": "A path is a motion if and only if it makes the action stationary among paths with the same endpoints. Stationary, not least: past a conjugate point the action is not a minimum.",
"section": "The principle",
"slide": "Hamilton's principle",
"keys": [
"hamilton's principle"
]
},
{
"term_html": "form invariance",
"html": "The Euler–Lagrange equations keep their form under any \\(C^2\\) point transformation with invertible Jacobian: the equations of \\(\\tilde L\\) hold exactly when those of \\(L\\) do. Componentwise, \\(\\tilde{\\mathcal E} = J^{\\top}\\mathcal E\\).",
"section": "Coordinates stop mattering",
"slide": "The theorem the formalism exists for",
"keys": [
"form invariance"
]
},
{
"term_html": "point transformation",
"html": "A change of coordinates \\(q = \\phi(Q, t)\\) on configuration space, possibly time-dependent, with \\(\\partial\\phi/\\partial Q\\) invertible. It does not mix in velocities.",
"section": "Coordinates stop mattering",
"slide": "The theorem the formalism exists for",
"keys": [
"point transformation"
]
},
{
"term_html": "general covariance",
"html": "The principle that the laws are written the same way in every coordinate system. Here, a theorem about the Euler–Lagrange equations; at the end of the course, a requirement on the laws of gravity.",
"section": "Coordinates stop mattering",
"slide": "The theorem the formalism exists for",
"keys": [
"general covariance"
]
},
{
"term_html": "torus",
"html": "The product \\(S^1 \\times S^1\\) of two circles: the configuration space of the double pendulum, a pair of angles each defined modulo \\(2\\pi\\). No single chart covers it.",
"section": "Coordinates stop mattering",
"slide": "Configuration space is a manifold",
"keys": [
"torus"
]
},
{
"term_html": "generalised momentum (canonical momentum)",
"html": "\\(p_a = \\partial L/\\partial\\dot q_a\\). An angular momentum when \\(q_a\\) is an angle; \\(m\\dot{\\vec x} + q\\vec A\\) for a charge in a magnetic field; not in general \\(m\\dot q_a\\).",
"section": "Reading the equations",
"slide": "Generalised momenta and cyclic coordinates",
"keys": [
"generalised momentum (canonical momentum)",
"generalised momentum",
"canonical momentum"
]
},
{
"term_html": "cyclic coordinate (ignorable coordinate)",
"html": "A coordinate absent from \\(L\\), only its velocity appearing. Its momentum is conserved, by the Euler–Lagrange equation in one line. Whether a coordinate is cyclic depends on the whole chart.",
"section": "Reading the equations",
"slide": "Generalised momenta and cyclic coordinates",
"keys": [
"cyclic coordinate (ignorable coordinate)",
"cyclic coordinate",
"ignorable coordinate"
]
},
{
"term_html": "effective potential",
"html": "A potential in fewer coordinates that governs the remaining motion once a conserved quantity is used: unit 08's \\(V(r) + p_\\theta^2/2\\mu r^2\\), and the hoop's \\(V_{\\mathrm{eff}} = -\\tfrac12 mR^2\\Omega^2\\sin^2\\theta - mgR\\cos\\theta\\).",
"section": "Reading the equations",
"slide": "Worked: Kepler, with no force drawn",
"keys": [
"effective potential"
]
},
{
"term_html": "energy function",
"html": "\\(h = \\sum_a\\dot q_a\\,\\partial L/\\partial\\dot q_a - L\\), with \\(\\mathrm dh/\\mathrm dt = -\\partial L/\\partial t\\) along motions. Equal to \\(T + V\\) when the constraints are scleronomic; different otherwise, as on the driven hoop.",
"section": "Reading the equations",
"slide": "The energy function",
"keys": [
"energy function"
]
},
{
"term_html": "pitchfork bifurcation",
"html": "Unit 02's \\(\\dot x = \\mu x - x^3\\): as \\(\\mu\\) passes zero, a symmetric equilibrium loses stability and two stable ones branch off. On the hoop, \\(\\mu = \\Omega^2 - g/R\\).",
"section": "Reading the equations",
"slide": "The pitchfork, in unit 02's normal form",
"keys": [
"pitchfork bifurcation"
]
},
{
"term_html": "separatrix",
"html": "A level set of a conserved quantity passing through a saddle, dividing qualitatively different motions: on the fast hoop, the figure of eight separating rocking on one side from swinging through the bottom.",
"section": "Reading the equations",
"slide": "Phase portraits on each side",
"keys": [
"separatrix"
]
},
{
"term_html": "constraint force",
"html": "The force \\(\\vec R_k\\) enforcing a constraint. Recovered, when wanted, as \\(\\sum_j\\lambda_j\\partial G_j/\\partial q_a\\) by keeping a redundant coordinate and adding a multiplier for its constraint.",
"section": "Constraint forces, when you want them",
"slide": "Multipliers bring the forces back",
"keys": [
"constraint force"
]
},
{
"term_html": "non-holonomic constraint",
"html": "A constraint on velocities, \\(\\sum_aA_a(q)\\,\\dot q_a = 0\\), not equivalent to any constraint on positions: the knife edge, the rolling disc.",
"section": "Constraint forces, when you want them",
"slide": "Non-holonomic constraints, honestly",
"keys": [
"non-holonomic constraint"
]
},
{
"term_html": "Lagrange–d'Alembert principle",
"html": "For constraints linear in the velocities: virtual displacements obey the constraint, ideal forces do no work on them, hence \\(\\frac{\\mathrm d}{\\mathrm dt}\\,\\partial L/\\partial\\dot q_a - \\partial L/\\partial q_a = \\sum_j\\lambda_jA_{ja}\\). The correct mechanics for non-holonomic systems.",
"section": "Constraint forces, when you want them",
"slide": "Non-holonomic constraints, honestly",
"keys": [
"lagrange–d'alembert principle"
]
},
{
"term_html": "vakonomic mechanics",
"html": "Making the action stationary among curves that obey a non-holonomic constraint. It gives different equations from Lagrange–d'Alembert, with an extra free initial datum, and is not the mechanics of rolling and sliding bodies.",
"section": "Constraint forces, when you want them",
"slide": "Non-holonomic constraints, honestly",
"keys": [
"vakonomic mechanics"
]
},
{
"term_html": "gauge transformation (gauge freedom)",
"html": "\\(L \\to L + \\mathrm df(q, t)/\\mathrm dt\\). The equations of motion are unchanged; the canonical momenta shift by \\(\\partial f/\\partial q_a\\) and the energy function by \\(-\\partial f/\\partial t\\).",
"section": "What L is allowed to be",
"slide": "Gauge freedom",
"keys": [
"gauge transformation (gauge freedom)",
"gauge transformation",
"gauge freedom"
]
},
{
"term_html": "generalised potential (velocity-dependent potential)",
"html": "A function \\(U(q, \\dot q, t)\\) with \\(Q_a = \\frac{\\mathrm d}{\\mathrm dt}\\,\\partial U/\\partial\\dot q_a - \\partial U/\\partial q_a\\), so that \\(L = T - U\\). For a charge, \\(U = q\\phi - q\\dot{\\vec x}\\cdot\\vec A\\).",
"section": "What L is allowed to be",
"slide": "Velocity-dependent potentials",
"keys": [
"generalised potential (velocity-dependent potential)",
"generalised potential",
"velocity-dependent potential"
]
},
{
"term_html": "kinetic momentum",
"html": "\\(m\\dot{\\vec x}\\), as opposed to the canonical momentum \\(m\\dot{\\vec x} + q\\vec A\\). The gauge-invariant one.",
"section": "What L is allowed to be",
"slide": "Velocity-dependent potentials",
"keys": [
"kinetic momentum"
]
},
{
"term_html": "mass matrix",
"html": "\\(M = M(q_0)\\), where \\(T = \\tfrac12\\dot q^{\\top}M(q)\\dot q\\): symmetric and positive definite.",
"section": "Small oscillations",
"slide": "Linearising a Lagrangian",
"keys": [
"mass matrix"
]
},
{
"term_html": "stiffness matrix",
"html": "\\(K = \\mathrm{Hess}\\,V(q_0)\\) at an equilibrium: symmetric, positive definite at a strict minimum.",
"section": "Small oscillations",
"slide": "Linearising a Lagrangian",
"keys": [
"stiffness matrix"
]
},
{
"term_html": "normal frequency",
"html": "A root \\(\\omega\\) of \\(\\det(K - \\omega^2M) = 0\\); there are \\(n\\) values of \\(\\omega^2\\), all real.",
"section": "Small oscillations",
"slide": "Modes: \\(\\det(K - \\omega^2M) = 0\\)",
"keys": [
"normal frequency"
]
},
{
"term_html": "normal mode",
"html": "A vector \\(v\\) with \\((K - \\omega^2M)v = 0\\): a pattern in which every coordinate oscillates at the one frequency \\(\\omega\\). Distinct modes are orthogonal in the inner product \\(u^{\\top}Mv\\), not in the Euclidean one.",
"section": "Small oscillations",
"slide": "Modes: \\(\\det(K - \\omega^2M) = 0\\)",
"keys": [
"normal mode"
]
}
];
