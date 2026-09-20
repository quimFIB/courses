// Generated from GLOSSARY.org by `mr glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "rigid body",
"html": "A mass distribution — a density \\(\\rho\\) on a compact set, or finitely many point masses — constrained so that every pairwise distance is constant in time. Its motion is therefore \\(\\vec x\\mapsto R(t)\\vec x + \\vec c(t)\\) with \\(R\\in SO(3)\\), and that is a theorem about distance-preserving maps, not an assumption.",
"section": "A body that cannot deform",
"slide": "What a rigid body is, and where it lives",
"keys": [
"rigid body"
]
},
{
"term_html": "configuration space",
"html": "For a rigid body, \\(SO(3)\\times\\mathbb R^3\\): a rotation and a centre of mass, six dimensions. Not a vector space — rotations cannot be added — which is what forces section 6's coordinate trouble.",
"section": "A body that cannot deform",
"slide": "What a rigid body is, and where it lives",
"keys": [
"configuration space"
]
},
{
"term_html": "body frame",
"html": "The orthonormal frame carried by the body, in which every material point has constant coordinates and \\(\\mathsf I\\) is a constant array. Euler's equations live here.",
"section": "A body that cannot deform",
"slide": "Angular velocity, recalled",
"keys": [
"body frame"
]
},
{
"term_html": "space frame",
"html": "The inertial frame. \\(\\vec L\\) is constant here when no torque acts, and \\(\\mathsf I\\) is not.",
"section": "A body that cannot deform",
"slide": "Angular velocity, recalled",
"keys": [
"space frame"
]
},
{
"term_html": "angular velocity",
"html": "The vector \\(\\vec\\omega\\) defined from \\(\\Omega = R^{\\mathsf T}\\dot R\\), which is antisymmetric, by \\(\\Omega\\vec u = \\vec\\omega\\times\\vec u\\). Every velocity in the body is then \\(\\vec V + \\vec\\omega\\times\\vec r\\). It is a vector only because antisymmetric \\(3\\times3\\) matrices form a three-dimensional space — an accident of three dimensions.",
"section": "A body that cannot deform",
"slide": "Angular velocity, recalled",
"keys": [
"angular velocity"
]
},
{
"term_html": "so(3)",
"html": "The vector space of antisymmetric real \\(3\\times3\\) matrices; the tangent space to \\(SO(3)\\) at the identity, and its Lie algebra.",
"section": "A body that cannot deform",
"slide": "so(3), and the exponential that gets you back",
"keys": [
"so(3)",
"so",
"3"
]
},
{
"term_html": "exponential map",
"html": "\\(\\exp A = \\sum_{n\\ge0}A^n/n!\\), convergent for every matrix. It maps \\(\\mathfrak{so}(3)\\) onto \\(SO(3)\\): every rotation is a rotation through some angle about some axis.",
"section": "A body that cannot deform",
"slide": "so(3), and the exponential that gets you back",
"keys": [
"exponential map"
]
},
{
"term_html": "Rodrigues' formula",
"html": "\\(\\exp(\\theta K) = \\mathbb 1 + \\sin\\theta\\,K + (1-\\cos\\theta)K^2\\) for \\(K\\vec u = \\hat n\\times\\vec u\\) with \\(\\hat n\\) a unit vector; the rotation by \\(\\theta\\) about \\(\\hat n\\). Proved from \\(K^3=-K\\).",
"section": "A body that cannot deform",
"slide": "so(3), and the exponential that gets you back",
"keys": [
"rodrigues' formula"
]
},
{
"term_html": "inertia tensor",
"html": "The symmetric bilinear form \\(\\mathsf I_O(\\vec u,\\vec w) = \\int_B\\rho\\big[(\\vec u\\cdot\\vec w)\\lVert\\vec r\\rVert^2 - (\\vec u\\cdot\\vec r)(\\vec w\\cdot\\vec r)\\big]\\mathrm dV\\) about a chosen origin \\(O\\), obtained by polarising the rotational kinetic energy \\(T = \\tfrac12\\mathsf I_O(\\vec\\omega,\\vec\\omega)\\). Positive definite unless the body is a straight line through \\(O\\). Units \\(\\mathrm{kg\\,m^2}\\).",
"section": "The inertia tensor",
"slide": "From a kinetic energy to a bilinear form",
"keys": [
"inertia tensor"
]
},
{
"term_html": "parallel-axis theorem (Steiner)",
"html": "\\(\\mathsf I_O = \\mathsf I_{\\mathrm{cm}} + M\\big[(\\vec u\\cdot\\vec w)\\lVert\\vec d\\rVert^2-(\\vec u\\cdot\\vec d)(\\vec w\\cdot\\vec d)\\big]\\) where \\(\\vec d\\) is the vector from \\(O\\) to the centre of mass (its sign is immaterial: the added term is quadratic in it). Proved by expanding the definition; the cross terms vanish because \\(\\int\\rho\\,\\vec r\\,\\mathrm dV = 0\\) about the centre of mass. Only from the centre of mass — never between two arbitrary points in one step.",
"section": "The inertia tensor",
"slide": "Moving the origin: the parallel-axis theorem",
"keys": [
"parallel-axis theorem (steiner)",
"parallel-axis theorem",
"steiner"
]
},
{
"term_html": "dual space",
"html": "\\(V^*\\), the space of linear maps \\(V\\to\\mathbb R\\). It has the same dimension as \\(V\\) but is not canonically isomorphic to it: an isomorphism needs a choice — of basis, or of inner product — and the inner product is the choice physics makes.",
"section": "What a tensor actually is",
"slide": "The dual space, and why it is not V",
"keys": [
"dual space"
]
},
{
"term_html": "covector (covectors)",
"html": "An element of \\(V^*\\). Angular momentum is one: \\(\\vec L_O = \\mathsf I_O(\\vec\\omega,\\cdot)\\), which the Euclidean inner product then converts into the arrow that gets drawn.",
"section": "What a tensor actually is",
"slide": "Angular momentum is a covector",
"keys": [
"covector (covectors)",
"covector",
"covectors"
]
},
{
"term_html": "dual basis",
"html": "The unique \\(\\{\\varepsilon^j\\}\\subset V^*\\) with \\(\\varepsilon^j(\\vec e_i)=\\delta^j_i\\). It depends on the whole basis, not vector by vector: changing \\(\\vec e_2\\) alone changes \\(\\varepsilon^1\\).",
"section": "What a tensor actually is",
"slide": "The dual space, and why it is not V",
"keys": [
"dual basis"
]
},
{
"term_html": "tensor",
"html": "A multilinear map \\((V^*)^p\\times V^q\\to\\mathbb R\\). Not an array, and not a transformation law: both of those follow once a basis is chosen.",
"section": "What a tensor actually is",
"slide": "The definition",
"keys": [
"tensor"
]
},
{
"term_html": "type \\((p,q)\\)",
"html": "The count of \\(V^*\\) and \\(V\\) slots. \\((0,1)\\) is a covector, \\((1,0)\\) a vector, \\((0,2)\\) a bilinear form such as the inertia tensor or the metric, \\((1,1)\\) a linear map \\(V\\to V\\).",
"section": "What a tensor actually is",
"slide": "The definition",
"keys": [
"type (p,q)"
]
},
{
"term_html": "tensor product",
"html": "\\((S\\otimes T)\\) evaluates \\(S\\) on the first block of arguments and \\(T\\) on the second and multiplies. Bilinear, associative, not commutative.",
"section": "What a tensor actually is",
"slide": "The definition",
"keys": [
"tensor product"
]
},
{
"term_html": "components (of a tensor)",
"html": "The numbers \\(T^{i\\dots}{}_{\\dots j} = T(\\varepsilon^i,\\dots,\\vec e_j,\\dots)\\). There are \\(n^{p+q}\\) of them, the corresponding tensor products form a basis of \\(T^p_q(V)\\), and the components in one basis determine the tensor — hence determine the components in every other basis.",
"section": "What a tensor actually is",
"slide": "Components, and why there are n^{p+q} of them",
"keys": [
"components (of a tensor)",
"components",
"of a tensor"
]
},
{
"term_html": "transformation law",
"html": "With \\(\\vec f_a = S_{ia}\\vec e_i\\) and \\(A=S^{-1}\\), \\(T'^{a\\dots}{}_{\\dots b} = A_{ai}\\cdots S_{jb}\\cdots T^{i\\dots}{}_{\\dots j}\\): upper indices by \\(S^{-1}\\), lower by \\(S\\). A theorem with a two-line proof, not a definition. For orthonormal bases and \\(R = S^{\\mathsf T}\\) it reads \\(\\mathsf I' = R\\mathsf IR^{\\mathsf T}\\).",
"section": "What a tensor actually is",
"slide": "The transformation law is a theorem",
"keys": [
"transformation law"
]
},
{
"term_html": "Einstein summation convention",
"html": "An index repeated once up and once down in a term is summed; a free index appears once per term, in the same position on both sides of an equation. The up–down rule is exactly the condition that makes a contracted sum basis-independent.",
"section": "What a tensor actually is",
"slide": "Index notation, and the convention that earns its keep",
"keys": [
"einstein summation convention"
]
},
{
"term_html": "free index",
"html": "One that appears once in a term and so labels which of several equations you are reading, as against a dummy, which is summed and may be renamed.",
"section": "What a tensor actually is",
"slide": "Index notation, and the convention that earns its keep",
"keys": [
"free index"
]
},
{
"term_html": "contraction",
"html": "Summing one upper against one lower index, producing a \\((p-1,q-1)\\)-tensor. Defined without a basis by applying the covector slot to the vector slot.",
"section": "What a tensor actually is",
"slide": "Contraction, and the trace that survives",
"keys": [
"contraction"
]
},
{
"term_html": "trace",
"html": "The contraction of a \\((1,1)\\)-tensor, \\(T^i{}_i\\): a number belonging to the tensor, not to a basis. For a \\((0,2)\\)-tensor \\(\\sum_iT_{ii}\\) is <strong>not</strong> basis-independent, and is meaningful here only because every basis in this unit is orthonormal. \\(\\operatorname{tr}\\mathsf I_O = 2\\int\\rho\\lVert\\vec r\\rVert^2\\mathrm dV\\).",
"section": "What a tensor actually is",
"slide": "Contraction, and the trace that survives",
"keys": [
"trace"
]
},
{
"term_html": "symmetric part",
"html": "\\(T_{(ij)} = \\tfrac12(T_{ij}+T_{ji})\\) of a \\((0,2)\\)-tensor. Basis-independent, because the law is a congruence \\(S^{\\mathsf T}TS\\). The inertia tensor, the metric and the stress tensor live here.",
"section": "What a tensor actually is",
"slide": "Symmetric and antisymmetric parts",
"keys": [
"symmetric part"
]
},
{
"term_html": "antisymmetric part",
"html": "\\(T_{[ij]} = \\tfrac12(T_{ij}-T_{ji})\\). Also basis-independent, and the seed of the exterior algebra of unit 34. Note that symmetry of a \\((1,1)\\)-tensor is <strong>not</strong> basis-independent, since its law is a similarity.",
"section": "What a tensor actually is",
"slide": "Symmetric and antisymmetric parts",
"keys": [
"antisymmetric part"
]
},
{
"term_html": "equivariant",
"html": "What a rule assigning an array to each basis must be in order to come from a tensor: it must commute with change of basis, which is to say obey the transformation law. The rule \"return \\(\\mathrm{diag}(I_{11},I_{22},I_{33})\\)\" is not, and the block convicts it — \\(0.00288\\) against \\(0.00864\\).",
"section": "What a tensor actually is",
"slide": "Nine numbers per basis that are not a tensor",
"keys": [
"equivariant"
]
},
{
"term_html": "principal axes",
"html": "The eigenvectors of \\(\\mathsf I_O\\); an orthonormal triple at every point of every body, by the spectral theorem. Exactly the directions in which \\(\\vec L\\) is parallel to \\(\\vec\\omega\\).",
"section": "Principal axes",
"slide": "Principal axes, and the ellipsoid",
"keys": [
"principal axes"
]
},
{
"term_html": "principal moments",
"html": "The eigenvalues \\(I_1\\le I_2\\le I_3\\), each the moment of inertia about its own axis. They satisfy \\(I_1+I_2\\ge I_3\\), with equality iff the body is a lamina in the 1–2 plane.",
"section": "Principal axes",
"slide": "Principal axes, and the ellipsoid",
"keys": [
"principal moments"
]
},
{
"term_html": "inertia ellipsoid",
"html": "\\(\\{\\vec u : \\mathsf I_O(\\vec u,\\vec u)=1\\}\\), with semi-axes \\(1/\\sqrt{I_k}\\) along the principal axes: the tensor, drawn. Poinsot's construction rolls it on a fixed plane.",
"section": "Principal axes",
"slide": "Principal axes, and the ellipsoid",
"keys": [
"inertia ellipsoid"
]
},
{
"term_html": "symmetric top",
"html": "A body with two equal principal moments, \\(I_1=I_2\\ne I_3\\). Forced (or all three moments equal) whenever the body has a symmetry axis of order three or more. Then every axis perpendicular to the symmetry axis is principal.",
"section": "Principal axes",
"slide": "Symmetry forces degeneracy",
"keys": [
"symmetric top"
]
},
{
"term_html": "Euler's equations",
"html": "In the principal body frame, \\(I_1\\dot\\omega_1 = (I_2-I_3)\\omega_2\\omega_3+\\tau_1\\) and its two cyclic companions. Obtained from \\(\\dot{\\vec L}=\\vec\\tau\\) by unit 03's transport theorem; the quadratic terms are the price of a constant \\(\\mathsf I\\).",
"section": "Euler's equations",
"slide": "Euler's equations",
"keys": [
"euler's equations"
]
},
{
"term_html": "polhode",
"html": "The curve traced by \\(\\vec\\omega\\) in the body frame during free motion — the intersection of the energy ellipsoid \\(\\sum I_k\\omega_k^2 = 2T\\) with the momentum ellipsoid \\(\\sum I_k^2\\omega_k^2 = \\lVert\\vec L\\rVert^2\\) (a sphere in \\(\\vec L\\)-space, an ellipsoid in \\(\\vec\\omega\\)-space). Closed loops around the extreme axes, crossing curves through the intermediate one.",
"section": "Euler's equations",
"slide": "The free top: two surfaces, one curve",
"keys": [
"polhode"
]
},
{
"term_html": "intermediate-axis theorem",
"html": "For \\(I_1\\lt I_2\\lt I_3\\), steady rotation about the intermediate axis is unstable with growth rate \\(\\lambda = \\Omega\\sqrt{(I_3-I_2)(I_2-I_1)/(I_1I_3)}\\), while the extreme axes oscillate. Stability of the extreme axes needs a Lyapunov function — \\(\\lVert\\vec L\\rVert^2-2I_1T\\) — because their linearisation is a centre.",
"section": "Euler's equations",
"slide": "The intermediate-axis theorem, with a number",
"keys": [
"intermediate-axis theorem"
]
},
{
"term_html": "Euler angles",
"html": "\\(R = R_z(\\phi)R_x(\\theta)R_z(\\psi)\\): three coordinates on \\(SO(3)\\), with \\(\\det\\partial(\\omega)/\\partial(\\dot\\phi,\\dot\\theta,\\dot\\psi) = -\\sin\\theta\\).",
"section": "Euler angles, and the tops",
"slide": "Three angles, and where they fail",
"keys": [
"euler angles"
]
},
{
"term_html": "gimbal lock",
"html": "The rank drop at \\(\\theta = 0,\\pi\\), where only \\(\\dot\\phi+\\dot\\psi\\) is determined. Unavoidable: \\(SO(3)\\) is compact, so no homeomorphism onto an open subset of \\(\\mathbb R^3\\) exists, and every three-parameter description is singular somewhere.",
"section": "Euler angles, and the tops",
"slide": "Three angles, and where they fail",
"keys": [
"gimbal lock"
]
},
{
"term_html": "steady precession",
"html": "Motion of a heavy symmetric top at constant tilt \\(\\theta_0\\), requiring \\(I_1\\cos\\theta_0\\,\\dot\\phi^2 - L_3\\dot\\phi + Mgl = 0\\): a quadratic with a slow and a fast root, real only when \\(L_3^2\\ge4I_1Mgl\\cos\\theta_0\\). The elementary \\(\\dot\\phi\\simeq Mgl/L_3\\) is the slow root with the transverse angular momentum \\(I_1\\dot\\phi\\sin\\theta\\) dropped.",
"section": "Euler angles, and the tops",
"slide": "The heavy top, from a Lagrangian",
"keys": [
"steady precession"
]
},
{
"term_html": "nutation",
"html": "Small oscillation of \\(\\theta\\) about \\(\\theta_0\\), at \\(\\omega_{\\mathrm{nut}} = \\sqrt{V_{\\mathrm{eff}}''(\\theta_0)/I_1}\\simeq L_3/I_1\\) for a fast top — much faster than the precession it rides on.",
"section": "Euler angles, and the tops",
"slide": "The heavy top, from a Lagrangian",
"keys": [
"nutation"
]
}
];
