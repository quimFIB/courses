// Generated from GLOSSARY.org by `mr glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "topological manifold",
"html": "A Hausdorff, second countable topological space in which every point has a neighbourhood homeomorphic to an open subset of \\(\\mathbb R^n\\). The \\(n\\) is the <em>dimension</em>, well defined by invariance of domain (cited) or, in the smooth case, by linear algebra.",
"section": "Coordinates stop being data",
"slide": "What a manifold is",
"keys": [
"topological manifold"
]
},
{
"term_html": "chart",
"html": "A pair \\((U,\\mathbf x)\\) with \\(U\\subseteq M\\) open and \\(\\mathbf x\\) a homeomorphism onto an open subset of \\(\\mathbb R^n\\). A chart is a page of an atlas, never data: nothing physical may depend on which one is open.",
"section": "Coordinates stop being data",
"slide": "What a manifold is",
"keys": [
"chart"
]
},
{
"term_html": "coordinates",
"html": "The component functions \\(\\mathbf x = (x^1,\\dots,x^n)\\) of a chart. Each \\(x^i\\) is a real-valued function on \\(U\\), so \\(\\mathrm{d}x^i\\) and \\(\\partial_i\\) both make sense later.",
"section": "Coordinates stop being data",
"slide": "What a manifold is",
"keys": [
"coordinates"
]
},
{
"term_html": "Hausdorff",
"html": "Distinct points have disjoint neighbourhoods. Not automatic for a locally Euclidean space: the line with two origins fails it, and unit 01's global uniqueness of ODE solutions fails with it.",
"section": "Coordinates stop being data",
"slide": "What a manifold is",
"keys": [
"hausdorff"
]
},
{
"term_html": "second countable",
"html": "The topology has a countable base. With Hausdorff it buys paracompactness, hence partitions of unity glued out of bump functions, hence the existence of metrics and connections.",
"section": "Coordinates stop being data",
"slide": "What a manifold is",
"keys": [
"second countable"
]
},
{
"term_html": "locally Euclidean",
"html": "Every point has a chart. The weakest of the three conditions, and the only one that is about shape rather than hygiene.",
"section": "Coordinates stop being data",
"slide": "What a manifold is",
"keys": [
"locally euclidean"
]
},
{
"term_html": "transition map",
"html": "\\(\\tilde{\\mathbf x}\\circ\\mathbf x^{-1}\\) on \\(\\mathbf x(U\\cap V)\\): a map between open subsets of \\(\\mathbb R^n\\), which is the only kind of map whose smoothness is known before a manifold is defined. For the running example it is inversion in the unit circle.",
"section": "Coordinates stop being data",
"slide": "Atlases, and what smooth can mean with no ambient space",
"keys": [
"transition map"
]
},
{
"term_html": "smoothly compatible",
"html": "Of two charts: their transition map and its inverse are \\(C^\\infty\\). Exactly the condition making \"smooth\" chart-independent.",
"section": "Coordinates stop being data",
"slide": "Atlases, and what smooth can mean with no ambient space",
"keys": [
"smoothly compatible"
]
},
{
"term_html": "atlas",
"html": "A family of pairwise smoothly compatible charts covering \\(M\\).",
"section": "Coordinates stop being data",
"slide": "Atlases, and what smooth can mean with no ambient space",
"keys": [
"atlas"
]
},
{
"term_html": "smooth structure",
"html": "A maximal atlas. Every atlas sits in exactly one, so two charts are enough to specify a smooth manifold and nobody writes a maximal atlas down.",
"section": "Coordinates stop being data",
"slide": "Atlases, and what smooth can mean with no ambient space",
"keys": [
"smooth structure"
]
},
{
"term_html": "smooth (of a map of manifolds)",
"html": "\\(F: M\\to N\\) whose coordinate representations are \\(C^\\infty\\). Well defined because a change of chart conjugates the representation by transition maps.",
"section": "Coordinates stop being data",
"slide": "Smooth maps, and the one theorem that makes them well defined",
"keys": [
"smooth (of a map of manifolds)",
"smooth",
"of a map of manifolds"
]
},
{
"term_html": "coordinate representation",
"html": "\\(\\hat F = \\mathbf y\\circ F\\circ\\mathbf x^{-1}\\), the map between open subsets of Euclidean spaces that a chart pair turns \\(F\\) into.",
"section": "Coordinates stop being data",
"slide": "Smooth maps, and the one theorem that makes them well defined",
"keys": [
"coordinate representation"
]
},
{
"term_html": "diffeomorphism",
"html": "A smooth bijection with smooth inverse. \"The same manifold\" always means \"diffeomorphic\"; in general relativity it also means \"the same physical situation\", which is the content of the hole argument.",
"section": "Coordinates stop being data",
"slide": "Smooth maps, and the one theorem that makes them well defined",
"keys": [
"diffeomorphism"
]
},
{
"term_html": "cotangent bundle",
"html": "\\(T^*Q = \\bigsqcup_q T_q^*Q\\), a \\(2n\\)-manifold. Unit 14's phase space: momenta are covectors, which is why \\(p_i\\) carries a lower index and transforms oppositely to \\(\\dot q^i\\).",
"section": "Coordinates stop being data",
"slide": "Every configuration space you have used was one",
"keys": [
"cotangent bundle"
]
},
{
"term_html": "tangent vector",
"html": "An element of \\(T_pM\\), defined equivalently as an equivalence class of curves through \\(p\\) (A), a derivation of germs at \\(p\\) (B), or a chart-indexed family of \\(n\\)-tuples obeying the Jacobian transformation law (C). The three are canonically isomorphic.",
"section": "Tangent vectors",
"slide": "The three definitions describe one space",
"keys": [
"tangent vector"
]
},
{
"term_html": "germ",
"html": "An equivalence class of smooth functions defined near \\(p\\), two being identified when they agree on some neighbourhood of \\(p\\). They form an algebra \\(C^\\infty_p\\).",
"section": "Tangent vectors",
"slide": "Definition B: a derivation of germs",
"keys": [
"germ"
]
},
{
"term_html": "derivation",
"html": "A linear \\(D: C^\\infty_p\\to\\mathbb R\\) with \\(D(fg) = f(p)Dg + g(p)Df\\). It kills constants, and by Hadamard's lemma every one is \\(\\xi^i\\partial_i|_p\\): this is why \\(\\dim T_pM = n\\).",
"section": "Tangent vectors",
"slide": "Definition B: a derivation of germs",
"keys": [
"derivation"
]
},
{
"term_html": "Hadamard's lemma",
"html": "\\(\\hat f(s) = \\hat f(a) + (s^i-a^i)h_i(s)\\) with \\(h_i\\) smooth and \\(h_i(a) = \\partial_i\\hat f(a)\\), proved by the fundamental theorem of calculus along the segment. The single place the theorem spends \\(C^\\infty\\), and the reason the derivation definition fails for \\(C^k\\).",
"section": "Tangent vectors",
"slide": "The three definitions describe one space",
"keys": [
"hadamard's lemma"
]
},
{
"term_html": "coordinate basis",
"html": "\\(\\{\\partial_i|_p\\}\\), the derivations \\(f\\mapsto\\partial(f\\circ\\mathbf x^{-1})/\\partial s^i\\). A basis of \\(T_pM\\), and it depends on all \\(n\\) coordinates, not only on \\(x^i\\).",
"section": "Tangent vectors",
"slide": "The coordinate basis, and the count that follows",
"keys": [
"coordinate basis"
]
},
{
"term_html": "tangent bundle",
"html": "\\(TM = \\bigsqcup_pT_pM\\), a smooth \\(2n\\)-manifold with charts \\((x^i, X^i)\\) and transitions \\((s,\\xi)\\mapsto(\\tau(s), D\\tau(s)\\xi)\\), linear in the fibre — a vector bundle.",
"section": "Tangent vectors",
"slide": "The coordinate basis, and the count that follows",
"keys": [
"tangent bundle"
]
},
{
"term_html": "section",
"html": "A smooth map \\(M\\to E\\) into a bundle over \\(M\\) that is the identity after projection. A vector field is a section of \\(TM\\), a tensor field a section of \\(T^p_qM\\).",
"section": "Tangent vectors",
"slide": "The coordinate basis, and the count that follows",
"keys": [
"section"
]
},
{
"term_html": "differential (pushforward)",
"html": "\\(\\mathrm{d}F_p: T_pM\\to T_{F(p)}N\\), \\((\\mathrm{d}F_pX)(f) = X(f\\circ F)\\). Linear; its matrix in charts is the Jacobian; \\(\\mathrm{d}(G\\circ F) = \\mathrm{d}G\\circ\\mathrm{d}F\\) is the chain rule in its final form.",
"section": "Tangent vectors",
"slide": "The differential of a smooth map",
"keys": [
"differential (pushforward)",
"differential",
"pushforward"
]
},
{
"term_html": "cotangent space",
"html": "\\(T^*_pM = (T_pM)^*\\), unit 16's dual space built on the tangent space. Its elements are covectors.",
"section": "Covectors and tensor fields",
"slide": "The cotangent space, and \\(\\mathrm{d}f\\)",
"keys": [
"cotangent space"
]
},
{
"term_html": "differential of a function",
"html": "\\(\\mathrm{d}f_p(X) = X(f)\\), an element of \\(T^*_pM\\). Defined with no metric and no choice — unlike the gradient, which is \\(g^{ij}\\partial_jf\\) and needs one. On a bare manifold there is no gradient at all.",
"section": "Covectors and tensor fields",
"slide": "The cotangent space, and \\(\\mathrm{d}f\\)",
"keys": [
"differential of a function"
]
},
{
"term_html": "dual basis",
"html": "\\(\\{\\mathrm{d}x^i\\}\\), characterised by \\(\\mathrm{d}x^i(\\partial_j) = \\delta^i_j\\); unit 16's \\(\\varepsilon^j\\) at each point. Then \\(\\mathrm{d}f = \\partial_i\\hat f\\,\\mathrm{d}x^i\\).",
"section": "Covectors and tensor fields",
"slide": "The cotangent space, and \\(\\mathrm{d}f\\)",
"keys": [
"dual basis"
]
},
{
"term_html": "tensor field",
"html": "An assignment \\(m\\mapsto T_m\\) of a \\((p,q)\\)-tensor on \\(T_mM\\) — a multilinear map, exactly unit 16's definition — with components smooth in every chart. Equivalently a smooth section of \\(T^p_qM\\).",
"section": "Covectors and tensor fields",
"slide": "Tensor fields: unit 16, one point at a time",
"keys": [
"tensor field"
]
},
{
"term_html": "transformation law (on a manifold)",
"html": "\\(\\tilde T^{a\\dots}{}_{\\dots b} = A^a{}_i\\cdots S^j{}_b\\cdots T^{i\\dots}{}_{\\dots j}\\) with \\(A^a{}_i = \\partial\\tilde x^a/\\partial x^i\\) and \\(S = A^{-1}\\). A theorem, proved by multilinearity, exactly as in unit 16 — the one change being that \\(A\\) and \\(S\\) now vary from point to point.",
"section": "Covectors and tensor fields",
"slide": "\"Transforms like a tensor\" is a theorem, again",
"keys": [
"transformation law (on a manifold)",
"transformation law",
"on a manifold"
]
},
{
"term_html": "equivariant",
"html": "What a rule assigning arrays to charts must be to come from a tensor field: it must commute with every change of chart. The rule \"\\(T_{ij} = \\delta_{ij}\\) in every chart\" is not, and the sphere convicts it at \\(P\\) — the rule says 1, the law says 25.",
"section": "Covectors and tensor fields",
"slide": "Components are not the tensor",
"keys": [
"equivariant"
]
},
{
"term_html": "Riemannian metric",
"html": "A \\((0,2)\\)-tensor field, symmetric and positive definite at every point. Lengths \\(\\lVert X\\rVert^2 = g_{ij}X^iX^j\\), and the isomorphism \\(X\\mapsto g(X,\\cdot)\\) that raises and lowers indices. Every second countable smooth manifold has one.",
"section": "Covectors and tensor fields",
"slide": "A metric is a bilinear form on each tangent space",
"keys": [
"riemannian metric"
]
},
{
"term_html": "Lorentzian metric",
"html": "The same with signature \\((-,+,+,+)\\) at every point. Unlike Riemannian metrics these need not exist: \\(S^2\\) admits none, because a line field on a compact surface forces \\(\\chi = 0\\) and \\(\\chi(S^2) = 2\\).",
"section": "Covectors and tensor fields",
"slide": "A metric is a bilinear form on each tangent space",
"keys": [
"lorentzian metric"
]
},
{
"term_html": "conformally flat",
"html": "Of a metric written as \\(\\Omega^2\\delta_{ij}\\) in some chart. The round metric is, in both stereographic charts, with \\(\\Omega = 2/(1+r^2)\\); every surface metric is locally.",
"section": "Covectors and tensor fields",
"slide": "The round metric, in both charts at once",
"keys": [
"conformally flat"
]
},
{
"term_html": "vector field",
"html": "A smooth section of \\(TM\\); equivalently a derivation of \\(C^\\infty(M)\\), acting as \\(f\\mapsto X^i\\partial_if\\).",
"section": "Vector fields, flows and the bracket",
"slide": "A vector field is a flow",
"keys": [
"vector field"
]
},
{
"term_html": "integral curve",
"html": "A curve with \\(\\dot\\gamma(t) = X_{\\gamma(t)}\\). In a chart it is the autonomous system \\(\\dot s^i = X^i(s)\\) of unit 02, with unit 01's Picard–Lindelöf giving existence and uniqueness.",
"section": "Vector fields, flows and the bracket",
"slide": "A vector field is a flow",
"keys": [
"integral curve"
]
},
{
"term_html": "flow",
"html": "\\(\\varphi^X_t(m) = \\gamma_m(t)\\), satisfying \\(\\varphi_{t+s} = \\varphi_t\\circ\\varphi_s\\) and \\(\\varphi_0 = \\mathrm{id}\\) where defined: a local one-parameter group of diffeomorphisms.",
"section": "Vector fields, flows and the bracket",
"slide": "A vector field is a flow",
"keys": [
"flow"
]
},
{
"term_html": "complete",
"html": "Of a vector field whose integral curves all run for all \\(t\\). Every field on a compact manifold is complete; \\(x^2\\partial_x\\) on \\(\\mathbb R\\) is not, and incompleteness of timelike geodesics is how a spacetime singularity is defined.",
"section": "Vector fields, flows and the bracket",
"slide": "A vector field is a flow",
"keys": [
"complete"
]
},
{
"term_html": "Lie bracket",
"html": "\\([X,Y]f = X(Yf) - Y(Xf)\\), a vector field with components \\([X,Y]^i = X^j\\partial_jY^i - Y^j\\partial_jX^i\\); the second-derivative terms cancel by Clairaut's theorem. Not \\(C^\\infty\\)-bilinear: \\([X,fY] = f[X,Y] + (Xf)Y\\), so it is a genuine derivative and not a tensor.",
"section": "Vector fields, flows and the bracket",
"slide": "The Lie bracket",
"keys": [
"lie bracket"
]
},
{
"term_html": "Lie algebra",
"html": "A vector space with a bilinear antisymmetric bracket satisfying the Jacobi identity. The vector fields on \\(M\\) form one, infinite dimensional; the rotation fields on \\(S^2\\) span a three-dimensional subalgebra.",
"section": "Vector fields, flows and the bracket",
"slide": "The Lie bracket",
"keys": [
"lie algebra"
]
},
{
"term_html": "commutator square",
"html": "\\(\\varphi^Y_{-s}\\varphi^X_{-t}\\varphi^Y_s\\varphi^X_t(m) = m + ts[X,Y]_m + O(3)\\): go along \\(X\\), then \\(Y\\), then back along each, and the gap is the bracket. Checked on the sphere at \\(t=s=0.02\\), where the measured gap is \\((7.8804, 8.1238)\\times10^{-4}\\) against the predicted \\((8,8)\\times10^{-4}\\).",
"section": "Vector fields, flows and the bracket",
"slide": "The bracket measures the failure of flows to commute",
"keys": [
"commutator square"
]
},
{
"term_html": "anti-homomorphism (of the rotation generators)",
"html": "The vector fields generating a left group action satisfy \\([R_A,R_B] = -R_{[A,B]}\\). So unit 16's matrices with \\([J_x,J_y]=+J_z\\) correspond to fields with \\([R_x,R_y]=-R_z\\), and \\(J_k\\mapsto -R_k\\) is the isomorphism onto \\(\\mathfrak{so}(3)\\).",
"section": "Vector fields, flows and the bracket",
"slide": "\\(\\mathfrak{so}(3)\\), realised by flows",
"keys": [
"anti-homomorphism (of the rotation generators)",
"anti-homomorphism",
"of the rotation generators"
]
},
{
"term_html": "pullback",
"html": "\\((F^*T)_m(X_1,\\dots) = T_{F(m)}(\\mathrm{d}F_mX_1,\\dots)\\) for a \\((0,q)\\)-tensor and a diffeomorphism \\(F\\); upper slots use \\((F^{-1})^*\\). The only canonical way to move a tensor between two tangent spaces.",
"section": "The Lie derivative and Killing fields",
"slide": "Differentiating a tensor field along a flow",
"keys": [
"pullback"
]
},
{
"term_html": "Lie derivative",
"html": "\\(\\mathcal L_XT = \\frac{\\mathrm d}{\\mathrm dt}\\big|_0 (\\varphi^X_t)^*T\\). Needs no connection and no metric — only a flow. Its value at \\(m\\) depends on \\(X\\) near \\(m\\), so there is no \\(\\mathcal L_vT\\) for a single vector, which is the gap unit 32's connection fills.",
"section": "The Lie derivative and Killing fields",
"slide": "Differentiating a tensor field along a flow",
"keys": [
"lie derivative"
]
},
{
"term_html": "\\(\\mathcal L_XY = [X,Y]\\)",
"html": "The Lie derivative of a vector field is the bracket, proved by expanding \\((\\varphi_t^*Y)_m = \\mathrm{d}\\varphi_{-t}\\,Y_{\\varphi_t(m)}\\) to first order.",
"section": "The Lie derivative and Killing fields",
"slide": "The formulas, and the theorem behind the first one",
"keys": [
"\\mathcal l_xy = [x,y]"
]
},
{
"term_html": "Lie derivative in components",
"html": "Transport term \\(X^k\\partial_k\\), then one correction per slot: \\(+T_{k\\dots}\\partial_{\\text{slot}}X^k\\) for a lower index, \\(-T^{k\\dots}\\partial_kX^{\\text{slot}}\\) for an upper one. So \\((\\mathcal L_XT)_{ij} = X^k\\partial_kT_{ij} + T_{kj}\\partial_iX^k + T_{ik}\\partial_jX^k\\).",
"section": "The Lie derivative and Killing fields",
"slide": "The formulas, and the theorem behind the first one",
"keys": [
"lie derivative in components"
]
},
{
"term_html": "why \\(\\mathcal L_XT\\) is tensorial",
"html": "The transport term and the corrections each transform with second derivatives of the transition map, and those cancel between them. \\(\\partial_kT_{ij}\\) alone does not, and no term of the formula is a tensor by itself.",
"section": "The Lie derivative and Killing fields",
"slide": "Why \\(\\mathcal L_XT\\) is a tensor and \\(\\partial_kT_{ij}\\) is not",
"keys": [
"why \\mathcal l_xt is tensorial"
]
},
{
"term_html": "Killing vector field",
"html": "\\(X\\) with \\(\\mathcal L_Xg = 0\\), that is \\(X^k\\partial_kg_{ij} + g_{kj}\\partial_iX^k + g_{ik}\\partial_jX^k = 0\\). Equivalently: every \\(\\varphi^X_t\\) is an isometry. A continuous symmetry of a geometry, stated with no coordinates and no connection.",
"section": "The Lie derivative and Killing fields",
"slide": "Killing vector fields",
"keys": [
"killing vector field"
]
},
{
"term_html": "isometry",
"html": "A diffeomorphism with \\(F^*g = g\\). Killing fields are the infinitesimal isometries, and they form a Lie algebra of dimension at most \\(n(n+1)/2\\) — three for \\(S^2\\), six for a maximally symmetric three-space, ten for a maximally symmetric spacetime.",
"section": "The Lie derivative and Killing fields",
"slide": "Killing vector fields",
"keys": [
"isometry"
]
},
{
"term_html": "conformal Killing",
"html": "\\(\\mathcal L_Xg = \\lambda g\\) for some function \\(\\lambda\\): the flow preserves angles but not lengths. The dilation \\(D = u\\partial_u + v\\partial_v\\) on the round sphere has \\(\\lambda = 2(1-r^2)/(1+r^2)\\), which is \\(-\\tfrac43\\) at \\(P\\) and zero only on the equator.",
"section": "The Lie derivative and Killing fields",
"slide": "The rotation field is Killing; the dilation is not",
"keys": [
"conformal killing"
]
},
{
"term_html": "immersion",
"html": "A smooth map whose differential is injective at every point.",
"section": "Submanifolds, and what covariance does not say",
"slide": "Submanifolds, immersions, embeddings",
"keys": [
"immersion"
]
},
{
"term_html": "submersion",
"html": "A smooth map whose differential is surjective at every point.",
"section": "Submanifolds, and what covariance does not say",
"slide": "Submanifolds, immersions, embeddings",
"keys": [
"submersion"
]
},
{
"term_html": "embedding",
"html": "An immersion that is also a homeomorphism onto its image with the subspace topology. The figure-eight \\(t\\mapsto(\\sin2t,\\sin t)\\) is an injective immersion and not an embedding.",
"section": "Submanifolds, and what covariance does not say",
"slide": "Submanifolds, immersions, embeddings",
"keys": [
"embedding"
]
},
{
"term_html": "embedded submanifold",
"html": "The image of an embedding, itself a manifold whose inclusion is smooth. \\(S^2\\) and \\(SO(3)\\) are both, by the regular value theorem.",
"section": "Submanifolds, and what covariance does not say",
"slide": "Submanifolds, immersions, embeddings",
"keys": [
"embedded submanifold"
]
},
{
"term_html": "regular value",
"html": "A \\(c\\) with \\(\\mathrm{d}F\\) surjective at every point of \\(F^{-1}(c)\\); then \\(F^{-1}(c)\\) is an embedded submanifold of dimension \\(\\dim N - k\\). Proved from unit 04's implicit function theorem. <em>Cited.</em>",
"section": "Submanifolds, and what covariance does not say",
"slide": "Submanifolds, immersions, embeddings",
"keys": [
"regular value"
]
},
{
"term_html": "distribution",
"html": "A smooth assignment of a \\(k\\)-dimensional subspace \\(\\mathcal D_m\\subseteq T_mM\\) to each point.",
"section": "Submanifolds, and what covariance does not say",
"slide": "Frobenius: when a bracket closes, a foliation exists",
"keys": [
"distribution"
]
},
{
"term_html": "involutive",
"html": "Of a distribution closed under the Lie bracket of its sections.",
"section": "Submanifolds, and what covariance does not say",
"slide": "Frobenius: when a bracket closes, a foliation exists",
"keys": [
"involutive"
]
},
{
"term_html": "integrable",
"html": "Of a distribution whose subspaces are the tangent spaces of a family of submanifolds — its leaves.",
"section": "Submanifolds, and what covariance does not say",
"slide": "Frobenius: when a bracket closes, a foliation exists",
"keys": [
"integrable"
]
},
{
"term_html": "Frobenius' theorem",
"html": "Involutive if and only if integrable, with charts in which the leaves are coordinate slices. <em>Cited</em>: Lee, <em>Introduction to Smooth Manifolds</em>, chapter 19. The failure case is \\(X = \\partial_x,\\ Y = \\partial_y + x\\partial_z\\) on \\(\\mathbb R^3\\), whose bracket \\(\\partial_z\\) escapes the span — the parallel-parking distribution, and the meaning of a non-holonomic constraint.",
"section": "Submanifolds, and what covariance does not say",
"slide": "Frobenius: when a bracket closes, a foliation exists",
"keys": [
"frobenius' theorem"
]
},
{
"term_html": "partition of unity",
"html": "Smooth \\(\\psi_\\alpha\\in[0,1]\\) subordinate to an open cover, locally finite, summing to 1. <em>Cited</em>; needs second countability and the bump function \\(\\mathrm e^{-1/t}\\). Buys the existence of metrics and connections.",
"section": "Submanifolds, and what covariance does not say",
"slide": "Three results used, not proved",
"keys": [
"partition of unity"
]
},
{
"term_html": "Whitney embedding theorem",
"html": "Every smooth \\(n\\)-manifold embeds in \\(\\mathbb R^{2n}\\). <em>Cited</em>: Whitney 1936, 1944. It says nothing exotic is being smuggled in by the abstract definition — and that the embedding is never canonical, so it must not be used.",
"section": "Submanifolds, and what covariance does not say",
"slide": "Three results used, not proved",
"keys": [
"whitney embedding theorem"
]
},
{
"term_html": "hairy ball theorem",
"html": "Every smooth vector field on \\(S^{2k}\\), \\(k\\ge1\\), vanishes somewhere. <em>Cited</em>: the Poincaré–Hopf theorem, with indices summing to \\(\\chi(M)\\) and \\(\\chi(S^2) = 2\\). \\(R_z\\)'s two zeros, one at each pole, each of index \\(+1\\), realise the minimum.",
"section": "Submanifolds, and what covariance does not say",
"slide": "Three results used, not proved",
"keys": [
"hairy ball theorem"
]
},
{
"term_html": "general covariance",
"html": "\"The laws take the same form in all coordinate systems\". Kretschmann's objection of 1917: any theory can be rewritten that way — Newtonian gravity becomes Newton–Cartan theory — so this alone has no physical content.",
"section": "Submanifolds, and what covariance does not say",
"slide": "General covariance says less than it sounds like",
"keys": [
"general covariance"
]
},
{
"term_html": "diffeomorphism invariance",
"html": "If \\((M,g,\\Phi)\\) solves the field equations then so does \\((M,F^*g,F^*\\Phi)\\), and the two are the <em>same</em> physical situation. Points of \\(M\\) have no identity independent of the fields.",
"section": "Submanifolds, and what covariance does not say",
"slide": "General covariance says less than it sounds like",
"keys": [
"diffeomorphism invariance"
]
},
{
"term_html": "hole argument",
"html": "Einstein's 1913 objection to his own programme: a diffeomorphism that is the identity outside a compact region produces a second solution agreeing with the first outside it, apparently destroying determinism. Resolved by diffeomorphism invariance — the two are one spacetime described twice — but it cost two years.",
"section": "Submanifolds, and what covariance does not say",
"slide": "General covariance says less than it sounds like",
"keys": [
"hole argument"
]
},
{
"term_html": "absolute object",
"html": "A field that is the same, up to diffeomorphism, in every solution. Minkowski's \\(\\eta\\) is one; general relativity's \\(g\\) is not, which is the honest version of \"background independence\". Anderson 1967, with known difficulties.",
"section": "Submanifolds, and what covariance does not say",
"slide": "General covariance says less than it sounds like",
"keys": [
"absolute object"
]
}
];
