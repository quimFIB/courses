// Generated from GLOSSARY.org by `qc glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "query magnitude",
"html": "For a query algorithm run on the empty input \\(0^N\\), with states \\(\\ket{\\psi_0}, \\dots, \\ket{\\psi_{T-1}}\\) just before its \\(T\\) queries, \\(q_w = \\sum_t\\lVert P_w\\ket{\\psi_t}\\rVert^2\\), \\(P_w\\) the projection onto index value \\(w\\). The query magnitudes sum to \\(T\\), so some \\(w\\) has \\(q_w\\le T/N\\). Grover's are all exactly \\(T/N\\).",
"section": "The hybrid argument",
"slide": "Where an algorithm looks",
"keys": [
"query magnitude"
]
},
{
"term_html": "hybrid argument",
"html": "Bennett, Bernstein, Brassard and Vazirani (1997): the final states on the empty input and on the input marked only at \\(w\\) differ by at most \\(2\\sum_t\\lVert P_w\\ket{\\psi_t}\\rVert\\le2\\sqrt{Tq_w}\\), a sum of one perturbation per query. With \\(q_w\\le T/N\\) the distance is at most \\(2T/\\sqrt N\\), so computing OR with error \\(\\frac13\\) needs \\(T\\ge\\sqrt N/6\\). Named for the runs that answer some queries one way and the rest the other.",
"section": "The hybrid argument",
"slide": "Marking one position moves the final state by little",
"keys": [
"hybrid argument"
]
},
{
"term_html": "multilinear polynomial",
"html": "A polynomial in which no variable appears to a power above one, \\(\\sum_Sc_S\\prod_{i\\in S}x_i\\). Every function on \\(\\{0, 1\\}^N\\) is exactly one of them, since \\(x_i^2 = x_i\\) there.",
"section": "Polynomials",
"slide": "Every function on the cube is one polynomial",
"keys": [
"multilinear polynomial"
]
},
{
"term_html": "degree",
"html": "Of a function \\(f\\) on the cube: the degree of its unique multilinear polynomial. \\(\\mathrm{OR}_N\\), \\(\\mathrm{AND}_N\\) and \\(\\mathrm{PARITY}_N\\) all have degree \\(N\\).",
"section": "Polynomials",
"slide": "Every function on the cube is one polynomial",
"keys": [
"degree"
]
},
{
"term_html": "polynomial method",
"html": "Beals, Buhrman, Cleve, Mosca and de Wolf (2001): after \\(T\\) queries every amplitude is a polynomial of degree at most \\(T\\) in the input bits, so every acceptance probability has degree at most \\(2T\\). Hence \\(Q_E(f)\\ge\\frac12\\deg f\\) and \\(Q(f)\\ge\\frac12\\widetilde{\\deg}(f)\\).",
"section": "Polynomials",
"slide": "The polynomial method",
"keys": [
"polynomial method"
]
},
{
"term_html": "approximate degree",
"html": "\\(\\widetilde{\\deg}(f)\\), the least degree of a real polynomial within \\(\\frac13\\) of \\(f\\) at every point of the cube. Can be far below the degree: \\(\\Theta(\\sqrt N)\\) for OR, whose degree is \\(N\\); equal to it for parity.",
"section": "Polynomials",
"slide": "The polynomial method",
"keys": [
"approximate degree"
]
},
{
"term_html": "symmetrisation",
"html": "Minsky and Papert (1969): averaging a multilinear polynomial of degree \\(d\\) over all permutations of its variables gives \\(q(|x|)\\) on the cube, for a one-variable \\(q\\) of degree at most \\(d\\); \\(q(k)\\) is the average over the layer \\(|x| = k\\). Turns approximate degree of a symmetric function into a question about polynomials in one variable.",
"section": "Symmetrisation",
"slide": "Averaging over the order of the bits",
"keys": [
"symmetrisation"
]
},
{
"term_html": "Markov brothers' inequality",
"html": "A real polynomial of degree \\(d\\) with \\(|q|\\le1\\) on \\([-1, 1]\\) has \\(|q'|\\le d^2\\) there (A. A. Markov 1889; V. A. Markov for higher derivatives, 1892). The engine of the proof that \\(\\widetilde{\\deg}(\\mathrm{OR}_N) = \\Theta(\\sqrt N)\\), cited.",
"section": "Symmetrisation",
"slide": "The approximate degree of OR is order √N",
"keys": [
"markov brothers' inequality"
]
},
{
"term_html": "adversary method",
"html": "Ambainis (2002): a lower bound from weighted pairs of inputs with different answers, each query making bounded progress in separating them. Gives \\(\\Omega(\\sqrt N)\\) for OR and \\(\\Omega(N)\\) for parity. With negative weights it equals \\(Q(f)\\) up to a constant for every \\(f\\) (Reichardt 2011). Named, not proved.",
"section": "Symmetrisation",
"slide": "Three methods, two proved",
"keys": [
"adversary method"
]
},
{
"term_html": "total function",
"html": "A function defined on every input in \\(\\{0, 1\\}^N\\), with no promise. For total functions \\(D(f) = O(Q(f)^4)\\) (Aaronson, Ben-David, Kothari, Rao and Tal 2021, cited), tight up to logarithms, so no total function has an exponential quantum speed-up.",
"section": "What this says",
"slide": "Total functions: at most a fourth power",
"keys": [
"total function"
]
},
{
"term_html": "sensitivity theorem",
"html": "Huang (2019): \\(s(f)\\ge\\sqrt{\\deg f}\\), where the sensitivity \\(s(f)\\) is the largest number of single-bit flips that change \\(f\\) at one input. The step on which the fourth-power theorem rests. Cited.",
"section": "What this says",
"slide": "Total functions: at most a fourth power",
"keys": [
"sensitivity theorem"
]
},
{
"term_html": "random oracle",
"html": "An oracle \\(A\\) chosen at random; here each string \\(y\\) is in \\(A\\) independently with probability \\(2^{-|y|}\\), so a given length holds no string or exactly one each with probability near \\(1/e\\). With probability 1, \\(\\{1^n : A\\text{ has a string of length }n\\}\\) is in \\(\\mathsf{NP}^A\\) and not in \\(\\mathsf{BQP}^A\\).",
"section": "What this says",
"slide": "Relative to an oracle, NP is not in BQP",
"keys": [
"random oracle"
]
},
{
"term_html": "element distinctness",
"html": "Decide whether \\(x_0, \\dots, x_{N-1}\\) are all different. \\(\\Theta(N^{2/3})\\) quantum queries (Ambainis 2004; Aaronson and Shi 2004, cited) against \\(\\Theta(N)\\) classically: a polynomial speed-up between Grover's square root and none.",
"section": "What this says",
"slide": "What it does not say",
"keys": [
"element distinctness"
]
}
];
