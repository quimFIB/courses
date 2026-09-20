// Generated from GLOSSARY.org by `mr glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "vector field",
"html": "A map \\(\\vec F : U \\to \\mathbb R^n\\) on an open \\(U \\subseteq \\mathbb R^n\\), thought of as attaching a vector to each point. Here they are forces; the same objects serve as the right-hand sides of autonomous systems in unit 02.",
"section": "Work: the integral along a path",
"slide": "The line integral, defined",
"keys": [
"vector field"
]
},
{
"term_html": "piecewise \\(C^1\\)",
"html": "A continuous \\(\\vec\\gamma : [a,b] \\to U\\) whose domain splits into finitely many subintervals on each of which it is \\(C^1\\) up to the endpoints. Enough generality for a rectangular loop, which has four corners.",
"section": "Work: the integral along a path",
"slide": "The line integral, defined",
"keys": [
"piecewise c^1"
]
},
{
"term_html": "line integral (of a vector field)",
"html": "\\(\\int_{\\vec\\gamma}\\vec F\\cdot\\mathrm d\\vec r := \\int_a^b \\vec F(\\vec\\gamma(t))\\cdot\\dot{\\vec\\gamma}(t)\\,\\mathrm dt\\). Not the same object as the arc-length integral \\(\\int f\\,\\mathrm ds\\) of unit 03: this one changes sign when the curve is reversed.",
"section": "Work: the integral along a path",
"slide": "The line integral, defined",
"keys": [
"line integral (of a vector field)",
"line integral",
"of a vector field"
]
},
{
"term_html": "work",
"html": "The line integral of a force along the path actually taken. Measured in joules; Coriolis coined the term in 1829, for machines.",
"section": "Work: the integral along a path",
"slide": "The line integral, defined",
"keys": [
"work"
]
},
{
"term_html": "parametrisation invariance",
"html": "The line integral is unchanged by any increasing \\(C^1\\) reparametrisation, and negated by a decreasing one. Proof: the chain rule plus the substitution rule. So the integral depends only on the image and the direction of travel.",
"section": "Work: the integral along a path",
"slide": "The line integral, defined",
"keys": [
"parametrisation invariance"
]
},
{
"term_html": "orientation (of a curve)",
"html": "The choice of direction of travel. Reversing it multiplies the line integral by \\(-1\\).",
"section": "Work: the integral along a path",
"slide": "The line integral, defined",
"keys": [
"orientation (of a curve)",
"orientation",
"of a curve"
]
},
{
"term_html": "kinetic energy",
"html": "\\(T = \\tfrac12 m\\lVert\\vec v\\rVert^2\\). The factor \\(\\tfrac12\\) exists so that \\(\\dot T = \\vec F\\cdot\\vec v\\) has no constant in it.",
"section": "Work: the integral along a path",
"slide": "The work–energy theorem",
"keys": [
"kinetic energy"
]
},
{
"term_html": "work–energy theorem",
"html": "\\(T(t_1) - T(t_0) = \\int_{\\vec\\gamma}\\vec F\\cdot\\mathrm d\\vec r\\) along the actual trajectory, for any force whatsoever. Two lines to prove, and useful only when the integral can be done without knowing the trajectory.",
"section": "Work: the integral along a path",
"slide": "The work–energy theorem",
"keys": [
"work–energy theorem"
]
},
{
"term_html": "dual space",
"html": "\\((\\mathbb R^n)^*\\), the vector space of linear maps \\(\\mathbb R^n \\to \\mathbb R\\). Where \\(Df(a)\\) lives.",
"section": "Work: the integral along a path",
"slide": "The derivative is a covector; the gradient is what the inner product makes of it",
"keys": [
"dual space"
]
},
{
"term_html": "covector",
"html": "An element of the dual space. Unit 03's total derivative of a scalar field is one, and it is what the definition hands you before any inner product is chosen.",
"section": "Work: the integral along a path",
"slide": "The derivative is a covector; the gradient is what the inner product makes of it",
"keys": [
"covector"
]
},
{
"term_html": "Riesz isomorphism",
"html": "On a finite-dimensional real inner product space, the map \\(v \\mapsto \\langle v,\\cdot\\rangle\\) from \\(V\\) to \\(V^*\\). Injective because \\(\\langle v,v\\rangle = 0\\) forces \\(v = 0\\), hence bijective by dimension count.",
"section": "Work: the integral along a path",
"slide": "The derivative is a covector; the gradient is what the inner product makes of it",
"keys": [
"riesz isomorphism"
]
},
{
"term_html": "gradient",
"html": "\\(\\nabla f(a)\\), the preimage of \\(Df(a)\\) under the Riesz isomorphism: the unique vector with \\(\\langle\\nabla f(a),\\vec h\\rangle = Df(a)\\vec h\\). Its components are the partial derivatives <strong>only in an orthonormal basis</strong> — in polar coordinates \\(\\nabla f = \\partial_r f\\,\\hat r + \\tfrac1r\\partial_\\theta f\\,\\hat\\theta\\). Converting a covector into a vector this way is what unit 26 calls raising an index.",
"section": "Work: the integral along a path",
"slide": "The derivative is a covector; the gradient is what the inner product makes of it",
"keys": [
"gradient"
]
},
{
"term_html": "fundamental theorem of line integrals",
"html": "\\(\\int_{\\vec\\gamma}\\nabla V\\cdot\\mathrm d\\vec r = V(\\vec\\gamma(b)) - V(\\vec\\gamma(a))\\) for \\(V \\in C^1\\) and \\(\\vec\\gamma\\) piecewise \\(C^1\\). The fundamental theorem of calculus with the interval replaced by a curve.",
"section": "Work: the integral along a path",
"slide": "The fundamental theorem of line integrals",
"keys": [
"fundamental theorem of line integrals"
]
},
{
"term_html": "conservative",
"html": "\\(\\vec F = -\\nabla V\\) for some \\(C^1\\) function \\(V\\) on \\(U\\). A property of the pair (field, domain), not of the field alone — which is the whole point of section 3.",
"section": "Work: the integral along a path",
"slide": "The fundamental theorem of line integrals",
"keys": [
"conservative"
]
},
{
"term_html": "potential energy",
"html": "The \\(V\\) of the previous entry, in joules, with the physics sign convention \\(\\vec F = -\\nabla V\\) so that \\(T+V\\) is conserved. Mathematics books write \\(\\vec F = \\nabla\\phi\\); this course keeps the physics sign.",
"section": "Work: the integral along a path",
"slide": "The fundamental theorem of line integrals",
"keys": [
"potential energy"
]
},
{
"term_html": "path-independence",
"html": "\\(\\int_{\\vec\\gamma}\\vec F\\cdot\\mathrm d\\vec r\\) depends only on the endpoints of \\(\\vec\\gamma\\). Equivalent, on a connected open \\(U\\), to having a potential and to having zero circulation round every loop.",
"section": "Conservative fields, and the first integral they give",
"slide": "Three conditions, one property",
"keys": [
"path-independence"
]
},
{
"term_html": "circulation",
"html": "\\(\\oint_{\\vec\\gamma}\\vec F\\cdot\\mathrm d\\vec r\\) round a closed path. Zero for every loop exactly when the field is conservative.",
"section": "Conservative fields, and the first integral they give",
"slide": "Three conditions, one property",
"keys": [
"circulation"
]
},
{
"term_html": "escape speed",
"html": "\\(v_{\\mathrm{esc}} = \\sqrt{2GM/R}\\), from setting the conserved \\(E = \\tfrac12 mv^2 - GMm/r\\) to zero. \\(11\\,180\\ \\mathrm{m\\,s^{-1}}\\) at the Earth's surface, and independent of the escaping mass.",
"section": "Conservative fields, and the first integral they give",
"slide": "Energy is a first integral in three dimensions",
"keys": [
"escape speed"
]
},
{
"term_html": "dissipative",
"html": "A force whose circulation round every closed path is strictly negative. Sliding friction, \\(-\\mu N\\hat v\\), is the standard example, and makes \\(T+V\\) non-increasing along every motion.",
"section": "Conservative fields, and the first integral they give",
"slide": "Two forces outside the frame, for opposite reasons",
"keys": [
"dissipative"
]
},
{
"term_html": "velocity-dependent",
"html": "A force that is a function of \\(\\vec v\\) as well as (or instead of) \\(\\vec r\\), so that there is no vector field on \\(U\\) to integrate. Friction and the magnetic force \\(q\\vec v\\times\\vec B\\) are both of this kind; only the first is dissipative, since \\((\\vec v\\times\\vec B)\\cdot\\vec v = 0\\).",
"section": "Conservative fields, and the first integral they give",
"slide": "Two forces outside the frame, for opposite reasons",
"keys": [
"velocity-dependent"
]
},
{
"term_html": "closed",
"html": "\\(\\partial_j F_i = \\partial_i F_j\\) for all \\(i,j\\). Every conservative field with a \\(C^2\\) potential is closed, by Clairaut's theorem from unit 03. The converse is false, and how false is a property of the domain.",
"section": "The curl, and how much a local test can promise",
"slide": "A necessary condition, free from Clairaut",
"keys": [
"closed"
]
},
{
"term_html": "irrotational",
"html": "The same condition, in the language of section 3: \\(\\mathrm{curl}\\,\\vec F = \\vec 0\\).",
"section": "The curl, and how much a local test can promise",
"slide": "A necessary condition, free from Clairaut",
"keys": [
"irrotational"
]
},
{
"term_html": "hat map",
"html": "Unit 03's isomorphism \\(\\mathbb R^3 \\to \\mathfrak{so}(3)\\) sending \\(\\vec\\omega\\) to the antisymmetric matrix \\(\\hat\\omega\\) with \\(\\hat\\omega\\,\\vec u = \\vec\\omega\\times\\vec u\\).",
"section": "The curl, and how much a local test can promise",
"slide": "What the curl is",
"keys": [
"hat map"
]
},
{
"term_html": "antisymmetric part",
"html": "\\(\\tfrac12(A - A^{\\!\\top})\\) of a linear map, the piece of \\(D\\vec F\\) that turns a fluid element rather than straining it. The symmetric part is the rate-of-strain tensor of unit 22.",
"section": "The curl, and how much a local test can promise",
"slide": "What the curl is",
"keys": [
"antisymmetric part"
]
},
{
"term_html": "curl",
"html": "Twice the vector the hat map assigns to the antisymmetric part of \\(D\\vec F\\). Components \\((\\partial_2F_3-\\partial_3F_2,\\ \\partial_3F_1-\\partial_1F_3,\\ \\partial_1F_2-\\partial_2F_1)\\) — a theorem, not the definition. Exists only in three dimensions, because \\(\\dim\\mathfrak{so}(n) = n\\) only for \\(n = 3\\). For a rigid rotation field \\(\\vec\\omega\\times\\vec r\\) it is \\(2\\vec\\omega\\), which is where the factor two comes from.",
"section": "The curl, and how much a local test can promise",
"slide": "What the curl is",
"keys": [
"curl"
]
},
{
"term_html": "pseudovector",
"html": "An object transforming correctly under \\(SO(3)\\) and with the wrong sign under a reflection. The curl, the cross product, angular velocity and angular momentum are all of this kind; unit 34 explains it by identifying the curl as a 2-form.",
"section": "The curl, and how much a local test can promise",
"slide": "Curl is a vector only under rotations",
"keys": [
"pseudovector"
]
},
{
"term_html": "Green's theorem",
"html": "\\(\\oint_{\\partial R}P\\,\\mathrm dx + Q\\,\\mathrm dy = \\int\\!\\!\\int_R(\\partial_xQ - \\partial_yP)\\), proved here for a rectangle from the fundamental theorem of calculus one variable at a time, and extended to unions of rectangles by the cancellation of shared edges.",
"section": "The curl, and how much a local test can promise",
"slide": "Green's theorem in the plane",
"keys": [
"green's theorem"
]
},
{
"term_html": "positively oriented boundary",
"html": "The boundary traversed anticlockwise, so that the region stays on the left. Reversing it changes the sign of both sides.",
"section": "The curl, and how much a local test can promise",
"slide": "Green's theorem in the plane",
"keys": [
"positively oriented boundary"
]
},
{
"term_html": "Stokes' theorem",
"html": "\\(\\oint_{\\partial S}\\vec F\\cdot\\mathrm d\\vec r = \\int_S(\\mathrm{curl}\\,\\vec F)\\cdot\\hat n\\,\\mathrm dA\\), proved here for a flat rectangle — Green's theorem, rotated by the equivariance of the curl. The general statement needs unit 05's surface integrals and is proved in unit 34.",
"section": "The curl, and how much a local test can promise",
"slide": "Stokes' theorem in \\(\\mathbb R^3\\)",
"keys": [
"stokes' theorem"
]
},
{
"term_html": "circulation density",
"html": "\\((\\mathrm{curl}\\,\\vec F(\\vec a))\\cdot\\hat n = \\lim_{\\varepsilon\\to0}\\varepsilon^{-2}\\oint_{\\partial S_\\varepsilon}\\vec F\\cdot\\mathrm d\\vec r\\) over squares of side \\(\\varepsilon\\) with normal \\(\\hat n\\). The physical characterisation of the curl, derived from the definition rather than assumed.",
"section": "The curl, and how much a local test can promise",
"slide": "The curl is circulation per unit area",
"keys": [
"circulation density"
]
},
{
"term_html": "Poincaré lemma",
"html": "Closed implies conservative on an open <strong>box</strong> — a product of open intervals, so \\(\\mathbb R^n\\), a half-space and an open rectangle all qualify. Proved by comparing two staircase paths whose difference is the boundary of a rectangle, which Green's theorem kills. It holds more generally on any star-shaped and on any simply connected open set; those versions are cited, and unit 34 proves the second.",
"section": "The curl, and how much a local test can promise",
"slide": "The Poincaré lemma",
"keys": [
"poincaré lemma"
]
},
{
"term_html": "simply connected",
"html": "Every loop in the set contracts continuously to a point within it. \\(\\mathbb R^3\\setminus\\{0\\}\\) is; \\(\\mathbb R^2\\setminus\\{0\\}\\) and \\(\\mathbb R^3\\) minus a line are not.",
"section": "The curl, and how much a local test can promise",
"slide": "The Poincaré lemma",
"keys": [
"simply connected"
]
},
{
"term_html": "winding number",
"html": "\\(n(\\vec\\gamma) = \\tfrac1{2\\pi}\\oint_{\\vec\\gamma}\\vec F_{\\mathrm V}\\cdot\\mathrm d\\vec r\\), an integer counting how many times a loop encircles the puncture, unchanged by any continuous deformation within the domain.",
"section": "The curl, and how much a local test can promise",
"slide": "What the vortex measures is the domain",
"keys": [
"winding number"
]
},
{
"term_html": "de Rham cohomology",
"html": "The space of closed fields modulo the conservative ones. Its dimension counts the domain's holes; for \\(\\mathbb R^2\\setminus\\{0\\}\\) it is one-dimensional, spanned by the vortex. Named here, built in unit 34.",
"section": "The curl, and how much a local test can promise",
"slide": "What the vortex measures is the domain",
"keys": [
"de rham cohomology"
]
},
{
"term_html": "Taylor's theorem in R^n",
"html": "\\(f(\\vec a+\\vec h) = f(\\vec a) + Df(\\vec a)\\vec h + \\tfrac12\\vec h^{\\!\\top}H(\\vec a+\\theta\\vec h)\\vec h\\) for some \\(\\theta\\in(0,1)\\), whenever \\(f \\in C^2\\) and the segment lies in the domain. Proved by restricting to the segment and using the one-variable theorem.",
"section": "Potential landscapes",
"slide": "Taylor's theorem in \\(\\mathbb R^n\\)",
"keys": [
"taylor's theorem in r^n"
]
},
{
"term_html": "Hessian",
"html": "The symmetric bilinear form \\(H_{\\vec a}(\\vec u,\\vec w) = \\partial_s\\partial_t\\big|_0 f(\\vec a+t\\vec u+s\\vec w)\\). That its matrix has entries \\(\\partial_i\\partial_j f(\\vec a)\\), and that it is symmetric, are theorems — the second is Clairaut.",
"section": "Potential landscapes",
"slide": "The Hessian is a symmetric bilinear form",
"keys": [
"hessian"
]
},
{
"term_html": "bilinear form",
"html": "A map \\(V\\times V\\to\\mathbb R\\) linear in each argument. Under a change of basis \\(\\vec x = S\\vec x'\\) its matrix becomes \\(S^{\\!\\top}HS\\), not \\(S^{-1}HS\\): a form is not an operator. The habit that unit 16 turns into the definition of a tensor.",
"section": "Potential landscapes",
"slide": "The Hessian is a symmetric bilinear form",
"keys": [
"bilinear form"
]
},
{
"term_html": "quadratic form",
"html": "\\(\\vec h \\mapsto H_{\\vec a}(\\vec h,\\vec h)\\), written \\(\\vec h^{\\!\\top}H\\vec h\\). What Taylor's second-order term is.",
"section": "Potential landscapes",
"slide": "The Hessian is a symmetric bilinear form",
"keys": [
"quadratic form"
]
},
{
"term_html": "nondegenerate critical point",
"html": "A point with \\(\\nabla f = \\vec 0\\) and \\(\\det H \\ne 0\\). Then the sign pattern of the eigenvalues of \\(H\\) decides minimum, maximum or saddle. When \\(\\det H = 0\\) the second order decides nothing: \\(x^4+y^4\\), \\(-x^4-y^4\\) and \\(x^4-y^4\\) all have \\(H = 0\\).",
"section": "Potential landscapes",
"slide": "Classifying a nondegenerate critical point",
"keys": [
"nondegenerate critical point"
]
},
{
"term_html": "saddle (saddle point)",
"html": "A critical point at which \\(H\\) is indefinite: every neighbourhood contains points of larger and of smaller value, so it is no kind of extremum.",
"section": "Potential landscapes",
"slide": "Classifying a nondegenerate critical point",
"keys": [
"saddle (saddle point)",
"saddle",
"saddle point"
]
},
{
"term_html": "equilibrium point",
"html": "A point with \\(\\nabla V = \\vec 0\\), where the constant solution of \\(m\\ddot{\\vec r} = -\\nabla V\\) sits. Equilibria of the motion are exactly critical points of the landscape.",
"section": "Potential landscapes",
"slide": "Equilibrium, stability, and Lagrange–Dirichlet",
"keys": [
"equilibrium point"
]
},
{
"term_html": "Lagrange–Dirichlet (Dirichlet's stability theorem)",
"html": "A strict local minimum of \\(V\\) is a Lyapunov stable equilibrium — motions that start close stay close — proved with \\(E = T + V - V(\\vec a)\\), which is zero there, positive nearby and conserved. Stable, not asymptotically stable: \\(\\dot E = 0\\), so nothing settles until something dissipates. Lagrange asserted it in 1788; Dirichlet proved it in 1846.",
"section": "Potential landscapes",
"slide": "Equilibrium, stability, and Lagrange–Dirichlet",
"keys": [
"lagrange–dirichlet (dirichlet's stability theorem)",
"lagrange–dirichlet",
"dirichlet's stability theorem"
]
},
{
"term_html": "Earnshaw's theorem",
"html": "No arrangement of fixed inverse-square sources has a stable equilibrium point in empty space. The half proved here: the Hessian of the potential has zero trace everywhere, so it is never positive definite and no critical point is a nondegenerate minimum; the maximum principle of unit 05 rules out degenerate minima too.",
"section": "Potential landscapes",
"slide": "Worked: two masses, and why the middle is a saddle",
"keys": [
"earnshaw's theorem"
]
},
{
"term_html": "inverse function theorem",
"html": "A \\(C^1\\) map with invertible derivative at a point is a \\(C^1\\) diffeomorphism of a neighbourhood of that point onto a neighbourhood of its image, with \\(D\\vec g = (D\\vec f)^{-1}\\). Local only: \\((x,y)\\mapsto(e^x\\cos y, e^x\\sin y)\\) has invertible derivative everywhere and is not injective.",
"section": "Constraints, and where the multiplier comes from",
"slide": "The inverse function theorem",
"keys": [
"inverse function theorem"
]
},
{
"term_html": "contraction",
"html": "A self-map of a complete metric space with Lipschitz constant \\(k &lt; 1\\); the Banach fixed-point theorem, proved in the notes to the inverse function theorem slide, gives it exactly one fixed point. Here the map is \\(\\varphi_{\\vec y}(\\vec x) = \\vec x + \\vec y - \\vec f(\\vec x)\\), whose fixed points solve \\(\\vec f(\\vec x) = \\vec y\\).",
"section": "Constraints, and where the multiplier comes from",
"slide": "The inverse function theorem",
"keys": [
"contraction"
]
},
{
"term_html": "implicit function theorem",
"html": "If \\(G(\\vec a,b) = 0\\) and \\(\\partial_z G(\\vec a,b) \\ne 0\\) then \\(G = 0\\) is locally the graph \\(z = \\zeta(\\vec x)\\) of a \\(C^1\\) function, with \\(\\nabla\\zeta = -\\nabla_{\\vec x}G/\\partial_zG\\). Proved from the inverse function theorem applied to \\((\\vec x,z)\\mapsto(\\vec x, G(\\vec x,z))\\).",
"section": "Constraints, and where the multiplier comes from",
"slide": "The implicit function theorem",
"keys": [
"implicit function theorem"
]
},
{
"term_html": "regular value",
"html": "A value whose level set contains no critical point. Its level set is then a \\(C^1\\) submanifold, which is where unit 31's manifolds come from.",
"section": "Constraints, and where the multiplier comes from",
"slide": "The implicit function theorem",
"keys": [
"regular value"
]
},
{
"term_html": "constraint surface",
"html": "A level set \\(\\{g = 0\\}\\) a particle is confined to. Near a point where \\(\\nabla g \\ne \\vec 0\\) it is a graph, so it has honest coordinates and a well-defined tangent space \\(\\ker Dg\\).",
"section": "Constraints, and where the multiplier comes from",
"slide": "The implicit function theorem",
"keys": [
"constraint surface"
]
},
{
"term_html": "Lagrange multiplier",
"html": "The \\(\\lambda\\) in \\(\\nabla f(\\vec a) = \\lambda\\nabla g(\\vec a)\\) at a constrained extremum. Derived, not asserted: the implicit function theorem supplies a curve in the surface with any prescribed tangent, and \\(\\nabla f \\perp \\ker Dg = (\\mathrm{span}\\,\\nabla g)^\\perp\\).",
"section": "Constraints, and where the multiplier comes from",
"slide": "Lagrange multipliers, derived",
"keys": [
"lagrange multiplier"
]
},
{
"term_html": "constraint force",
"html": "The force a smooth constraint exerts, necessarily normal to the surface, \\(\\vec N = \\mu\\nabla g\\). Equilibrium on the surface is exactly Lagrange's condition with \\(f = V\\) and \\(\\lambda = -\\mu\\), so the multiplier is the constraint force and \\(\\lVert\\vec N\\rVert = |\\lambda|\\lVert\\nabla g\\rVert\\).",
"section": "Constraints, and where the multiplier comes from",
"slide": "Lagrange multipliers, derived",
"keys": [
"constraint force"
]
},
{
"term_html": "effective potential",
"html": "The potential seen in unit 03's rotating frame, \\(V_{\\mathrm{eff}} = V - \\tfrac12 m\\Omega^2\\rho^2\\) with \\(\\rho\\) the distance from the axis. The centrifugal force is a gradient; the Coriolis force is perpendicular to the velocity and does no work, so it never appears in an energy landscape — which is exactly why such a landscape does not settle every stability question.",
"section": "Constraints, and where the multiplier comes from",
"slide": "Worked: a bead on a rotating hoop",
"keys": [
"effective potential"
]
}
];
