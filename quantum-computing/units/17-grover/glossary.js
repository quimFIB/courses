// Generated from GLOSSARY.org by `qc glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "marked item",
"html": "An input \\(x\\) with \\(f(x) = 1\\), one of the \\(M\\) that a search must find among \\(N = 2^n\\). The running example has \\(M = 1\\) among \\(N = 2^{20}\\).",
"section": "The running example",
"slide": "A million items, one marked",
"keys": [
"marked item"
]
},
{
"term_html": "unstructured search",
"html": "Given query access to \\(f:\\{0, 1\\}^n\\to\\{0, 1\\}\\) with \\(M\\ge1\\) marked items among \\(N = 2^n\\), find one, knowing nothing about \\(f\\) beyond its answers. Queries go through the phase oracle \\(O_f = I - 2\\sum_{f(x)=1}\\ket x\\!\\bra x\\). Any NP verifier with its instance fixed gives such an \\(f\\).",
"section": "The problem, and its plane",
"slide": "Unstructured search",
"keys": [
"unstructured search"
]
},
{
"term_html": "Grover's algorithm",
"html": "Prepare \\(\\ket s = H^{\\otimes n}\\ket{0^n}\\), apply the Grover iteration \\(k\\) times, measure, and check the outcome with one more query. Grover (1996).",
"section": "The problem, and its plane",
"slide": "The algorithm, before the explanation",
"keys": [
"grover's algorithm"
]
},
{
"term_html": "uniform superposition",
"html": "\\(\\ket s = H^{\\otimes n}\\ket{0^n} = N^{-1/2}\\sum_x\\ket x\\): every item with amplitude \\(N^{-1/2}\\), so a measurement returns a uniformly random item.",
"section": "The problem, and its plane",
"slide": "The algorithm, before the explanation",
"keys": [
"uniform superposition"
]
},
{
"term_html": "Grover iteration",
"html": "\\(G = D\\,O_f\\): the phase oracle, then the diffusion operator. One query per iteration. On the Grover plane it is the rotation by \\(2\\theta\\).",
"section": "The problem, and its plane",
"slide": "The algorithm, before the explanation",
"keys": [
"grover iteration"
]
},
{
"term_html": "diffusion operator",
"html": "\\(D = 2\\ket s\\!\\bra s - I\\), Hermitian and unitary with \\(D^2 = I\\); the reflection about \\(\\ket s\\). As a circuit, \\(H^{\\otimes n}(2\\ket{0^n}\\!\\bra{0^n} - I)H^{\\otimes n}\\), with the middle factor equal to \\(-X^{\\otimes n}C^{n-1}(Z)X^{\\otimes n}\\): \\(O(n)\\) gates and no queries.",
"section": "The problem, and its plane",
"slide": "The algorithm, before the explanation",
"keys": [
"diffusion operator"
]
},
{
"term_html": "Grover angle",
"html": "The \\(\\theta\\in(0, \\frac\\pi2)\\) with \\(\\sin\\theta = \\sqrt{M/N} = \\braket{m|s}\\), where \\(\\ket m\\) and \\(\\ket{m^\\perp}\\) are the normalised superpositions of the marked and unmarked items and \\(\\ket s = \\sin\\theta\\ket m + \\cos\\theta\\ket{m^\\perp}\\). For the running example \\(\\theta = \\arcsin2^{-10}\\).",
"section": "The problem, and its plane",
"slide": "The two vectors that matter",
"keys": [
"grover angle"
]
},
{
"term_html": "Grover plane",
"html": "\\(P = \\mathrm{span}\\{\\ket m, \\ket{m^\\perp}\\}\\), which contains \\(\\ket s\\) and is mapped into itself by \\(O_f\\) and \\(D\\): every state of the algorithm lies in it. In the basis \\((\\ket{m^\\perp}, \\ket m)\\) everything is real, so it is a copy of \\(\\mathbb R^2\\).",
"section": "The problem, and its plane",
"slide": "The plane is invariant",
"keys": [
"grover plane"
]
},
{
"term_html": "inversion about the mean",
"html": "\\(D\\sum_xa_x\\ket x = \\sum_x(2\\bar a - a_x)\\ket x\\), with \\(\\bar a\\) the mean amplitude: every amplitude is reflected through the mean. Grover's own picture of the diffusion step.",
"section": "The problem, and its plane",
"slide": "Inversion about the mean",
"keys": [
"inversion about the mean"
]
},
{
"term_html": "reflection about a vector",
"html": "For a unit vector \\(\\ket u\\) in a subspace \\(V\\), \\(R_u = 2\\ket u\\!\\bra u - I_V\\): keeps the component along \\(\\ket u\\) and negates the rest. Hermitian, unitary, \\(R_u^2 = I\\). Two reflections about axes at angle \\(\\gamma\\) compose to a rotation by \\(2\\gamma\\). On the Grover plane \\(O_f = R_{m^\\perp}\\) and \\(D = R_s\\).",
"section": "Two reflections make a rotation",
"slide": "Reflections",
"keys": [
"reflection about a vector"
]
},
{
"term_html": "quadratic speedup",
"html": "A quantum cost that is the square root of the classical one: for search, order \\(\\sqrt N\\) queries against order \\(N\\). Grover's speedup is quadratic and, by unit 18, no more.",
"section": "How many iterations",
"slide": "\\(\\sqrt N\\) against \\(N\\)",
"keys": [
"quadratic speedup"
]
},
{
"term_html": "overshoot",
"html": "The success probability \\(P_k = \\sin^2((2k + 1)\\theta)\\) is a sinusoid in \\(k\\) with period \\(\\pi/2\\theta\\): iterating past \\(k^*\\approx\\pi/4\\theta\\) lowers it, to near zero at about \\(2k^*\\). For the running example, \\(P_{1608} = 8.9\\times10^{-11}\\). Brassard's soufflé.",
"section": "Overshoot",
"slide": "The success probability is periodic",
"keys": [
"overshoot"
]
},
{
"term_html": "quarter lemma",
"html": "For \\(k\\) uniform in \\(\\{0, \\dots, m - 1\\}\\), the average success is \\(\\frac12 - \\sin(4m\\theta)/(4m\\sin2\\theta)\\), at least \\(\\frac14\\) once \\(m\\ge1/\\sin2\\theta\\). Boyer, Brassard, Høyer and Tapp (1998).",
"section": "Unknown M, and amplitude amplification",
"slide": "The quarter lemma",
"keys": [
"quarter lemma"
]
},
{
"term_html": "exponential search",
"html": "Search with \\(M\\) unknown: choose the iteration count uniformly below \\(m\\), and multiply \\(m\\) by \\(\\frac65\\) after each failure, up to \\(\\sqrt N\\). Expected cost below \\(9\\sqrt{N/M}\\) iterations plus one check per stage, for \\(M\\le\\frac34N\\).",
"section": "Unknown M, and amplitude amplification",
"slide": "Exponential search",
"keys": [
"exponential search"
]
},
{
"term_html": "amplitude amplification",
"html": "For a reversible algorithm \\(A\\) whose output is good with probability \\(p = \\sin^2\\theta\\), the round \\(Q = -AS_0A^{-1}S_\\chi\\) rotates by \\(2\\theta\\), so about \\(\\pi/4\\sqrt p\\) rounds — each running \\(A\\) and \\(A^{-1}\\) once — give success at least \\(1 - p\\). Grover is the case \\(A = H^{\\otimes n}\\). Brassard, Høyer, Mosca and Tapp (2002).",
"section": "Unknown M, and amplitude amplification",
"slide": "Amplitude amplification",
"keys": [
"amplitude amplification"
]
},
{
"term_html": "good subspace",
"html": "The subspace, with projection \\(\\Pi\\), of outputs counted as success in amplitude amplification; \\(S_\\chi = I - 2\\Pi\\) negates it.",
"section": "Unknown M, and amplitude amplification",
"slide": "Amplitude amplification",
"keys": [
"good subspace"
]
},
{
"term_html": "quantum counting",
"html": "Estimating \\(M\\) by phase estimation on controlled powers of \\(G\\), whose eigenvalues on the Grover plane are \\(e^{\\pm2i\\theta}\\): relative error \\(\\varepsilon\\) with \\(O(\\sqrt{N/M}/\\varepsilon)\\) queries (Brassard, Høyer and Tapp 1998, cited; phase estimation is unit 15's).",
"section": "Unknown M, and amplitude amplification",
"slide": "Quantum counting, stated",
"keys": [
"quantum counting"
]
},
{
"term_html": "exhaustive key search",
"html": "Trying every key of a cipher against known plaintext–ciphertext pairs: an unstructured search with \\(N = 2^{128}\\) for AES-128. Grover needs \\(\\frac\\pi4 2^{64} = 1.45\\times10^{19}\\) sequential iterations, and \\(P\\) parallel machines buy only a factor \\(\\sqrt P\\) (Zalka 1999, cited).",
"section": "What a quadratic speedup buys",
"slide": "Key search: AES-128",
"keys": [
"exhaustive key search"
]
},
{
"term_html": "post-quantum cryptography",
"html": "Cryptography meant to resist quantum attacks. For symmetric ciphers, Grover's square root is answered by doubling the key length; public-key schemes broken by Shor's algorithm must be replaced.",
"section": "What a quadratic speedup buys",
"slide": "The response: longer keys, not new ciphers",
"keys": [
"post-quantum cryptography"
]
}
];
