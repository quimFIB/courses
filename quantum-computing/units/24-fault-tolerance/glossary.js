// Generated from GLOSSARY.org by `qc glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "fault location",
"html": "A place in a circuit where something can go wrong: a preparation, a gate, an idle wait, or a measurement. In the noise model of this unit each fails independently with probability at most \\(p\\).",
"section": "Correction circuits are faulty too",
"slide": "What a fault is",
"keys": [
"fault location"
]
},
{
"term_html": "stochastic Pauli noise",
"html": "The noise model: a failed operation is followed by an arbitrary Pauli on its qubits, a failed measurement reports the wrong bit, and failures at different locations are independent. Enough by the discretisation of errors (unit 22); the depolarising channel, Kraus operators \\(\\sqrt{1-p}\\,I\\) and \\(\\sqrt{p/3}\\,X, Y, Z\\), is an instance, with \\(p\\) the probability of some Pauli (unit 21's strength \\(\\frac43p\\)).",
"section": "Correction circuits are faulty too",
"slide": "What a fault is",
"keys": [
"stochastic pauli noise"
]
},
{
"term_html": "code cycle",
"html": "One round of syndrome measurement on every check, with its correction. Logical error rates are quoted per cycle.",
"section": "Correction circuits are faulty too",
"slide": "What a fault is",
"keys": [
"code cycle"
]
},
{
"term_html": "error propagation",
"html": "An error \\(E\\) before a gate \\(U\\) equals the error \\(UEU^\\dagger\\) after it. Through a CNOT, \\(X\\) on the control becomes \\(X\\otimes X\\) and \\(Z\\) on the target becomes \\(Z\\otimes Z\\); \\(X\\) on the target and \\(Z\\) on the control stay put; \\(Y\\otimes I \\mapsto Y\\otimes X\\), \\(I\\otimes Y\\mapsto Z\\otimes Y\\).",
"section": "Correction circuits are faulty too",
"slide": "Worked: a CNOT moves errors",
"keys": [
"error propagation"
]
},
{
"term_html": "fault-tolerant gadget",
"html": "An encoded operation built so that one fault anywhere inside it causes at most one error in each output block. With a distance-3 code, a computation made of them fails only when two faults coincide.",
"section": "Correction circuits are faulty too",
"slide": "Fault-tolerant gadgets, and transversal gates",
"keys": [
"fault-tolerant gadget"
]
},
{
"term_html": "transversal gate",
"html": "A gate applied qubit by qubit across a block, or between two blocks on qubit \\(i\\) of each for every \\(i\\). Automatically fault-tolerant. On Steane's code \\(H^{\\otimes7}\\), \\((S^\\dagger)^{\\otimes7}\\) and \\(\\mathrm{CNOT}^{\\otimes7}\\) are logical \\(H\\), \\(S\\) and CNOT, so every logical Clifford is transversal; \\(T^{\\otimes7}\\) leaves the code space.",
"section": "Correction circuits are faulty too",
"slide": "Fault-tolerant gadgets, and transversal gates",
"keys": [
"transversal gate"
]
},
{
"term_html": "cat-state extraction",
"html": "Shor's fault-tolerant syndrome measurement (1996): each data qubit of a check gets its own ancilla qubit, the ancillas start in \\(\\frac1{\\sqrt8}\\sum_{e\\ \\mathrm{even}}\\ket e\\), and the parity of their outcomes is the syndrome bit. A fault on one ancilla reaches one data qubit only. The ancilla state must be verified before use.",
"section": "Correction circuits are faulty too",
"slide": "Extracting a syndrome without spreading errors",
"keys": [
"cat-state extraction"
]
},
{
"term_html": "Steane's method",
"html": "Fault-tolerant syndrome extraction (1997) with a whole encoded block as the ancilla, coupled by a transversal CNOT and read out qubit by qubit; one classical decoding gives every syndrome bit.",
"section": "Correction circuits are faulty too",
"slide": "Extracting a syndrome without spreading errors",
"keys": [
"steane's method"
]
},
{
"term_html": "concatenation",
"html": "Encoding each qubit of a code in the code again, \\(k\\) times. A level-\\(k\\) Steane block holds one logical qubit in \\(7^k\\) physical ones; a level-\\(k\\) gadget is the level-1 gadget built from level-\\((k-1)\\) gadgets.",
"section": "Concatenation, and the threshold",
"slide": "Codes inside codes",
"keys": [
"concatenation"
]
},
{
"term_html": "malignant pair",
"html": "A pair of faults that actually causes a logical failure. Counting only these, instead of all \\(\\binom A2\\) pairs, gives a larger proved threshold.",
"section": "Concatenation, and the threshold",
"slide": "The simplified model",
"keys": [
"malignant pair"
]
},
{
"term_html": "threshold theorem",
"html": "In the simplified model, \\(p_1 \\le \\binom A2 p^2 = cp^2\\) by the union bound and \\(p_k \\le (cp)^{2^k}/c = p_{\\rm th}(p/p_{\\rm th})^{2^k}\\) by induction, with \\(p_{\\rm th} = 1/c\\): doubly exponential suppression below threshold, at polylogarithmic cost \\(O(\\log^{\\log_2 G}(1/\\varepsilon))\\). The full theorem (Aharonov–Ben-Or, Kitaev, Knill–Laflamme–Zurek; Aliferis–Gottesman–Preskill) is cited, with its hypotheses: local weakly correlated noise, fresh ancillas, parallel operations, fast reliable classical computation.",
"section": "Concatenation, and the threshold",
"slide": "Worked: k levels of concatenation",
"keys": [
"threshold theorem"
]
},
{
"term_html": "surface code",
"html": "A stabiliser code on a planar grid whose checks act on neighbouring qubits only and whose distance grows with its size (Kitaev; Bravyi–Kitaev; Dennis–Kitaev–Landahl–Preskill). Threshold near 1 per cent under circuit-level noise.",
"section": "The surface code",
"slide": "The chip is flat",
"keys": [
"surface code"
]
},
{
"term_html": "rotated layout",
"html": "The surface code with \\(d^2\\) data qubits on a square grid, weight-4 \\(X\\)- and \\(Z\\)-type checks on alternate faces, and weight-2 half-faces on the boundary (\\(Z\\) on top and bottom, \\(X\\) on left and right): \\(d^2 - 1\\) checks, \\(2d^2 - 1\\) qubits in all. Logical \\(X\\) is \\(X\\) on a row, logical \\(Z\\) is \\(Z\\) on a column, and the distance is \\(d\\).",
"section": "The surface code",
"slide": "The rotated surface code, drawn at d = 3",
"keys": [
"rotated layout"
]
},
{
"term_html": "measurement qubit",
"html": "The ancilla in each face of the surface code, coupled by CNOTs to the face's corners and measured every cycle; \\(d^2 - 1\\) of them.",
"section": "The surface code",
"slide": "The rotated surface code, drawn at d = 3",
"keys": [
"measurement qubit"
]
},
{
"term_html": "hook error",
"html": "A fault on a measurement qubit partway through its four CNOTs, copied onto two data qubits. Harmless to the distance if the CNOT order places the pair across the logical string it could shorten.",
"section": "The surface code",
"slide": "Measuring a face with its neighbours",
"keys": [
"hook error"
]
},
{
"term_html": "detection event",
"html": "A check whose outcome differs from its previous round. A chain of errors lights the checks at its two ends; a measurement error lights one check in two consecutive rounds.",
"section": "The surface code",
"slide": "Decoding: pairing up the alarms",
"keys": [
"detection event"
]
},
{
"term_html": "minimum-weight matching",
"html": "The standard surface-code decoder: pair the detection events (or join them to the boundary) by the fewest errors, the likeliest explanation under independent noise; Edmonds' algorithm (1965), applied by Dennis et al. (2002). Named, not developed.",
"section": "The surface code",
"slide": "Decoding: pairing up the alarms",
"keys": [
"minimum-weight matching"
]
},
{
"term_html": "logical error heuristic",
"html": "\\(p_L \\approx A(p/p_{\\rm th})^{(d+1)/2}\\) per cycle, a fit to simulations of the surface code (Fowler et al. 2012), used with \\(A = 0.1\\) and \\(p_{\\rm th} = 10^{-2}\\). Each step of 2 in \\(d\\) divides \\(p_L\\) by \\(p_{\\rm th}/p\\). At \\(p = 10^{-3}\\), \\(d = 21\\) gives \\(10^{-12}\\).",
"section": "The surface code",
"slide": "The threshold, and a heuristic below it",
"keys": [
"logical error heuristic"
]
},
{
"term_html": "Eastin–Knill theorem",
"html": "No code that detects every single-qubit error has a universal set of transversal logical gates (Eastin and Knill, 2009, cited): the transversal logical gates form a finite group.",
"section": "The T gate",
"slide": "Eastin–Knill: no code has it all",
"keys": [
"eastin–knill theorem"
]
},
{
"term_html": "code switching",
"html": "Moving an encoded state between two codes with complementary transversal gates, such as Steane's (transversal \\(H\\)) and the 15-qubit Reed–Muller code (transversal \\(T\\)). The switch is not transversal. Named, not developed.",
"section": "The T gate",
"slide": "Eastin–Knill: no code has it all",
"keys": [
"code switching"
]
},
{
"term_html": "magic state",
"html": "\\(\\ket A = T\\ket+ = \\frac1{\\sqrt2}(\\ket0 + e^{i\\pi/4}\\ket1)\\), Bloch vector \\((\\frac1{\\sqrt2}, \\frac1{\\sqrt2}, 0)\\), not a stabiliser state. Made unprotected, purified by distillation, and consumed by a Clifford circuit to apply \\(T\\).",
"section": "The T gate",
"slide": "The magic state",
"keys": [
"magic state"
]
},
{
"term_html": "gate teleportation",
"html": "Applying a gate by consuming a state: CNOT from the data into \\(\\ket A\\), measure the magic qubit in \\(Z\\), apply \\(S\\) if the outcome is 1; the data qubit leaves as \\(T\\ket\\psi\\) up to global phase, each outcome with probability \\(\\frac12\\).",
"section": "The T gate",
"slide": "Worked: teleporting a T gate",
"keys": [
"gate teleportation"
]
},
{
"term_html": "Pauli frame",
"html": "Pauli corrections recorded classically instead of applied, pushed through later Clifford gates and used to reinterpret measurement outcomes. Through \\(T\\) a frame \\(X\\) becomes \\(e^{-i\\pi/4}SX\\), a Clifford correction.",
"section": "The T gate",
"slide": "Why the correction is cheap: the Pauli frame",
"keys": [
"pauli frame"
]
},
{
"term_html": "magic-state distillation",
"html": "Bravyi and Kitaev's 15-to-1 protocol (2005, cited): 15 copies of \\(\\ket A\\) with error \\(p\\) give one with error about \\(35p^3\\), using Clifford operations and measurements. From \\(10^{-3}\\): \\(3.5\\times10^{-8}\\) after one round, \\(1.5\\times10^{-21}\\) after two, at 225 raw states per output. It helps only below \\(p = 1/\\sqrt{35} = 0.169\\).",
"section": "The T gate",
"slide": "Worked: distillation, once and twice",
"keys": [
"magic-state distillation"
]
},
{
"term_html": "distillation factory",
"html": "A region of a fault-tolerant machine that only distils magic states, sized by the circuit's T-count. A rotation of about 110 \\(T\\) gates costs \\(24\\,750\\) raw states at two rounds.",
"section": "The T gate",
"slide": "Factories, and what a rotation costs",
"keys": [
"distillation factory"
]
},
{
"term_html": "suppression factor",
"html": "\\(\\Lambda = \\varepsilon_d/\\varepsilon_{d+2}\\), the factor by which the logical error per cycle falls when the distance grows by 2; \\(p_{\\rm th}/p\\) in the heuristic. Google Quantum AI (2024) reported \\(\\Lambda = 2.14 \\pm 0.02\\) and \\(0.143\\%\\) per cycle at \\(d = 7\\).",
"section": "The experiment",
"slide": "Below threshold, measured",
"keys": [
"suppression factor"
]
},
{
"term_html": "below threshold",
"html": "Operationally, \\(\\Lambda &gt; 1\\): a larger code gives a smaller logical error rate at the same physical error rate.",
"section": "The experiment",
"slide": "Below threshold, measured",
"keys": [
"below threshold"
]
},
{
"term_html": "break-even",
"html": "A logical qubit that stores information longer than the best physical qubit of the same device; passed by the distance-7 memory, by a factor \\(2.4 \\pm 0.3\\).",
"section": "The experiment",
"slide": "Below threshold, measured",
"keys": [
"break-even"
]
}
];
