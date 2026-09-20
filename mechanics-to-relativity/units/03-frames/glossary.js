// Generated from GLOSSARY.org by `mr glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "partial derivative",
"html": "The derivative of \\(f\\) along one coordinate line, \\(\\partial_i f(a) = \\lim_{h\\to0}\\big(f(a+he_i)-f(a)\\big)/h\\). Existence of all of them says almost nothing on its own: \\(xy/(x^2+y^2)\\) has both at the origin and is not even continuous there.",
"section": "Differentiating in several variables",
"slide": "Partials are not enough",
"keys": [
"partial derivative"
]
},
{
"term_html": "directional derivative",
"html": "The same limit with an arbitrary unit vector \\(u\\) in place of \\(e_i\\). Existence for every \\(u\\), plus continuity, still does not give differentiability: \\(x^3/(x^2+y^2)\\) has \\(D_ug(0) = u_1^3\\), which is not linear in \\(u\\).",
"section": "Differentiating in several variables",
"slide": "Partials are not enough",
"keys": [
"directional derivative"
]
},
{
"term_html": "total derivative (differential)",
"html": "The linear map \\(Df(a):\\mathbb R^n \\to \\mathbb R^m\\) with \\(f(a+h) = f(a) + Df(a)h + o(\\lVert h\\rVert)\\): the linear map best approximating \\(f\\) near \\(a\\). Unique when it exists, and it is a <strong>map</strong>, not a matrix — the matrix needs a basis.",
"section": "Differentiating in several variables",
"slide": "The derivative is a linear map",
"keys": [
"total derivative (differential)",
"total derivative",
"differential"
]
},
{
"term_html": "Jacobian matrix",
"html": "The matrix of \\(Df(a)\\) in the standard bases, with entries \\(\\partial_j f_i(a)\\). That it exists and has those entries is a theorem about the total derivative, not the definition of it.",
"section": "Differentiating in several variables",
"slide": "The Jacobian, and when partials suffice",
"keys": [
"jacobian matrix"
]
},
{
"term_html": "continuously differentiable, \\(C^1\\)",
"html": "All partials exist near \\(a\\) and are continuous at \\(a\\). Sufficient for differentiability, strictly stronger than it, and the licence used silently for every map in this course.",
"section": "Differentiating in several variables",
"slide": "The Jacobian, and when partials suffice",
"keys": [
"continuously differentiable, c^1",
"continuously differentiable",
"c^1"
]
},
{
"term_html": "multivariable chain rule",
"html": "\\(D(g\\circ f)(a) = Dg(f(a)) \\circ Df(a)\\): the derivative of a composite is the composite of the derivatives. In components it is the \\((i,k)\\) entry of a matrix product and not worth memorising in that form.",
"section": "Differentiating in several variables",
"slide": "The chain rule, once",
"keys": [
"multivariable chain rule"
]
},
{
"term_html": "Clairaut's theorem (Schwarz's theorem)",
"html": "If both mixed second partials exist near \\(a\\) and are continuous at \\(a\\), they are equal. Peano's \\(xy(x^2-y^2)/(x^2+y^2)\\) fails the hypothesis and has \\(\\partial_2\\partial_1 f(0,0) = -1\\), \\(\\partial_1\\partial_2 f(0,0) = +1\\).",
"section": "Differentiating in several variables",
"slide": "Clairaut, and the function that breaks it",
"keys": [
"clairaut's theorem (schwarz's theorem)",
"clairaut's theorem",
"schwarz's theorem"
]
},
{
"term_html": "vector-valued function",
"html": "A map \\(\\gamma : I \\to \\mathbb R^3\\) from an interval, differentiable iff each component is. Its total derivative is \\(t\\mapsto t\\dot\\gamma\\); the product rule holds for the dot product, the cross product and every other bilinear operation, with the order kept.",
"section": "Curves",
"slide": "Vector-valued functions and two product rules",
"keys": [
"vector-valued function"
]
},
{
"term_html": "arc length",
"html": "\\(s(t) = \\int_a^t\\lVert\\dot\\gamma\\rVert\\), so \\(\\dot s = v\\). The one parameter a curve fixes by itself, which is why curvature is defined with respect to it.",
"section": "Curves",
"slide": "Arc length and the unit tangent",
"keys": [
"arc length"
]
},
{
"term_html": "unit-speed parametrisation",
"html": "\\(\\gamma\\) reparametrised by \\(s\\); it exists wherever \\(v &gt; 0\\), because then \\(s(t)\\) is strictly increasing and so invertible — unit 00's move, used for a different purpose.",
"section": "Curves",
"slide": "Arc length and the unit tangent",
"keys": [
"unit-speed parametrisation"
]
},
{
"term_html": "unit tangent",
"html": "\\(\\hat T = \\vec v/v = \\mathrm d\\gamma/\\mathrm ds\\). Depends on the curve and the direction of travel, not on the speed.",
"section": "Curves",
"slide": "Arc length and the unit tangent",
"keys": [
"unit tangent"
]
},
{
"term_html": "curvature",
"html": "\\(\\kappa = \\lVert\\hat T'\\rVert\\), the rate the direction of travel turns per unit distance travelled. \\(\\kappa = 1/\\rho\\) for a circle of radius \\(\\rho\\), which is what earns \\(\\rho\\) its name.",
"section": "Curves",
"slide": "Curvature, and the frame a curve carries",
"keys": [
"curvature"
]
},
{
"term_html": "radius of curvature",
"html": "\\(\\rho = 1/\\kappa\\): the radius of the osculating circle, the circle sharing the curve's point, tangent and curvature.",
"section": "Curves",
"slide": "Curvature, and the frame a curve carries",
"keys": [
"radius of curvature"
]
},
{
"term_html": "Frenet–Serret frame",
"html": "The orthonormal right-handed basis \\((\\hat T, \\hat N, \\hat B)\\) attached to each point of a curve with \\(\\kappa &gt; 0\\).",
"section": "Curves",
"slide": "Curvature, and the frame a curve carries",
"keys": [
"frenet–serret frame"
]
},
{
"term_html": "principal normal",
"html": "\\(\\hat N = \\hat T'/\\kappa\\), a unit vector perpendicular to \\(\\hat T\\) — perpendicular because \\(\\lVert\\hat T\\rVert\\) is constant — pointing towards the centre of the osculating circle.",
"section": "Curves",
"slide": "Curvature, and the frame a curve carries",
"keys": [
"principal normal"
]
},
{
"term_html": "binormal",
"html": "\\(\\hat B = \\hat T\\times\\hat N\\), completing the frame.",
"section": "Curves",
"slide": "Curvature, and the frame a curve carries",
"keys": [
"binormal"
]
},
{
"term_html": "osculating plane",
"html": "The plane spanned by \\(\\hat T\\) and \\(\\hat N\\): the plane the curve is momentarily bending in. A curve is planar iff its torsion vanishes.",
"section": "Curves",
"slide": "Curvature, and the frame a curve carries",
"keys": [
"osculating plane"
]
},
{
"term_html": "torsion",
"html": "\\(\\tau = -\\hat B'\\cdot\\hat N\\), the rate at which the curve leaves its osculating plane. \\(\\tau \\equiv 0\\) iff the curve is planar. Sign conventions differ between books; here a right-handed helix has \\(\\tau &gt; 0\\).",
"section": "Curves",
"slide": "The Frenet–Serret formulas",
"keys": [
"torsion"
]
},
{
"term_html": "Frenet–Serret formulas",
"html": "\\(\\hat T' = \\kappa\\hat N\\), \\(\\hat N' = -\\kappa\\hat T + \\tau\\hat B\\), \\(\\hat B' = -\\tau\\hat N\\). They say no more than: the matrix \\(Q^{\\!\\top}Q'\\) of an orthonormal moving frame is antisymmetric, so it has three free entries, and the definition of \\(\\hat N\\) kills one of them.",
"section": "Curves",
"slide": "The Frenet–Serret formulas",
"keys": [
"frenet–serret formulas"
]
},
{
"term_html": "tangential and normal acceleration",
"html": "The two — and only two — parts of \\(\\vec a = \\dot v\\hat T + (v^2/\\rho)\\hat N\\). Speeding up is tangential, turning is normal, and \\(\\vec a\\cdot\\hat B = 0\\) always.",
"section": "Curves",
"slide": "Acceleration has exactly two parts",
"keys": [
"tangential and normal acceleration"
]
},
{
"term_html": "centripetal acceleration",
"html": "The \\(v^2/\\rho\\) term, a corollary of the Frenet decomposition rather than a postulate, and derived without assuming the path is a circle.",
"section": "Curves",
"slide": "Acceleration has exactly two parts",
"keys": [
"centripetal acceleration"
]
},
{
"term_html": "terminal velocity",
"html": "The velocity at which drag balances gravity, found by setting \\(\\vec{\\dot v} = 0\\): \\(m\\vec g/b\\) for linear drag, \\(\\sqrt{mg/b}\\) straight down for quadratic.",
"section": "Curves",
"slide": "Three dimensions are not three one-dimensional problems",
"keys": [
"terminal velocity"
]
},
{
"term_html": "Reynolds number",
"html": "\\(\\mathcal R = \\rho_{\\text{air}}vd/\\mu\\), dimensionless, and it decides which drag law applies: \\(\\mathcal R \\lesssim 1\\) linear (and the three components separate), \\(\\mathcal R \\gtrsim 10^3\\) quadratic (and they do not). A football at \\(20\\) m/s has \\(\\mathcal R \\approx 3\\times10^5\\).",
"section": "Curves",
"slide": "Three dimensions are not three one-dimensional problems",
"keys": [
"reynolds number"
]
},
{
"term_html": "frame",
"html": "An orthonormal right-handed basis of \\(\\mathbb R^3\\) with an origin.",
"section": "Frames that turn",
"slide": "What a frame is, and what \\(SO(3)\\) is",
"keys": [
"frame"
]
},
{
"term_html": "inertial frame",
"html": "One in which \\(m\\vec a = \\vec F\\) holds with \\(\\vec F\\) built only from real interactions. No global one exists — the laboratory turns with the Earth — and computing the size of that error is what this unit is for.",
"section": "Frames that turn",
"slide": "What a frame is, and what \\(SO(3)\\) is",
"keys": [
"inertial frame"
]
},
{
"term_html": "special orthogonal group, \\(SO(3)\\)",
"html": "\\(\\{R : R^{\\!\\top}R = I,\\ \\det R = +1\\}\\), a group under matrix multiplication. Two frames sharing an origin are related by exactly one element of it, and \\(x_{\\text{in}} = Rx_{\\text{rot}}\\) is this unit's fixed convention.",
"section": "Frames that turn",
"slide": "What a frame is, and what \\(SO(3)\\) is",
"keys": [
"special orthogonal group, so(3)",
"special orthogonal group",
"so(3)"
]
},
{
"term_html": "antisymmetric matrix",
"html": "\\(A^{\\!\\top} = -A\\). For a differentiable curve \\(R(t)\\) in \\(SO(3)\\), \\(\\Omega = R^{\\!\\top}\\dot R\\) is one — differentiate \\(R^{\\!\\top}R = I\\).",
"section": "Frames that turn",
"slide": "\\(\\Omega = R^{\\!\\top}\\dot R\\) is antisymmetric",
"keys": [
"antisymmetric matrix"
]
},
{
"term_html": "\\(\\mathfrak{so}(3)\\), so(3)",
"html": "The space of antisymmetric \\(3\\times3\\) matrices, of dimension 3. That \\(\\Omega\\) lands in a three-dimensional space is why an angular velocity has three components and no more.",
"section": "Frames that turn",
"slide": "\\(\\Omega = R^{\\!\\top}\\dot R\\) is antisymmetric",
"keys": [
"\\mathfrak{so}(3), so(3)",
"\\mathfrak{so}(3)",
"so(3)",
"so",
"3"
]
},
{
"term_html": "angular velocity vector",
"html": "\\(\\vec\\omega\\), the unique vector with \\(\\hat\\omega = R^{\\!\\top}\\dot R\\). Its direction is the instantaneous axis, its magnitude the rate of turn, and its components here are in the <strong>rotating</strong> frame.",
"section": "Frames that turn",
"slide": "\\(\\Omega = R^{\\!\\top}\\dot R\\) is antisymmetric",
"keys": [
"angular velocity vector"
]
},
{
"term_html": "hat map",
"html": "The linear isomorphism \\(\\mathbb R^3 \\to \\mathfrak{so}(3)\\) sending \\(\\vec\\omega\\) to the antisymmetric matrix \\(\\hat\\omega\\). Being an isomorphism is the whole content: every antisymmetric \\(3\\times3\\) matrix is \"cross with a unique vector\".",
"section": "Frames that turn",
"slide": "\\(\\mathfrak{so}(3)\\) is \\(\\mathbb R^3\\): the hat map and the cross product",
"keys": [
"hat map"
]
},
{
"term_html": "cross product",
"html": "\\(\\vec u\\times\\vec w := \\hat u\\,w\\) — defined as the action of the matrix, not by a mnemonic determinant. It exists only in three dimensions, since \\(\\dim\\mathfrak{so}(n) = n(n-1)/2\\) equals \\(n\\) only for \\(n = 3\\). Its further identities arrive in unit 08.",
"section": "Frames that turn",
"slide": "\\(\\mathfrak{so}(3)\\) is \\(\\mathbb R^3\\): the hat map and the cross product",
"keys": [
"cross product"
]
},
{
"term_html": "transport theorem",
"html": "\\((\\mathrm d\\vec u/\\mathrm dt)_{\\text{in}} = (\\mathrm d\\vec u/\\mathrm dt)_{\\text{rot}} + \\vec\\omega\\times\\vec u\\), for any vector \\(\\vec u\\) whatsoever, with both sides in rotating-frame components. One line from \\(\\dot R = R\\Omega\\), and everything in sections 4 and 5 is this applied twice.",
"section": "Frames that turn",
"slide": "The transport theorem",
"keys": [
"transport theorem"
]
},
{
"term_html": "fictitious force (inertial force)",
"html": "One of the three terms \\(-2m\\vec\\omega\\times\\vec v\\), \\(-m\\vec\\omega\\times(\\vec\\omega\\times\\vec r)\\), \\(-m\\dot{\\vec\\omega}\\times\\vec r\\) appearing in a rotating frame. Nothing exerts them and they have no third-law partner; they are proportional to \\(m\\), which is the hint unit 30 collects.",
"section": "The frame that lies to you",
"slide": "The rotating-frame equation",
"keys": [
"fictitious force (inertial force)",
"fictitious force",
"inertial force"
]
},
{
"term_html": "centrifugal force",
"html": "\\(-m\\vec\\omega\\times(\\vec\\omega\\times\\vec r)\\), of magnitude \\(m\\omega^2 r_\\perp\\) directed away from the <strong>axis</strong>, not from the centre. On Earth it is \\(0.346\\%\\) of \\(g\\) at the equator.",
"section": "The frame that lies to you",
"slide": "Centrifugal: what a plumb line points at",
"keys": [
"centrifugal force"
]
},
{
"term_html": "effective gravity",
"html": "\\(\\vec g_{\\text{eff}} = \\vec g_{\\text{true}} - \\vec\\omega\\times(\\vec\\omega\\times\\vec r)\\) — what a plumb line and a spring balance measure. It is not radial, and it defines \"vertical\", which is why the deviation is invisible from inside a building and shows up in the planet's shape instead.",
"section": "The frame that lies to you",
"slide": "Centrifugal: what a plumb line points at",
"keys": [
"effective gravity"
]
},
{
"term_html": "Coriolis force",
"html": "\\(-2m\\vec\\omega\\times\\vec v_{\\text{rot}}\\). On a horizontal velocity its horizontal part is \\(2m\\omega\\sin\\lambda\\,v\\) to the right of the motion in the northern hemisphere, to the left in the southern, and zero at the equator.",
"section": "The frame that lies to you",
"slide": "Coriolis: the force that turns cyclones",
"keys": [
"coriolis force"
]
},
{
"term_html": "Eötvös effect",
"html": "The vertical part of the Coriolis force, \\(2m\\omega\\cos\\lambda\\,v_{\\text{east}}\\): moving east makes you lighter. It is absorbed into \\(g_{\\text{eff}}\\) and is \\(2.3\\times10^{-5}\\) of \\(g\\) at the Panthéon pendulum's peak speed.",
"section": "The frame that lies to you",
"slide": "Coriolis: the force that turns cyclones",
"keys": [
"eötvös effect"
]
},
{
"term_html": "inertial circle",
"html": "The circular path a body follows when Coriolis is the only horizontal force, of radius \\(v/(2\\omega\\sin\\lambda)\\) — \\(291\\) km for a \\(30\\) m/s wind at \\(45^\\circ\\) N — and of period half the frame's rotation period.",
"section": "The frame that lies to you",
"slide": "Coriolis: the force that turns cyclones",
"keys": [
"inertial circle"
]
},
{
"term_html": "Rossby number",
"html": "\\(\\mathcal Ro = v/(2\\omega\\sin\\lambda\\,L)\\), comparing inertia with Coriolis. About \\(0.29\\) for a \\(1000\\) km storm, about \\(10^4\\) for a bath: weather is Coriolis, plugholes are not.",
"section": "The frame that lies to you",
"slide": "Coriolis: the force that turns cyclones",
"keys": [
"rossby number"
]
},
{
"term_html": "Euler force",
"html": "\\(-m\\dot{\\vec\\omega}\\times\\vec r\\), present only while the frame is spinning up or down. On Earth it is smaller than the centrifugal term by \\(10^{-7}\\) and is ignored throughout.",
"section": "The frame that lies to you",
"slide": "Euler: only while the frame is spinning up",
"keys": [
"euler force"
]
},
{
"term_html": "Foucault pendulum",
"html": "A long pendulum free to swing in any vertical plane, whose plane of swing turns relative to the ground at \\(\\omega\\sin\\lambda\\), clockwise from above in the northern hemisphere. The small-oscillation equations are \\(\\ddot{\\vec r} = -\\omega_0^2\\vec r - 2\\omega_z\\hat z\\times\\dot{\\vec r}\\) with \\(\\omega_0^2 = g/L\\) and \\(\\omega_z = \\omega\\sin\\lambda\\).",
"section": "The Foucault pendulum",
"slide": "The pendulum's two horizontal equations",
"keys": [
"foucault pendulum"
]
},
{
"term_html": "Foucault period",
"html": "\\(T = 2\\pi/(\\omega\\sin\\lambda) =\\) one sidereal day divided by \\(\\sin\\lambda\\). At the Panthéon, \\(23.9345\\,\\mathrm h/0.752946 = 31.79\\) h; \\(23.93\\) h at the pole, infinite at the equator.",
"section": "The Foucault pendulum",
"slide": "Worked: 31.8 hours at the Panthéon",
"keys": [
"foucault period"
]
}
];
