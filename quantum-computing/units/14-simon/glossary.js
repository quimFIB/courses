// Generated from GLOSSARY.org by `qc glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "Simon's problem",
"html": "Given oracle access to \\(f:\\{0,1\\}^n\\to\\{0,1\\}^n\\), promised that for some \\(s\\ne0^n\\), \\(f(x) = f(x')\\) iff \\(x'\\in\\{x, x\\oplus s\\}\\): find \\(s\\). Simon (1994); his original version decides one-to-one against two-to-one.",
"section": "The problem",
"slide": "Simon's problem",
"keys": [
"simon's problem"
]
},
{
"term_html": "hidden XOR-period",
"html": "The string \\(s\\) of Simon's problem: \\(f(x) = f(x\\oplus s)\\) for every \\(x\\), and there are no other coincidences of values. The analogue, for the group \\((\\{0,1\\}^n, \\oplus)\\), of a period \\(r\\) with \\(f(x) = f(x + r)\\).",
"section": "The problem",
"slide": "Simon's problem",
"keys": [
"hidden xor-period"
]
},
{
"term_html": "two-to-one",
"html": "A function every value of which has exactly two preimages. Under Simon's promise the preimage pairs are \\(\\{x, x\\oplus s\\}\\), the \\(2^{n-1}\\) cosets of the subgroup \\(\\{0, s\\}\\).",
"section": "The problem",
"slide": "Simon's problem",
"keys": [
"two-to-one"
]
},
{
"term_html": "exponential separation",
"html": "A family of problems whose quantum query complexity is polynomial in \\(n\\) and whose randomised (bounded-error) query complexity is at least \\(2^{cn}\\) for some \\(c &gt; 0\\). Simon's problem is the first, with \\(O(n)\\) against \\(\\Omega(2^{n/2})\\).",
"section": "The problem",
"slide": "Unit 13's scorecard, and the target",
"keys": [
"exponential separation"
]
},
{
"term_html": "Simon's algorithm",
"html": "One run: \\(H^{\\otimes n}\\) on register 1 of \\(\\ket{0^n}\\ket{0^n}\\), one query \\(U_f\\), \\(H^{\\otimes n}\\) on register 1, measure register 1. Each run returns \\(y\\) uniform on \\(s^\\perp = \\{y : y\\cdot s = 0\\}\\); about \\(n\\) runs and Gaussian elimination over \\(\\mathbb F_2\\) give \\(s\\).",
"section": "One run of the circuit",
"slide": "The circuit",
"keys": [
"simon's algorithm"
]
},
{
"term_html": "coset state",
"html": "\\(\\frac1{\\sqrt2}(\\ket{x_v} + \\ket{x_v\\oplus s})\\), the state register 1 is left in when register 2 is measured with outcome \\(v\\) after the query. \\(H^{\\otimes n}\\) sends it to \\(2^{-(n-1)/2}\\sum_{y\\cdot s = 0}(-1)^{x_v\\cdot y}\\ket y\\): the unknown \\(x_v\\) becomes a sign, and the outcome distribution is the same for every \\(v\\).",
"section": "One run of the circuit",
"slide": "Measure the second register first: the coset state",
"keys": [
"coset state"
]
},
{
"term_html": "field with two elements",
"html": "\\(\\mathbb F_2 = \\mathbb Z/2\\mathbb Z = \\{0, 1\\}\\) with addition XOR and multiplication AND. Every theorem of linear algebra whose proof uses only the field axioms (dimension, rank–nullity, elimination) holds over it; anything using positivity (Gram–Schmidt, \\(y\\cdot y &gt; 0\\)) does not.",
"section": "Linear algebra over \\(\\mathbb F_2\\)",
"slide": "The field with two elements",
"keys": [
"field with two elements"
]
},
{
"term_html": "orthogonal complement",
"html": "For a subspace \\(W\\subseteq\\mathbb F_2^n\\), \\(W^\\perp = \\{y : y\\cdot w = 0 \\text{ for all } w\\in W\\}\\). It has dimension \\(n - \\dim W\\) and \\((W^\\perp)^\\perp = W\\), by rank–nullity; so \\(\\dim s^\\perp = n - 1\\) and \\((s^\\perp)^\\perp = \\{0, s\\}\\).",
"section": "Linear algebra over \\(\\mathbb F_2\\)",
"slide": "Orthogonal complements over \\(\\mathbb F_2\\)",
"keys": [
"orthogonal complement"
]
},
{
"term_html": "self-orthogonal vector",
"html": "A nonzero \\(y\\) with \\(y\\cdot y = 0\\), i.e. one with an even number of 1s. Impossible over \\(\\mathbb R\\), common over \\(\\mathbb F_2\\): \\(s = 110\\) lies in its own \\(s^\\perp\\). Harmless for Simon's algorithm, which never needs \\(W\\cap W^\\perp = \\{0\\}\\).",
"section": "Linear algebra over \\(\\mathbb F_2\\)",
"slide": "Orthogonal complements over \\(\\mathbb F_2\\)",
"keys": [
"self-orthogonal vector"
]
},
{
"term_html": "rank",
"html": "The dimension of the span of the samples collected. All samples lie in the \\((n-1)\\)-dimensional \\(s^\\perp\\); at rank \\(n - 1\\) the equations \\(y_j\\cdot t = 0\\) have exactly the solutions \\(t\\in\\{0, s\\}\\).",
"section": "Linear algebra over \\(\\mathbb F_2\\)",
"slide": "\\(n - 1\\) independent samples pin down \\(s\\)",
"keys": [
"rank"
]
},
{
"term_html": "Gaussian elimination",
"html": "Here, done as samples arrive: reduce each new sample by XORing in the held rows in order of pivot column; discard it if it becomes \\(0\\) (dependent), keep it otherwise. At rank \\(n - 1\\) set the one pivot-free bit to 1 and back-substitute. \\(O(n^2)\\) bit operations per sample, \\(O(n^3)\\) in all.",
"section": "Linear algebra over \\(\\mathbb F_2\\)",
"slide": "Gaussian elimination over \\(\\mathbb F_2\\)",
"keys": [
"gaussian elimination"
]
},
{
"term_html": "pivot",
"html": "The leftmost 1 of a row in echelon form. Rows are kept with distinct pivot columns, each row zero to the left of its pivot.",
"section": "Linear algebra over \\(\\mathbb F_2\\)",
"slide": "Gaussian elimination over \\(\\mathbb F_2\\)",
"keys": [
"pivot"
]
},
{
"term_html": "Weierstrass product inequality",
"html": "\\(\\prod_k(1 - a_k)\\ge1 - \\sum_ka_k\\) for \\(a_k\\in[0, 1]\\), proved by induction. It bounds the tail \\(\\prod_{k&gt;m}(1 - 2^{-k})\\ge1 - 2^{-m}\\), so \\(P_m(1 - 2^{-m})\\le \\prod_{k\\ge1}(1 - 2^{-k})\\le P_m\\), and the limit is \\(0.2888\\) to four places.",
"section": "How many runs",
"slide": "The tail, and why the limit is 0.2888",
"keys": [
"weierstrass product inequality"
]
},
{
"term_html": "geometric waiting time",
"html": "The number of independent trials, each succeeding with probability \\(q\\), up to and including the first success; its mean is \\(1/q\\). Stage \\(j\\) of Simon's algorithm (rank \\(j\\) to \\(j + 1\\)) has \\(q_j = 1 - 2^{j-(n-1)}\\), and the stages' means sum to fewer than \\(n + 1\\).",
"section": "How many runs",
"slide": "Expected runs: fewer than \\(n + 1\\)",
"keys": [
"geometric waiting time"
]
},
{
"term_html": "Las Vegas algorithm",
"html": "A randomised algorithm that is always right and whose running time is random — here, running Simon's circuit until the samples reach rank \\(n - 1\\). Cutting it off at a fixed budget, accepting a small failure probability, gives a Monte Carlo (bounded-error) algorithm.",
"section": "How many runs",
"slide": "The quantum upper bound",
"keys": [
"las vegas algorithm"
]
},
{
"term_html": "collision",
"html": "Two queries \\(x\\ne x'\\) with \\(f(x) = f(x')\\). Under Simon's promise it gives \\(s = x\\oplus x'\\); without one, a classical algorithm's answers are just distinct values.",
"section": "The classical lower bound",
"slide": "What a classical algorithm sees",
"keys": [
"collision"
]
},
{
"term_html": "transcript",
"html": "The record of a query algorithm's run: its queries and the answers, in order. A deterministic algorithm's next query and its output are functions of the transcript so far.",
"section": "The classical lower bound",
"slide": "What a classical algorithm sees",
"keys": [
"transcript"
]
},
{
"term_html": "Yao's principle",
"html": "Here only its easy direction: if a randomised algorithm succeeds with probability \\(\\ge\\frac23\\) on every input, then against any input distribution some deterministic algorithm with the same number of queries succeeds with probability \\(\\ge\\frac23\\). An exchange of two finite sums. Yao (1977).",
"section": "The classical lower bound",
"slide": "From randomised to deterministic: averaging",
"keys": [
"yao's principle"
]
},
{
"term_html": "lazy sampling",
"html": "Choosing a random function's value only when it is first queried. For a uniform Simon function with period \\(s\\), a new query's answer repeats an earlier one if the query is an earlier query \\(\\oplus\\, s\\), and is otherwise uniform over the values not yet returned.",
"section": "The classical lower bound",
"slide": "A random Simon function, sampled lazily",
"keys": [
"lazy sampling"
]
},
{
"term_html": "free oracle",
"html": "An oracle answering every new query with a fresh uniform value not yet returned — a uniformly random one-to-one function, which ignores \\(s\\). Coupled to the real oracle through the same fresh values, it agrees with it until the first collision.",
"section": "The classical lower bound",
"slide": "A random Simon function, sampled lazily",
"keys": [
"free oracle"
]
},
{
"term_html": "collision bound",
"html": "With \\(s\\) uniform on the nonzero strings and \\(f\\) uniform with period \\(s\\), a deterministic \\(q\\)-query algorithm finds a collision with probability at most \\(\\binom q2/(2^n - 1)\\) and outputs \\(s\\) with probability at most \\((\\binom q2 + 1)/(2^n - 1)\\). Hence randomised query complexity \\(\\Omega(2^{n/2})\\): at least \\(1.3\\times10^{15}\\) queries at \\(n = 100\\) for success \\(\\frac23\\).",
"section": "The classical lower bound",
"slide": "The collision bound",
"keys": [
"collision bound"
]
},
{
"term_html": "birthday bound",
"html": "Among \\(q\\) queries there are \\(\\binom q2\\approx q^2/2\\) pairs, each colliding with probability about \\(2^{-n}\\), so collisions become likely only near \\(q\\approx2^{n/2}\\) — the square root behind both the lower bound and the matching \\(O(2^{n/2})\\) classical algorithm.",
"section": "The classical lower bound",
"slide": "\\(\\Omega(2^{n/2})\\), and a matching upper bound",
"keys": [
"birthday bound"
]
},
{
"term_html": "oracle separation",
"html": "A proof that two kinds of machine differ when both are given the same black box. Simon's problem separates polynomial-time quantum from randomised computation relative to its oracle; it says nothing about functions given as explicit circuits, which a classical algorithm may read.",
"section": "The classical lower bound",
"slide": "What has been separated, and what has not",
"keys": [
"oracle separation"
]
}
];
