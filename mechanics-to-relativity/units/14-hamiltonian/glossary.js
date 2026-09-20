// Generated from GLOSSARY.org by `mr glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "Hamiltonian",
"html": "The Legendre transform \\(H(q,p,t)\\) of the Lagrangian in the velocities. When \\(L = T - V\\) with \\(T\\) homogeneous quadratic in \\(\\dot q\\), \\(H = T + V\\) written in terms of momenta; in general it is unit 13's energy function.",
"section": "Overview",
"slide": "Twice the variables, half the order",
"keys": [
"hamiltonian"
]
},
{
"term_html": "phase space",
"html": "The space of states \\((q,p)\\in\\mathbb R^{2n}\\), positions and momenta together, on which Hamilton's equations are a first-order system.",
"section": "Overview",
"slide": "Twice the variables, half the order",
"keys": [
"phase space"
]
},
{
"term_html": "Legendre transform (Legendre–Fenchel transform, convex conjugate)",
"html": "\\(f^*(p) = \\sup_x\\big(p\\cdot x - f(x)\\big)\\), with values in \\((-\\infty,\\infty]\\). Always convex. For strictly convex smooth \\(f\\) it reduces to the recipe \\(f^* = p\\cdot x - f\\) at \\(\\nabla f(x) = p\\).",
"section": "The Legendre transform, as convex duality",
"slide": "The definition, by supremum",
"keys": [
"legendre transform (legendre–fenchel transform, convex conjugate)",
"legendre transform",
"legendre–fenchel transform, convex conjugate"
]
},
{
"term_html": "Fenchel–Young inequality",
"html": "\\(f(x) + f^*(p)\\ge p\\cdot x\\) for all \\(x, p\\), with equality exactly when \\(x\\) attains the supremum defining \\(f^*(p)\\) — for differentiable convex \\(f\\), when \\(p = \\nabla f(x)\\).",
"section": "The Legendre transform, as convex duality",
"slide": "The definition, by supremum",
"keys": [
"fenchel–young inequality"
]
},
{
"term_html": "Young's inequality",
"html": "For \\(x,p\\ge0\\) and \\(1/a + 1/b = 1\\), \\(px\\le x^a/a + p^b/b\\), with equality iff \\(p = x^{a-1}\\). It is the Fenchel–Young inequality for \\(f = |x|^a/a\\), whose transform is \\(|p|^b/b\\).",
"section": "The Legendre transform, as convex duality",
"slide": "Young's inequality is a Legendre transform",
"keys": [
"young's inequality"
]
},
{
"term_html": "involutivity",
"html": "\\(f^{**} = f\\) for convex \\(f\\): transforming twice returns the function. Proved here for differentiable convex \\(f\\); in general it is the Fenchel–Moreau theorem, for convex lower semicontinuous \\(f\\).",
"section": "The Legendre transform, as convex duality",
"slide": "Involutivity: transforming twice gives \\(f\\) back",
"keys": [
"involutivity"
]
},
{
"term_html": "supporting line (supporting hyperplane)",
"html": "A line (hyperplane) touching the graph of \\(f\\) and lying below it. For differentiable convex \\(f\\) the tangent is one: \\(f(y)\\ge f(x) + \\nabla f(x)\\cdot(y-x)\\).",
"section": "The Legendre transform, as convex duality",
"slide": "Involutivity: transforming twice gives \\(f\\) back",
"keys": [
"supporting line (supporting hyperplane)",
"supporting line",
"supporting hyperplane"
]
},
{
"term_html": "convex envelope",
"html": "The largest convex function lying below \\(f\\); it is \\(f^{**}\\). The Legendre transform cannot see the non-convex parts of \\(f\\).",
"section": "The Legendre transform, as convex duality",
"slide": "Involutivity: transforming twice gives \\(f\\) back",
"keys": [
"convex envelope"
]
},
{
"term_html": "degenerate Lagrangian",
"html": "One whose velocity Hessian \\(\\partial^2L/\\partial\\dot q_i\\partial\\dot q_j\\) is singular, so that \\(\\dot q\\mapsto p\\) is not invertible: some momenta are fixed functions of \\(q\\) and \\(H\\) lives only on a constraint set. Linear and degree-one homogeneous Lagrangians are the two basic cases.",
"section": "The Legendre transform, as convex duality",
"slide": "The degenerate case, flagged now",
"keys": [
"degenerate lagrangian"
]
},
{
"term_html": "Hamilton's equations (canonical equations)",
"html": "\\(\\dot q = \\partial H/\\partial p\\), \\(\\dot p = -\\partial H/\\partial q\\): equivalent to the Euler–Lagrange equations when \\(L\\) is strictly convex in \\(\\dot q\\). Along solutions \\(\\mathrm dH/\\mathrm dt = \\partial H/\\partial t\\).",
"section": "Hamilton's equations, and the picture they draw",
"slide": "Hamilton's equations",
"keys": [
"hamilton's equations (canonical equations)",
"hamilton's equations",
"canonical equations"
]
},
{
"term_html": "standard symplectic matrix",
"html": "\\(J = \\begin{pmatrix}0&amp;I\\\\-I&amp;0\\end{pmatrix}\\) on \\(\\mathbb R^{2n}\\), ordered \\((q,p)\\). \\(J^\\top = -J = J^{-1}\\). Hamilton's equations are \\(\\dot z = J\\nabla H\\).",
"section": "Hamilton's equations, and the picture they draw",
"slide": "One first-order system on \\(\\mathbb R^{2n}\\)",
"keys": [
"standard symplectic matrix"
]
},
{
"term_html": "Hamiltonian vector field",
"html": "\\(X_H = J\\nabla H\\), the vector field whose flow is the motion. It is tangent to the level sets of \\(H\\).",
"section": "Hamilton's equations, and the picture they draw",
"slide": "One first-order system on \\(\\mathbb R^{2n}\\)",
"keys": [
"hamiltonian vector field"
]
},
{
"term_html": "phase-space action",
"html": "\\(S[q,p] = \\int(p\\cdot\\dot q - H)\\,\\mathrm dt\\), with \\(q\\) fixed at the ends and \\(p\\) free. Stationary exactly on solutions of Hamilton's equations; linear in the velocities, yet non-degenerate as a variational principle.",
"section": "Hamilton's equations, and the picture they draw",
"slide": "The phase-space action principle",
"keys": [
"phase-space action"
]
},
{
"term_html": "level set",
"html": "\\(\\{H = E\\}\\). For one degree of freedom every orbit lies in one, and a component with no equilibrium on it is a single orbit, so the phase portrait is a contour map.",
"section": "Hamilton's equations, and the picture they draw",
"slide": "The pendulum's separatrix, now a level set",
"keys": [
"level set"
]
},
{
"term_html": "separatrix",
"html": "A level set dividing qualitatively different motions: for the pendulum \\(H = mgl\\), through the saddles, dividing libration from rotation; for Kepler \\(E = 0\\), dividing bound from unbound orbits, with its \"saddle\" at \\(r = \\infty\\).",
"section": "Hamilton's equations, and the picture they draw",
"slide": "The pendulum's separatrix, now a level set",
"keys": [
"separatrix"
]
},
{
"term_html": "Poisson bracket",
"html": "\\(\\{f,g\\} = \\sum_i(\\partial_{q_i}f\\,\\partial_{p_i}g - \\partial_{p_i}f\\,\\partial_{q_i}g) = \\nabla f^\\top J\\nabla g\\). Bilinear, antisymmetric, Leibniz in each slot, and satisfies Jacobi.",
"section": "Poisson brackets: the algebra of observables",
"slide": "The Poisson bracket",
"keys": [
"poisson bracket"
]
},
{
"term_html": "Jacobi identity",
"html": "\\(\\{f,\\{g,h\\}\\} + \\{g,\\{h,f\\}\\} + \\{h,\\{f,g\\}\\} = 0\\). Equivalently \\([D_f, D_g] = D_{\\{f,g\\}}\\) with \\(D_f = \\{f,\\cdot\\}\\).",
"section": "Poisson brackets: the algebra of observables",
"slide": "The Poisson bracket",
"keys": [
"jacobi identity"
]
},
{
"term_html": "fundamental Poisson brackets",
"html": "\\(\\{q_i,q_j\\} = 0\\), \\(\\{p_i,p_j\\} = 0\\), \\(\\{q_i,p_j\\} = \\delta_{ij}\\). A change of coordinates is canonical iff the new coordinates satisfy them.",
"section": "Poisson brackets: the algebra of observables",
"slide": "The Poisson bracket",
"keys": [
"fundamental poisson brackets"
]
},
{
"term_html": "Lie algebra",
"html": "A real vector space with a bilinear, antisymmetric bracket satisfying the Jacobi identity. Smooth functions on phase space under the Poisson bracket form one; so do \\(\\mathfrak{so}(3)\\), \\(\\mathfrak{so}(4)\\) and \\(\\mathfrak{so}(3,1)\\) under the commutator.",
"section": "Poisson brackets: the algebra of observables",
"slide": "The Jacobi identity, and what it makes of observables",
"keys": [
"lie algebra"
]
},
{
"term_html": "Poisson's theorem",
"html": "If \\(f\\) and \\(g\\) are conserved, so is \\(\\{f,g\\}\\). One line from Jacobi; the conserved quantities form a Lie algebra.",
"section": "Poisson brackets: the algebra of observables",
"slide": "Time evolution is a bracket with \\(H\\)",
"keys": [
"poisson's theorem"
]
},
{
"term_html": "generator (generates)",
"html": "The function \\(f\\) whose Hamiltonian flow \\(z' = J\\nabla f(z)\\) is a given one-parameter family of motions: \\(\\vec a\\cdot\\vec p\\) generates translations, \\(\\vec a\\cdot\\vec L\\) rotations. \\(f\\) is conserved iff \\(H\\) is invariant under the flow \\(f\\) generates.",
"section": "Poisson brackets: the algebra of observables",
"slide": "Noether's converse, now cheap",
"keys": [
"generator (generates)",
"generator",
"generates"
]
},
{
"term_html": "Levi-Civita symbol",
"html": "\\(\\varepsilon_{ijk} = \\vec e_i\\cdot(\\vec e_j\\times\\vec e_k)\\), the sign of the permutation \\((i,j,k)\\) and \\(0\\) if two indices agree; so \\(\\vec e_i\\times\\vec e_j = \\sum_k\\varepsilon_{ijk}\\vec e_k\\).",
"section": "Poisson brackets: the algebra of observables",
"slide": "Every vector rotates the same way under \\(\\vec L\\)",
"keys": [
"levi-civita symbol"
]
},
{
"term_html": "\\(\\mathfrak{so}(4)\\)",
"html": "The antisymmetric real \\(4\\times4\\) matrices under the commutator: the Lie algebra of rotations of \\(\\mathbb R^4\\). The bracket algebra of \\(\\vec L\\) and \\(\\vec A/\\sqrt{-2\\mu H}\\) for bound Kepler orbits.",
"section": "Poisson brackets: the algebra of observables",
"slide": "The algebra closes: \\(\\mathfrak{so}(4)\\), \\(\\mathfrak e(3)\\), \\(\\mathfrak{so}(3,1)\\)",
"keys": [
"\\mathfrak{so}(4)"
]
},
{
"term_html": "\\(\\mathfrak{so}(3,1)\\)",
"html": "The real \\(4\\times4\\) matrices \\(X\\) with \\(X^\\top\\eta + \\eta X = 0\\), \\(\\eta = \\mathrm{diag}(1,1,1,-1)\\): the Lorentz algebra. The bracket algebra of \\(\\vec L\\) and \\(\\vec A/\\sqrt{2\\mu H}\\) for unbound Kepler orbits. Not isomorphic to \\(\\mathfrak{so}(4)\\).",
"section": "Poisson brackets: the algebra of observables",
"slide": "The algebra closes: \\(\\mathfrak{so}(4)\\), \\(\\mathfrak e(3)\\), \\(\\mathfrak{so}(3,1)\\)",
"keys": [
"\\mathfrak{so}(3,1)"
]
},
{
"term_html": "hidden symmetry",
"html": "A symmetry of the Hamiltonian whose flow mixes positions and momenta, so that it is induced by no transformation of configuration space. For Kepler it is generated by the Runge–Lenz vector and carries an ellipse to others of the same energy.",
"section": "Poisson brackets: the algebra of observables",
"slide": "The algebra closes: \\(\\mathfrak{so}(4)\\), \\(\\mathfrak e(3)\\), \\(\\mathfrak{so}(3,1)\\)",
"keys": [
"hidden symmetry"
]
},
{
"term_html": "symplectic group",
"html": "\\(\\mathrm{Sp}(2n,\\mathbb R) = \\{M : M^\\top JM = J\\}\\). In the plane it is \\(\\{\\det M = 1\\}\\); in higher dimensions it is much smaller than the volume-preserving matrices.",
"section": "Canonical transformations",
"slide": "The symplectic form, and the maps that keep it",
"keys": [
"symplectic group"
]
},
{
"term_html": "symplectic form",
"html": "The antisymmetric nondegenerate bilinear form \\(\\omega(u,v) = \\sum_i(u_{p_i}v_{q_i} - u_{q_i}v_{p_i}) = -u^\\top Jv\\) on \\(\\mathbb R^{2n}\\); written \\(\\sum\\mathrm dp_i\\wedge\\mathrm dq_i\\) in unit 34. In the plane it is minus the signed area.",
"section": "Canonical transformations",
"slide": "The symplectic form, and the maps that keep it",
"keys": [
"symplectic form"
]
},
{
"term_html": "canonical transformation",
"html": "A diffeomorphism of phase space whose Jacobian is symplectic at every point. Equivalently it preserves all Poisson brackets, or carries Hamilton's equations for every Hamiltonian to Hamilton's equations.",
"section": "Canonical transformations",
"slide": "Three tests that are one test",
"keys": [
"canonical transformation"
]
},
{
"term_html": "generating function",
"html": "A function \\(F\\) with \\(p\\cdot\\mathrm dq - P\\cdot\\mathrm dQ = \\mathrm dF\\), written in two of the four sets of variables: \\(F_1(q,Q)\\), \\(F_2(q,P)\\), \\(F_3(p,Q)\\), \\(F_4(p,P)\\). Exists (locally) iff the map is canonical.",
"section": "Canonical transformations",
"slide": "Generating functions: a canonical map from one function",
"keys": [
"generating function"
]
},
{
"term_html": "point transformation",
"html": "A canonical transformation induced by a change of configuration coordinates \\(Q = f(q)\\), with \\(p = Df(q)^\\top P\\); generated by \\(F_2 = f(q)\\cdot P\\).",
"section": "Canonical transformations",
"slide": "Generating functions: a canonical map from one function",
"keys": [
"point transformation"
]
},
{
"term_html": "variational equation",
"html": "\\(\\dot Y = DX(\\varphi_t z)\\,Y\\), satisfied by the derivative \\(Y = D\\varphi_t(z)\\) of a flow with respect to its initial point. Cited here.",
"section": "Canonical transformations",
"slide": "The motion itself is a canonical transformation",
"keys": [
"variational equation"
]
},
{
"term_html": "symplectic integrator",
"html": "A time-stepping method whose one-step map is itself canonical, so that it preserves phase-space volume exactly and conserves a Hamiltonian close to the true one.",
"section": "Canonical transformations",
"slide": "The motion itself is a canonical transformation",
"keys": [
"symplectic integrator"
]
},
{
"term_html": "divergence",
"html": "\\(\\operatorname{div}X = \\operatorname{tr}DX = \\sum_a\\partial X_a/\\partial z_a\\). It is the rate at which the flow of \\(X\\) changes volume.",
"section": "Liouville: clouds that deform without shrinking",
"slide": "Divergence, and how determinants evolve",
"keys": [
"divergence"
]
},
{
"term_html": "Liouville's formula",
"html": "If \\(\\dot Y = A(t)Y\\) then \\(\\frac{\\mathrm d}{\\mathrm dt}\\det Y = \\operatorname{tr}A\\,\\det Y\\). Abel's identity for the Wronskian is its \\(2\\times2\\) case.",
"section": "Liouville: clouds that deform without shrinking",
"slide": "Divergence, and how determinants evolve",
"keys": [
"liouville's formula"
]
},
{
"term_html": "Liouville's theorem",
"html": "The flow of a Hamiltonian vector field preserves phase-space volume: \\(\\operatorname{div}X_H = 0\\), so \\(\\det D\\varphi_t = 1\\). True in \\((q,p)\\), false in \\((q,\\dot q)\\) in general.",
"section": "Liouville: clouds that deform without shrinking",
"slide": "Liouville's theorem, in three lines",
"keys": [
"liouville's theorem"
]
},
{
"term_html": "Liouville equation",
"html": "\\(\\partial_t\\rho + \\{\\rho,H\\} = 0\\) for a density carried by the flow; the density is constant along orbits, and any \\(\\rho = g(H)\\) is stationary.",
"section": "Liouville: clouds that deform without shrinking",
"slide": "Why statistical mechanics is possible",
"keys": [
"liouville equation"
]
},
{
"term_html": "phase area",
"html": "\\(A(E) = \\oint p\\,\\mathrm dq\\), the area enclosed by the orbit of energy \\(E\\) in a one-degree-of-freedom system; an action, in \\(\\mathrm{J\\,s}\\). Its derivative is the period: \\(\\mathrm dA/\\mathrm dE = T\\).",
"section": "Liouville: clouds that deform without shrinking",
"slide": "Worked: Halley's phase area, and its period",
"keys": [
"phase area"
]
}
];
