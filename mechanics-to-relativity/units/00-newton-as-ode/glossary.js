// Generated from GLOSSARY.org by `mr glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "Newton's first law",
"html": "The assertion that <em>inertial frames exist</em>: there are frames of reference in which a body subject to no force moves with constant velocity. Read as \"\\(F=0 \\Rightarrow a=0\\)\" it is the case \\(F = 0\\) of the second law and is empty; read as an existence claim about frames it is what makes the second law falsifiable.",
"section": "What the three laws assert",
"slide": "The first law is a definition, not a special case",
"keys": [
"newton's first law"
]
},
{
"term_html": "inertial frame",
"html": "A frame in which the first law holds. Given one, every frame in uniform motion relative to it is another, since \\(\\vec r' = \\vec r - \\vec u t\\) with \\(\\vec u\\) constant gives \\(\\ddot{\\vec r}' = \\ddot{\\vec r}\\). A rotating frame is not one.",
"section": "What the three laws assert",
"slide": "The first law is a definition, not a special case",
"keys": [
"inertial frame"
]
},
{
"term_html": "Galilean group",
"html": "The changes of frame that preserve inertiality: translations in space and time, rotations, and boosts \\(\\vec r \\mapsto \\vec r - \\vec u t\\). Unit 25 shows Maxwell's equations do not survive it, which is where relativity starts.",
"section": "What the three laws assert",
"slide": "The first law is a definition, not a special case",
"keys": [
"galilean group"
]
},
{
"term_html": "Newton's second law",
"html": "In an inertial frame, \\(\\vec F = m\\ddot{\\vec r}\\), better written \\(\\vec F = \\dot{\\vec p}\\). Not one equation but a template: it becomes an equation only when a force law supplies \\(\\vec F\\) as a function of \\(\\vec r, \\dot{\\vec r}, t\\), and it is then a second-order ODE.",
"section": "What the three laws assert",
"slide": "The second law is a scheme",
"keys": [
"newton's second law"
]
},
{
"term_html": "momentum",
"html": "\\(\\vec p = m\\dot{\\vec r}\\), of dimension \\(\\mathsf{MLT^{-1}}\\). The momentum form of the second law is the one that survives to variable-mass problems and to relativity, where \\(\\vec F = m\\vec a\\) is false.",
"section": "What the three laws assert",
"slide": "The second law is a scheme",
"keys": [
"momentum"
]
},
{
"term_html": "force law",
"html": "An independent physical hypothesis supplying \\(\\vec F\\): uniform gravity \\(-mg\\), Hooke \\(-kx\\), linear drag \\(-bv\\), quadratic drag \\(-c\\,v|v|\\), a drive \\(F_0\\cos\\omega t\\). Mechanics does not derive force laws, it integrates them; each is an approximation with a stated range of validity.",
"section": "What the three laws assert",
"slide": "Force laws are input, not theorem",
"keys": [
"force law"
]
},
{
"term_html": "Newton's third law",
"html": "\\(\\vec F_{12} = -\\vec F_{21}\\). Its consequence is momentum conservation, by adding the two second laws. It is false for forces mediated by fields, because the field carries momentum and takes time to arrive.",
"section": "What the three laws assert",
"slide": "The third law, and what it does not say",
"keys": [
"newton's third law"
]
},
{
"term_html": "conservation of momentum",
"html": "For an isolated system the total momentum is constant. The durable statement; the third law is a special case of it and not the other way round, and unit 13 derives it from translation invariance instead.",
"section": "What the three laws assert",
"slide": "The third law, and what it does not say",
"keys": [
"conservation of momentum"
]
},
{
"term_html": "constraint force",
"html": "A force of unknown magnitude whose direction is fixed by a geometric constraint — the pendulum rod's tension. It is eliminated by taking the component of \\(\\vec F = m\\vec a\\) along the direction the body is free to move in, which is where the equation \\(\\ddot\\theta = -(g/l)\\sin\\theta\\) comes from. Unit 12 turns the elimination into a method.",
"section": "What the three laws assert",
"slide": "The pendulum, from the laws",
"keys": [
"constraint force"
]
},
{
"term_html": "dimension",
"html": "The vector \\(D_{\\cdot q} \\in \\mathbb{Q}^d\\) of exponents recording how a quantity's numerical value responds to a change of base units: if the change multiplies every measurement in base dimension \\(i\\) by \\(\\lambda_i\\), it sends \\(q \\mapsto (\\prod_i \\lambda_i^{D_{iq}})q\\). That is a group action of \\((\\mathbb{R}_{&gt;0})^d\\).",
"section": "Dimensions, before any calculus",
"slide": "Units as a group action",
"keys": [
"dimension"
]
},
{
"term_html": "base dimension",
"html": "One of the \\(d\\) independent dimensions chosen as primitive; for mechanics \\(d = 3\\) and they are mass \\(\\mathsf M\\), length \\(\\mathsf L\\), time \\(\\mathsf T\\). Which ones are base is a convention, but taking fewer lowers the rank and therefore weakens the conclusion.",
"section": "Dimensions, before any calculus",
"slide": "Units as a group action",
"keys": [
"base dimension"
]
},
{
"term_html": "dimensional homogeneity",
"html": "The hypothesis — not a theorem — that a physical law holds in one consistent system of units if and only if it holds in all of them: \\(f(q) = 0 \\Rightarrow f(\\lambda^D q) = 0\\). Every dimensional argument rests on it, and every failed dimensional argument is a missing variable.",
"section": "Dimensions, before any calculus",
"slide": "Units as a group action",
"keys": [
"dimensional homogeneity"
]
},
{
"term_html": "dimension matrix",
"html": "The matrix \\(D \\in \\mathbb{Q}^{d \\times n}\\) with one row per base dimension and one column per quantity. The monomial \\(\\prod_j q_j^{a_j}\\) is dimensionless exactly when \\(Da = 0\\), so the dimensionless monomials are \\(\\ker D\\).",
"section": "Dimensions, before any calculus",
"slide": "The dimension matrix and its kernel",
"keys": [
"dimension matrix"
]
},
{
"term_html": "dimensionless group",
"html": "A dimensionless monomial in the quantities; equivalently an element of \\(\\ker D\\). A basis of \\(\\ker D\\) gives \\(n - r\\) independent groups, with \\(r = \\operatorname{rank} D\\). The basis is not canonical, the subspace is.",
"section": "Dimensions, before any calculus",
"slide": "The dimension matrix and its kernel",
"keys": [
"dimensionless group"
]
},
{
"term_html": "Buckingham pi theorem",
"html": "A dimensionally homogeneous relation \\(f(q_1,\\dots,q_n) = 0\\) is equivalent to a relation \\(F(\\pi_1,\\dots,\\pi_{n-r}) = 0\\) among any basis of dimensionless groups, \\(r = \\operatorname{rank} D\\). Proved by choosing units that set \\(r\\) of the quantities to 1, which is possible because \\(D_{[1..r]}^\\top\\) is surjective.",
"section": "Dimensions, before any calculus",
"slide": "The Buckingham pi theorem",
"keys": [
"buckingham pi theorem"
]
},
{
"term_html": "mechanical similarity",
"html": "If \\(F\\) is homogeneous of degree \\(k\\) then \\(x(t) \\mapsto \\alpha x(t/\\beta)\\) maps solutions to solutions whenever \\(\\beta^2 = \\alpha^{1-k}\\); hence \\(T \\propto a^{(1-k)/2}\\). Gives Kepler's third law (\\(k = -2\\)) and the isochrony of the spring (\\(k = 1\\)) in two lines.",
"section": "Dimensions, before any calculus",
"slide": "Mechanical similarity: scaling the equation, not the units",
"keys": [
"mechanical similarity"
]
},
{
"term_html": "isochronous",
"html": "Having a period independent of amplitude. True of the harmonic oscillator and of Huygens' cycloidal pendulum; false of the circular pendulum, whose period exceeds \\(2\\pi\\sqrt{l/g}\\) by \\(1\\) per cent at \\(22.81^\\circ\\).",
"section": "Dimensions, before any calculus",
"slide": "Mechanical similarity: scaling the equation, not the units",
"keys": [
"isochronous"
]
},
{
"term_html": "quadrature",
"html": "The classical sense of \"solved\": the answer has been expressed in terms of integrals of known functions and their inverses, whether or not the integrals have names. \\(m\\ddot x = F\\) reduces to quadrature when \\(F\\) depends on only one of \\(t\\), \\(v\\), \\(x\\).",
"section": "Three forces you can integrate",
"slide": "Newton II as a second-order ODE",
"keys": [
"quadrature"
]
},
{
"term_html": "separation of variables",
"html": "For \\(m\\dot v = F(v)\\) with \\(F(v) \\neq 0\\), writing \\(m\\,\\mathrm dv/F(v) = \\mathrm dt\\) and integrating, which gives \\(t\\) as a function of \\(v\\). Dividing by \\(F(v)\\) assumes \\(F(v) \\neq 0\\), so the zeros must be checked first and treated separately.",
"section": "Three forces you can integrate",
"slide": "Case 2: \\(F(v)\\), separate then invert",
"keys": [
"separation of variables"
]
},
{
"term_html": "implicit solution",
"html": "A relation determining the unknown without exhibiting it — here \\(t = G(v)\\) rather than \\(v = G^{-1}(t)\\). The inversion is legitimate wherever \\(G' = m/F \\neq 0\\), by the one-variable inverse function theorem, and it is exactly at a zero of \\(F\\) that it fails.",
"section": "Three forces you can integrate",
"slide": "Case 2: \\(F(v)\\), separate then invert",
"keys": [
"implicit solution"
]
},
{
"term_html": "terminal velocity",
"html": "A zero \\(v_\\infty\\) of the total force, approached but not attained: \\(\\int^{v_\\infty}\\mathrm dw/F(w)\\) diverges. For gravity with linear drag \\(v_\\infty = mg/b\\), reached to within 1 per cent after \\(\\tau\\ln 100\\) with \\(\\tau = m/b\\); with quadratic drag \\(v_\\infty = \\sqrt{mg/c}\\) and \\(v(t) = v_\\infty\\tanh(gt/v_\\infty)\\).",
"section": "Three forces you can integrate",
"slide": "Case 2: \\(F(v)\\), separate then invert",
"keys": [
"terminal velocity"
]
},
{
"term_html": "potential energy",
"html": "For a one-dimensional force \\(F(x)\\), the function \\(V\\) with \\(V' = -F\\), that is \\(V(x) = -\\int_{x_{\\mathrm{ref}}}^x F\\). It exists for every continuous \\(F(x)\\) in one dimension, by the fundamental theorem of calculus, and has no automatic three-dimensional analogue — that question is unit 04's.",
"section": "Three forces you can integrate",
"slide": "Case 3: \\(F(x)\\) — where energy comes from",
"keys": [
"potential energy"
]
},
{
"term_html": "first integral",
"html": "A function of \\((x, \\dot x, t)\\) constant along every solution. Each one lowers the order of the problem by one. \\(E = \\tfrac12 m\\dot x^2 + V(x)\\) is one, obtained by multiplying \\(m\\ddot x = F(x)\\) by \\(\\dot x\\), which works because both sides then become exact derivatives — and which works because the equation has no explicit \\(t\\) in it.",
"section": "Three forces you can integrate",
"slide": "Case 3: \\(F(x)\\) — where energy comes from",
"keys": [
"first integral"
]
},
{
"term_html": "turning point",
"html": "A point \\(a\\) with \\(V(a) = E\\), where the speed vanishes. The motion is confined to \\(\\{V \\le E\\}\\), and the time to reach \\(a\\) is finite when \\(V'(a) \\neq 0\\) and infinite when \\(V'(a) = 0\\) — the time to reach a point is infinite exactly when that point is an equilibrium.",
"section": "Reading the motion off the potential",
"slide": "Turning points, wells and barriers",
"keys": [
"turning point"
]
},
{
"term_html": "equilibrium",
"html": "A point \\(x_\\star\\) with \\(V'(x_\\star) = 0\\), so that \\(x \\equiv x_\\star\\) solves the equation. Stable if \\(V\\) has a strict local minimum there (the energy is then a Lyapunov function), unstable if a strict local maximum.",
"section": "Reading the motion off the potential",
"slide": "Turning points, wells and barriers",
"keys": [
"equilibrium"
]
},
{
"term_html": "bounded motion",
"html": "Motion in a component of \\(\\{V \\le E\\}\\) bounded on both sides by turning points. If both endpoints are genuine — \\(V' \\neq 0\\) there — it is periodic, with period \\(T(E) = \\sqrt{2m}\\int_a^b \\mathrm dx/\\sqrt{E - V(x)}\\), an improper integral that converges for exactly that reason. If an endpoint is an equilibrium the integral diverges and the motion is a separatrix instead.",
"section": "Reading the motion off the potential",
"slide": "Turning points, wells and barriers",
"keys": [
"bounded motion"
]
},
{
"term_html": "unbounded motion",
"html": "Motion in a component of \\(\\{V \\le E\\}\\) unbounded on one side: the body escapes. Which case you are in depends on the initial position as well as on \\(E\\).",
"section": "Reading the motion off the potential",
"slide": "Turning points, wells and barriers",
"keys": [
"unbounded motion"
]
},
{
"term_html": "separatrix",
"html": "The motion at the critical energy that ends at an unstable equilibrium, dividing bounded from unbounded families. It is not periodic: the arrival takes infinite time. For the pendulum it is \\(E = 2mgl\\), and the divergence is logarithmic — the period is \\(7.826\\) s at \\(\\theta_0 = 179^\\circ\\) and \\(13.71\\) s at \\(179.99^\\circ\\) for \\(l = 1.000\\) m.",
"section": "Reading the motion off the potential",
"slide": "When is the time finite?",
"keys": [
"separatrix"
]
},
{
"term_html": "complete elliptic integral of the first kind",
"html": "\\(K(k) = \\int_0^{\\pi/2} \\mathrm d\\varphi/\\sqrt{1 - k^2\\sin^2\\varphi}\\), the tabulated special function in terms of which the pendulum's period is exact: \\(T = 4\\sqrt{l/g}\\, K(\\sin(\\theta_0/2))\\). Not an elementary function. Beware the convention \\(K(m)\\) with \\(m = k^2\\), which most software uses.",
"section": "The pendulum, exactly",
"slide": "The half-angle substitution and the elliptic integral",
"keys": [
"complete elliptic integral of the first kind"
]
}
];
