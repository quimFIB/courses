// Generated from GLOSSARY.org by `mr glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "multiple integral",
"html": "The Riemann integral over a box \\(B \\subset \\mathbb R^n\\), defined exactly as in one variable with length replaced by volume: \\(f\\) is integrable if the supremum of the lower Darboux sums equals the infimum of the upper ones, and \\(\\int_Bf\\) is that common value.",
"section": "Integrating over regions",
"slide": "The integral over a box",
"keys": [
"multiple integral"
]
},
{
"term_html": "measure zero",
"html": "A set that can be covered, for every \\(\\varepsilon &gt; 0\\), by countably many boxes of total volume below \\(\\varepsilon\\). Points, segments and smooth surfaces in \\(\\mathbb R^3\\) are all of measure zero; so are the rationals, which are also dense — measure zero is not the same as small.",
"section": "Integrating over regions",
"slide": "The integral over a box",
"keys": [
"measure zero"
]
},
{
"term_html": "Lebesgue's criterion",
"html": "A bounded function on a box is Riemann integrable if and only if its set of discontinuities has measure zero. <strong>Cited</strong>: Spivak, <em>Calculus on Manifolds</em>, Thm 3-8; Rudin, <em>Principles</em>, Thm 11.33, in one variable. It is what licenses integrating a density that jumps across a surface.",
"section": "Integrating over regions",
"slide": "The integral over a box",
"keys": [
"lebesgue's criterion"
]
},
{
"term_html": "admissible region (Jordan measurable)",
"html": "A bounded \\(D\\) whose boundary has measure zero. Then \\(\\int_Df := \\int_Bf_D\\), with \\(f_D\\) the extension of \\(f\\) by zero to a box \\(B \\supseteq D\\), exists for bounded \\(f\\) continuous on \\(D\\); and \\(|D| = \\int_D1\\) is its volume. The rational points of a cube are not admissible.",
"section": "Integrating over regions",
"slide": "Regions that are not boxes",
"keys": [
"admissible region (jordan measurable)",
"admissible region",
"jordan measurable"
]
},
{
"term_html": "Fubini's theorem",
"html": "For \\(f\\) continuous on a box \\(R\\times S\\), the integral equals either iterated integral, so an \\(n\\)-fold integral is \\(n\\) ordinary ones. Integrability is a hypothesis, not a formality: for a non-integrable \\(f\\) the two iterated integrals can exist and differ.",
"section": "Integrating over regions",
"slide": "Fubini: one integral at a time",
"keys": [
"fubini's theorem"
]
},
{
"term_html": "change of variables",
"html": "For a \\(C^1\\) diffeomorphism \\(\\Psi : U \\to V\\), \\(\\int_Vf = \\int_U(f\\circ\\Psi)|\\det D\\Psi|\\). <strong>Cited</strong>: Rudin Thm 10.9, Spivak Thm 3-13. The factor is \\(|\\det|\\) because for a linear \\(T\\) the image of a box has volume \\(|\\det T|\\) times the original — both sides are alternating multilinear in the columns and agree at \\(T = I\\). Still true when \\(\\Psi\\) degenerates on a set of measure zero.",
"section": "Integrating over regions",
"slide": "Change of variables, and what a determinant is for",
"keys": [
"change of variables"
]
},
{
"term_html": "spherical coordinates",
"html": "\\(\\Psi(r,\\theta,\\varphi) = (r\\sin\\theta\\cos\\varphi,\\ r\\sin\\theta\\sin\\varphi,\\ r\\cos\\theta)\\), with \\(\\theta\\) the polar angle from the \\(z\\)-axis. Its three partial derivatives are \\(\\hat r\\), \\(r\\hat\\theta\\), \\(r\\sin\\theta\\,\\hat\\varphi\\), mutually orthogonal.",
"section": "Integrating over regions",
"slide": "Spherical coordinates, and where the chart dies",
"keys": [
"spherical coordinates"
]
},
{
"term_html": "Jacobian determinant",
"html": "\\(|\\det D\\Psi|\\), the local volume distortion of a change of coordinates. For spherical coordinates it is \\(r^2\\sin\\theta\\), got in one line from the fact that a matrix with orthogonal columns has \\((\\det A)^2 = \\prod_i\\lVert c_i\\rVert^2\\); for cylindrical coordinates it is \\(s\\).",
"section": "Integrating over regions",
"slide": "Spherical coordinates, and where the chart dies",
"keys": [
"jacobian determinant"
]
},
{
"term_html": "cylindrical coordinates",
"html": "\\(\\Psi(s,\\varphi,z) = (s\\cos\\varphi,\\ s\\sin\\varphi,\\ z)\\), with \\(\\mathrm dV = s\\,\\mathrm ds\\,\\mathrm d\\varphi\\,\\mathrm dz\\). The coordinate singularity is the whole \\(z\\)-axis.",
"section": "Integrating over regions",
"slide": "Spherical coordinates, and where the chart dies",
"keys": [
"cylindrical coordinates"
]
},
{
"term_html": "coordinate singularity",
"html": "A point where a chart degenerates — \\(\\det D\\Psi = 0\\), or the chart stops being injective — although nothing is wrong with the space itself. For spherical coordinates: the origin and the polar axis, where \\(\\varphi\\) is undefined. The set is of measure zero, so integration is unaffected. The same distinction, with much higher stakes, separates the two singularities of the Schwarzschild solution in unit 36.",
"section": "Integrating over regions",
"slide": "Spherical coordinates, and where the chart dies",
"keys": [
"coordinate singularity"
]
},
{
"term_html": "shell theorem",
"html": "A spherically symmetric shell attracts an external point exactly as a point of equal mass at its centre, and exerts <strong>no</strong> force at all anywhere inside. Proved twice here: by integration, where the whole content is the step \\(\\sqrt{(r-a)^2} = |r-a|\\), and by Gauss's law in three lines.",
"section": "Integrating over regions",
"slide": "Worked example 1 — the cancellation",
"keys": [
"shell theorem"
]
},
{
"term_html": "parametrised surface",
"html": "A \\(C^1\\) map \\(\\Sigma : D \\subseteq \\mathbb R^2 \\to \\mathbb R^3\\) with \\(D\\Sigma\\) of rank 2 and \\(\\Sigma\\) injective on the interior of \\(D\\).",
"section": "Flux",
"slide": "Surfaces, and the vector area element",
"keys": [
"parametrised surface"
]
},
{
"term_html": "vector area element",
"html": "\\(\\mathrm d\\vec A = (\\partial_u\\Sigma \\times \\partial_v\\Sigma)\\,\\mathrm du\\,\\mathrm dv\\): normal to the surface, of length equal to the area of the parallelogram the two tangent vectors span. For a sphere of radius \\(a\\) it is \\(a^2\\sin\\theta\\,\\hat r\\,\\mathrm d\\theta\\,\\mathrm d\\varphi\\).",
"section": "Flux",
"slide": "Surfaces, and the vector area element",
"keys": [
"vector area element"
]
},
{
"term_html": "flux",
"html": "\\(\\int_\\Sigma\\vec F\\cdot\\mathrm d\\vec A\\), how much of a field crosses a surface. Independent of the parametrisation up to the sign of \\(\\det Dh\\) of the reparametrisation — proved by the chain rule plus the change of variables theorem. The object really being integrated is a 2-form; the cross product is the three-dimensional accident that lets it be written as a vector, and unit 34 removes it.",
"section": "Flux",
"slide": "Surfaces, and the vector area element",
"keys": [
"flux"
]
},
{
"term_html": "orientation",
"html": "A continuous choice of unit normal. A closed surface is oriented outward by convention; flipping it changes the sign of every flux. Not every surface admits one — the Möbius band does not — but the boundary of a solid region always does.",
"section": "Flux",
"slide": "Orientation, and the sphere's area element",
"keys": [
"orientation"
]
},
{
"term_html": "solid angle",
"html": "\\(\\Omega(\\Sigma) = \\int_\\Sigma\\hat r\\cdot\\mathrm d\\vec A/r^2\\), the signed area of the radial projection of \\(\\Sigma\\) onto the unit sphere: the fraction of the sky \\(\\Sigma\\) covers, times \\(4\\pi\\). Dimensionless, in steradians. Any sphere about the origin gives \\(4\\pi\\), for every radius.",
"section": "Flux",
"slide": "Solid angle",
"keys": [
"solid angle"
]
},
{
"term_html": "divergence",
"html": "\\(\\operatorname{div}\\vec F(a) = \\operatorname{tr}D\\vec F(a)\\), the trace of the total derivative — a number attached to a point with no basis involved. That it equals \\(\\sum_i\\partial_iF_i\\) in linear coordinates is a theorem about the matrix of a linear map, not the definition. Not the same as \"the field spreads out\": \\(\\hat r/r^2\\) spreads and has divergence zero.",
"section": "Flux",
"slide": "Divergence, defined without coordinates",
"keys": [
"divergence"
]
},
{
"term_html": "divergence theorem (Gauss's theorem, Ostrogradsky's theorem)",
"html": "\\(\\int_D\\operatorname{div}\\vec F\\,\\mathrm dV = \\oint_{\\partial D}\\vec F\\cdot\\mathrm d\\vec A\\) for compact \\(D\\) with piecewise-\\(C^1\\) boundary and \\(\\vec F\\) of class \\(C^1\\) on all of \\(D\\). Proved here for a box, where it is Fubini plus the fundamental theorem of calculus once per axis; the general case is <strong>cited</strong> (Spivak Thm 5-8) and proved in unit 34.",
"section": "Flux",
"slide": "The divergence theorem, proved for a box",
"keys": [
"divergence theorem (gauss's theorem, ostrogradsky's theorem)",
"divergence theorem",
"gauss's theorem, ostrogradsky's theorem"
]
},
{
"term_html": "gravitational field",
"html": "\\(\\vec g(\\vec x) = -G\\int\\rho(\\vec y)(\\vec x - \\vec y)/\\lVert\\vec x-\\vec y\\rVert^3\\,\\mathrm dV(\\vec y)\\), the force per unit mass at a point of space, defined whether or not anything is there to feel it. The integral converges even inside the matter, because the \\(s^2\\) of the volume element beats the \\(s^{-2}\\) of the force.",
"section": "Gravity becomes a field",
"slide": "The field of a continuous distribution",
"keys": [
"gravitational field"
]
},
{
"term_html": "superposition",
"html": "That \\(\\vec g\\) and \\(\\Phi\\) are <strong>linear</strong> in \\(\\rho\\). A physical assumption of the same status as the force law, and one general relativity withdraws: its field equations are nonlinear.",
"section": "Gravity becomes a field",
"slide": "The field of a continuous distribution",
"keys": [
"superposition"
]
},
{
"term_html": "Gauss's law for gravity",
"html": "\\(\\oint_S\\vec g\\cdot\\mathrm d\\vec A = -4\\pi GM_{\\mathrm{enc}}\\) for every closed surface. Proved from superposition plus the solid angle of a closed surface, \\(4\\pi\\) from inside and \\(0\\) from outside. The minus sign is gravity having one sign of source and attracting; electrostatics reads \\(Q/\\varepsilon_0\\) under the dictionary \\(-G \\leftrightarrow 1/4\\pi\\varepsilon_0\\).",
"section": "Gravity becomes a field",
"slide": "Gauss's law for gravity",
"keys": [
"gauss's law for gravity"
]
},
{
"term_html": "Poisson's equation",
"html": "\\(\\nabla^2\\Phi = 4\\pi G\\rho\\), where \\(\\rho\\) is \\(C^1\\), equivalently \\(\\operatorname{div}\\vec g = -4\\pi G\\rho\\): a local differential relation between the field and the source at one point, replacing an integral over every mass in the universe. Obtained from the integral law by the localisation lemma — a continuous \\(h\\) with \\(\\int_Dh = 0\\) over every ball is zero. It is what unit 35's field equations must reduce to in the weak-field limit.",
"section": "Gravity becomes a field",
"slide": "The field equation",
"keys": [
"poisson's equation"
]
},
{
"term_html": "Laplace's equation",
"html": "\\(\\nabla^2\\Phi = 0\\), Poisson's equation where there is no mass.",
"section": "Gravity becomes a field",
"slide": "The field equation",
"keys": [
"laplace's equation"
]
},
{
"term_html": "equivariance",
"html": "If \\(\\rho\\circ A = \\rho\\) for every \\(A\\) in a subgroup \\(G \\subseteq O(3)\\), then \\(\\vec g(A\\vec x) = A\\vec g(\\vec x)\\); so \\(\\vec g(\\vec x)\\) lies in the fixed subspace of the stabiliser \\(G_{\\vec x}\\). The precise content of \"by symmetry\". For a spherically symmetric \\(\\rho\\) the fixed subspace is one-dimensional and \\(\\vec g = g(r)\\hat r\\) — one unknown function of one variable, which Gauss's law then determines.",
"section": "Gravity becomes a field",
"slide": "What \"by symmetry\" actually buys",
"keys": [
"equivariance"
]
},
{
"term_html": "gravitational potential",
"html": "\\(\\Phi\\) with \\(\\vec g = -\\nabla\\Phi\\), potential energy per unit mass (unit 04's potential, divided by the test mass). For a uniform ball, \\(-GM(3R^2-r^2)/2R^3\\) inside and \\(-GM/r\\) outside; the two branches agree at \\(r = R\\), and differentiating twice returns \\(4\\pi G\\rho\\).",
"section": "Gravity becomes a field",
"slide": "The potential inside the ball",
"keys": [
"gravitational potential"
]
},
{
"term_html": "Laplacian",
"html": "\\(\\nabla^2f = \\operatorname{tr}\\operatorname{Hess}f = \\operatorname{div}(\\nabla f)\\), in Cartesian coordinates \\(\\sum_i\\partial_i^2f\\). Invariant under orthogonal changes of coordinates, since \\(\\operatorname{tr}(Q^{-1}HQ) = \\operatorname{tr}H\\). It measures how far \\(f\\) at a point falls below its neighbourhood average: \\(\\langle f\\rangle_r = f(a) + (r^2/6)\\nabla^2f(a) + O(r^4)\\) in three dimensions, for \\(f\\) of class \\(C^4\\).",
"section": "Empty space",
"slide": "The Laplacian is a trace",
"keys": [
"laplacian"
]
},
{
"term_html": "harmonic function",
"html": "A \\(C^2\\) function with \\(\\nabla^2f = 0\\) on an open set. By Poisson's equation, \\(\\Phi\\) is harmonic exactly where there is no mass, so every theorem about harmonic functions is a theorem about gravity in vacuum.",
"section": "Empty space",
"slide": "The Laplacian is a trace",
"keys": [
"harmonic function"
]
},
{
"term_html": "mean value property",
"html": "A harmonic \\(\\Phi\\) equals its own average over every sphere (and every ball) contained with its interior in the domain. Proved by differentiating the average with respect to the radius and applying the divergence theorem. Applied to \\(1/r\\) it <strong>is</strong> the shell theorem, read backwards.",
"section": "Empty space",
"slide": "The mean value property",
"keys": [
"mean value property"
]
},
{
"term_html": "maximum principle",
"html": "A harmonic function on a connected open set attaining an interior maximum is constant; on a compact region the extremes are attained on the boundary. Proved from the mean value property by showing the set where the maximum is attained is open and closed.",
"section": "Empty space",
"slide": "The maximum principle, and why gravity cannot trap you",
"keys": [
"maximum principle"
]
},
{
"term_html": "Earnshaw's theorem",
"html": "No point of empty space is a stable equilibrium for a test mass held by a static gravitational field alone, because a harmonic \\(\\Phi\\) has no strict interior minimum. Unit 04 met it as an arithmetic fact about one configuration — the Hessian's eigenvalues summed to zero; here the vanishing sum is named \\(\\nabla^2\\Phi = 0\\) and the conclusion holds for every arrangement of sources at once. The same argument in electrostatics is why every charged-particle trap uses motion, magnetism or time dependence. Lagrange points are not a counterexample: they are stabilised by the velocity-dependent Coriolis term of unit 03.",
"section": "Empty space",
"slide": "The maximum principle, and why gravity cannot trap you",
"keys": [
"earnshaw's theorem"
]
},
{
"term_html": "tidal deviation",
"html": "For two nearby free-fallers separated by \\(\\vec\\xi\\), \\(\\ddot\\xi_i = -(\\partial_i\\partial_j\\Phi)\\xi_j + O(\\lVert\\vec\\xi\\rVert^2)\\). The field itself cancels in the subtraction; only its variation survives, which is what a tide is and why a freely falling observer feels nothing else. The Newtonian ancestor of the geodesic deviation equation of unit 33.",
"section": "Tides",
"slide": "Two free-fallers, and what is left over",
"keys": [
"tidal deviation"
]
},
{
"term_html": "tidal tensor",
"html": "\\(T = \\operatorname{Hess}\\Phi\\), the symmetric bilinear form \\(T(\\vec u,\\vec v) = \\partial_i\\partial_j\\Phi\\,u_iv_j\\). A multilinear map first; its components \\(T_{ij} = \\partial_i\\partial_j\\Phi\\) and their transformation law \\(T' = Q^{\\!\\top}TQ\\) are a theorem about the matrix of a bilinear form. \\(\\operatorname{tr}T = \\nabla^2\\Phi = 4\\pi G\\rho\\), so in vacuum \\(T\\) is trace-free.",
"section": "Tides",
"slide": "The tidal tensor",
"keys": [
"tidal tensor"
]
},
{
"term_html": "principal axes",
"html": "The orthonormal eigenbasis of \\(T\\), supplied by the spectral theorem since \\(T\\) is symmetric (which it is by Clairaut's theorem, unit 03). In vacuum the eigenvalues sum to zero, so a stretch along one axis forces a squeeze across another: a tide always has an axis. For a point mass the eigenvalues are \\((-2,1,1)GM/r^3\\), the \\(-2\\) along \\(\\hat r\\) — two bulges along that line and a squeezed waist around it.",
"section": "Tides",
"slide": "Worked example 4 — the tidal tensor of a point mass",
"keys": [
"principal axes"
]
}
];
