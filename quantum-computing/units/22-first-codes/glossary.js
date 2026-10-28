// Generated from GLOSSARY.org by `qc glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "repetition code",
"html": "The classical code \\(0\\mapsto000\\), \\(1\\mapsto111\\), decoded by majority vote. Against independent flips of probability \\(p\\) it fails with probability \\(3p^2 - 2p^3\\).",
"section": "Why it looks impossible",
"slide": "Repetition protects a bit",
"keys": [
"repetition code"
]
},
{
"term_html": "no-cloning theorem",
"html": "No unitary \\(U\\) and fixed state \\(\\ket e\\) satisfy \\(U\\ket\\psi\\ket e = \\ket\\psi\\ket\\psi\\) for every \\(\\ket\\psi\\): copying two states forces \\(\\braket{\\varphi|\\psi} = \\braket{\\varphi|\\psi}^2\\), so they must be equal or orthogonal. An orthonormal basis can be copied, by CNOT.",
"section": "Why it looks impossible",
"slide": "Objection one: there is no copier",
"keys": [
"no-cloning theorem"
]
},
{
"term_html": "bit-flip code",
"html": "The three-qubit code with \\(\\ket{0_L} = \\ket{000}\\) and \\(\\ket{1_L} = \\ket{111}\\), encoded by the isometry \\(\\alpha\\ket0 + \\beta\\ket1\\mapsto\\alpha\\ket{000} + \\beta\\ket{111}\\), which two CNOTs implement. It corrects any single \\(X\\) and no single \\(Z\\).",
"section": "The bit-flip code",
"slide": "Encode by entangling, not by copying",
"keys": [
"bit-flip code"
]
},
{
"term_html": "logical qubit",
"html": "The two-dimensional system a code protects, with basis \\(\\ket{0_L}, \\ket{1_L}\\) inside a larger space of physical qubits. Operators acting on it within the code, such as \\(X_L\\) and \\(Z_L\\), are logical operators.",
"section": "The bit-flip code",
"slide": "Encode by entangling, not by copying",
"keys": [
"logical qubit"
]
},
{
"term_html": "code space",
"html": "The subspace \\(C\\) spanned by the codewords; for the bit-flip code \\(\\mathrm{span}\\{\\ket{000}, \\ket{111}\\}\\), with projector \\(P = \\ket{000}\\!\\bra{000} + \\ket{111}\\!\\bra{111}\\).",
"section": "The bit-flip code",
"slide": "Encode by entangling, not by copying",
"keys": [
"code space"
]
},
{
"term_html": "parity check",
"html": "An observable that reads the parity of some qubits rather than their values, such as \\(Z_0Z_1\\), with \\(Z_0Z_1\\ket x = (-1)^{x_0\\oplus x_1}\\ket x\\). The bit-flip code is the joint \\(+1\\) eigenspace of \\(Z_0Z_1\\) and \\(Z_1Z_2\\); each single flip moves it to a different joint eigenspace.",
"section": "The bit-flip code",
"slide": "Parities, not values",
"keys": [
"parity check"
]
},
{
"term_html": "ancilla",
"html": "An extra qubit prepared in a known state, used during a computation and then measured or discarded. In the syndrome circuit each ancilla collects one parity by CNOTs from the data.",
"section": "The bit-flip code",
"slide": "The syndrome circuit",
"keys": [
"ancilla"
]
},
{
"term_html": "syndrome",
"html": "The outcomes of the parity checks. For the bit-flip code \\(s_1 = x_0\\oplus x_1\\), \\(s_2 = x_1\\oplus x_2\\): \\(00\\) no error, \\(10\\) \\(X_0\\), \\(11\\) \\(X_1\\), \\(01\\) \\(X_2\\). It depends on the error, not on the encoded state, so measuring it disturbs nothing.",
"section": "The bit-flip code",
"slide": "The syndrome circuit",
"keys": [
"syndrome"
]
},
{
"term_html": "recovery",
"html": "The procedure that undoes an identified error: for the bit-flip code, apply \\(X_k\\) on the syndrome naming qubit \\(k\\). As a channel it has Kraus operators \\(P\\) and \\(PX_k\\); it can also be done coherently with Toffoli gates and no measurement.",
"section": "The bit-flip code",
"slide": "Correcting, by measurement or by gates",
"keys": [
"recovery"
]
},
{
"term_html": "phase-flip code",
"html": "\\(\\ket{0_L} = \\ket{+++}\\), \\(\\ket{1_L} = \\ket{---}\\): the bit-flip code conjugated by \\(H^{\\otimes3}\\), with checks \\(X_0X_1\\), \\(X_1X_2\\). It corrects any single \\(Z\\) and no single \\(X\\).",
"section": "Phase flips, and Shor's nine qubits",
"slide": "The phase-flip code: the same code, seen through H",
"keys": [
"phase-flip code"
]
},
{
"term_html": "Shor's nine-qubit code",
"html": "\\(\\ket{0_L} = (\\ket{000} + \\ket{111})^{\\otimes3}/2\\sqrt2\\), \\(\\ket{1_L} = (\\ket{000} - \\ket{111})^{\\otimes3}/2\\sqrt2\\) (Shor, 1995). Six \\(ZZ\\) checks inside the blocks catch bit flips, two six-qubit \\(X\\) checks between them catch phase flips. A \\([[9, 1, 3]]\\) code, and degenerate.",
"section": "Phase flips, and Shor's nine qubits",
"slide": "Shor's code: one code inside the other",
"keys": [
"shor's nine-qubit code"
]
},
{
"term_html": "concatenation",
"html": "Encoding the qubits of one code with another code. Shor's code is the phase-flip code concatenated with the bit-flip code; repeated concatenation drives unit 24's threshold theorem.",
"section": "Phase flips, and Shor's nine qubits",
"slide": "Shor's code: one code inside the other",
"keys": [
"concatenation"
]
},
{
"term_html": "quantum code",
"html": "A subspace \\(C\\) of a Hilbert space, with projector \\(P\\). It corrects an error set if some channel undoes the errors on every state in \\(C\\).",
"section": "The Knill–Laflamme conditions",
"slide": "What it means for a code to correct a set of errors",
"keys": [
"quantum code"
]
},
{
"term_html": "error set",
"html": "A finite list of operators \\(E_i\\), typically the Kraus operators of the noise, defining \\(\\mathcal E(\\rho) = \\sum_iE_i\\rho E_i^\\dagger\\).",
"section": "The Knill–Laflamme conditions",
"slide": "What it means for a code to correct a set of errors",
"keys": [
"error set"
]
},
{
"term_html": "recovery channel",
"html": "A channel \\(\\mathcal R\\) with \\(\\mathcal R(\\mathcal E(\\rho)) = c\\rho\\) for every density operator \\(\\rho\\) on the code, \\(c &gt; 0\\) a constant. It may depend on the code and the error set, never on \\(\\rho\\) or on which error occurred.",
"section": "The Knill–Laflamme conditions",
"slide": "What it means for a code to correct a set of errors",
"keys": [
"recovery channel"
]
},
{
"term_html": "Knill–Laflamme conditions",
"html": "\\(C\\) corrects \\(\\{E_i\\}\\) if and only if \\(PE_i^\\dagger E_jP = \\alpha_{ij}P\\) for some matrix \\(\\alpha\\), which is then Hermitian and positive semidefinite (Knill and Laflamme, 1997). Proved sufficient by diagonalising \\(\\alpha\\) and measuring which orthogonal image of the code the state is in, and necessary because any recovery makes each \\(R_kE_i\\) a scalar on the code. Read physically: a recoverable error leaves the environment in a state, \\(\\alpha^{\\mathsf T}\\), independent of the code state.",
"section": "The Knill–Laflamme conditions",
"slide": "The conditions",
"keys": [
"knill–laflamme conditions"
]
},
{
"term_html": "degenerate code",
"html": "A code whose Knill–Laflamme matrix \\(\\alpha\\) is singular: some non-trivial combination of correctable errors acts on the code as zero, so distinct errors act identically. Shor's code is degenerate: \\(Z_0, Z_1, Z_2\\) act alike, and its 28 by 28 \\(\\alpha\\) has rank 22.",
"section": "The Knill–Laflamme conditions",
"slide": "Shor's code passes, and is degenerate",
"keys": [
"degenerate code"
]
},
{
"term_html": "discretisation of errors",
"html": "A code that corrects \\(I\\) and \\(X, Y, Z\\) on each qubit corrects every noise whose Kraus operators each act on one qubit, because \\(I, X, Y, Z\\) span the \\(2\\times2\\) matrices and correctable errors form a linear space, corrected by the same recovery. The syndrome measurement projects a continuous error onto finitely many Pauli branches.",
"section": "Discretisation, and distance",
"slide": "The discretisation of errors",
"keys": [
"discretisation of errors"
]
},
{
"term_html": "weight",
"html": "Of a Pauli operator on \\(n\\) qubits, the number of tensor factors that are not \\(I\\).",
"section": "Discretisation, and distance",
"slide": "Distance, and how many errors a code corrects",
"keys": [
"weight"
]
},
{
"term_html": "distance",
"html": "Of a quantum code, the least weight of a Pauli \\(E\\) it does not detect, i.e. with \\(PEP\\) not a multiple of \\(P\\). A code of distance \\(d\\) corrects every error on \\(\\lfloor(d - 1)/2\\rfloor\\) qubits; an \\(n\\)-qubit code of dimension \\(2^k\\) and distance \\(d\\) is an \\([[n, k, d]]\\) code. Of a classical linear code, the least weight of a non-zero codeword.",
"section": "Discretisation, and distance",
"slide": "Distance, and how many errors a code corrects",
"keys": [
"distance"
]
},
{
"term_html": "linear code",
"html": "A \\(k\\)-dimensional subspace \\(C\\) of \\(\\mathbb F_2^n\\), an \\([n, k]\\) code; with distance \\(d\\), an \\([n, k, d]\\) code.",
"section": "Classical linear codes",
"slide": "Linear codes over F2",
"keys": [
"linear code"
]
},
{
"term_html": "generator matrix",
"html": "A \\(k\\times n\\) matrix \\(G\\) whose rows are a basis of the linear code \\(C\\), so \\(C = \\{uG\\}\\).",
"section": "Classical linear codes",
"slide": "Linear codes over F2",
"keys": [
"generator matrix"
]
},
{
"term_html": "parity-check matrix",
"html": "An \\((n - k)\\times n\\) matrix \\(H\\) of rank \\(n - k\\) with \\(C = \\ker H\\). The syndrome of a received word \\(y = c + e\\) is \\(Hy = He\\), a function of the error alone.",
"section": "Classical linear codes",
"slide": "Linear codes over F2",
"keys": [
"parity-check matrix"
]
},
{
"term_html": "Hamming weight",
"html": "The number of 1s in a binary word. The Hamming distance of two words is the weight of their sum.",
"section": "Classical linear codes",
"slide": "Linear codes over F2",
"keys": [
"hamming weight"
]
},
{
"term_html": "Hamming code",
"html": "The \\([7, 4, 3]\\) code \\(\\ker H\\) whose parity-check matrix has column \\(j\\) equal to \\(j\\) in binary (Hamming, 1950), so the syndrome of a single error spells its position.",
"section": "Classical linear codes",
"slide": "The Hamming [7, 4, 3] code",
"keys": [
"hamming code"
]
},
{
"term_html": "dual code",
"html": "\\(C^\\perp = \\{y : y\\cdot c = 0\\ \\text{for all}\\ c\\in C\\}\\) with the dot product mod 2; it has dimension \\(n - k\\) and, for \\(C = \\ker H\\), is the row space of \\(H\\). A non-zero word can be orthogonal to itself.",
"section": "Classical linear codes",
"slide": "The dual code, and a code inside its dual",
"keys": [
"dual code"
]
},
{
"term_html": "simplex code",
"html": "The \\([7, 3, 4]\\) dual of the Hamming code, spanned by the rows of its parity-check matrix; its seven non-zero words all have weight 4. It is contained in the Hamming code, which is what unit 23's CSS construction needs for Steane's code.",
"section": "Classical linear codes",
"slide": "The dual code, and a code inside its dual",
"keys": [
"simplex code"
]
}
];
