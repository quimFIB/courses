// Generated from GLOSSARY.org by `qc glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "character",
"html": "For a finite abelian group \\(G\\), a homomorphism \\(\\chi: G\\to U(1)\\), \\(\\chi(g + h) = \\chi(g)\\chi(h)\\). Its values are \\(|G|\\)-th roots of unity, so \\(|\\chi(g)| = 1\\) and \\(\\chi(-g) = \\overline{\\chi(g)}\\). The characters of \\(\\mathbb Z_N\\) are \\(\\chi_k(j) = \\omega^{jk}\\), \\(\\omega = e^{2\\pi i/N}\\); those of \\(\\mathbb Z_2^n\\) are \\((-1)^{x\\cdot y}\\).",
"section": "Characters",
"slide": "Characters, and the characters of \\(\\mathbb Z_N\\)",
"keys": [
"character"
]
},
{
"term_html": "dual group",
"html": "\\(\\hat G\\), the characters of \\(G\\) under pointwise multiplication. \\(\\hat{\\mathbb Z}_N\\cong\\mathbb Z_N\\) via \\(k\\mapsto\\chi_k\\), \\(\\widehat{G\\times H}\\cong\\hat G\\times\\hat H\\), and so \\(\\hat G\\cong G\\) for every finite abelian \\(G\\) — but not canonically.",
"section": "Characters",
"slide": "Characters, and the characters of \\(\\mathbb Z_N\\)",
"keys": [
"dual group"
]
},
{
"term_html": "trivial character",
"html": "\\(\\chi_0\\equiv1\\), the identity of \\(\\hat G\\). Every other character sums to zero over the group.",
"section": "Characters",
"slide": "Characters, and the characters of \\(\\mathbb Z_N\\)",
"keys": [
"trivial character"
]
},
{
"term_html": "structure theorem",
"html": "Every finite abelian group is isomorphic to a product of cyclic groups \\(\\mathbb Z_{N_1}\\times\\cdots\\times\\mathbb Z_{N_r}\\). Cited (Dummit and Foote §5.2); used only to get \\(|\\hat G| = |G|\\) in general.",
"section": "Characters",
"slide": "Products of groups, and \\(\\hat G\\cong G\\)",
"keys": [
"structure theorem"
]
},
{
"term_html": "orthogonality of characters",
"html": "\\(\\sum_g\\overline{\\chi(g)}\\psi(g) = |G|\\delta_{\\chi\\psi}\\). Proved by translation invariance: a non-trivial character's sum \\(S\\) satisfies \\(S = \\chi(h)S\\) with \\(\\chi(h)\\ne1\\), so \\(S = 0\\). The vectors \\(|G|^{-1/2}\\chi\\) are an orthonormal basis of \\(\\mathbb C^G\\).",
"section": "Characters",
"slide": "Orthogonality of characters",
"keys": [
"orthogonality of characters"
]
},
{
"term_html": "Fourier transform",
"html": "Of a finite abelian group: \\(F_G\\ket g = |G|^{-1/2}\\sum_{\\chi}\\chi(g)\\ket\\chi\\), the change of basis to the characters; unitary because its rows are orthonormal and it is square. It turns translation into a diagonal phase: \\(F_GT_a = D_aF_G\\). On \\(\\mathbb Z_2^n\\) it is \\(H^{\\otimes n}\\).",
"section": "The Fourier transform",
"slide": "The Fourier transform of a finite abelian group",
"keys": [
"fourier transform"
]
},
{
"term_html": "quantum Fourier transform (QFT)",
"html": "\\(F_N\\ket j = N^{-1/2}\\sum_k\\omega^{jk}\\ket k\\), \\(\\omega = e^{+2\\pi i/N}\\), on \\(\\mathbb Z_N\\); on qubits \\(N = 2^n\\). Numerical libraries' DFT uses the opposite sign and no normalisation.",
"section": "The Fourier transform",
"slide": "The Fourier transform of a finite abelian group",
"keys": [
"quantum fourier transform (qft)",
"quantum fourier transform",
"qft"
]
},
{
"term_html": "binary fraction",
"html": "\\(0.j_lj_{l+1}\\cdots j_n = j_l/2 + j_{l+1}/4 + \\cdots + j_n/2^{n-l+1}\\). Dividing an integer by \\(2^l\\) and discarding the integer part leaves its last \\(l\\) bits as a binary fraction.",
"section": "The Fourier transform",
"slide": "On \\(\\mathbb Z_{2^n}\\), a basis state goes to a product state",
"keys": [
"binary fraction"
]
},
{
"term_html": "product formula",
"html": "\\(F_{2^n}\\ket j = \\bigotimes_{l=1}^n2^{-1/2}(\\ket0 + e^{2\\pi i\\,0.j_{n-l+1}\\cdots j_n}\\ket1)\\), factor \\(l\\) on qubit \\(l - 1\\): the transform of a basis state is a product state. Proved by expanding \\(k\\) in binary.",
"section": "The Fourier transform",
"slide": "On \\(\\mathbb Z_{2^n}\\), a basis state goes to a product state",
"keys": [
"product formula"
]
},
{
"term_html": "controlled phase rotation",
"html": "\\(R_k = \\mathrm{diag}(1, e^{2\\pi i/2^k}) = P(2\\pi/2^k)\\), so \\(R_1 = Z\\), \\(R_2 = S\\), \\(R_3 = T\\). Controlled, it is \\(\\mathrm{diag}(1, 1, 1, e^{2\\pi i/2^k})\\), symmetric in its two qubits; from a control holding bit \\(b\\) it adds \\(b/2^k\\) to the target's phase. The QFT uses \\(n(n-1)/2\\) of them.",
"section": "The circuit",
"slide": "Two gates build every factor",
"keys": [
"controlled phase rotation"
]
},
{
"term_html": "fast Fourier transform (FFT)",
"html": "The classical algorithm (Cooley–Tukey 1965, cited) computing the discrete Fourier transform of an \\(N\\)-vector in \\(O(N\\log N)\\) operations — about \\(n2^n\\) for \\(N = 2^n\\). The QFT is exponentially cheaper but its output cannot be read out.",
"section": "The circuit",
"slide": "Exponentially faster at a task nobody wants",
"keys": [
"fast fourier transform (fft)",
"fast fourier transform",
"fft"
]
},
{
"term_html": "operator norm",
"html": "\\(\\lVert A\\rVert = \\max_{\\lVert v\\rVert = 1}\\lVert Av\\rVert\\); for diagonal \\(D\\), the largest \\(|d_i|\\). Errors add along a circuit: \\(\\lVert\\prod U_i - \\prod V_i\\rVert\\le\\sum\\lVert U_i - V_i\\rVert\\), and an outcome probability moves by at most twice the norm error.",
"section": "The circuit",
"slide": "The approximate QFT: most rotations can be dropped",
"keys": [
"operator norm"
]
},
{
"term_html": "approximate QFT",
"html": "The QFT circuit with every \\(C(R_k)\\), \\(k \\gt m\\), dropped. Its error is at most \\(2\\pi(n - m)/2^m\\) in operator norm (Coppersmith 1994), so \\(m = \\log n + O(1)\\) gives constant error with \\(O(n\\log n)\\) gates.",
"section": "The circuit",
"slide": "The approximate QFT: most rotations can be dropped",
"keys": [
"approximate qft"
]
},
{
"term_html": "inverse QFT",
"html": "\\(F_N^{-1}\\ket k = N^{-1/2}\\sum_j\\omega^{-jk}\\ket j\\): the QFT circuit in reverse order with each gate replaced by its adjoint, so each \\(R_k\\) by \\(R_k^\\dagger\\).",
"section": "The circuit",
"slide": "The inverse QFT",
"keys": [
"inverse qft"
]
},
{
"term_html": "phase kickback",
"html": "If \\(U\\ket u = e^{2\\pi i\\varphi}\\ket u\\), then \\(C(U)\\) maps \\((\\alpha\\ket0 + \\beta\\ket1)\\ket u\\) to \\((\\alpha\\ket0 + \\beta e^{2\\pi i\\varphi}\\ket1)\\ket u\\): the eigenvector is unchanged and the phase moves to the control. Unit 13's kickback is the case \\(U = X\\), \\(\\ket u = \\ket-\\).",
"section": "Phase estimation",
"slide": "Kickback of an eigenphase",
"keys": [
"phase kickback"
]
},
{
"term_html": "eigenphase",
"html": "The \\(\\varphi\\in[0, 1)\\) with \\(U\\ket u = e^{2\\pi i\\varphi}\\ket u\\); defined modulo 1, since every eigenvalue of a unitary has modulus 1.",
"section": "Phase estimation",
"slide": "Kickback of an eigenphase",
"keys": [
"eigenphase"
]
},
{
"term_html": "Hadamard test",
"html": "\\(H\\), \\(C(U)\\), \\(H\\) on a control qubit, with \\(\\ket u\\) on the target: \\(\\Pr(0) = \\cos^2\\pi\\varphi\\). Phase estimation with one counting qubit; the interferometer of unit 01 with the eigenphase as the slab. For \\(\\varphi = \\tfrac13\\), \\(\\Pr(0) = \\tfrac14\\).",
"section": "Phase estimation",
"slide": "Kickback of an eigenphase",
"keys": [
"hadamard test"
]
},
{
"term_html": "phase estimation",
"html": "\\(t\\) counting qubits in \\(\\ket+\\), counting qubit \\(l\\) controlling \\(U^{2^{t-1-l}}\\) on an eigenvector \\(\\ket u\\), then \\(F_{2^t}^{-1}\\) and a measurement giving \\(y\\), the estimate \\(y/2^t\\). Exact when \\(2^t\\varphi\\) is an integer; otherwise outcome \\(y\\) has probability \\(\\sin^2(\\pi\\delta)/(2^{2t}\\sin^2(\\pi\\delta/2^t))\\), \\(\\delta = 2^t\\varphi - y\\). On a superposition of eigenvectors it samples one phase with the superposition's weights (Kitaev 1995; Cleve, Ekert, Macchiavello and Mosca 1998).",
"section": "Phase estimation",
"slide": "The phase-estimation circuit",
"keys": [
"phase estimation"
]
},
{
"term_html": "counting register",
"html": "The \\(t\\) qubits of phase estimation that control the powers of \\(U\\) and are measured; their label lives on \\(\\mathbb Z_{2^t}\\).",
"section": "Phase estimation",
"slide": "The phase-estimation circuit",
"keys": [
"counting register"
]
},
{
"term_html": "Parseval",
"html": "A unitary preserves norms, so the probabilities of the outcomes after the inverse QFT sum to 1. Applied to phase estimation it proves \\(\\sum_y\\csc^2(x - \\pi y/N) = N^2\\csc^2(Nx)\\).",
"section": "Phase estimation",
"slide": "The general case: the outcome distribution",
"keys": [
"parseval"
]
},
{
"term_html": "\\(4/\\pi^2\\) bound",
"html": "The integer nearest \\(2^t\\varphi\\) is the outcome with probability at least \\(4/\\pi^2\\approx0.405\\), for every \\(\\varphi\\) and \\(t\\); proved from \\(|\\sin x|\\le|x|\\) and \\(\\sin x\\ge2x/\\pi\\) on \\([0, \\pi/2]\\). Approached when \\(\\varphi\\) is halfway between two \\(t\\)-bit fractions and \\(t\\) grows. With \\(t = n + \\lceil\\log(2 + 1/2\\varepsilon)\\rceil\\) counting qubits the estimate is within \\(2^{-n}\\) with probability at least \\(1 - \\varepsilon\\).",
"section": "Precision",
"slide": "The nearest fraction, with probability at least \\(4/\\pi^2\\)",
"keys": [
"4/\\pi^2 bound"
]
}
];
