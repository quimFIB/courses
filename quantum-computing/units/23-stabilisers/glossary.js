// Generated from GLOSSARY.org by `qc glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "ancilla",
"html": "An extra qubit, prepared in a known state, used to extract information from other qubits and then measured. To measure a Pauli product \\(g\\) on data qubits: ancilla in \\(\\ket0\\), \\(H\\), controlled-\\(g\\), \\(H\\), measure; the outcome is \\(\\pm1\\) with probability \\(\\bra\\psi\\tfrac{I\\pm g}2\\ket\\psi\\) and the data are projected, never read.",
"section": "Stabiliser groups",
"slide": "The experiment: measuring a product of Paulis",
"keys": [
"ancilla"
]
},
{
"term_html": "Pauli group",
"html": "\\(\\mathcal P_n\\), all \\(i^cP_0\\otimes\\cdots\\otimes P_{n-1}\\) with \\(c\\in\\{0,1,2,3\\}\\) and \\(P_j\\in\\{I, X, Y, Z\\}\\); \\(4\\cdot4^n\\) elements, written as strings like \\(XZYIZ\\). Any two elements commute or anticommute, anticommuting exactly when the number of positions with two different non-\\(I\\) letters is odd.",
"section": "Stabiliser groups",
"slide": "The Pauli group, and when two strings commute",
"keys": [
"pauli group"
]
},
{
"term_html": "weight",
"html": "The number of non-identity letters in a Pauli string. Subadditive: \\(\\mathrm{wt}(PQ)\\le\\mathrm{wt}P + \\mathrm{wt}Q\\).",
"section": "Stabiliser groups",
"slide": "The Pauli group, and when two strings commute",
"keys": [
"weight"
]
},
{
"term_html": "stabiliser group",
"html": "An abelian subgroup \\(S\\subseteq\\mathcal P_n\\) not containing \\(-I\\). Its elements are then all \\(\\pm\\) Pauli strings, hence Hermitian with eigenvalues \\(\\pm1\\). Both conditions are forced if \\(S\\) is to fix any nonzero vector.",
"section": "Stabiliser groups",
"slide": "A stabiliser group, and the code it fixes",
"keys": [
"stabiliser group"
]
},
{
"term_html": "stabiliser code",
"html": "\\(V_S = \\{\\psi : g\\psi = \\psi\\ \\forall g\\in S\\}\\), the joint \\(+1\\) eigenspace of a stabiliser group. With \\(r\\) independent generators on \\(n\\) qubits it has dimension \\(2^{n-r}\\): an \\([[n, n - r]]\\) code.",
"section": "Stabiliser groups",
"slide": "A stabiliser group, and the code it fixes",
"keys": [
"stabiliser code"
]
},
{
"term_html": "generator",
"html": "One of a list \\(g_1, \\dots, g_r\\) whose products give all of \\(S\\). A vector is in \\(V_S\\) iff every generator fixes it.",
"section": "Stabiliser groups",
"slide": "A stabiliser group, and the code it fixes",
"keys": [
"generator"
]
},
{
"term_html": "independent",
"html": "Generators none of which is a product of the others. Equivalent to linear independence of their binary vectors \\(v(g_j)\\); then \\(|S| = 2^r\\).",
"section": "Stabiliser groups",
"slide": "A stabiliser group, and the code it fixes",
"keys": [
"independent"
]
},
{
"term_html": "non-degenerate",
"html": "A bilinear form \\(\\beta\\) on \\(\\mathbb F_2^m\\) with \\(\\beta(u, \\cdot) = 0\\Rightarrow u = 0\\), i.e. an invertible Gram matrix. For such a symmetric form, \\(\\dim W^\\beta = m - \\dim W\\) and \\((W^\\beta)^\\beta = W\\), even though \\(W\\cap W^\\beta\\) may be nonzero.",
"section": "Paulis as bit strings",
"slide": "Linear algebra over the field with two elements",
"keys": [
"non-degenerate"
]
},
{
"term_html": "symplectic form",
"html": "On \\(\\mathbb F_2^{2n}\\), \\(\\omega((x|z), (x'|z')) = x\\cdot z' + z\\cdot x'\\), with Gram matrix \\(J = \\begin{pmatrix}0 &amp; I\\\\I &amp; 0\\end{pmatrix}\\). With the map \\(v(P) = (x|z)\\) coding \\(I, X, Z, Y\\) as \\(00, 10, 01, 11\\): \\(v(PQ) = v(P) + v(Q)\\) and \\(PQ = (-1)^{\\omega(v(P), v(Q))}QP\\).",
"section": "Paulis as bit strings",
"slide": "The binary symplectic representation",
"keys": [
"symplectic form"
]
},
{
"term_html": "isotropic",
"html": "A subspace on which \\(\\omega\\) vanishes identically. The image \\(v(S)\\) of a stabiliser group is isotropic, so has dimension at most \\(n\\).",
"section": "Paulis as bit strings",
"slide": "A stabiliser group is an isotropic subspace",
"keys": [
"isotropic"
]
},
{
"term_html": "check matrix",
"html": "The \\(r\\times2n\\) binary matrix \\(G\\) with rows \\(v(g_1), \\dots, v(g_r)\\). The generators commute iff \\(GJG^{\\mathsf T} = 0\\) and are independent iff \\(\\mathrm{rank}\\,G = r\\). For Steane's code, \\(G = \\begin{pmatrix}M &amp; 0\\\\0 &amp; M\\end{pmatrix}\\).",
"section": "Paulis as bit strings",
"slide": "A stabiliser group is an isotropic subspace",
"keys": [
"check matrix"
]
},
{
"term_html": "syndrome",
"html": "For a Pauli error \\(E\\), \\(s(E) = GJ\\,v(E)^{\\mathsf T}\\in\\mathbb F_2^r\\): bit \\(j\\) is 1 iff \\(E\\) anticommutes with \\(g_j\\). Measuring the generators on \\(E\\psi\\), \\(\\psi\\in V_S\\), returns \\((-1)^{s_j}\\) with certainty, independent of \\(\\psi\\).",
"section": "Syndromes, logical operators, distance",
"slide": "The syndrome is a matrix–vector product",
"keys": [
"syndrome"
]
},
{
"term_html": "decoder",
"html": "A rule assigning to each syndrome a Pauli correction \\(R\\) with that syndrome. Correction succeeds when \\(RE\\in\\langle S, iI\\rangle\\), not only when \\(RE = I\\).",
"section": "Syndromes, logical operators, distance",
"slide": "The syndrome is a matrix–vector product",
"keys": [
"decoder"
]
},
{
"term_html": "normaliser",
"html": "\\(N(S)\\), the Paulis commuting with every element of \\(S\\); in symplectic terms \\(v(N(S)) = v(S)^\\omega\\), of dimension \\(2n - r\\). Its elements preserve \\(V_S\\) and have syndrome 0.",
"section": "Syndromes, logical operators, distance",
"slide": "The normaliser, and \\(2k\\) logical operators",
"keys": [
"normaliser"
]
},
{
"term_html": "logical operators",
"html": "Elements of \\(N(S)\\setminus\\langle S, iI\\rangle\\): they act on the code as non-scalar operators. Modulo \\(S\\) there are \\(2k\\) independent ones, choosable as \\(\\bar X_1, \\bar Z_1, \\dots, \\bar X_k, \\bar Z_k\\) with the commutation relations of \\(k\\) qubits. Steane: \\(\\bar X = X^{\\otimes7}\\), \\(\\bar Z = Z^{\\otimes7}\\).",
"section": "Syndromes, logical operators, distance",
"slide": "The normaliser, and \\(2k\\) logical operators",
"keys": [
"logical operators"
]
},
{
"term_html": "distance",
"html": "The least weight of a logical operator, an element of \\(N(S)\\setminus\\langle S, iI\\rangle\\); written \\([[n, k, d]]\\). A code of distance \\(d\\ge2t + 1\\) corrects every error on at most \\(t\\) qubits. Steane's code has \\(d = 3\\).",
"section": "Syndromes, logical operators, distance",
"slide": "Logical means nontrivial, and distance means lightest",
"keys": [
"distance"
]
},
{
"term_html": "degenerate",
"html": "Of a code and a set of Pauli errors: two distinct errors differ by an element of \\(\\langle S, iI\\rangle\\), so they act identically on the code and need no distinguishing. Shor's code is degenerate: \\(Z_0Z_1\\in S\\). Equivalent to unit 22's singular \\(\\alpha\\).",
"section": "Syndromes, logical operators, distance",
"slide": "Knill–Laflamme for stabiliser codes",
"keys": [
"degenerate"
]
},
{
"term_html": "CSS code",
"html": "For classical linear codes \\(C_2\\subseteq C_1\\subseteq\\mathbb F_2^n\\) of dimensions \\(k_2\\lt k_1\\), the span of the coset states \\(\\ket{x + C_2}\\), \\(x\\in C_1\\): an \\([[n, k_1 - k_2]]\\) code.",
"section": "CSS: quantum codes from classical ones",
"slide": "Coset states",
"keys": [
"css code"
]
},
{
"term_html": "coset state",
"html": "\\(\\ket{x + C_2} = |C_2|^{-1/2}\\sum_{y\\in C_2}\\ket{x + y}\\), the uniform superposition over one coset; distinct cosets give orthogonal states. Steane's \\(\\ket{0_L}\\) is the simplex code's, \\(\\ket{1_L}\\) its complement's.",
"section": "CSS: quantum codes from classical ones",
"slide": "Coset states",
"keys": [
"coset state"
]
},
{
"term_html": "CSS construction",
"html": "Calderbank–Shor and Steane (1996): \\(\\mathrm{CSS}(C_1, C_2)\\) is the stabiliser code with \\(Z\\)-type generators from the rows of a parity-check matrix of \\(C_1\\) and \\(X\\)-type generators from a basis of \\(C_2\\); they commute because \\(C_2\\subseteq C_1\\). It corrects \\(t\\) bit flips if \\(C_1\\) does and \\(t\\) phase flips if \\(C_2^\\perp\\) does.",
"section": "CSS: quantum codes from classical ones",
"slide": "CSS codes are stabiliser codes",
"keys": [
"css construction"
]
},
{
"term_html": "five-qubit code",
"html": "The \\([[5, 1, 3]]\\) code with generators \\(XZZXI\\) and its cyclic shifts (Laflamme, Miquel, Paz, Zurek; Bennett, DiVincenzo, Smolin, Wootters; 1996). Not CSS; the smallest code correcting one arbitrary error.",
"section": "CSS: quantum codes from classical ones",
"slide": "The five-qubit code: not CSS, and smaller",
"keys": [
"five-qubit code"
]
},
{
"term_html": "quantum Hamming bound",
"html": "For a non-degenerate \\([[n, k]]\\) code correcting all errors of weight \\(\\le t\\): \\(2^k\\sum_{j\\le t}\\binom nj3^j\\le2^n\\), because the error images \\(E_aV_S\\) are mutually orthogonal. Steane: \\(44\\le 128\\).",
"section": "CSS: quantum codes from classical ones",
"slide": "The quantum Hamming bound",
"keys": [
"quantum hamming bound"
]
},
{
"term_html": "perfect code",
"html": "One meeting the quantum Hamming bound with equality, so that every syndrome is used exactly once. The five-qubit code: \\(2\\cdot(1 + 15) = 32 = 2^5\\).",
"section": "CSS: quantum codes from classical ones",
"slide": "The quantum Hamming bound",
"keys": [
"perfect code"
]
},
{
"term_html": "Clifford group",
"html": "The unitaries mapping \\(\\mathcal P_n\\) to itself under conjugation, up to global phase; generated by \\(H\\), \\(S\\) and CNOT (Gottesman 1998, cited). \\(H\\colon X\\leftrightarrow Z\\); \\(S\\colon X\\mapsto Y\\), \\(Z\\mapsto Z\\); CNOT copies \\(X\\) forward and \\(Z\\) backward. \\(T\\) is not in it.",
"section": "Gottesman–Knill",
"slide": "The Clifford group",
"keys": [
"clifford group"
]
},
{
"term_html": "stabiliser state",
"html": "The unique state, up to phase, fixed by a stabiliser group with \\(n\\) independent generators on \\(n\\) qubits. Examples: \\(\\ket{0^n}\\), Bell states, the GHZ state, Steane's \\(\\ket{0_L}\\).",
"section": "Gottesman–Knill",
"slide": "Follow the stabiliser, not the state",
"keys": [
"stabiliser state"
]
},
{
"term_html": "tableau",
"html": "The \\(n\\times2n\\) check matrix of a stabiliser state's generators plus \\(n\\) sign bits: \\(2n^2 + n\\) bits. A Clifford gate on one or two qubits updates it in \\(O(n)\\) time by fixed bit rules.",
"section": "Gottesman–Knill",
"slide": "Follow the stabiliser, not the state",
"keys": [
"tableau"
]
},
{
"term_html": "Gottesman–Knill theorem",
"html": "A circuit of \\(m\\) gates from \\(\\{H, S, \\mathrm{CNOT}\\}\\) on \\(\\ket{0^n}\\) with \\(q\\) Pauli measurements is simulated exactly by a classical computer in time \\(O(nm + qn^3)\\). Each measurement outcome is certain or a fair coin. Consequence: entanglement alone does not make a computation hard.",
"section": "Gottesman–Knill",
"slide": "The Gottesman–Knill theorem",
"keys": [
"gottesman–knill theorem"
]
},
{
"term_html": "GHZ state",
"html": "\\(\\tfrac1{\\sqrt2}(\\ket{000} + \\ket{111})\\), stabilised by \\(XXX, ZZI, IZZ\\); made by \\(H_0\\), \\(\\mathrm{CNOT}_{01}\\), \\(\\mathrm{CNOT}_{12}\\). Measuring \\(Z_0\\) gives \\(\\pm1\\) with probability \\(\\tfrac12\\), after which \\(Z_2\\) is certain. After Greenberger, Horne and Zeilinger (1989).",
"section": "Gottesman–Knill",
"slide": "Worked: three qubits into a GHZ state",
"keys": [
"ghz state"
]
},
{
"term_html": "transversal",
"html": "Of a gate on a code block: a tensor product of gates acting on the block's qubits one at a time, so that a fault spreads to no other qubit of the block. \\(H^{\\otimes7}\\) is a transversal logical Hadamard on Steane's code.",
"section": "Gottesman–Knill",
"slide": "Close: seven Hadamards make one",
"keys": [
"transversal"
]
}
];
