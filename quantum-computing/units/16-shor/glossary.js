// Generated from GLOSSARY.org by `qc glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "RSA",
"html": "The public-key cryptosystem of Rivest, Shamir and Adleman (1977): \\(N = pq\\) and \\(e\\) coprime to \\(\\varphi(N) = (p-1)(q-1)\\) are public, \\(d = e^{-1} \\bmod \\varphi(N)\\) is secret; encryption is \\(m \\mapsto m^e \\bmod N\\), decryption \\(c \\mapsto c^d \\bmod N\\). Factoring \\(N\\) gives \\(\\varphi(N)\\) and so \\(d\\).",
"section": "Factoring is order finding",
"slide": "Why factoring: RSA in one slide",
"keys": [
"rsa"
]
},
{
"term_html": "order",
"html": "For \\(\\gcd(a, N) = 1\\), the least \\(r \\ge 1\\) with \\(a^r \\equiv 1 \\pmod N\\). It exists by Euler's theorem and divides every \\(k\\) with \\(a^k \\equiv 1\\). The order of 2 mod 21 is 6.",
"section": "Factoring is order finding",
"slide": "Order, and a square root of 1 that splits N",
"keys": [
"order"
]
},
{
"term_html": "nontrivial square root of 1",
"html": "An \\(x\\) with \\(x^2 \\equiv 1 \\pmod N\\) but \\(x \\not\\equiv \\pm1\\). Then \\(\\gcd(x - 1, N)\\) and \\(\\gcd(x + 1, N)\\) are proper factors of \\(N\\). An odd \\(N\\) with \\(m\\) distinct prime factors has \\(2^m\\) square roots of 1, so nontrivial ones exist iff \\(m \\ge 2\\); mod 21 they are 8 and 13.",
"section": "Factoring is order finding",
"slide": "Order, and a square root of 1 that splits N",
"keys": [
"nontrivial square root of 1"
]
},
{
"term_html": "order-finding reduction",
"html": "Factoring from an order-finding subroutine: remove even and prime-power \\(N\\) (and primes) classically, pick a random \\(a\\), find its order \\(r\\), and if \\(r\\) is even with \\(a^{r/2} \\not\\equiv -1\\), output \\(\\gcd(a^{r/2} - 1, N)\\); otherwise pick again. The randomised form of an argument of Miller (1976).",
"section": "Factoring is order finding",
"slide": "The reduction, as an algorithm",
"keys": [
"order-finding reduction"
]
},
{
"term_html": "2-adic valuation",
"html": "\\(v(m)\\), the exponent of 2 in the integer \\(m\\). For \\(N = pq\\), a random \\(a\\) succeeds in the reduction iff its orders mod \\(p\\) and mod \\(q\\) have different 2-adic valuations.",
"section": "Factoring is order finding",
"slide": "When does a random a work?",
"keys": [
"2-adic valuation"
]
},
{
"term_html": "quadratic residue",
"html": "A residue mod \\(p\\) that is a square. Exactly half of \\(\\mathbb Z_p^\\times\\) are quadratic residues for odd \\(p\\); with \\(p - 1 = 2^em\\), \\(m\\) odd, they are exactly the residues whose order has 2-adic valuation below \\(e\\). This is why the reduction succeeds with probability at least ½.",
"section": "Factoring is order finding",
"slide": "Half the residues carry all the twos",
"keys": [
"quadratic residue"
]
},
{
"term_html": "perfect power",
"html": "An \\(N = b^k\\) with \\(k \\ge 2\\). For an odd prime power the reduction always fails, since 1 has only the square roots \\(\\pm1\\) modulo \\(p^k\\); so prime powers are detected first, by computing \\(\\lfloor N^{1/k}\\rfloor\\) for each \\(k \\le \\log_2N\\) by bisection.",
"section": "Factoring is order finding",
"slide": "Prime powers, primes, and the general case",
"keys": [
"perfect power"
]
},
{
"term_html": "modular multiplication",
"html": "The unitary \\(U_a\\ket y = \\ket{ay \\bmod N}\\) for \\(0 \\le y &lt; N\\), \\(U_a\\ket y = \\ket y\\) above, on \\(n = \\lceil\\log_2N\\rceil\\) qubits, for \\(\\gcd(a, N) = 1\\). A permutation of the basis, hence unitary; its eigenvectors on the orbit of 1 are \\(\\ket{u_s} = r^{-1/2}\\sum_k e^{-2\\pi isk/r}\\ket{a^k}\\) with eigenphases \\(s/r\\), and \\(\\ket1 = r^{-1/2}\\sum_s\\ket{u_s}\\).",
"section": "Order finding is phase estimation",
"slide": "Multiplication by a is a permutation, so a unitary",
"keys": [
"modular multiplication"
]
},
{
"term_html": "repeated squaring",
"html": "Computing \\(b_j = a^{2^j} \\bmod N\\) by \\(b_{j+1} = b_j^2 \\bmod N\\): \\(t - 1\\) squarings, done classically. It makes each controlled \\(U_a^{2^j}\\) a single controlled multiplication by \\(b_j\\). For \\(a = 2\\), \\(N = 21\\): \\(2, 4, 16, 4, 16, \\dots\\)",
"section": "Order finding is phase estimation",
"slide": "Controlled powers by repeated squaring",
"keys": [
"repeated squaring"
]
},
{
"term_html": "modular exponentiation",
"html": "The map \\(\\ket x\\ket1 \\mapsto \\ket x\\ket{a^x \\bmod N}\\), built as one controlled multiplication by \\(b_j\\) per bit of \\(x\\). \\(O(n^3)\\) gates with schoolbook arithmetic: \\(2n\\) multiplications, each \\(n\\) modular additions of \\(O(n)\\) gates.",
"section": "Order finding is phase estimation",
"slide": "Controlled powers by repeated squaring",
"keys": [
"modular exponentiation"
]
},
{
"term_html": "in-place multiplication",
"html": "Applying \\(U_c\\ket y = \\ket{cy \\bmod N}\\) with a borrowed register: compute \\(cy\\) into a fresh register by the multiply-add \\(M_c\\), swap, then subtract \\(c^{-1}\\cdot cy = y\\) from the second register with \\(M_{c^{-1}}^{-1}\\). The ancilla returns to \\(\\ket0\\) for every \\(y\\), so the work register undergoes exactly \\(U_c\\).",
"section": "The circuit",
"slide": "Multiplying in place",
"keys": [
"in-place multiplication"
]
},
{
"term_html": "continued fraction",
"html": "The expansion \\(x = a_0 + 1/(a_1 + 1/(a_2 + \\cdots)) = [a_0; a_1, a_2, \\dots]\\), with \\(a_k = \\lfloor x_k\\rfloor\\) and \\(x_{k+1} = 1/(x_k - a_k)\\). For a rational it is Euclid's algorithm and stops: \\(5/6 = [0; 1, 5]\\).",
"section": "Continued fractions",
"slide": "Continued fractions, with Euclid underneath",
"keys": [
"continued fraction"
]
},
{
"term_html": "partial quotients",
"html": "The integers \\(a_k\\) of a continued fraction; all but \\(a_0\\) are at least 1. For a rational \\(u/v\\), the quotients of Euclid's algorithm on \\((u, v)\\).",
"section": "Continued fractions",
"slide": "Continued fractions, with Euclid underneath",
"keys": [
"partial quotients"
]
},
{
"term_html": "convergent",
"html": "The truncation \\(p_k/q_k = [a_0; \\dots, a_k]\\), computed by \\(p_k = a_kp_{k-1} + p_{k-2}\\), \\(q_k = a_kq_{k-1} + q_{k-2}\\). In lowest terms, since \\(p_kq_{k-1} - p_{k-1}q_k = (-1)^{k+1}\\); the convergents alternate around \\(x\\). For \\(427/512\\): \\(0, 1, 5/6, 211/253, 427/512\\).",
"section": "Continued fractions",
"slide": "Convergents, and the identities they obey",
"keys": [
"convergent"
]
},
{
"term_html": "Legendre's theorem",
"html": "If \\(|x - p/q| &lt; 1/(2q^2)\\) with \\(p/q\\) in lowest terms, then \\(p/q\\) is a convergent of \\(x\\) (Legendre, 1798). It is why the continued fraction of \\(y/2^t\\) finds \\(s/r\\) when \\(2^t \\ge N^2\\).",
"section": "Continued fractions",
"slide": "Legendre's theorem",
"keys": [
"legendre's theorem"
]
},
{
"term_html": "nearest-fraction rule",
"html": "Shor's decoding: read the measured \\(y\\) as the fraction with denominator below \\(N\\) nearest to \\(y/2^t\\), then test \\(a^q \\equiv 1\\). On a run where \\(y\\) is the integer nearest \\(2^ts/r\\) it returns \\(s/r\\) in lowest terms, a convergent. Some texts use the last convergent with denominator below \\(N\\) instead; the two agree on every good run.",
"section": "Continued fractions",
"slide": "Decoding y: the nearest fraction with denominator below N",
"keys": [
"nearest-fraction rule"
]
},
{
"term_html": "semiconvergent",
"html": "A fraction \\((p_{k-1} + jp_k)/(q_{k-1} + jq_k)\\) with \\(1 \\le j &lt; a_{k+1}\\), between two convergents. The nearest fraction with bounded denominator is a convergent or a semiconvergent (Khinchin, cited); \\(3/19\\) is a semiconvergent of \\(5/32\\).",
"section": "Continued fractions",
"slide": "Decoding y: the nearest fraction with denominator below N",
"keys": [
"semiconvergent"
]
},
{
"term_html": "discrete logarithm",
"html": "Given \\(g\\) and \\(h = g^\\ell\\) in a cyclic group of order \\(r\\), the exponent \\(\\ell \\in \\mathbb Z_r\\). In \\(\\mathbb Z_{11}^\\times\\) with \\(g = 2\\), the discrete logarithm of 5 is 4. Shor's two-register algorithm finds it from samples \\((k_1, k_2)\\) with \\(k_2 \\equiv \\ell k_1 \\pmod r\\).",
"section": "Discrete logarithms, and the hidden subgroup problem",
"slide": "Discrete logarithms, and the key exchange they protect",
"keys": [
"discrete logarithm"
]
},
{
"term_html": "Diffie–Hellman key exchange",
"html": "Alice sends \\(g^\\alpha\\), Bob sends \\(g^\\beta\\), and both compute \\(g^{\\alpha\\beta}\\) (1976). An eavesdropper who can take discrete logarithms recovers the key.",
"section": "Discrete logarithms, and the hidden subgroup problem",
"slide": "Discrete logarithms, and the key exchange they protect",
"keys": [
"diffie–hellman key exchange"
]
},
{
"term_html": "elliptic-curve group",
"html": "The points of \\(y^2 = x^3 + Ax + B\\) over \\(\\mathbb F_p\\), with a point at infinity, under the rule that three collinear points sum to zero. Its discrete logarithm problem underlies elliptic-curve cryptography, which Shor's algorithm breaks as it breaks RSA.",
"section": "Discrete logarithms, and the hidden subgroup problem",
"slide": "Elliptic curves fall too",
"keys": [
"elliptic-curve group"
]
},
{
"term_html": "post-quantum cryptography",
"html": "Public-key cryptography built on problems with no known efficient quantum attack — lattices (ML-KEM, ML-DSA) and hash functions (SLH-DSA), standardised by NIST in 2024. Named in this unit, not taught.",
"section": "Discrete logarithms, and the hidden subgroup problem",
"slide": "Elliptic curves fall too",
"keys": [
"post-quantum cryptography"
]
},
{
"term_html": "hidden subgroup problem",
"html": "Given an oracle for \\(f\\) on a group \\(G\\) that is constant on the cosets of a subgroup \\(H\\) and distinct on distinct cosets, find \\(H\\). Simon (\\(\\mathbb Z_2^n\\), \\(\\{0, s\\}\\)), order finding (\\(\\mathbb Z\\), \\(r\\mathbb Z\\)) and discrete logarithm (\\(\\mathbb Z_r\\times \\mathbb Z_r\\), \\(\\langle(-\\ell, 1)\\rangle\\)) are instances. Solved for finite abelian groups; open for the dihedral and symmetric groups.",
"section": "Discrete logarithms, and the hidden subgroup problem",
"slide": "The hidden subgroup problem",
"keys": [
"hidden subgroup problem"
]
},
{
"term_html": "Fourier sampling",
"html": "Query \\(f\\) on a uniform superposition, set the output aside, apply \\(F_G\\) and measure. For finite abelian \\(G\\) the outcome is a character uniform on \\(H^\\perp\\), the characters trivial on \\(H\\); \\(O(\\log|G|)\\) samples determine \\(H\\).",
"section": "Discrete logarithms, and the hidden subgroup problem",
"slide": "Abelian: solved. Non-abelian: open",
"keys": [
"fourier sampling"
]
},
{
"term_html": "coset state",
"html": "\\(\\ket{g + H} = |H|^{-1/2}\\sum_{h\\in H}\\ket{g + h}\\), what the input register holds after one query of a hidden-subgroup oracle, for a uniformly random coset.",
"section": "Discrete logarithms, and the hidden subgroup problem",
"slide": "Abelian: solved. Non-abelian: open",
"keys": [
"coset state"
]
}
];
