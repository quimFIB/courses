// Generated from GLOSSARY.org by `mr glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "separation of variables",
"html": "Seeking solutions of a linear PDE as a product of functions of one variable each, \\(u(x,t) = X(x)T(t)\\). The PDE becomes a family of ODEs indexed by a constant, which the boundary conditions then restrict to a discrete set.",
"section": "Separation of variables",
"slide": "Splitting the string",
"keys": [
"separation of variables"
]
},
{
"term_html": "separation constant",
"html": "The common value \\(-\\lambda\\) of the two sides after the variables have been separated. It is a constant because one side depends only on \\(x\\) and the other only on \\(t\\); it turns out to be an eigenvalue.",
"section": "Separation of variables",
"slide": "Splitting the string",
"keys": [
"separation constant"
]
},
{
"term_html": "eigenvalues",
"html": "The separation constants \\(\\lambda\\) for which the spatial problem has a nonzero solution obeying the boundary conditions. For the clamped string, \\(\\lambda_n = (n\\pi/L)^2\\) and nothing else.",
"section": "Separation of variables",
"slide": "The boundary conditions do the selecting",
"keys": [
"eigenvalues"
]
},
{
"term_html": "eigenfunctions",
"html": "The nonzero solutions that go with them — here \\(X_n = \\sin(n\\pi x/L)\\). Determined up to a scalar when the eigenvalue is simple.",
"section": "Separation of variables",
"slide": "The boundary conditions do the selecting",
"keys": [
"eigenfunctions"
]
},
{
"term_html": "normal mode",
"html": "One product solution \\(u_n = X_n(x)(\\alpha\\cos\\omega_nt + \\beta\\sin\\omega_nt)\\): every point of the object oscillating at one frequency with a fixed shape. Unit 07's normal modes of a chain of masses, in the continuum.",
"section": "Separation of variables",
"slide": "The boundary conditions do the selecting",
"keys": [
"normal mode"
]
},
{
"term_html": "Bessel's equation",
"html": "\\(s^2\\ddot R + s\\dot R + (s^2 - m^2)R = 0\\), solved by Frobenius in unit 09, with solutions \\(J_m\\) (regular at the origin) and \\(Y_m\\) (logarithmically singular). It is what the drum's radial factor obeys after separating in polar coordinates.",
"section": "Separation of variables",
"slide": "The drum, separated",
"keys": [
"bessel's equation"
]
},
{
"term_html": "weight",
"html": "A continuous \\(w &gt; 0\\) defining the inner product \\(\\langle f,g \\rangle_w = \\int_a^b fgw\\). It is never a free choice: the geometry supplies it — \\(\\mathrm dx\\) on an interval, \\(r\\,\\mathrm dr\\) on a disc, the mass density for a non-uniform string — and it is the same \\(w\\) that appears in the Sturm–Liouville equation.",
"section": "Orthogonality and the best approximation",
"slide": "An inner product on a space of functions",
"keys": [
"weight"
]
},
{
"term_html": "best approximation",
"html": "Among all combinations of \\(e_1,\\dots,e_N\\), the one closest to \\(f\\) in norm has the coefficients \\(\\hat f_n = \\langle f,e_n \\rangle/\\lVert e_n\\rVert^2\\), and then \\(f - S_Nf \\perp e_1,\\dots,e_N\\). Proved by completing the square, which is where orthogonality is spent.",
"section": "Orthogonality and the best approximation",
"slide": "Coefficients are a projection, and that is optimal",
"keys": [
"best approximation"
]
},
{
"term_html": "Fourier coefficient",
"html": "\\(\\hat f_n = \\langle f,e_n\\rangle/\\lVert e_n\\rVert^2\\), the coordinate of \\(f\\) along \\(e_n\\). Defined for any orthogonal system in any inner-product space; independent of how many other terms are kept.",
"section": "Orthogonality and the best approximation",
"slide": "Coefficients are a projection, and that is optimal",
"keys": [
"fourier coefficient"
]
},
{
"term_html": "Bessel's inequality",
"html": "\\(\\sum_n \\hat f_n^2\\lVert e_n\\rVert^2 \\le \\lVert f\\rVert^2\\), for every \\(f\\) and every orthogonal system, with no further hypothesis.",
"section": "Orthogonality and the best approximation",
"slide": "Bessel's inequality, and what it hands you free",
"keys": [
"bessel's inequality"
]
},
{
"term_html": "Riemann–Lebesgue",
"html": "Its corollary: \\(\\hat f_n\\lVert e_n\\rVert \\to 0\\), hence \\(\\int f\\sin nx \\to 0\\) and \\(\\int f\\cos nx \\to 0\\) for piecewise continuous \\(f\\). The engine of Dirichlet's pointwise theorem.",
"section": "Orthogonality and the best approximation",
"slide": "Bessel's inequality, and what it hands you free",
"keys": [
"riemann–lebesgue"
]
},
{
"term_html": "completeness",
"html": "An orthogonal system is complete in \\(V\\) if \\(\\lVert f - S_Nf\\rVert \\to 0\\) for every \\(f \\in V\\). It implies that the only \\(f\\) orthogonal to every \\(e_n\\) is zero; the converse holds in a metrically complete space such as \\(L^2_w\\), not in general in \\(PC\\). A property of the system, not of \\(f\\).",
"section": "Orthogonality and the best approximation",
"slide": "Completeness, and Parseval",
"keys": [
"completeness"
]
},
{
"term_html": "Parseval's identity",
"html": "\\(\\lVert f\\rVert^2 = \\sum_n\\hat f_n^2\\lVert e_n\\rVert^2\\): Bessel's inequality with equality, which holds for every \\(f\\) exactly when the system is complete. Physically, the energy is the sum of the modes' energies, with no cross terms.",
"section": "Orthogonality and the best approximation",
"slide": "Completeness, and Parseval",
"keys": [
"parseval's identity"
]
},
{
"term_html": "Fejér's theorem",
"html": "The averaged partial sums \\(\\sigma_N = \\frac1{N+1}\\sum_{k \\le N}S_k\\) converge uniformly to \\(f\\) for continuous periodic \\(f\\), because the Fejér kernel is nonnegative and concentrates. It is the route to completeness of the trigonometric system, and the repair for Gibbs.",
"section": "Orthogonality and the best approximation",
"slide": "Completeness, and Parseval",
"keys": [
"fejér's theorem"
]
},
{
"term_html": "complex Fourier series",
"html": "\\(f \\sim \\sum_{n\\in\\mathbb Z}c_n\\mathrm e^{2\\pi \\mathrm inx/L}\\) with \\(c_n = \\frac1L\\int_0^L f\\mathrm e^{-2\\pi\\mathrm inx/L}\\). Real \\(f\\) iff \\(c_{-n} = \\overline{c_n}\\).",
"section": "Orthogonality and the best approximation",
"slide": "Sine, cosine, complex: one system per boundary condition",
"keys": [
"complex fourier series"
]
},
{
"term_html": "Dirichlet's theorem",
"html": "For \\(2\\pi\\)-periodic piecewise \\(C^1\\) \\(f\\), \\(S_Nf(x) \\to \\frac12(f(x+) + f(x-))\\) at every \\(x\\): the value where \\(f\\) is continuous, the midpoint of the jump elsewhere.",
"section": "Convergence",
"slide": "Dirichlet: what the series converges to at a jump",
"keys": [
"dirichlet's theorem"
]
},
{
"term_html": "piecewise \\(C^1\\)",
"html": "Continuous except at finitely many points, with \\(f'\\) piecewise continuous and one-sided limits \\(f(x\\pm)\\), \\(f'(x\\pm)\\) everywhere. The hypothesis that bounds the difference quotient fed to Riemann–Lebesgue; continuity alone is not enough, by du Bois-Reymond's 1876 example.",
"section": "Convergence",
"slide": "Dirichlet: what the series converges to at a jump",
"keys": [
"piecewise c^1"
]
},
{
"term_html": "Gibbs phenomenon",
"html": "Near a jump of size \\(J\\) the partial sums overshoot by \\((\\frac2\\pi\\mathrm{Si}(\\pi) - 1)\\frac J2 = 0.08948987\\,J\\) — 8.9490 per cent of the jump — on each side. The overshoot does not shrink with \\(N\\); it only moves closer to the jump, at distance \\(\\pi/2M\\).",
"section": "Convergence",
"slide": "Worked: Gibbs, and the number 8.9490 %",
"keys": [
"gibbs phenomenon"
]
},
{
"term_html": "Sturm–Liouville operator",
"html": "\\(\\mathcal Lu = -(pu')' + qu\\) with \\(p \\in C^1\\), \\(p &gt; 0\\), \\(q\\) real continuous. Every second-order linear equation \\(Au'' + Bu' + Cu + \\lambda Du = 0\\) with \\(A &gt; 0\\) takes this form after multiplication by \\(\\mu = A^{-1}\\exp\\int(B/A)\\).",
"section": "Sturm–Liouville",
"slide": "The operator, and the weight that comes with it",
"keys": [
"sturm–liouville operator"
]
},
{
"term_html": "Sturm–Liouville problem",
"html": "Find \\(\\lambda\\) and \\(u \\not\\equiv 0\\) with \\(\\mathcal Lu = \\lambda wu\\) plus boundary conditions. Equivalently an eigenvalue problem for \\(\\mathcal A = w^{-1}\\mathcal L\\) on the space carrying \\(\\langle\\cdot,\\cdot\\rangle_w\\) — the same \\(w\\) in both places, which is what makes \\(\\mathcal A\\) symmetric.",
"section": "Sturm–Liouville",
"slide": "The operator, and the weight that comes with it",
"keys": [
"sturm–liouville problem"
]
},
{
"term_html": "Lagrange's identity",
"html": "\\(\\bar v\\mathcal Lu - u\\overline{\\mathcal Lv} = \\frac{\\mathrm d}{\\mathrm dx}[p(u\\bar v{}' - u'\\bar v)]\\), for any \\(u,v \\in C^2\\), with no hypothesis at all. Integrating it turns symmetry of \\(\\mathcal A\\) into a statement about two endpoints.",
"section": "Sturm–Liouville",
"slide": "Lagrange's identity: one line, everything follows",
"keys": [
"lagrange's identity"
]
},
{
"term_html": "bilinear concomitant",
"html": "\\([u,v](x) = p(x)(u\\bar v{}' - u'\\bar v)(x)\\), a weighted Wronskian, and the only obstruction to symmetry. For real \\(u,v\\) it is \\(p\\) times the Wronskian of unit 06, and Abel's identity is the case where both solve the same equation.",
"section": "Sturm–Liouville",
"slide": "Lagrange's identity: one line, everything follows",
"keys": [
"bilinear concomitant"
]
},
{
"term_html": "formally self-adjoint",
"html": "Symmetric up to the boundary term — true of \\(\\mathcal L\\) for every \\(p, q, w\\), by Lagrange's identity. Genuine self-adjointness is then a finite-dimensional condition on the boundary data.",
"section": "Sturm–Liouville",
"slide": "Lagrange's identity: one line, everything follows",
"keys": [
"formally self-adjoint"
]
},
{
"term_html": "separated",
"html": "Boundary conditions \\(\\alpha_1u(a) + \\alpha_2u'(a) = 0\\) and \\(\\beta_1u(b) + \\beta_2u'(b) = 0\\) with \\(\\alpha,\\beta\\) <strong>real</strong>. Each end constrains its own data, so the concomitant vanishes end by end; Dirichlet, Neumann and Robin are the cases. Realness is load-bearing: a complex coefficient makes the eigenvalues complex.",
"section": "Sturm–Liouville",
"slide": "Three families of boundary conditions, and one that fails",
"keys": [
"separated"
]
},
{
"term_html": "periodic",
"html": "\\(p(a) = p(b)\\), \\(u(a) = u(b)\\), \\(u'(a) = u'(b)\\). The concomitant takes the same value at both ends, so the difference vanishes. The one family where eigenvalues need not be simple: the drum's angular problem has a two-dimensional eigenspace for every \\(m \\ge 1\\).",
"section": "Sturm–Liouville",
"slide": "Three families of boundary conditions, and one that fails",
"keys": [
"periodic"
]
},
{
"term_html": "singular",
"html": "An endpoint where \\(p \\to 0\\) (or \\(q\\) blows up, or the interval is unbounded). No ordinary boundary condition is imposed; boundedness of \\(u\\) and \\(u'\\) makes the concomitant vanish and does the same job. Bessel at \\(r = 0\\), Legendre at \\(x = \\pm1\\).",
"section": "Sturm–Liouville",
"slide": "Three families of boundary conditions, and one that fails",
"keys": [
"singular"
]
},
{
"term_html": "Sturm comparison",
"html": "If \\(u'' + Qu = 0\\), \\(v'' + \\tilde Qv = 0\\) with \\(\\tilde Q \\ge Q\\) and \\(\\tilde Q \\not\\equiv Q\\), then \\(v\\) vanishes between any two consecutive zeros of \\(u\\). Proved in five lines from \\((u'v - uv')' = (\\tilde Q - Q)uv \\ge 0\\).",
"section": "Sturm–Liouville",
"slide": "Sturm's comparison theorem, and counting nodes",
"keys": [
"sturm comparison"
]
},
{
"term_html": "Sturm oscillation theorem",
"html": "For a regular problem with separated conditions and \\(\\lambda_1 &lt; \\lambda_2 &lt; \\cdots\\), the eigenfunction \\(u_n\\) has exactly \\(n-1\\) zeros in the open interval. Cited; comparison gives the monotone half and the Prüfer angle the exactness.",
"section": "Sturm–Liouville",
"slide": "Sturm's comparison theorem, and counting nodes",
"keys": [
"sturm oscillation theorem"
]
},
{
"term_html": "Rayleigh quotient",
"html": "\\(R[u] = \\int(pu'^2 + qu^2)\\big/\\int wu^2 = \\langle \\mathcal Au,u\\rangle_w/\\langle u,u\\rangle_w\\), stiffness over inertia. Its minimum over admissible \\(u\\) is \\(\\lambda_1\\), attained on the multiples of \\(u_1\\), so every trial function bounds \\(\\lambda_1\\) from <strong>above</strong> and never below. The error is quadratic in the error of the trial function. Unit 07's \\(v^\\top Kv/v^\\top Mv\\), with sums become integrals.",
"section": "The Rayleigh quotient",
"slide": "The quotient, and the identity behind it",
"keys": [
"rayleigh quotient"
]
},
{
"term_html": "natural boundary condition",
"html": "What the first variation forces at an endpoint where nothing was imposed: the boundary term \\([pu'\\eta]_a^b\\) must vanish for all \\(\\eta\\), giving \\(pu' = 0\\) — the Neumann condition, arriving rather than being assumed. Unit 11's notion, in its second job.",
"section": "The Rayleigh quotient",
"slide": "Unit 11's second job: the eigenvalue problem is an Euler–Lagrange equation",
"keys": [
"natural boundary condition"
]
},
{
"term_html": "spherical harmonics",
"html": "\\(Y_\\ell^m(\\theta,\\varphi) = N_{\\ell m}P_\\ell^m(\\cos \\theta)\\mathrm e^{\\mathrm im\\varphi}\\), the eigenfunctions of the Laplacian on the sphere with \\(-\\Delta_{S^2}Y = \\ell(\\ell+1)Y\\): \\(2\\ell+1\\) per \\(\\ell\\), orthonormal and complete in \\(L^2(S^2)\\) (cited). The integer \\(\\ell\\) comes from demanding boundedness at the poles, where \\(p = 1 - x^2\\) vanishes — nothing is quantised by hand.",
"section": "Three geometries",
"slide": "The sphere, separated",
"keys": [
"spherical harmonics"
]
}
];
