// Generated from GLOSSARY.org by `qc glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "DiVincenzo criteria",
"html": "Five requirements for a quantum computer (DiVincenzo 2000): a scalable system of well-characterised qubits; initialisation to a simple state such as \\(\\ket{0\\cdots0}\\); coherence times long compared with the gate time; a universal gate set; qubit-specific measurement. Two more for networking: converting between stationary and flying qubits, and transmitting flying qubits faithfully.",
"section": "What a quantum computer must have, and four ways to build one",
"slide": "DiVincenzo's checklist",
"keys": [
"divincenzo criteria"
]
},
{
"term_html": "gate time",
"html": "How long one gate takes. The ratio of coherence time to gate time bounds how many gates fit before decoherence; by amplitude damping an idle qubit decays during a gate of length \\(t\\) with probability \\(1 - e^{-t/T_1} \\le t/T_1\\).",
"section": "What a quantum computer must have, and four ways to build one",
"slide": "DiVincenzo's checklist",
"keys": [
"gate time"
]
},
{
"term_html": "superconducting qubit",
"html": "The two lowest energy levels of a small electrical circuit made of superconductor (resistance-free when cold), a few GHz apart; the transmon is the common design. Gates of about 10–100 ns, \\(T_1\\) of tens to hundreds of µs, fixed nearest-neighbour coupling on a flat chip.",
"section": "What a quantum computer must have, and four ways to build one",
"slide": "Superconducting circuits",
"keys": [
"superconducting qubit"
]
},
{
"term_html": "connectivity",
"html": "Which pairs of qubits a device can act on directly with a two-qubit gate: a graph, fixed by wiring on a superconducting chip, all-to-all within an ion row, reconfigurable for neutral atoms.",
"section": "What a quantum computer must have, and four ways to build one",
"slide": "Superconducting circuits",
"keys": [
"connectivity"
]
},
{
"term_html": "trapped ion",
"html": "An atom missing an electron, held in vacuum by electric fields; a row of them shares a vibration that couples any pair. Qubit in two internal levels; coherence of seconds or more, gates of µs to ms, all-to-all connectivity within a row.",
"section": "What a quantum computer must have, and four ways to build one",
"slide": "Trapped ions",
"keys": [
"trapped ion"
]
},
{
"term_html": "optical tweezer",
"html": "A tightly focused laser beam that holds a single neutral atom at its brightest point; arrays of hundreds to thousands, and movable.",
"section": "What a quantum computer must have, and four ways to build one",
"slide": "Neutral atoms",
"keys": [
"optical tweezer"
]
},
{
"term_html": "neutral atom",
"html": "An uncharged atom held in an optical tweezer, storing a qubit in two internal levels; entangled by the Rydberg blockade, with connectivity reconfigured by moving the tweezers.",
"section": "What a quantum computer must have, and four ways to build one",
"slide": "Neutral atoms",
"keys": [
"neutral atom"
]
},
{
"term_html": "Rydberg blockade",
"html": "Two atoms within a few micrometres cannot both be excited to a Rydberg state (an orbit of very high principal quantum number), because the doubly excited energy is shifted out of resonance; this makes a conditional, controlled-\\(Z\\)-type gate.",
"section": "What a quantum computer must have, and four ways to build one",
"slide": "Neutral atoms",
"keys": [
"rydberg blockade"
]
},
{
"term_html": "photonic qubit",
"html": "One photon in one of two modes — two polarisations or two paths. Barely decoheres in flight, but photons do not interact, so two-qubit gates are probabilistic.",
"section": "What a quantum computer must have, and four ways to build one",
"slide": "Photons",
"keys": [
"photonic qubit"
]
},
{
"term_html": "heralded",
"html": "Of a probabilistic operation: a detector signal announces whether it succeeded, so a failure can be discarded and retried. Attempts until success are geometric, mean \\(1/q\\) for success probability \\(q\\).",
"section": "What a quantum computer must have, and four ways to build one",
"slide": "Photons",
"keys": [
"heralded"
]
},
{
"term_html": "photon loss",
"html": "The dominant photonic error: a photon absorbed or missed takes its qubit with it. An erasure — an error whose location is known.",
"section": "What a quantum computer must have, and four ways to build one",
"slide": "Photons",
"keys": [
"photon loss"
]
},
{
"term_html": "measurement-based computation",
"html": "Computation by single-qubit measurements on a pre-made entangled resource state. One step: \\(\\ket\\psi\\) and \\(\\ket+\\), a CZ, and an \\(X\\)-basis measurement of the first qubit with outcome \\(m\\) leave \\(X^mH\\ket\\psi\\) on the second.",
"section": "What a quantum computer must have, and four ways to build one",
"slide": "Entangle first, compute by measuring",
"keys": [
"measurement-based computation"
]
},
{
"term_html": "resource state",
"html": "The entangled state prepared before a measurement-based computation (for instance a cluster state, a grid of qubits joined by CZs); for photons it is built from heralded probabilistic steps, retried offline.",
"section": "What a quantum computer must have, and four ways to build one",
"slide": "Entangle first, compute by measuring",
"keys": [
"resource state"
]
},
{
"term_html": "SWAP routing",
"html": "Bringing two qubits that are not coupled next to each other by SWAP gates (three CNOTs each) along the coupling graph. The cube on a \\(2\\times4\\) grid has 10 of 12 edges direct at best, and no square grid holds it with all 12.",
"section": "What a quantum computer must have, and four ways to build one",
"slide": "Eight qubits, four platforms",
"keys": [
"swap routing"
]
},
{
"term_html": "thermal equilibrium",
"html": "The state a system reaches after long contact with large surroundings at temperature \\(T\\), when nothing changes on average.",
"section": "The fridge",
"slide": "Temperature, and Boltzmann's law",
"keys": [
"thermal equilibrium"
]
},
{
"term_html": "Boltzmann's law",
"html": "In thermal equilibrium at temperature \\(T\\) a state of energy \\(E\\) is occupied with probability proportional to \\(e^{-E/k_BT}\\) (cited: the physical input). For a qubit with gap \\(hf\\), \\(p_1/p_0 = e^{-x}\\) with \\(x = hf/k_BT\\).",
"section": "The fridge",
"slide": "Temperature, and Boltzmann's law",
"keys": [
"boltzmann's law"
]
},
{
"term_html": "Boltzmann's constant",
"html": "\\(k_B = 1.380649\\times10^{-23}\\) J/K, exact in the SI; \\(k_BT\\) is the energy scale of thermal kicks.",
"section": "The fridge",
"slide": "Temperature, and Boltzmann's law",
"keys": [
"boltzmann's constant"
]
},
{
"term_html": "thermal state",
"html": "\\(\\rho_T = p_0\\ket0\\!\\bra0 + p_1\\ket1\\!\\bra1\\) with \\(p_1 = e^{-x}/(1 + e^{-x})\\), \\(x = hf/k_BT\\); Bloch vector \\((0, 0, \\tanh(x/2))\\): the pole \\(\\ket0\\) when cold, the centre \\(I/2\\) when warm. For 5 GHz: \\(p_1 = 6.2\\times10^{-6}\\) at 20 mK, \\(0.485\\) at 4 K.",
"section": "The fridge",
"slide": "A qubit in equilibrium is a point on an axis of the ball",
"keys": [
"thermal state"
]
},
{
"term_html": "dilution refrigerator",
"html": "A refrigerator that reaches about 10 mK by mixing two isotopes of helium; needed because a 5 GHz qubit's gap is the thermal energy at 0.24 K, so liquid helium at 4 K leaves it nearly maximally mixed.",
"section": "The fridge",
"slide": "Why a dilution refrigerator",
"keys": [
"dilution refrigerator"
]
},
{
"term_html": "Max-Cut",
"html": "Split a graph's vertices into two sides to maximise the number of edges between them. NP-hard (Karp 1972, cited).",
"section": "The algorithm: QAOA at depth one",
"slide": "Max-Cut, and an operator that counts cut edges",
"keys": [
"max-cut"
]
},
{
"term_html": "cut fraction",
"html": "The number of cut edges divided by the number of edges \\(m\\). Not the same as the approximation ratio, which divides by the maximum cut.",
"section": "The algorithm: QAOA at depth one",
"slide": "Max-Cut, and an operator that counts cut edges",
"keys": [
"cut fraction"
]
},
{
"term_html": "cost operator",
"html": "\\(C = \\sum_{uv\\in E}\\tfrac12(1 - Z_uZ_v)\\), diagonal with \\(C\\ket z = \\mathrm{cut}(z)\\ket z\\).",
"section": "The algorithm: QAOA at depth one",
"slide": "Max-Cut, and an operator that counts cut edges",
"keys": [
"cost operator"
]
},
{
"term_html": "QAOA",
"html": "The quantum approximate optimisation algorithm (Farhi, Goldstone and Gutmann 2014). At depth one, \\(\\ket{\\gamma, \\beta} = e^{-i\\beta B}e^{-i\\gamma C}\\ket+^{\\otimes n}\\), measured in the computational basis to give a cut; depth \\(p\\) alternates \\(p\\) times.",
"section": "The algorithm: QAOA at depth one",
"slide": "The depth-one circuit",
"keys": [
"qaoa"
]
},
{
"term_html": "mixer",
"html": "\\(B = \\sum_vX_v\\), so that \\(e^{-i\\beta B} = \\bigotimes_vR_x(2\\beta)\\) rotates every qubit by \\(2\\beta\\) about the \\(x\\)-axis.",
"section": "The algorithm: QAOA at depth one",
"slide": "The depth-one circuit",
"keys": [
"mixer"
]
},
{
"term_html": "variational algorithm",
"html": "A short parametrised circuit run many times inside a classical optimisation loop, which estimates the objective from samples and adjusts the parameters.",
"section": "The algorithm: QAOA at depth one",
"slide": "A variational algorithm: the classical loop around it",
"keys": [
"variational algorithm"
]
},
{
"term_html": "light cone",
"html": "The qubits an observable can depend on after conjugation by a circuit. At depth one, \\(\\langle C_{uv}\\rangle\\) depends only on \\(u\\), \\(v\\) and their neighbours.",
"section": "The algorithm: QAOA at depth one",
"slide": "Only a neighbourhood matters",
"keys": [
"light cone"
]
},
{
"term_html": "triangle-free",
"html": "Having no three mutually adjacent vertices. In a 3-regular triangle-free graph each edge's neighbourhood is a six-vertex tree, and depth-one QAOA gives \\(\\langle C_{uv}\\rangle = \\tfrac12 + \\tfrac12\\sin4\\beta\\sin\\gamma\\cos^2\\gamma\\), maximal at \\(\\beta = \\pi/8\\), \\(\\tan\\gamma = 1/\\sqrt2\\): \\(\\tfrac12 + \\tfrac1{3\\sqrt3} = 0.6925\\).",
"section": "The algorithm: QAOA at depth one",
"slide": "Worked: the edge expectation",
"keys": [
"triangle-free"
]
},
{
"term_html": "local search",
"html": "Move any vertex with more uncut than cut incident edges to the other side until none remains; stops within \\(m\\) moves at a cut of at least \\(m/2\\).",
"section": "The baselines",
"slide": "The floor: a coin per vertex, and local search",
"keys": [
"local search"
]
},
{
"term_html": "Goemans–Williamson algorithm",
"html": "Relax each label to a unit vector, solve the semidefinite program maximising \\(\\sum\\tfrac12(1 - \\mathbf v_u\\cdot\\mathbf v_v)\\), and round by a random hyperplane. An edge at angle \\(\\theta\\) is cut with probability \\(\\theta/\\pi\\), giving expected cut at least \\(0.8786\\) times the optimum (Goemans and Williamson 1995).",
"section": "The baselines",
"slide": "Goemans–Williamson: vectors, then a random hyperplane",
"keys": [
"goemans–williamson algorithm"
]
},
{
"term_html": "approximation ratio",
"html": "An algorithm's cut divided by the maximum cut; at least the cut fraction. Goemans–Williamson guarantees \\(0.8786\\) on every graph; \\(0.9326\\) is achievable for maximum degree 3 (Halperin, Livnat and Zwick 2004).",
"section": "The baselines",
"slide": "Ratio against fraction, and degree three",
"keys": [
"approximation ratio"
]
},
{
"term_html": "bipartite",
"html": "Having a 2-colouring with every edge joining two colours — equivalently a cut of all edges, or no odd cycle. Found by breadth-first search in \\(O(n + m)\\) time; the cube is bipartite by parity.",
"section": "The baselines",
"slide": "The running example on one line",
"keys": [
"bipartite"
]
},
{
"term_html": "quantum advantage",
"html": "A claim that a quantum device performs a precisely specified task in time \\(t_Q\\) while the best known classical algorithm on the best available hardware needs \\(t_C \\gg t_Q\\).",
"section": "Advantage claims, read as theorems",
"slide": "What an advantage claim claims",
"keys": [
"quantum advantage"
]
},
{
"term_html": "classical baseline",
"html": "The classical algorithm and hardware an advantage claim is measured against. It is estimated, not proved optimal, so a better classical algorithm falsifies the claim: the baseline is part of the claim.",
"section": "Advantage claims, read as theorems",
"slide": "What an advantage claim claims",
"keys": [
"classical baseline"
]
},
{
"term_html": "random-circuit sampling",
"html": "Sampling from the output distribution \\(p(x) = |\\braket{x|U|0\\cdots0}|^2\\) of a randomly chosen circuit of native gates; hard for all known classical methods at large size and depth, and of no known use.",
"section": "Advantage claims, read as theorems",
"slide": "Random-circuit sampling",
"keys": [
"random-circuit sampling"
]
},
{
"term_html": "linear cross-entropy benchmark",
"html": "\\(F_{\\rm XEB} = 2^n\\langle p(x_i)\\rangle - 1\\) over observed samples \\(x_i\\): exactly 0 for a uniform sampler, about 1 for an ideal one under Porter–Thomas, about \\(f\\) for a device sampling the ideal distribution with probability \\(f\\).",
"section": "Advantage claims, read as theorems",
"slide": "Scoring samples you cannot check",
"keys": [
"linear cross-entropy benchmark"
]
},
{
"term_html": "Porter–Thomas distribution",
"html": "The exponential law \\(e^{-t}\\) for the scaled output probabilities \\(t = 2^np(x)\\) of a deep random circuit (cited); its second moment is 2.",
"section": "Advantage claims, read as theorems",
"slide": "Scoring samples you cannot check",
"keys": [
"porter–thomas distribution"
]
},
{
"term_html": "tensor-network contraction",
"html": "A classical simulation method that writes a circuit as a network of small tensors and sums it out in a chosen order; ran the 2019 random-circuit task in about 15 hours on 512 GPUs (Pan, Chen and Zhang 2022).",
"section": "Advantage claims, read as theorems",
"slide": "2019: the claim, and the baseline that moved",
"keys": [
"tensor-network contraction"
]
},
{
"term_html": "sample-and-query access",
"html": "Classical access to \\(x\\in\\mathbb R^n\\) that can query entries, knows \\(\\|x\\|\\), and draws \\(j\\) with probability \\(x_j^2/\\|x\\|^2\\) — what a tree of partial sums of squares provides, and the classical twin of measuring \\(\\sum_jx_j\\ket j/\\|x\\|\\).",
"section": "Advantage claims, read as theorems",
"slide": "Dequantisation: the same input, sampled classically",
"keys": [
"sample-and-query access"
]
},
{
"term_html": "dequantisation",
"html": "Finding a classical algorithm, given the same input model, that matches a claimed quantum speedup up to a polynomial. Tang (2018) did this for the Kerenidis–Prakash recommendation algorithm.",
"section": "Advantage claims, read as theorems",
"slide": "Dequantisation: the same input, sampled classically",
"keys": [
"dequantisation"
]
},
{
"term_html": "quantum-inspired algorithm",
"html": "A classical algorithm built from length-squared sampling to rival a quantum one under the same input model; part of the baseline for any claim that assumes such input.",
"section": "Advantage claims, read as theorems",
"slide": "Dequantisation: the same input, sampled classically",
"keys": [
"quantum-inspired algorithm"
]
},
{
"term_html": "crossover size",
"html": "The problem size at which a quantum algorithm's running time drops below a classical one's. For Grover against classical search, \\(\\sqrt{N^*} = \\tfrac\\pi2rt\\): \\(2.5\\times10^{12}\\) items for one core against 1 ms iterations, \\(2.5\\times10^{24}\\) and 39 years for a million cores.",
"section": "Advantage claims, read as theorems",
"slide": "Quadratic speedups against a slow clock",
"keys": [
"crossover size"
]
}
];
