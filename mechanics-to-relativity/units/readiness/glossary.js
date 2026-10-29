// Generated from GLOSSARY.org by `mr glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "substitution",
"html": "For an integrand of the shape \\(f(g(x))\\,g'(x)\\), put \\(u = g(x)\\): the integral becomes \\(\\int f(u)\\,\\mathrm du\\), with the limits changed to match. For roots of quadratics the substitution runs the other way, \\(x = \\sin\\theta\\), \\(\\sinh\\theta\\) or \\(\\cosh\\theta\\).",
"section": "Calculus moves",
"slide": "Integrals: read the shape, pick the move",
"keys": [
"substitution"
]
},
{
"term_html": "integration by parts",
"html": "\\(\\int_a^b f\\,g' = [fg]_a^b - \\int_a^b f'\\,g\\). Choose \\(f\\) to be the factor that simplifies when differentiated: a polynomial, a logarithm, an arctangent.",
"section": "Calculus moves",
"slide": "Parts, partial fractions, and the arctangent that completes the square",
"keys": [
"integration by parts"
]
},
{
"term_html": "partial fractions",
"html": "Splitting \\(p/q\\), \\(\\deg p \\lt \\deg q\\), into terms \\(A/(x-r)^k\\) and \\((Bx+C)/(x^2+bx+c)^k\\), one family per real factor of \\(q\\). Simple linear factors integrate to logarithms, repeated ones to powers \\((x-r)^{1-k}\\), irreducible quadratics to a logarithm plus an arctangent after completing the square. For a simple root \\(r\\), the cover-up rule gives \\(A = p(r)/q'(r)\\).",
"section": "Calculus moves",
"slide": "Parts, partial fractions, and the arctangent that completes the square",
"keys": [
"partial fractions"
]
},
{
"term_html": "half-angle substitution",
"html": "\\(t = \\tan(\\theta/2)\\) on \\((-\\pi,\\pi)\\): \\(\\cos\\theta = (1-t^2)/(1+t^2)\\), \\(\\sin\\theta = 2t/(1+t^2)\\), \\(\\mathrm d\\theta = 2\\,\\mathrm dt/(1+t^2)\\). It turns any rational function of \\(\\sin\\) and \\(\\cos\\) into a rational function of \\(t\\).",
"section": "Calculus moves",
"slide": "Two substitutions worth knowing by heart, and differentiating a parameter",
"keys": [
"half-angle substitution"
]
},
{
"term_html": "Taylor's theorem",
"html": "If \\(f\\) is \\(n+1\\) times differentiable between \\(0\\) and \\(x\\), then \\(f(x)\\) is its degree-\\(n\\) Taylor polynomial plus a remainder, which can be written in Lagrange's form.",
"section": "Calculus moves",
"slide": "Taylor's theorem, with the remainder that says how wrong you are",
"keys": [
"taylor's theorem"
]
},
{
"term_html": "Lagrange remainder",
"html": "The remainder in Taylor's theorem written as \\(f^{(n+1)}(\\xi)\\,x^{n+1}/(n+1)!\\) for some \\(\\xi\\) strictly between \\(0\\) and \\(x\\ne0\\). When \\(f^{(n+1)}\\) is monotone it gives a two-sided bound on the error.",
"section": "Calculus moves",
"slide": "Taylor's theorem, with the remainder that says how wrong you are",
"keys": [
"lagrange remainder"
]
},
{
"term_html": "radius of convergence",
"html": "The \\(R\\) with \\(\\sum a_nx^n\\) absolutely convergent for \\(|x|\\lt R\\) and divergent for \\(|x|\\gt R\\): \\(1/R = \\limsup|a_n|^{1/n}\\), or \\(\\lim|a_{n+1}/a_n|\\) when that exists. Inside it the series may be differentiated and integrated term by term.",
"section": "Calculus moves",
"slide": "Series: sum it if you can, decide it by the size of the terms if you cannot",
"keys": [
"radius of convergence"
]
},
{
"term_html": "comparison test",
"html": "For series or integrals of non-negative terms: if \\(0\\le a\\le b\\) and the larger converges, so does the smaller. The usual benchmarks are \\(\\sum n^{-p}\\) and \\(\\int x^{-p}\\).",
"section": "Calculus moves",
"slide": "Series: sum it if you can, decide it by the size of the terms if you cannot",
"keys": [
"comparison test"
]
},
{
"term_html": "ratio test",
"html": "If \\(|a_{n+1}/a_n|\\to L\\), then \\(\\sum a_n\\) converges for \\(L\\lt1\\) and diverges for \\(L\\gt1\\); \\(L = 1\\) decides nothing.",
"section": "Calculus moves",
"slide": "Series: sum it if you can, decide it by the size of the terms if you cannot",
"keys": [
"ratio test"
]
},
{
"term_html": "pointwise convergence",
"html": "\\(f_n(x)\\to f(x)\\) at each \\(x\\) separately: the \\(N\\) that achieves \\(|f_n(x) - f(x)|\\lt\\varepsilon\\) may depend on \\(x\\).",
"section": "Real analysis",
"slide": "Pointwise and uniform: the order of two quantifiers",
"keys": [
"pointwise convergence"
]
},
{
"term_html": "uniform convergence",
"html": "\\(\\sup_{x}|f_n(x) - f(x)|\\to0\\): one \\(N\\) serves every \\(x\\). It is what licenses swapping a limit with continuity, an integral over a bounded interval, or (applied to the derivatives) a derivative.",
"section": "Real analysis",
"slide": "Pointwise and uniform: the order of two quantifiers",
"keys": [
"uniform convergence"
]
},
{
"term_html": "Weierstrass M-test",
"html": "If \\(|g_n(x)|\\le M_n\\) for all \\(x\\) and \\(\\sum M_n\\lt\\infty\\), then \\(\\sum g_n\\) converges uniformly and absolutely.",
"section": "Real analysis",
"slide": "What uniform convergence buys, and how to get it cheaply",
"keys": [
"weierstrass m-test"
]
},
{
"term_html": "improper integral",
"html": "An integral over an unbounded interval, or of an integrand that blows up at an end, defined as a limit of proper integrals when the limit exists. \\(\\int_1^\\infty x^{-p}\\) converges iff \\(p\\gt1\\); \\(\\int_0^1x^{-p}\\) iff \\(p\\lt1\\).",
"section": "Real analysis",
"slide": "Improper integrals: absolute and conditional",
"keys": [
"improper integral"
]
},
{
"term_html": "absolute convergence",
"html": "\\(\\int|f|\\lt\\infty\\) (or \\(\\sum|a_n|\\lt\\infty\\)). It implies convergence, and it survives rearrangement; the swap theorems assume it, or a uniform bound.",
"section": "Real analysis",
"slide": "Improper integrals: absolute and conditional",
"keys": [
"absolute convergence"
]
},
{
"term_html": "conditional convergence",
"html": "Convergence that depends on cancellation between positive and negative parts, with \\(\\int|f| = \\infty\\). The standard example is \\(\\int_0^\\infty\\sin x/x\\,\\mathrm dx\\). Fragile under rearrangement and limits.",
"section": "Real analysis",
"slide": "Improper integrals: absolute and conditional",
"keys": [
"conditional convergence"
]
},
{
"term_html": "differentiating under the integral sign",
"html": "\\(\\frac{\\mathrm d}{\\mathrm da}\\int f(a,x)\\,\\mathrm dx = \\int\\partial_af(a,x)\\,\\mathrm dx\\). Licensed on a bounded interval when \\(f\\) and \\(\\partial_af\\) are continuous; on an unbounded one, or with an integrand unbounded at an end, also when \\(\\int f(a_0,x)\\,\\mathrm dx\\) converges for one \\(a_0\\) and \\(|\\partial_af(a,x)|\\le g(x)\\) with \\(\\int g\\lt\\infty\\), uniformly for \\(a\\) in the interval.",
"section": "Real analysis",
"slide": "Differentiating under the integral sign, and what licenses it",
"keys": [
"differentiating under the integral sign"
]
},
{
"term_html": "change of basis",
"html": "With the new basis vectors as the columns of \\(P\\), vector coordinates change as \\(x' = P^{-1}x\\) and the matrix of a linear map as \\(A' = P^{-1}AP\\).",
"section": "Linear algebra",
"slide": "A matrix is a map written in a basis",
"keys": [
"change of basis"
]
},
{
"term_html": "eigenvalue",
"html": "A \\(\\lambda\\) with \\(Av = \\lambda v\\) for some \\(v\\ne0\\); the roots of \\(\\det(A - \\lambda I)\\). A basis of eigenvectors diagonalises \\(A\\).",
"section": "Linear algebra",
"slide": "Eigenvalues, diagonalising, and the matrices that will not",
"keys": [
"eigenvalue"
]
},
{
"term_html": "Jordan form",
"html": "Over \\(\\mathbb C\\), every square matrix is similar to a block diagonal matrix of blocks \\(\\lambda I + N\\), with \\(N\\) having ones just above the diagonal. Diagonalisable means every block has size \\(1\\). Used as a statement only.",
"section": "Linear algebra",
"slide": "Eigenvalues, diagonalising, and the matrices that will not",
"keys": [
"jordan form"
]
},
{
"term_html": "orthogonal matrix",
"html": "\\(Q^{\\mathsf T}Q = I\\): it preserves the dot product, and its columns are orthonormal. \\(SO(n)\\) is the orthogonal matrices of determinant \\(1\\).",
"section": "Linear algebra",
"slide": "Inner products, orthogonal matrices, and the spectral theorem",
"keys": [
"orthogonal matrix"
]
},
{
"term_html": "spectral theorem",
"html": "A real symmetric matrix \\(A\\) has an orthonormal basis of eigenvectors with real eigenvalues: \\(Q^{\\mathsf T}AQ\\) is diagonal for some orthogonal \\(Q\\). Eigenvectors of different eigenvalues are orthogonal, in one line.",
"section": "Linear algebra",
"slide": "Inner products, orthogonal matrices, and the spectral theorem",
"keys": [
"spectral theorem"
]
},
{
"term_html": "dual space",
"html": "\\(V^*\\), the vector space of linear maps \\(V\\to\\mathbb R\\).",
"section": "Linear algebra",
"slide": "The dual space: covectors, and components that change the other way",
"keys": [
"dual space"
]
},
{
"term_html": "dual basis",
"html": "The basis \\(\\beta^i\\) of \\(V^*\\) with \\(\\beta^i(b_j) = \\delta^i_j\\). Written as rows, the \\(\\beta^i\\) are the rows of \\(P^{-1}\\).",
"section": "Linear algebra",
"slide": "The dual space: covectors, and components that change the other way",
"keys": [
"dual basis"
]
},
{
"term_html": "covector",
"html": "An element of the dual space. Its components \\(\\omega_i = \\omega(b_i)\\) change by \\(P\\), the opposite of a vector's, so \\(\\omega(v)\\) is the same in every basis. Pictured as a family of parallel level lines.",
"section": "Linear algebra",
"slide": "The dual space: covectors, and components that change the other way",
"keys": [
"covector"
]
},
{
"term_html": "bilinear form",
"html": "A map \\(B: V\\times V\\to\\mathbb R\\) linear in each slot. Its matrix \\(B_{ij} = B(b_i,b_j)\\) changes as \\(P^{\\mathsf T}BP\\), unlike a linear map's \\(P^{-1}AP\\); the two rules agree only for orthogonal \\(P\\).",
"section": "Linear algebra",
"slide": "A bilinear form is not a linear map, though both have matrices",
"keys": [
"bilinear form"
]
},
{
"term_html": "quadratic form",
"html": "\\(q(x) = B(x,x)\\) for a symmetric bilinear form \\(B\\).",
"section": "Linear algebra",
"slide": "Quadratic forms, signature, and Sylvester's law",
"keys": [
"quadratic form"
]
},
{
"term_html": "signature",
"html": "The pair \\((p,n)\\): the numbers of positive and negative squares when a quadratic form is written as a signed sum of squares. Minkowski space, with one negative and three positive squares, has signature \\((3,1)\\) in this order; the course writes it \\((-,+,+,+)\\).",
"section": "Linear algebra",
"slide": "Quadratic forms, signature, and Sylvester's law",
"keys": [
"signature"
]
},
{
"term_html": "Sylvester's law of inertia",
"html": "The signature does not depend on how the form is diagonalised; \\(p\\) is the largest dimension of a subspace on which \\(q\\) is positive definite.",
"section": "Linear algebra",
"slide": "Quadratic forms, signature, and Sylvester's law",
"keys": [
"sylvester's law of inertia"
]
},
{
"term_html": "metric space",
"html": "A set with a distance \\(d\\): non-negative, zero only on equal points, symmetric, and obeying the triangle inequality.",
"section": "Metric spaces",
"slide": "A distance on functions turns uniform convergence into convergence",
"keys": [
"metric space"
]
},
{
"term_html": "sup metric",
"html": "\\(d_\\infty(f,g) = \\sup|f - g|\\) on the continuous functions on \\([a,b]\\). Convergence in it is uniform convergence.",
"section": "Metric spaces",
"slide": "A distance on functions turns uniform convergence into convergence",
"keys": [
"sup metric"
]
},
{
"term_html": "Cauchy sequence",
"html": "A sequence with \\(d(x_m,x_n)\\to0\\) as \\(m,n\\to\\infty\\): its terms bunch together, whether or not there is a point for them to converge to.",
"section": "Metric spaces",
"slide": "A distance on functions turns uniform convergence into convergence",
"keys": [
"cauchy sequence"
]
},
{
"term_html": "complete",
"html": "Of a metric space: every Cauchy sequence converges to a point of the space. \\(\\mathbb R^n\\) and \\((C[a,b], d_\\infty)\\) are; \\(\\mathbb Q\\) and \\((0,1]\\) are not.",
"section": "Metric spaces",
"slide": "A distance on functions turns uniform convergence into convergence",
"keys": [
"complete"
]
},
{
"term_html": "compact",
"html": "Of a subset of a metric space: every sequence in it has a subsequence converging to a point of it. A continuous function on a compact set is bounded, attains its extremes and is uniformly continuous.",
"section": "Metric spaces",
"slide": "Compactness: what makes a maximum exist",
"keys": [
"compact"
]
},
{
"term_html": "Heine–Borel theorem",
"html": "In \\(\\mathbb R^n\\), compact means closed and bounded. It fails in infinite-dimensional spaces such as \\((C[0,1], d_\\infty)\\).",
"section": "Metric spaces",
"slide": "Compactness: what makes a maximum exist",
"keys": [
"heine–borel theorem"
]
},
{
"term_html": "contraction mapping theorem",
"html": "On a complete nonempty metric space, a map \\(T\\) into itself with \\(d(Tx,Ty)\\le q\\,d(x,y)\\) for one \\(q\\lt1\\) has exactly one fixed point, the iterates from any start converge to it, and \\(d(x_n,x^*)\\le q^nd(x_1,x_0)/(1-q)\\). Also called Banach's fixed-point theorem.",
"section": "Metric spaces",
"slide": "The contraction mapping theorem",
"keys": [
"contraction mapping theorem"
]
},
{
"term_html": "contraction",
"html": "A map with \\(d(Tx,Ty)\\le q\\,d(x,y)\\) for all \\(x,y\\) and a single constant \\(q\\lt1\\).",
"section": "Metric spaces",
"slide": "The contraction mapping theorem",
"keys": [
"contraction"
]
},
{
"term_html": "group",
"html": "A set with an associative product, an identity and inverses.",
"section": "Groups",
"slide": "Groups and homomorphisms, and the spring's group",
"keys": [
"group"
]
},
{
"term_html": "homomorphism",
"html": "A map between groups with \\(\\phi(gh) = \\phi(g)\\phi(h)\\). Its kernel is a subgroup, and it is injective exactly when the kernel is trivial.",
"section": "Groups",
"slide": "Groups and homomorphisms, and the spring's group",
"keys": [
"homomorphism"
]
},
{
"term_html": "one-parameter group",
"html": "A continuous homomorphism from \\((\\mathbb R,+)\\) into a group, such as \\(t\\mapsto R(t)\\) into \\(SO(2)\\). Unit 13 builds Noether's theorem on them.",
"section": "Groups",
"slide": "Groups and homomorphisms, and the spring's group",
"keys": [
"one-parameter group"
]
},
{
"term_html": "group action",
"html": "A rule \\(g\\cdot x\\) with \\(e\\cdot x = x\\) and \\(g\\cdot(h\\cdot x) = (gh)\\cdot x\\).",
"section": "Groups",
"slide": "Groups acting: orbits, stabilisers, and the counting theorem",
"keys": [
"group action"
]
},
{
"term_html": "orbit",
"html": "\\(G\\cdot x = \\{g\\cdot x : g\\in G\\}\\), everywhere \\(x\\) can be moved to. The orbits partition the set acted on.",
"section": "Groups",
"slide": "Groups acting: orbits, stabilisers, and the counting theorem",
"keys": [
"orbit"
]
},
{
"term_html": "stabiliser",
"html": "\\(G_x = \\{g : g\\cdot x = x\\}\\), a subgroup of \\(G\\).",
"section": "Groups",
"slide": "Groups acting: orbits, stabilisers, and the counting theorem",
"keys": [
"stabiliser"
]
},
{
"term_html": "orbit–stabiliser theorem",
"html": "For a finite group, \\(|G| = |G\\cdot x|\\,|G_x|\\), because \\(gG_x\\mapsto g\\cdot x\\) is a bijection from cosets onto the orbit.",
"section": "Groups",
"slide": "Groups acting: orbits, stabilisers, and the counting theorem",
"keys": [
"orbit–stabiliser theorem"
]
}
];
