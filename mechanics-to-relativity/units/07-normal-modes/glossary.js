// Generated from GLOSSARY.org by `mr glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "normal mode",
"html": "A motion in which every coordinate oscillates at one common frequency with a fixed shape, \\(u(t) = v\\,(\\alpha\\cos\\omega t + \\beta\\sin\\omega t)\\). Equivalently a solution of \\(Kv = \\omega^2Mv\\). A system with \\(n\\) coordinates has exactly \\(n\\) of them, counted with multiplicity.",
"section": "Setting up: two quadratic forms",
"slide": "The generalised eigenvalue problem",
"keys": [
"normal mode"
]
},
{
"term_html": "stiffness matrix",
"html": "\\(K = \\mathrm{Hess}\\,V(u^*)\\), the Hessian of the potential at the equilibrium. Symmetric by Clairaut (unit 03) and positive semidefinite at a minimum; positive definite exactly when the equilibrium is strict to second order.",
"section": "Setting up: two quadratic forms",
"slide": "Two quadratic forms fall out of the physics",
"keys": [
"stiffness matrix"
]
},
{
"term_html": "mass matrix",
"html": "The symmetric matrix of the kinetic-energy form, \\(T = \\tfrac12\\dot u^{\\!\\top}M\\dot u\\). Always positive definite, since anything moving has positive kinetic energy. Diagonal in Cartesian displacements and generally not diagonal in anything else.",
"section": "Setting up: two quadratic forms",
"slide": "Two quadratic forms fall out of the physics",
"keys": [
"mass matrix"
]
},
{
"term_html": "symmetric positive definite",
"html": "\\(M = M^{\\!\\top}\\) with \\(u^{\\!\\top}Mu &gt; 0\\) for every \\(u \\ne 0\\). The single hypothesis every theorem in this unit carries: it is what makes \\(\\langle u,v\\rangle_M\\) an inner product, what makes \\(M^{1/2}\\) exist and be unique, and what makes the normal frequencies real.",
"section": "Setting up: two quadratic forms",
"slide": "Two quadratic forms fall out of the physics",
"keys": [
"symmetric positive definite"
]
},
{
"term_html": "congruence",
"html": "The equivalence \\(B \\mapsto C^{\\!\\top}BC\\) with \\(C\\) invertible: a change of basis for a <strong>bilinear form</strong>, as against similarity \\(P^{-1}AP\\), which is a change of basis for a <strong>linear map</strong>. \\(M\\) and \\(K\\) are forms, so congruence is their natural equivalence, and \"diagonalising both\" means diagonalising both by one congruence.",
"section": "Setting up: two quadratic forms",
"slide": "Two quadratic forms fall out of the physics",
"keys": [
"congruence"
]
},
{
"term_html": "small-oscillation approximation",
"html": "Keeping only the quadratic term of \\(V\\) and the constant \\(M\\), i.e. discarding the \\(o(\\lVert u\\rVert^2)\\). Exact only in the limit of vanishing amplitude; unit 21 asks what the discarded terms do.",
"section": "Setting up: two quadratic forms",
"slide": "Two quadratic forms fall out of the physics",
"keys": [
"small-oscillation approximation"
]
},
{
"term_html": "linear system with constant coefficients",
"html": "\\(\\dot y = Ay\\) on \\(\\mathbb R^N\\). Globally Lipschitz with constant \\(\\lVert A\\rVert\\), so Picard–Lindelöf (unit 01) gives a unique solution for all time, and the solution space is a vector space of dimension exactly \\(N\\).",
"section": "Linear systems and the matrix exponential",
"slide": "First order, in 2n dimensions",
"keys": [
"linear system with constant coefficients"
]
},
{
"term_html": "operator norm",
"html": "\\(\\lVert A\\rVert = \\sup_{\\lVert x\\rVert = 1}\\lVert Ax\\rVert\\). Submultiplicative, \\(\\lVert AB\\rVert \\le \\lVert A\\rVert\\lVert B\\rVert\\), which is the one property the convergence proof for \\(e^A\\) needs.",
"section": "Linear systems and the matrix exponential",
"slide": "The matrix exponential",
"keys": [
"operator norm"
]
},
{
"term_html": "matrix exponential",
"html": "\\(e^A = \\sum_{k\\ge0}A^k/k!\\), convergent for every \\(A\\) because \\(M_n(\\mathbb R)\\) is complete and the series converges absolutely. \\(\\tfrac{\\mathrm d}{\\mathrm dt}e^{At} = Ae^{At}\\), so \\(y(t) = e^{At}y_0\\) is <strong>the</strong> solution of \\(\\dot y = Ay\\). \\(e^{A+B} = e^Ae^B\\) only when \\(AB = BA\\).",
"section": "Linear systems and the matrix exponential",
"slide": "The matrix exponential",
"keys": [
"matrix exponential"
]
},
{
"term_html": "Jordan form",
"html": "The block-diagonal normal form \\(\\lambda I + N\\) with \\(N\\) nilpotent, to which every complex matrix is similar. <em>Cited</em> — proved in any linear algebra text; this unit verifies only the \\(2\\times2\\) case it uses. Its consequence here: a <strong>defective</strong> repeated eigenvalue produces \\(t e^{\\lambda t}\\), which is unit 06's critical damping and this unit's zero modes, and nothing else.",
"section": "Linear systems and the matrix exponential",
"slide": "The degenerate case: Jordan, and t e^{\\lambda t}",
"keys": [
"jordan form"
]
},
{
"term_html": "generalised eigenvalue problem",
"html": "\\(Kv = \\lambda Mv\\) with \\(v \\ne 0\\), for a pair of symmetric matrices. Reduces to an ordinary symmetric eigenvalue problem when \\(M\\) is positive definite, and to nothing at all when neither form is definite.",
"section": "The generalised eigenvalue problem",
"slide": "The generalised eigenvalue problem",
"keys": [
"generalised eigenvalue problem"
]
},
{
"term_html": "matrix pencil",
"html": "The one-parameter family \\(K - \\lambda M\\). \"Pencil\" is projective-geometry language for a linear family; a pencil with \\(M\\) positive definite is called symmetric definite, and that is the good case.",
"section": "The generalised eigenvalue problem",
"slide": "The generalised eigenvalue problem",
"keys": [
"matrix pencil"
]
},
{
"term_html": "characteristic polynomial of a pencil",
"html": "\\(p(\\lambda) = \\det(K - \\lambda M)\\). Of degree exactly \\(n\\) when \\(M\\) is invertible, since \\(\\det(K-\\lambda M) = \\det M\\,\\det(M^{-1}K - \\lambda I)\\) — which is where \"\\(n\\) coordinates, \\(n\\) modes\" starts, though not where it finishes.",
"section": "The generalised eigenvalue problem",
"slide": "The generalised eigenvalue problem",
"keys": [
"characteristic polynomial of a pencil"
]
},
{
"term_html": "normal frequency",
"html": "\\(\\omega = \\sqrt\\lambda\\) for an eigenvalue \\(\\lambda\\) of the pencil. Real whenever \\(K\\) is positive semidefinite; \\(\\lambda &lt; 0\\) gives \\(e^{\\pm|\\omega|t}\\) at an unstable equilibrium, and \\(\\lambda = 0\\) gives a drift \\(a+bt\\). An \\(\\omega\\) with nonzero real <strong>and</strong> imaginary parts cannot occur.",
"section": "The generalised eigenvalue problem",
"slide": "The generalised eigenvalue problem",
"keys": [
"normal frequency"
]
},
{
"term_html": "spectral theorem",
"html": "A real symmetric \\(S\\) has an orthonormal basis of eigenvectors with real eigenvalues; equivalently \\(S = Q\\,\\mathrm{diag}(\\mu)\\, Q^{\\!\\top}\\) with \\(Q\\) orthogonal. Proved here variationally: maximise \\(u^{\\!\\top}Su\\) on the unit sphere, apply Lagrange multipliers (unit 04), and induct on the orthogonal complement.",
"section": "The generalised eigenvalue problem",
"slide": "The spectral theorem, and its variational proof",
"keys": [
"spectral theorem"
]
},
{
"term_html": "matrix square root",
"html": "For \\(M\\) symmetric positive definite, \\(M^{1/2} = Q\\,\\mathrm{diag}(\\sqrt{\\mu_i})\\,Q^{\\!\\top}\\): the unique positive definite matrix whose square is \\(M\\). Without positive definiteness it is not unique and may not exist.",
"section": "The generalised eigenvalue problem",
"slide": "M^{1/2}, and the problem made symmetric",
"keys": [
"matrix square root"
]
},
{
"term_html": "\\(M\\)-inner product",
"html": "\\(\\langle u,v\\rangle_M = u^{\\!\\top}Mv\\). An inner product exactly because \\(M\\) is symmetric positive definite, and physically the kinetic-energy form: \\(\\tfrac12\\langle\\dot u,\\dot u\\rangle_M = T\\).",
"section": "The generalised eigenvalue problem",
"slide": "The inner product the modes are orthogonal in",
"keys": [
"m-inner product"
]
},
{
"term_html": "\\(M\\)-orthogonality",
"html": "\\(\\langle v_i,v_j\\rangle_M = 0\\), the sense in which normal modes are orthogonal. Euclidean orthogonality is the wrong test as soon as the masses differ: on the two-mass example the modes have Euclidean dot product \\(3/4\\) and \\(M\\)-product \\(0\\).",
"section": "The generalised eigenvalue problem",
"slide": "The inner product the modes are orthogonal in",
"keys": [
"m-orthogonality"
]
},
{
"term_html": "simultaneous diagonalisation",
"html": "\\(P^{\\!\\top}MP = I\\) and \\(P^{\\!\\top}KP = \\mathrm{diag}(\\omega_p^2)\\) for the modal matrix \\(P\\) of \\(M\\)-orthonormal modes. Always possible for two symmetric forms when one is definite; possible by a single <strong>orthogonal</strong> matrix only when \\(MK = KM\\); and possible not at all when neither form is definite.",
"section": "The generalised eigenvalue problem",
"slide": "Normal coordinates: the equations fall apart",
"keys": [
"simultaneous diagonalisation"
]
},
{
"term_html": "normal coordinates",
"html": "The coefficients \\(q = P^{-1}u\\) of the expansion \\(u = \\sum_p q_pv_p\\) in the modes. In them the equations become \\(\\ddot q_p = -\\omega_p^2q_p\\) and the energy becomes \\(\\tfrac12\\sum(\\dot q_p^2 + \\omega_p^2q_p^2)\\): \\(n\\) uncoupled oscillators, each with its own conserved energy.",
"section": "The generalised eigenvalue problem",
"slide": "Normal coordinates: the equations fall apart",
"keys": [
"normal coordinates"
]
},
{
"term_html": "second-difference operator",
"html": "The matrix \\(A_N\\) with \\(2\\) on the diagonal and \\(-1\\) beside it, so that \\((A_Nu)_j = -(u_{j+1}-2u_j+u_{j-1})\\). Positive definite with fixed ends because \\(u^{\\!\\top}A_Nu = \\sum_j(u_{j+1}-u_j)^2\\). Divided by \\(a^2\\) it converges to \\(-\\partial_x^2\\), which is unit 18.",
"section": "The chain",
"slide": "Writing down M and K",
"keys": [
"second-difference operator"
]
},
{
"term_html": "cut-off frequency",
"html": "The ceiling \\(2\\sqrt{k/m}\\) that no mode of the chain reaches, approached as neighbouring masses come into exact antiphase. A chain cannot vibrate faster, however many masses it has.",
"section": "The chain",
"slide": "Four checks on the formula",
"keys": [
"cut-off frequency"
]
},
{
"term_html": "wavenumber",
"html": "\\(\\kappa = \\theta/a\\), where \\(a\\) is the spacing and \\(\\theta\\) the phase advance per mass: the mode looks like \\(\\sin(\\kappa x)\\) sampled at \\(x_j = ja\\). Meaningful only up to \\(\\kappa a = \\pi\\), the shortest wavelength a lattice of spacing \\(a\\) can carry.",
"section": "The chain",
"slide": "The dispersion curve, and where it bends",
"keys": [
"wavenumber"
]
},
{
"term_html": "dispersion relation",
"html": "The function \\(\\omega(\\kappa)\\). Here \\(\\omega = (2c/a)\\sin(\\kappa a/2)\\) with \\(c = a\\sqrt{k/m}\\), which is \\(c\\kappa(1 - (\\kappa a)^2/24 + \\dots)\\) for long waves. Straight means every wavelength travels at one speed and pulses keep their shape; curved means they spread.",
"section": "The chain",
"slide": "The dispersion curve, and where it bends",
"keys": [
"dispersion relation"
]
},
{
"term_html": "zero mode",
"html": "A nonzero \\(v\\) with \\(Kv = 0\\): a displacement costing no potential energy to second order. Its normal coordinate obeys \\(\\ddot q = 0\\), so it drifts, \\(q = a + bt\\), and in the first-order system it is the one place a Jordan block can appear in an undamped problem. A symmetry — a curve through the equilibrium along which \\(V\\) is constant — always produces one; the converse fails, since a zero mode can also be an accident of the quadratic approximation (\\(V = u_1^4 + u_2^2\\)).",
"section": "Zero modes and Rayleigh",
"slide": "Cut the chain loose",
"keys": [
"zero mode"
]
},
{
"term_html": "Rayleigh quotient",
"html": "\\(R(u) = u^{\\!\\top}Ku/u^{\\!\\top}Mu\\), the ratio of twice the potential energy of a shape to its \\(M\\)-norm squared. Scale-invariant, so a function of directions. Its minimum is \\(\\omega_1^2\\) and its maximum is \\(\\omega_n^2\\), so any trial vector bounds the lowest frequency <strong>from above</strong>, with an error quadratic in the shape error.",
"section": "Zero modes and Rayleigh",
"slide": "The Rayleigh quotient",
"keys": [
"rayleigh quotient"
]
}
];
