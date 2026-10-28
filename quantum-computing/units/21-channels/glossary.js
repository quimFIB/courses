// Generated from GLOSSARY.org by `qc glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "POVM (positive-operator-valued measure)",
"html": "Operators \\(E_1, \\dots, E_M\\) on \\(H\\) with \\(E_m \\ge 0\\) and \\(\\sum_mE_m = I\\); outcome \\(m\\) has probability \\(\\operatorname{tr}(E_m\\rho)\\). \\(M\\) may exceed \\(\\dim H\\). Projective measurements are the case of projectors. Every projective measurement on the system together with a prepared helper induces one: \\(E_m = (I\\otimes\\bra a)P_m(I\\otimes\\ket a)\\).",
"section": "Generalised measurement",
"slide": "POVMs: the measurements a larger system induces",
"keys": [
"povm (positive-operator-valued measure)",
"povm",
"positive-operator-valued measure"
]
},
{
"term_html": "effect",
"html": "One operator \\(E_m\\) of a POVM: \\(0 \\le E_m \\le I\\).",
"section": "Generalised measurement",
"slide": "POVMs: the measurements a larger system induces",
"keys": [
"effect"
]
},
{
"term_html": "unambiguous discrimination",
"html": "Telling two non-orthogonal states apart with a test that is never wrong but may answer \"don't know\". For \\(\\ket0\\) versus \\(\\ket+\\): effects \\(c\\ket1\\!\\bra1\\), \\(c\\ket-\\!\\bra-\\) and the rest, \\(c = 2 - \\sqrt2\\), success \\(1 - \\frac1{\\sqrt2} \\approx 0.293\\) on each state, optimal (problem P1).",
"section": "Generalised measurement",
"slide": "Worked: a test that is never wrong",
"keys": [
"unambiguous discrimination"
]
},
{
"term_html": "Naimark's dilation",
"html": "Every POVM is a projective measurement on a larger space after an isometry: \\(V\\ket\\psi = \\sum_m\\sqrt{E_m}\\ket\\psi\\otimes\\ket m\\), \\(V^\\dagger V = I\\), and \\(\\operatorname{tr}(P_mV\\rho V^\\dagger) = \\operatorname{tr}(E_m\\rho)\\) with \\(P_m = I\\otimes\\ket m\\!\\bra m\\). Extending \\(V\\) to a unitary gives the circuit: ancilla in \\(\\ket0\\), a unitary, a basis measurement of the ancilla. For rank-one effects \\(\\ket{w_m}\\!\\bra{w_m}\\), \\(V = \\sum_m\\ket m\\!\\bra{w_m}\\) into \\(\\mathbb C^M\\) suffices. Naimark 1940.",
"section": "Generalised measurement",
"slide": "Naimark's dilation: every POVM is a projection on a larger space",
"keys": [
"naimark's dilation"
]
},
{
"term_html": "positive (positive map)",
"html": "A linear map \\(\\Phi\\) on operators with \\(X \\ge 0 \\Rightarrow \\Phi(X) \\ge 0\\).",
"section": "Channels",
"slide": "The device as a map on states",
"keys": [
"positive (positive map)",
"positive",
"positive map"
]
},
{
"term_html": "trace-preserving",
"html": "\\(\\operatorname{tr}\\Phi(X) = \\operatorname{tr}X\\) for all \\(X\\). With positivity: density operators go to density operators.",
"section": "Channels",
"slide": "The device as a map on states",
"keys": [
"trace-preserving"
]
},
{
"term_html": "completely positive",
"html": "\\(\\mathrm{id}_k\\otimes\\Phi\\) is positive for every \\(k\\): the map still sends states to states when its input is half of an entangled pair. Abbreviated CP.",
"section": "Channels",
"slide": "The qubit may have a partner",
"keys": [
"completely positive"
]
},
{
"term_html": "channel (CPTP map)",
"html": "A linear map that is completely positive and trace-preserving: the most general thing that can happen to a quantum system between preparation and measurement.",
"section": "Channels",
"slide": "The qubit may have a partner",
"keys": [
"channel (cptp map)",
"channel",
"cptp map"
]
},
{
"term_html": "transpose map",
"html": "\\(T(X) = X^{\\mathsf T}\\) in a fixed basis. Positive and trace-preserving; on the Bloch ball the reflection \\((x, y, z) \\mapsto (x, -y, z)\\). Not completely positive: \\((\\mathrm{id}\\otimes T)(\\ket{\\Phi^+}\\!\\bra{\\Phi^+}) = \\frac12\\mathrm{SWAP}\\), eigenvalue \\(-\\frac12\\) on \\(\\ket{\\Psi^-}\\).",
"section": "Channels",
"slide": "The transpose is positive: a mirror of the Bloch ball",
"keys": [
"transpose map"
]
},
{
"term_html": "Choi matrix",
"html": "\\(J(\\Phi) = \\sum_{ij}\\ket i\\!\\bra j\\otimes\\Phi(\\ket i\\!\\bra j) = d\\,(\\mathrm{id}\\otimes\\Phi)(\\ket{\\Phi^+_d}\\!\\bra{\\Phi^+_d})\\), with \\(\\Phi\\) on the second factor and no \\(1/d\\) — this course's convention, in which the transpose has least eigenvalue \\(-1\\). It determines \\(\\Phi\\).",
"section": "Channels",
"slide": "The Choi matrix: a map as one operator",
"keys": [
"choi matrix"
]
},
{
"term_html": "Choi's theorem",
"html": "\\(\\Phi\\) is completely positive iff \\(J(\\Phi) \\ge 0\\), and trace-preserving iff \\(\\operatorname{tr}_2J(\\Phi) = I\\). The proof turns the eigenvectors of \\(J\\) into Kraus operators. Choi 1975.",
"section": "Channels",
"slide": "Choi's theorem",
"keys": [
"choi's theorem"
]
},
{
"term_html": "Kraus representation",
"html": "\\(\\Phi\\) is a channel iff \\(\\Phi(\\rho) = \\sum_kA_k\\rho A_k^\\dagger\\) with \\(\\sum_kA_k^\\dagger A_k = I\\); at most \\(\\operatorname{rank}J(\\Phi) \\le dd'\\) operators are needed.",
"section": "Kraus and Stinespring",
"slide": "The Kraus representation",
"keys": [
"kraus representation"
]
},
{
"term_html": "Kraus operators",
"html": "The \\(A_k\\) of a Kraus representation. Not unique; only the channel is physical.",
"section": "Kraus and Stinespring",
"slide": "The Kraus representation",
"keys": [
"kraus operators"
]
},
{
"term_html": "unitary freedom",
"html": "Two Kraus families \\(\\{A_k\\}\\), \\(\\{B_l\\}\\) give the same channel iff \\(A_k = \\sum_lu_{kl}B_l\\) with \\(u^\\dagger u = I\\): unit 04's Schrödinger–HJW theorem applied to the Choi matrix. Example: \\(\\{I/\\sqrt2, Z/\\sqrt2\\}\\) and \\(\\{\\ket0\\!\\bra0, \\ket1\\!\\bra1\\}\\), related by \\(H\\).",
"section": "Kraus and Stinespring",
"slide": "Two Kraus families, one channel: HJW for the Choi matrix",
"keys": [
"unitary freedom"
]
},
{
"term_html": "Stinespring dilation",
"html": "Every channel is \\(\\Phi(\\rho) = \\operatorname{tr}_E(V\\rho V^\\dagger)\\) for an isometry \\(V\\colon H \\to H'\\otimes E\\), e.g. \\(V\\ket\\psi = \\sum_kA_k\\ket\\psi\\otimes\\ket k\\); as a circuit, an environment in \\(\\ket0\\), a unitary, and a discard. Stinespring 1955.",
"section": "Kraus and Stinespring",
"slide": "Stinespring: every channel is a unitary with an environment",
"keys": [
"stinespring dilation"
]
},
{
"term_html": "partial swap",
"html": "The unitary on qubit and environment that fixes \\(\\ket{00}\\), \\(\\ket{11}\\) and rotates \\(\\ket{10} \\mapsto \\sqrt{1 - \\gamma}\\ket{10} + \\sqrt\\gamma\\ket{01}\\): the excitation leaks to the environment with amplitude \\(\\sqrt\\gamma\\).",
"section": "Kraus and Stinespring",
"slide": "Amplitude damping: a qubit hands its energy to its surroundings",
"keys": [
"partial swap"
]
},
{
"term_html": "amplitude damping",
"html": "The channel with Kraus operators \\(A_0 = \\mathrm{diag}(1, \\sqrt{1 - \\gamma})\\), \\(A_1 = \\sqrt\\gamma\\ket0\\!\\bra1\\): decay \\(\\ket1 \\to \\ket0\\) with probability \\(\\gamma\\). Bloch action \\((x, y, z) \\mapsto (\\sqrt{1 - \\gamma}x, \\sqrt{1 - \\gamma}y, \\gamma + (1 - \\gamma)z)\\). Choi eigenvalues \\(2 - \\gamma, \\gamma, 0, 0\\). Over time \\(t\\), \\(\\gamma = 1 - e^{-t/T_1}\\).",
"section": "Kraus and Stinespring",
"slide": "Worked: amplitude damping from one environment qubit",
"keys": [
"amplitude damping"
]
},
{
"term_html": "bit flip",
"html": "\\(\\rho \\mapsto (1 - p)\\rho + pX\\rho X\\), Kraus \\(\\sqrt{1 - p}I, \\sqrt pX\\); squashes the Bloch ball toward the \\(x\\) axis: \\((x, (1 - 2p)y, (1 - 2p)z)\\).",
"section": "T₁ and T₂",
"slide": "The standard noise models",
"keys": [
"bit flip"
]
},
{
"term_html": "phase flip",
"html": "\\(\\rho \\mapsto (1 - p)\\rho + pZ\\rho Z\\), Kraus \\(\\sqrt{1 - p}I, \\sqrt pZ\\); squashes toward the \\(z\\) axis: \\(((1 - 2p)x, (1 - 2p)y, z)\\). The same channel as pure dephasing with \\(\\sqrt{1 - \\lambda} = 1 - 2p\\).",
"section": "T₁ and T₂",
"slide": "The standard noise models",
"keys": [
"phase flip"
]
},
{
"term_html": "depolarising (depolarising channel)",
"html": "\\(\\rho \\mapsto (1 - p)\\rho + p\\,I/2\\), Kraus \\(\\sqrt{1 - 3p/4}\\,I\\) and \\(\\frac{\\sqrt p}2X, \\frac{\\sqrt p}2Y, \\frac{\\sqrt p}2Z\\); shrinks the ball uniformly by \\(1 - p\\). Completely positive exactly for \\(0 \\le p \\le \\frac43\\) (problem P9). Some texts use \\(q = 3p/4\\), the probability that some Pauli error occurred.",
"section": "T₁ and T₂",
"slide": "The standard noise models",
"keys": [
"depolarising (depolarising channel)",
"depolarising",
"depolarising channel"
]
},
{
"term_html": "pure dephasing",
"html": "Kraus \\(\\mathrm{diag}(1, \\sqrt{1 - \\lambda})\\), \\(\\mathrm{diag}(0, \\sqrt\\lambda)\\): populations kept, coherence multiplied by \\(\\sqrt{1 - \\lambda}\\). Physically, a random frequency drift averaged over.",
"section": "T₁ and T₂",
"slide": "The standard noise models",
"keys": [
"pure dephasing"
]
},
{
"term_html": "energy relaxation time (T₁)",
"html": "The time scale on which an excited qubit gives its energy to the environment: \\(\\Pr(1) = e^{-t/T_1}\\) after preparing \\(\\ket1\\). Superconducting qubits: tens to hundreds of microseconds.",
"section": "T₁ and T₂",
"slide": "Two clocks on a real qubit",
"keys": [
"energy relaxation time (t₁)",
"energy relaxation time",
"t₁"
]
},
{
"term_html": "coherence time (dephasing time, T₂)",
"html": "The time scale on which a superposition's off-diagonal element decays: \\(|\\rho_{01}(t)| = \\frac12e^{-t/T_2}\\) from \\(\\ket+\\). Trapped ions: seconds. Within the model \\(1/T_2 = 1/2T_1 + 1/T_\\varphi\\), so \\(T_2 \\le 2T_1\\); complete positivity alone forces the same bound.",
"section": "T₁ and T₂",
"slide": "Two clocks on a real qubit",
"keys": [
"coherence time (dephasing time, t₂)",
"coherence time",
"dephasing time, t₂"
]
},
{
"term_html": "pure dephasing time (T_φ)",
"html": "The decay time of the coherence from pure dephasing alone, \\(\\sqrt{1 - \\lambda(t)} = e^{-t/T_\\varphi}\\). Exponential decay follows from memorylessness: the channels compose, \\(f(s + t) = f(s)f(t)\\).",
"section": "T₁ and T₂",
"slide": "Why the decay is exponential",
"keys": [
"pure dephasing time (t_φ)",
"pure dephasing time",
"t_φ"
]
},
{
"term_html": "trace norm",
"html": "\\(\\lVert A\\rVert_1 = \\operatorname{tr}\\sqrt{A^\\dagger A}\\), the sum of the singular values; \\(\\sum|\\lambda_i|\\) for Hermitian \\(A\\).",
"section": "Distinguishability",
"slide": "Trace distance",
"keys": [
"trace norm"
]
},
{
"term_html": "trace distance",
"html": "\\(D(\\rho, \\sigma) = \\frac12\\lVert\\rho - \\sigma\\rVert_1 \\in [0, 1]\\). Pure states: \\(\\sqrt{1 - |\\braket{\\psi|\\varphi}|^2}\\). Qubits: \\(\\frac12|r - s|\\), half the distance between Bloch vectors.",
"section": "Distinguishability",
"slide": "Trace distance",
"keys": [
"trace distance"
]
},
{
"term_html": "Helstrom bound",
"html": "With equal priors, the best probability of identifying \\(\\rho\\) versus \\(\\sigma\\) from one copy, over all POVMs, is \\(\\frac12(1 + D(\\rho, \\sigma))\\), attained by projecting onto the positive part of \\(\\rho - \\sigma\\). Helstrom 1976.",
"section": "Distinguishability",
"slide": "What trace distance means: the best one-shot guess",
"keys": [
"helstrom bound"
]
},
{
"term_html": "contractivity",
"html": "\\(D(\\Phi(\\rho), \\Phi(\\sigma)) \\le D(\\rho, \\sigma)\\) for every channel: a measurement after \\(\\Phi\\) is a measurement before it. No processing makes two states easier to tell apart.",
"section": "Distinguishability",
"slide": "No channel makes two states easier to tell apart",
"keys": [
"contractivity"
]
},
{
"term_html": "adjoint map (Heisenberg picture)",
"html": "\\(\\Phi^\\dagger(E) = \\sum_kA_k^\\dagger EA_k\\), with \\(\\operatorname{tr}(E\\Phi(\\rho)) = \\operatorname{tr}(\\Phi^\\dagger(E)\\rho)\\). Positive and unital, \\(\\Phi^\\dagger(I) = I\\), when \\(\\Phi\\) is a channel.",
"section": "Distinguishability",
"slide": "No channel makes two states easier to tell apart",
"keys": [
"adjoint map (heisenberg picture)",
"adjoint map",
"heisenberg picture"
]
},
{
"term_html": "fidelity",
"html": "\\(F(\\rho, \\sigma) = \\lVert\\sqrt\\rho\\sqrt\\sigma\\rVert_1 = \\operatorname{tr}\\sqrt{\\sqrt\\rho\\sigma\\sqrt\\rho}\\); \\(|\\braket{\\psi|\\varphi}|\\) for pure states. Some authors use \\(F^2\\). Never decreases under a channel.",
"section": "Distinguishability",
"slide": "Fidelity, the other yardstick",
"keys": [
"fidelity"
]
},
{
"term_html": "Uhlmann's theorem",
"html": "\\(F(\\rho, \\sigma) = \\max|\\braket{\\Psi|\\Phi}|\\) over purifications of \\(\\rho\\) and \\(\\sigma\\). Uhlmann 1976; cited, proved in Nielsen and Chuang, Theorem 9.4.",
"section": "Distinguishability",
"slide": "Fidelity, the other yardstick",
"keys": [
"uhlmann's theorem"
]
},
{
"term_html": "Fuchs–van de Graaf inequalities",
"html": "\\(1 - F \\le D \\le \\sqrt{1 - F^2}\\), with the right side an equality for pure states. Fuchs and van de Graaf 1999; cited.",
"section": "Distinguishability",
"slide": "Fidelity, the other yardstick",
"keys": [
"fuchs–van de graaf inequalities"
]
}
];
