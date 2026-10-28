// Generated from GLOSSARY.org by `qc glossary`; edit the Org file, not this one.
window.GLOSSARY = [
{
"term_html": "quantum key distribution (QKD)",
"html": "A protocol by which two parties, joined by a quantum channel Eve may tamper with and an authenticated public channel she may only read, agree on a shared random key whose secrecy rests on quantum mechanics rather than on a computational assumption.",
"section": "Overview",
"slide": "Sixteen photons, and someone may be listening",
"keys": [
"quantum key distribution (qkd)",
"quantum key distribution",
"qkd"
]
},
{
"term_html": "one-time pad",
"html": "Encryption \\(c = m\\oplus k\\) with a uniformly random key \\(k\\) as long as the message and used once. The ciphertext is uniform and independent of the message (Shannon 1949): perfect secrecy, at the price of distributing the key.",
"section": "The protocol",
"slide": "What a shared key buys: the one-time pad",
"keys": [
"one-time pad"
]
},
{
"term_html": "photon",
"html": "An indivisible lump of light: a sensitive detector clicks, never half-clicks, and dimming the light makes clicks rarer, not smaller. A single photon at a polarising beam splitter reaches exactly one detector; its polarisation is a qubit.",
"section": "The protocol",
"slide": "Single photons, from nothing",
"keys": [
"photon"
]
},
{
"term_html": "BB84 states",
"html": "\\(\\ket0, \\ket1\\) (the \\(\\mathtt z\\) basis, H and V) and \\(\\ket\\pm = \\frac1{\\sqrt2}(\\ket0 \\pm \\ket1)\\) (the \\(\\mathtt x\\) basis, \\(\\pm45^\\circ\\)), with bit 0 sent as \\(\\ket0\\) or \\(\\ket+\\) and bit 1 as \\(\\ket1\\) or \\(\\ket-\\). The two bases are mutually unbiased: measured in the right basis a state gives its bit surely, in the wrong one a fair coin.",
"section": "The protocol",
"slide": "Four states, two bases",
"keys": [
"bb84 states"
]
},
{
"term_html": "BB84",
"html": "Bennett and Brassard's 1984 protocol: transmission of the BB84 states with random bits and bases, sifting, parameter estimation, error correction and privacy amplification, over an authenticated public channel.",
"section": "The protocol",
"slide": "BB84, step by step",
"keys": [
"bb84"
]
},
{
"term_html": "sifting",
"html": "Announcing the bases (never the bits) and keeping only the photons where Alice's and Bob's bases agree — half of them on average.",
"section": "The protocol",
"slide": "BB84, step by step",
"keys": [
"sifting"
]
},
{
"term_html": "sifted key",
"html": "The bits kept by sifting. Where the bases agree, Bob's result equals Alice's bit unless something disturbed the photon.",
"section": "The protocol",
"slide": "BB84, step by step",
"keys": [
"sifted key"
]
},
{
"term_html": "parameter estimation",
"html": "Revealing a random sample of the sifted bits, chosen after the transmission, to estimate the error rate; the sample is then discarded, and the run aborted if the rate is too high.",
"section": "The protocol",
"slide": "BB84, step by step",
"keys": [
"parameter estimation"
]
},
{
"term_html": "quantum bit error rate (QBER)",
"html": "\\(Q\\), the probability that Bob's sifted bit differs from Alice's, estimated as \\(\\hat Q\\) from the sample. The only number by which Eve's presence is measured.",
"section": "The protocol",
"slide": "BB84, step by step",
"keys": [
"quantum bit error rate (qber)",
"quantum bit error rate",
"qber"
]
},
{
"term_html": "error correction (information reconciliation)",
"html": "Public discussion that makes Bob's string equal to Alice's, at a cost of at least about \\(h(Q)\\) published bits per bit (Slepian–Wolf, cited); Cascade does it with parities and binary search. Every published parity is heard by Eve.",
"section": "The protocol",
"slide": "BB84, step by step",
"keys": [
"error correction (information reconciliation)",
"error correction",
"information reconciliation"
]
},
{
"term_html": "privacy amplification",
"html": "Shrinking the corrected string with a publicly chosen random hash from a universal family, so that Eve's partial knowledge of the input becomes negligible knowledge of the output (Bennett, Brassard and Robert 1988, cited).",
"section": "The protocol",
"slide": "BB84, step by step",
"keys": [
"privacy amplification"
]
},
{
"term_html": "binary entropy",
"html": "\\(h(Q) = -Q\\log Q - (1 - Q)\\log(1 - Q)\\), base 2: the bits of uncertainty per symbol in independent flips of probability \\(Q\\), and the price per bit of correcting them or hiding them. \\(h(0) = 0\\), \\(h(\\frac12) = 1\\), \\(h(0.05) = 0.2864\\).",
"section": "The protocol",
"slide": "The binary entropy: how many bits an error rate hides",
"keys": [
"binary entropy"
]
},
{
"term_html": "universal hashing",
"html": "A family of functions \\(f : \\{0,1\\}^n \\to \\{0,1\\}^m\\) with \\(\\Pr_f(f(x) = f(y)) \\le 2^{-m}\\) for all \\(x \\ne y\\) (Carter and Wegman 1979); \\(m\\) parities of independent random subsets is one. Keeping \\(n - t - s\\) bits leaves an Eve who knew \\(t\\) bits' worth an advantage exponentially small in \\(s\\) (leftover hash lemma, cited).",
"section": "The protocol",
"slide": "Privacy amplification: hashing Eve's knowledge away",
"keys": [
"universal hashing"
]
},
{
"term_html": "authenticated channel (authenticated)",
"html": "A public channel on which Eve may read every message but cannot alter or invent one undetected; made from an ordinary channel by Wegman–Carter tags, which need a short shared secret.",
"section": "The protocol",
"slide": "The public line must be authenticated",
"keys": [
"authenticated channel (authenticated)",
"authenticated channel",
"authenticated"
]
},
{
"term_html": "key expansion",
"html": "What QKD actually does: it turns a short pre-shared secret, needed to authenticate the public channel, into a long one. It cannot create a key from nothing.",
"section": "The protocol",
"slide": "The public line must be authenticated",
"keys": [
"key expansion"
]
},
{
"term_html": "information–disturbance trade-off (information–disturbance)",
"html": "For the BB84 states: if an interaction \\(U(\\ket s\\ket e) = \\ket s\\ket{e_s}\\) leaves all four undisturbed, then \\(e_0 = e_1 = e_+ = e_-\\) and Eve learns nothing. Any information gained shows up as errors.",
"section": "What looking costs Eve",
"slide": "Undisturbed means uninformed",
"keys": [
"information–disturbance trade-off (information–disturbance)",
"information–disturbance trade-off",
"information–disturbance"
]
},
{
"term_html": "intercept-resend attack",
"html": "Eve measures each photon in a randomly chosen basis and sends Bob a fresh photon in the state she found. On the sifted key it causes \\(Q = \\frac14\\) and lets Eve guess each bit with probability \\(\\frac34\\); on a fraction \\(f\\) of photons, \\(Q = f/4\\).",
"section": "What looking costs Eve",
"slide": "The simplest attack: measure, then resend",
"keys": [
"intercept-resend attack"
]
},
{
"term_html": "Breidbart basis",
"html": "The analyser halfway between \\(\\mathtt z\\) and \\(\\mathtt x\\), at \\(22.5^\\circ\\) and \\(112.5^\\circ\\), each direction \\(22.5^\\circ\\) from both states encoding one bit value. Intercept-resend in it guesses each sifted bit with probability \\(\\cos^2\\frac\\pi8 \\approx 0.8536\\) at the same \\(Q = 25\\%\\).",
"section": "What looking costs Eve",
"slide": "Gentler attacks do better",
"keys": [
"breidbart basis"
]
},
{
"term_html": "Shor–Preskill rate",
"html": "\\(r(Q) = 1 - 2h(Q)\\) secret bits per sifted bit for BB84 with one-way post-processing, against every attack, for long keys (Shor and Preskill 2000, cited). One \\(h(Q)\\) pays for error correction, the other for privacy amplification. \\(r(0.05) = 0.427\\); \\(r = 0\\) at \\(Q = 0.1100\\).",
"section": "From error rate to key rate",
"slide": "The Shor–Preskill rate",
"keys": [
"shor–preskill rate"
]
},
{
"term_html": "phase error rate",
"html": "The error rate in the basis conjugate to the key's. It bounds Eve's knowledge of the key; with random bases it is estimated by the same \\(Q\\).",
"section": "From error rate to key rate",
"slide": "Why the second h(Q)",
"keys": [
"phase error rate"
]
},
{
"term_html": "E91",
"html": "Ekert's 1991 protocol: a source sends singlets, Alice and Bob measure in randomly chosen settings, key comes from matching settings and a CHSH test from the others. Here Alice uses Bloch angles \\(0, \\frac\\pi2\\) and Bob \\(0, \\frac\\pi2, \\pm\\frac\\pi4\\).",
"section": "The same key from Bell pairs",
"slide": "E91: a source in the middle",
"keys": [
"e91"
]
},
{
"term_html": "key round, test round",
"html": "In E91, a round with equal settings (perfectly anticorrelated outcomes, so key after Bob flips his bit), and a round with Alice's setting against one of Bob's \\(\\pm\\frac\\pi4\\) (feeding the CHSH value \\(S\\), \\(-2\\sqrt2\\) on the singlet).",
"section": "The same key from Bell pairs",
"slide": "Key rounds and test rounds",
"keys": [
"key round, test round",
"key round",
"test round"
]
},
{
"term_html": "BBM92",
"html": "Bennett, Brassard and Mermin's 1992 entanglement version of BB84: singlets measured in \\(\\mathtt z\\) or \\(\\mathtt x\\), no Bell test. Equivalent to BB84, since Alice's measurement prepares a BB84 state on Bob's side.",
"section": "The same key from Bell pairs",
"slide": "BBM92, and devices nobody trusts",
"keys": [
"bbm92"
]
},
{
"term_html": "self-testing",
"html": "The theorem (Summers and Werner 1987; Popescu and Rohrlich 1992; cited) that devices reaching \\(|S| = 2\\sqrt2\\) must, up to local isometries, hold a singlet and measure unit 06's observables — without trusting how they were built.",
"section": "The same key from Bell pairs",
"slide": "BBM92, and devices nobody trusts",
"keys": [
"self-testing"
]
},
{
"term_html": "device-independent QKD",
"html": "Key distribution whose security rests only on the observed CHSH value, with the devices treated as black boxes. Its key rate dies at \\(Q \\approx 7.1\\%\\) for uniform noise (cited); it was first demonstrated in 2022.",
"section": "The same key from Bell pairs",
"slide": "BBM92, and devices nobody trusts",
"keys": [
"device-independent qkd"
]
},
{
"term_html": "man-in-the-middle attack",
"html": "Without authentication, Eve runs BB84 separately with Alice (posing as Bob) and with Bob (posing as Alice), holding both keys; every check passes.",
"section": "What QKD does not do",
"slide": "Without authentication: the man in the middle",
"keys": [
"man-in-the-middle attack"
]
},
{
"term_html": "photon-number-splitting attack",
"html": "On a pulse carrying two photons in Alice's state, Eve keeps one and forwards the other untouched, then measures hers in the announced basis: the bit with certainty, and no error (Brassard, Lütkenhaus, Mor and Sanders 2000, cited).",
"section": "What QKD does not do",
"slide": "Real sources sometimes send two photons",
"keys": [
"photon-number-splitting attack"
]
},
{
"term_html": "decoy states",
"html": "Pulses of randomly varied intensity, announced afterwards (Hwang 2003; Lo, Ma and Chen 2005). Eve's action can depend on the photon number but not the intensity, so comparing detection rates across intensities exposes a photon-number-splitting attack.",
"section": "What QKD does not do",
"slide": "Decoy states, and the gaps that remain",
"keys": [
"decoy states"
]
}
];
