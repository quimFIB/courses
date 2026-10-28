// Generated from GLOSSARY.org by `qc glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "polarisation",
"html": "The direction, across the beam, in which a light wave's electric field swings: horizontal, vertical, any angle \\(\\alpha\\) between, or round a circle. Modelled as a unit vector of \\(\\mathbb C^2\\): \\(\\ket H = \\ket0\\), \\(\\ket V = \\ket1\\), linear at \\(\\alpha\\) is \\(\\cos\\alpha\\ket0 + \\sin\\alpha\\ket1\\), and circular is \\(\\ket{\\pm i} = \\tfrac1{\\sqrt2}(\\ket0 \\pm i\\ket1)\\).",
"section": "Two photons, and why not the direct sum",
"slide": "Polarisation, from nothing",
"keys": [
"polarisation"
]
},
{
"term_html": "polarising beam splitter",
"html": "A glass cube cut along a diagonal and coated, which transmits one polarisation and reflects the perpendicular one. Turned through \\(\\theta\\), it measures in the basis \\(\\{\\ket\\theta, \\ket{\\theta + 90^\\circ}\\}\\): an analyser.",
"section": "Two photons, and why not the direct sum",
"slide": "Polarisation, from nothing",
"keys": [
"polarising beam splitter"
]
},
{
"term_html": "Malus's law",
"html": "Light polarised at \\(\\alpha\\) through an analyser at \\(\\theta\\): a fraction \\(\\cos^2(\\alpha - \\theta)\\) is transmitted (1809). For single photons it is a probability, and the model reproduces it as \\(|\\braket{\\theta|\\alpha}|^2\\).",
"section": "Two photons, and why not the direct sum",
"slide": "Polarisation, from nothing",
"keys": [
"malus's law"
]
},
{
"term_html": "spontaneous parametric down-conversion",
"html": "In a non-linear crystal, a pump photon occasionally becomes two photons whose energies add to its own. Cut for type II, the pair has one H and one V photon on two crossing cones; where the cones cross, nothing tells which is which (Kwiat et al., 1995, cited).",
"section": "Two photons, and why not the direct sum",
"slide": "Down-conversion: one photon in, two out",
"keys": [
"spontaneous parametric down-conversion"
]
},
{
"term_html": "perfect anticorrelation",
"html": "Two outcomes, labelled by the same pair of exits, that are always different. The photon pair shows it for analysers at the same setting, whatever the setting.",
"section": "Two photons, and why not the direct sum",
"slide": "The fact that needs a model",
"keys": [
"perfect anticorrelation"
]
},
{
"term_html": "direct sum",
"html": "\\(V\\oplus W\\), pairs \\((v, w)\\) with componentwise operations, of dimension \\(\\dim V + \\dim W\\). The right space for alternatives (one photon in beam A or B), the wrong one for conjunctions: it has no amplitude for a joint outcome, and it makes one photon's global phase visible.",
"section": "Two photons, and why not the direct sum",
"slide": "The first guess: the direct sum",
"keys": [
"direct sum"
]
},
{
"term_html": "composite-system postulate",
"html": "The state space of systems A and B together is \\(H_A\\otimes H_B\\); independent preparations \\(\\psi\\), \\(\\varphi\\) give \\(\\psi\\otimes\\varphi\\). The fourth postulate, deferred by unit 01. Forced by asking joint amplitudes to be bilinear.",
"section": "Two photons, and why not the direct sum",
"slide": "Joint amplitudes are bilinear",
"keys": [
"composite-system postulate"
]
},
{
"term_html": "bilinear map",
"html": "\\(h: V\\times W \\to U\\), linear in each argument when the other is fixed.",
"section": "The tensor product",
"slide": "The universal property",
"keys": [
"bilinear map"
]
},
{
"term_html": "tensor product",
"html": "A vector space \\(V\\otimes W\\) with a bilinear map \\(\\otimes: V\\times W \\to V\\otimes W\\) such that every bilinear map out of \\(V\\times W\\) is \\(L\\circ\\otimes\\) for exactly one linear map \\(L\\). Unique up to unique isomorphism; dimension \\(\\dim V\\cdot\\dim W\\).",
"section": "The tensor product",
"slide": "The universal property",
"keys": [
"tensor product"
]
},
{
"term_html": "universal property",
"html": "For every bilinear \\(h: V\\times W \\to U\\) there is exactly one linear \\(L: V\\otimes W \\to U\\) with \\(h = L\\circ\\otimes\\). The definition of the tensor product; it determines the space up to a unique isomorphism compatible with \\(\\otimes\\).",
"section": "The tensor product",
"slide": "The universal property",
"keys": [
"universal property"
]
},
{
"term_html": "pure tensor",
"html": "An element \\(v\\otimes w\\) of \\(V\\otimes W\\); also called a simple tensor. Not a pair: \\((2v)\\otimes w = v\\otimes(2w)\\) and \\(v\\otimes0 = 0\\). Pure tensors span, but most tensors are not pure.",
"section": "The tensor product",
"slide": "The universal property",
"keys": [
"pure tensor"
]
},
{
"term_html": "coefficient matrix",
"html": "For \\(t = \\sum_{ij}C_{ij}\\,e_i\\otimes f_j\\), the matrix \\(C\\). A pure tensor has \\(C = vw^{\\mathsf T}\\), with no conjugation; an operator \\(A\\otimes B\\) sends \\(C\\) to \\(ACB^{\\mathsf T}\\).",
"section": "The tensor product",
"slide": "Computing in coordinates: matrices, and rank",
"keys": [
"coefficient matrix"
]
},
{
"term_html": "tensor rank",
"html": "The least \\(r\\) with \\(t = \\sum_{k=1}^rv_k\\otimes w_k\\). For two factors it equals the rank of the coefficient matrix, so the pure tensors are the rank-one matrices.",
"section": "The tensor product",
"slide": "Computing in coordinates: matrices, and rank",
"keys": [
"tensor rank"
]
},
{
"term_html": "computational basis",
"html": "The orthonormal basis \\(\\ket{x_0x_1\\cdots x_{n-1}} = \\ket{x_0}\\otimes\\cdots\\otimes\\ket{x_{n-1}}\\) of \\(n\\) qubits, \\(x\\) a bit string; \\(2^n\\) vectors.",
"section": "The tensor product",
"slide": "n qubits, and the order of the bits",
"keys": [
"computational basis"
]
},
{
"term_html": "qubit order",
"html": "The course's convention: qubit 0 is the leftmost symbol of a ket and the most significant bit of an index, so \\(\\ket{01}\\) is basis vector 1, and qubit 0 is the top wire of a circuit. Qiskit reverses it.",
"section": "The tensor product",
"slide": "n qubits, and the order of the bits",
"keys": [
"qubit order"
]
},
{
"term_html": "tensor product of operators",
"html": "\\(A\\otimes B\\), the unique linear map with \\((A\\otimes B)(v\\otimes w) = Av\\otimes Bw\\). Obeys \\((A\\otimes B)(C\\otimes D) = AC\\otimes BD\\) and \\((A\\otimes B)^\\dagger = A^\\dagger\\otimes B^\\dagger\\); tensor products of unitaries, Hermitian operators and projectors are again such.",
"section": "The tensor product",
"slide": "Operators on a tensor product",
"keys": [
"tensor product of operators"
]
},
{
"term_html": "Kronecker product",
"html": "The matrix of \\(A\\otimes B\\) with the first factor most significant: entry \\(A_{ik}B_{jl}\\) in row \\((i, j)\\), column \\((k, l)\\); in blocks, \\(\\begin{pmatrix}a_{00}B &amp; a_{01}B\\\\ a_{10}B &amp; a_{11}B\\end{pmatrix}\\).",
"section": "The tensor product",
"slide": "The Kronecker matrix",
"keys": [
"kronecker product"
]
},
{
"term_html": "product state",
"html": "A unit vector of \\(H_A\\otimes H_B\\) of the form \\(\\psi\\otimes\\varphi\\). For two qubits, exactly those with \\(\\det C = 0\\).",
"section": "Product or entangled",
"slide": "Product states and entangled states",
"keys": [
"product state"
]
},
{
"term_html": "entangled state",
"html": "A pure state of two systems that is not a product state; equivalently, of Schmidt rank greater than one. Not the same as being a superposition: \\(\\ket+\\ket+\\) is a superposition of all four basis states and is a product.",
"section": "Product or entangled",
"slide": "Product states and entangled states",
"keys": [
"entangled state"
]
},
{
"term_html": "Bell states",
"html": "\\(\\ket{\\Phi^\\pm} = \\tfrac1{\\sqrt2}(\\ket{00} \\pm \\ket{11})\\), \\(\\ket{\\Psi^\\pm} = \\tfrac1{\\sqrt2}(\\ket{01} \\pm \\ket{10})\\): an orthonormal basis of \\(\\mathbb C^2\\otimes\\mathbb C^2\\) of maximally entangled states, all obtained from \\(\\ket{\\Phi^+}\\) by \\(I\\), \\(X\\), \\(Z\\), \\(XZ\\) on qubit 1. \\(\\ket{\\Phi^+}\\) is invariant under \\(U\\otimes\\bar U\\).",
"section": "Product or entangled",
"slide": "The four Bell states",
"keys": [
"bell states"
]
},
{
"term_html": "singlet",
"html": "\\(\\ket{\\Psi^-} = \\tfrac1{\\sqrt2}(\\ket{01} - \\ket{10})\\), the antisymmetric Bell state. \\((U\\otimes U)\\ket{\\Psi^-} = \\det(U)\\ket{\\Psi^-}\\), so it gives opposite results in every basis — the running example.",
"section": "Product or entangled",
"slide": "The four Bell states",
"keys": [
"singlet"
]
},
{
"term_html": "singular value decomposition",
"html": "Every complex matrix of rank \\(r\\) is \\(\\sum_{k\\le r}s_k\\ket{u_k}\\!\\bra{v_k}\\) with \\(s_k &gt; 0\\) and orthonormal \\(\\{u_k\\}\\), \\(\\{v_k\\}\\); the \\(s_k^2\\) are the nonzero eigenvalues of \\(C^\\dagger C\\). Proved from the spectral theorem applied to \\(C^\\dagger C\\).",
"section": "The Schmidt decomposition",
"slide": "The singular value decomposition over C",
"keys": [
"singular value decomposition"
]
},
{
"term_html": "Schmidt decomposition",
"html": "Every unit vector of \\(H_A\\otimes H_B\\) is \\(\\sum_ks_k\\,a_k\\otimes b_k\\) with orthonormal \\(\\{a_k\\}\\), \\(\\{b_k\\}\\), \\(s_k &gt; 0\\) and \\(\\sum s_k^2 = 1\\). From the SVD of the coefficient matrix, with \\(b_k\\) the conjugate of the right singular vector.",
"section": "The Schmidt decomposition",
"slide": "The Schmidt decomposition",
"keys": [
"schmidt decomposition"
]
},
{
"term_html": "Schmidt coefficients",
"html": "The \\(s_k\\) of a Schmidt decomposition. Determined by the state: their squares are the nonzero eigenvalues of \\(CC^\\dagger\\). Unchanged by local unitaries \\(U\\otimes V\\).",
"section": "The Schmidt decomposition",
"slide": "The Schmidt decomposition",
"keys": [
"schmidt coefficients"
]
},
{
"term_html": "Schmidt rank",
"html": "The number of Schmidt coefficients, equal to the rank of the coefficient matrix and at most \\(\\min(\\dim H_A, \\dim H_B)\\). The state is a product if and only if it is one.",
"section": "The Schmidt decomposition",
"slide": "The Schmidt decomposition",
"keys": [
"schmidt rank"
]
},
{
"term_html": "maximally entangled",
"html": "For two qubits, Schmidt coefficients \\(s_1 = s_2 = \\tfrac1{\\sqrt2}\\); equivalently \\(|\\det C| = \\tfrac12\\), its largest possible value. Then every orthonormal basis of either qubit is a Schmidt basis.",
"section": "The Schmidt decomposition",
"slide": "What is unique, and the test for entanglement",
"keys": [
"maximally entangled"
]
},
{
"term_html": "measurement on a subsystem",
"html": "Measuring an observable \\(\\sum\\lambda P_\\lambda\\) of A alone, on a state of \\(H_A\\otimes H_B\\), is the projective measurement \\(\\{P_\\lambda\\otimes I\\}\\): probability \\(\\braket{\\psi|(P_\\lambda\\otimes I)|\\psi}\\), state afterwards \\((P_\\lambda\\otimes I)\\psi\\) normalised. On the singlet it leaves photon B in the state orthogonal to A's result, and B's own statistics never change.",
"section": "Measuring one photon",
"slide": "A measurement on one subsystem",
"keys": [
"measurement on a subsystem"
]
}
];
