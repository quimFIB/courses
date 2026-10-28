// Generated from GLOSSARY.org by `qc glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "positive operator",
"html": "An operator \\(A\\) with \\(\\braket{v|Av} \\ge 0\\) for every \\(v\\), written \\(A \\ge 0\\). Over \\(\\mathbb C\\) this forces \\(A\\) Hermitian, and it is equivalent to Hermitian with every eigenvalue \\(\\ge 0\\). Examples: \\(\\ket\\psi\\!\\bra\\psi\\), projectors, \\(B^\\dagger B\\).",
"section": "Density operators",
"slide": "Positive operators",
"keys": [
"positive operator"
]
},
{
"term_html": "density operator",
"html": "An operator \\(\\rho\\) with \\(\\rho \\ge 0\\) and \\(\\operatorname{tr}\\rho = 1\\): the state of a quantum system in general. It gives every measurement statistic as \\(\\operatorname{tr}(P_\\lambda\\rho)\\).",
"section": "Density operators",
"slide": "Density operators, and the ensembles that make them",
"keys": [
"density operator"
]
},
{
"term_html": "pure state",
"html": "A density operator \\(\\ket\\psi\\!\\bra\\psi\\) with \\(\\psi\\) a unit vector; it determines \\(\\psi\\) up to a global phase, so pure states are unit 01's rays. Equivalently: rank one, or \\(\\operatorname{tr}\\rho^2 = 1\\).",
"section": "Density operators",
"slide": "Density operators, and the ensembles that make them",
"keys": [
"pure state"
]
},
{
"term_html": "mixed state",
"html": "A density operator that is not pure: rank at least two, \\(\\operatorname{tr}\\rho^2 &lt; 1\\).",
"section": "Density operators",
"slide": "Density operators, and the ensembles that make them",
"keys": [
"mixed state"
]
},
{
"term_html": "maximally mixed state",
"html": "\\(I/d\\) on \\(\\mathbb C^d\\): the unique state of least purity, \\(1/d\\). For a qubit, \\(I/2\\), the centre of the Bloch ball and Bob's state in the running example.",
"section": "Density operators",
"slide": "Density operators, and the ensembles that make them",
"keys": [
"maximally mixed state"
]
},
{
"term_html": "ensemble",
"html": "Probabilities \\(p_i\\) and unit vectors \\(\\ket{\\psi_i}\\), not necessarily orthogonal, defining \\(\\rho = \\sum_ip_i\\ket{\\psi_i}\\!\\bra{\\psi_i}\\): a preparation story. Every density operator has one (its eigen-ensemble), and usually infinitely many, which no measurement can tell apart.",
"section": "Density operators",
"slide": "Density operators, and the ensembles that make them",
"keys": [
"ensemble"
]
},
{
"term_html": "non-selective measurement",
"html": "A measurement whose outcome is not recorded: \\(\\rho \\mapsto \\sum_\\lambda P_\\lambda\\rho P_\\lambda\\), the average over outcomes of the post-measurement states \\(P_\\lambda\\rho P_\\lambda/\\operatorname{tr}(P_\\lambda\\rho)\\).",
"section": "Density operators",
"slide": "The postulates, rewritten for density operators",
"keys": [
"non-selective measurement"
]
},
{
"term_html": "extreme point",
"html": "A point of a convex set that is not \\(t\\sigma + (1 - t)\\tau\\) with \\(0 &lt; t &lt; 1\\) and \\(\\sigma \\ne \\tau\\). The extreme points of the set of density operators are exactly the pure states.",
"section": "Density operators",
"slide": "A convex set whose corners are the pure states",
"keys": [
"extreme point"
]
},
{
"term_html": "purity",
"html": "\\(\\operatorname{tr}\\rho^2 = \\sum\\lambda_k^2\\). On \\(\\mathbb C^d\\) it lies in \\([1/d, 1]\\): \\(1\\) exactly for pure states, \\(1/d\\) exactly for \\(I/d\\). For a qubit it is \\(\\frac12(1 + |r|^2)\\).",
"section": "Density operators",
"slide": "Purity: how far from pure",
"keys": [
"purity"
]
},
{
"term_html": "Bloch ball",
"html": "The qubit density operators, \\(\\rho = \\frac12(I + r\\cdot\\sigma)\\) with \\(r_k = \\operatorname{tr}(\\rho\\sigma_k)\\) and \\(|r| \\le 1\\). Eigenvalues \\(\\frac12(1 \\pm |r|)\\); the surface \\(|r| = 1\\) is unit 02's sphere of pure states, the centre is \\(I/2\\), and mixing averages Bloch vectors, so a two-part mixture lies on a chord.",
"section": "The Bloch ball",
"slide": "Every qubit state is a point of the ball",
"keys": [
"bloch ball"
]
},
{
"term_html": "partial trace",
"html": "The unique linear map \\(\\operatorname{tr}_A\\colon L(H_A \\otimes H_B) \\to L(H_B)\\) with \\(\\operatorname{tr}(M\\operatorname{tr}_AX) = \\operatorname{tr}((I \\otimes M)X)\\) for all \\(M\\); likewise \\(\\operatorname{tr}_B\\). Formula: \\(\\operatorname{tr}_BX = \\sum_j(I \\otimes \\bra j)X(I \\otimes \\ket j)\\) in any orthonormal basis; on products, \\(\\operatorname{tr}_B(S \\otimes T) = (\\operatorname{tr}T)S\\).",
"section": "The partial trace",
"slide": "What Bob's state has to be",
"keys": [
"partial trace"
]
},
{
"term_html": "reduced state",
"html": "\\(\\rho_A = \\operatorname{tr}_B\\rho\\) and \\(\\rho_B = \\operatorname{tr}_A\\rho\\): the state of one part, which gives every statistic of every measurement on that part and nothing more. For a pure state with coefficient matrix \\(C\\), \\(\\rho_A = CC^\\dagger\\), with eigenvalues the squared Schmidt coefficients.",
"section": "The partial trace",
"slide": "What Bob's state has to be",
"keys": [
"reduced state"
]
},
{
"term_html": "Hilbert–Schmidt inner product",
"html": "\\(\\langle S, T\\rangle = \\operatorname{tr}(S^\\dagger T) = \\sum\\overline{S_{jk}}T_{jk}\\) on operators. Non-degenerate: if \\(\\operatorname{tr}(MX) = \\operatorname{tr}(MY)\\) for all \\(M\\) then \\(X = Y\\) — which makes the partial trace unique.",
"section": "The partial trace",
"slide": "The trace pairing, and why there is only one partial trace",
"keys": [
"hilbert–schmidt inner product"
]
},
{
"term_html": "separable",
"html": "A state of \\(AB\\) of the form \\(\\sum_kp_k\\,\\sigma_k \\otimes \\tau_k\\); a mixed state is entangled if it is not separable. For pure states this is unit 03's notion, decided by whether \\(\\rho_A\\) is mixed; for mixed states, deciding it is hard in general and is not in this course.",
"section": "The partial trace",
"slide": "A pure state is entangled exactly when its halves are mixed",
"keys": [
"separable"
]
},
{
"term_html": "purification",
"html": "A unit vector \\(\\ket\\Psi \\in H_A \\otimes H_B\\) with \\(\\operatorname{tr}_B\\ket\\Psi\\!\\bra\\Psi = \\rho_A\\). Exists whenever \\(\\dim H_B \\ge \\operatorname{rank}\\rho_A\\) — \\(\\sum_k\\sqrt{\\lambda_k}\\ket{e_k}\\ket{f_k}\\) — and any two on the same \\(H_B\\) differ by a unitary \\(I \\otimes V\\). \\(\\ket{\\Phi^+}\\) purifies \\(I/2\\).",
"section": "Purification and the Schrödinger–HJW theorem",
"slide": "Every mixed state is half of a pure state",
"keys": [
"purification"
]
},
{
"term_html": "Schrödinger–HJW theorem",
"html": "Ensembles \\(\\{p_i, \\psi_i\\}_{i\\le m}\\) and \\(\\{q_j, \\varphi_j\\}_{j\\le n}\\), \\(m \\ge n\\), give the same density operator iff \\(\\sqrt{p_i}\\ket{\\psi_i} = \\sum_ju_{ij}\\sqrt{q_j}\\ket{\\varphi_j}\\) for an \\(m \\times n\\) matrix \\(u\\) with orthonormal columns (unitary after padding). Schrödinger 1936; Hughston, Jozsa and Wootters 1993.",
"section": "Purification and the Schrödinger–HJW theorem",
"slide": "The Schrödinger–HJW theorem: all the stories of one state",
"keys": [
"schrödinger–hjw theorem"
]
},
{
"term_html": "isometry",
"html": "A linear map \\(u\\) with \\(u^\\dagger u = I\\): it preserves inner products. As a matrix, one with orthonormal columns; a square isometry is unitary.",
"section": "Purification and the Schrödinger–HJW theorem",
"slide": "The Schrödinger–HJW theorem: all the stories of one state",
"keys": [
"isometry"
]
},
{
"term_html": "steering",
"html": "Given a purification of \\(\\rho_B\\) on \\(H_A \\otimes H_B\\), any ensemble of \\(\\rho_B\\) with at most \\(\\dim H_A\\) members is produced at Bob's end by Alice measuring her part in a suitable basis (Schrödinger 1935). From \\(\\ket{\\Phi^+}\\), Alice's \\(z\\) and \\(x\\) measurements produce the two coin-flip ensembles.",
"section": "Purification and the Schrödinger–HJW theorem",
"slide": "Steering: Alice chooses Bob's ensemble",
"keys": [
"steering"
]
},
{
"term_html": "no-signalling theorem",
"html": "Nothing Alice does on her part alone — a unitary \\(U \\otimes I\\), or a projective measurement whose outcome Bob is not told — changes \\(\\rho_B\\), so no statistic of Bob's changes. Proved in two lines by pairing with \\(I \\otimes M\\) and using the uniqueness of the partial trace.",
"section": "No-signalling",
"slide": "The no-signalling theorem",
"keys": [
"no-signalling theorem"
]
},
{
"term_html": "selective measurement",
"html": "A measurement whose outcome is recorded and used: the state becomes \\(P_\\lambda\\rho P_\\lambda/\\operatorname{tr}(P_\\lambda\\rho)\\). If Alice tells Bob her outcome, his conditional state can differ from \\(\\rho_B\\) — but the telling is an ordinary signal.",
"section": "No-signalling",
"slide": "The ensemble changes, the state does not",
"keys": [
"selective measurement"
]
}
];
