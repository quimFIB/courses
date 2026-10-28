# Citations: the flagged-items audit

On 2026-10-28 the citations the build's verifiers had flagged as **checked from
memory only** (they had no web access) were checked against outside sources:
units 03, 05, 06, 10, 16, 22, 24, 25 and 26. **130 entries: 113 confirmed, 8
wrong and fixed, 9 unconfirmed**, plus ten points settled by the learner
(below). Every fix was then re-checked in the session
that commissioned it, against the source itself (the paper's own text,
extracted from its PDF, or Crossref), not against the auditor's report.

This is **not** the full audit Mechanics to Relativity had: citations nobody
flagged were not looked at. The rule it worked under is that one's:
**an unconfirmed citation is left exactly as it stands**, because replacing a
remembered locator with another remembered one looks checked and is not.

## The eight fixes

| where | was | now | source |
|---|---|---|---|
| 10 slides, CNOT classification | Shende, Markov and Bullock, PRA 69, 062321 | Shende, Bullock and Markov, PRA 70, 012310 | Crossref 10.1103/physreva.70.012310; arXiv quant-ph/0308045 (062321 has no CNOT-count classification) |
| 16 slides notes, Shor's rounding rule | "Shor's words (1994)" | (1997) | the quoted words are verbatim in arXiv quant-ph/9508027v2 (SIAM J. Comput. 26, 1484); the June 1994 DIMACS text words it differently |
| 16 slides notes, choice of q | "Shor's 1994 paper chose q = 2^t" | 1997 | 1994: "a smooth q with 2n² ≤ q < 4n²"; 1997: "q, the power of 2 with n² ≤ q < 2n²" |
| 24 slides, reading | Gottesman arXiv:0904.2557, sections 1–6 | 1–5 | the paper has five numbered sections |
| 24 slides, reading | Fowler et al., "its appendix on logical error rates" | section VII | Eq. 11, P_L ≅ 0.03(p/p_th)^{d_e}, is in §VII "Error detection"; no appendix (A–M) is on logical error rates |
| 25 slides, transmon ladder | Koch et al. §III | §II | §II C "Anharmonicity of the transmon"; §III is circuit QED |
| 25 slides, drive coupling (two places) | Koch et al. §IV | §III | §III A "The coupling strength of the transmon"; §IV is T₁ estimates |
| 26 slides, QAOA depth one (two places) | Farhi–Goldstone–Gutmann sections I–IV | I–V | §V "MaxCut on 3-regular graphs" holds the 0.6924 |

Caveat on the two Shor fixes: neither the FOCS proceedings nor the SIAM journal
text was reached; the 1994 source is the June 1994 DIMACS extended abstract
(TR 94-37), the 1997 one its arXiv preprint.

After the fixes: `./qc glossary`, `slides/tools/deck-check.sh` on 10, 16, 24,
25, 26 (no overflow, all terms and references resolve) and `./qc site` pass.

## Decided by the learner and applied (2026-10-28)

Ten points the audit raised needed a decision rather than a lookup. Nine were
applied; the tenth was left.

- **22, the first experiment.** "It is also the code the first experiments
  ran" now says the first ran it in its phase-flip form, correcting phase
  errors (Cory et al.'s abstract: "the 3-bit code for phase errors"), and
  points to the deck's own phase-flip slide. The nine-qubit bit-flip example
  (Kelly et al. 2015) is unchanged.
- **24, further reading.** "Preskill's lecture notes, chapter 7" is removed:
  chapter 7 is error correction, and the fault-tolerance chapter (8) was never
  typeset. Gottesman's survey remains, now with its section 5.
- **26, Pednault's disk.** "about 250 PB" → "about 280 PB (250 PiB in the
  paper)" on the slide, and 280 PB in the notes and on the sheet (P9's solution,
  part 2). The 72 PB / 144 PB arithmetic and the conclusion are unchanged.
- **10 problems, SWAP needs three CNOTs.** Shende–Markov–Bullock, PRA 69,
  062321, removed; it bounds generic gates only. Vidal–Dawson remains.
- **10 reading, Preskill.** "chapter 6" → "(the current notes on his Caltech
  page), chapter 5".
- **25 reading.** Koch et al. §§II–IV → §§II–III (§IV is T₁ estimates);
  Gambetta et al. §§II–III → §§II–IV (§IV holds the DRAG results the deck uses).
- **24, the 97 code qubits.** Added: the paper's "101-qubit" count also includes
  the qubits that remove leakage.
- **22, Hamming.** The relay computers did not wait to be restarted: on a
  detected error in an unattended weekend run they dropped the job and moved
  on to the next.
- **26, journal versions.** Added beside the arXiv numbers, each checked on
  Crossref: Manetsch et al., *Nature* 647, 60 (2025), 10.1038/s41586-025-09641-4;
  Gao et al., *PRX Quantum* 5, 010334 (2024), 10.1103/PRXQuantum.5.010334.
- **Left: 10, "Margolus's gate".** The name is in common use and the slide does
  not claim Barenco et al. use it.

After the edits: `./qc glossary` on all five units, sheet-check on 10 and 26,
`deck-check.sh` on 10, 22, 24, 25, 26 (no overflow; terms and slide references
all resolve) and `./qc site` pass.

## Unconfirmed, left as written

Searches tried are in the full record below.

- 03: Malus's law dated 1809; von Neumann 1932 as containing the tensor-product
  rule; Whitney "introduced" tensor products, and the Bourbaki clause; Harris,
  Lecture 2, for the Segre embedding.
- 06: Bell, "The theory of local beables", 1976.
- 22: Steane's PRL 77, 793 as the source of the seven-qubit code (the usual
  citation is Proc. R. Soc. A 452, 2551).
- 25: Motzoi et al. (2009) "two pages" (the arXiv PDF has four); Gerry and
  Knight ch. 3 (not searched).

# The full record

Both auditors' records, unedited. Line numbers are as the auditors found them;
the fixes were made in place, so they should still land within a line or two.

# Citation audit A — units 03, 05, 06, 10, 16, 22

Date: 2026-10-28. Every "source" below was fetched in this session. Crossref
lookups were made against api.crossref.org/works (by DOI or bibliographic query).
Downloaded texts went to the session scratchpad (dl/); they are not in the course.

Key full texts reached:
- N&C 10th anniv. ed., full OCR text: archive.org/download/QuantumComputationAndQuantumInformation10thAnniversaryEdition (…_djvu.txt)
- Hensen et al.: arxiv.org/pdf/1508.05949v1
- Shor June 1994 extended abstract: DIMACS TR 94-37, archive.dimacs.rutgers.edu/pub/dimacs/TechnicalReports/TechReports/1994/94-37.ps
- Shor expanded version: arxiv.org/pdf/quant-ph/9508027v2 (comments: "expanded version of a paper that appeared in the Proceedings of the 35th Annual Symposium on Foundations of Computer Science, Santa Fe, NM, Nov. 20--22, 1994")
- Khinchin, Continued Fractions (Chicago 1964): archive.org/download/khinchin-continued-fractions (djvu.txt)
- Preskill Ph219 index: www.preskill.caltech.edu/ph229/ and the chapter PDFs linked there
- Axler LADR 4e: linear.axler.net/LADR4e.pdf

---------------------------------------------------------------------------
## Unit 03 — 03-tensor-products

- **units/03-tensor-products/slides.html:2100: "Nielsen and Chuang, … §2.1.7 (tensor products), §2.2.8 (composite systems), and from §2.5 the Schmidt decomposition theorem"** (also :2111–2112 "their §2.1.7 … Their §2.5 proves the Schmidt decomposition with the same SVD argument")
  - status: confirmed
  - source: N&C OCR text, contents: "2.1.7 Tensor products 71", "2.2.8 Composite systems 93", "2.5 The Schmidt decomposition and purifications 109"; in §2.5 "Theorem 2.7 (Schmidt decomposition)" and the proof "By the singular value decomposition, a = udv".

- **units/03-tensor-products/slides.html:2100: "Axler, Linear Algebra Done Right (4th ed.), §9D for tensor products done basis-free"** (also :2113–2115 "Axler's §9D (in the 4th edition, "Tensor Products") … with the conjugate-linear convention in the other slot")
  - status: confirmed
  - source: linear.axler.net/LADR4e.pdf contents: "9D Tensor Products 370 / Tensor Product of Two Vector Spaces / Tensor Product of Inner Product Spaces / …"; text: "conjugate linearity … in the second slot of the inner product".

- **units/03-tensor-products/slides.html:2100: "Kwiat et al., Phys. Rev. Lett. 75, 4337 (1995)"** (also :246, :292–294, GLOSSARY.org:35)
  - status: confirmed
  - source: journals.aps.org/prl/abstract/10.1103/PhysRevLett.75.4337 (title, authors Kwiat, Mattle, Weinfurter, Zeilinger, Sergienko, Shih; PRL 75, 4337, 11 Dec 1995); full text people.bu.edu/alexserg/Entangled.pdf: "single nonlinear crystal [BBO (beta-barium borate) in our experiment]", "The 351.1 nm pump beam", "interference filter at 702 nm", "a half wave plate in one path", abstract "ready preparation of all four of the EPR-Bell states".

- **units/03-tensor-products/slides.html:168: "Malus's law (Étienne-Louis Malus, 1809)"** (also :132, GLOSSARY.org:28–29 "(1809)")
  - status: unconfirmed
  - already tried: en.wikipedia.org/wiki/Étienne-Louis_Malus ("His discovery of the polarization of light by reflection was published in 1809" — no year for the cos² law); en.wikipedia.org/wiki/Polarizer (no year); Dictionary of Scientific Biography entry mathshistory.st-andrews.ac.uk/DSB/Malus.pdf (states the cos² α intensity law and announcement of polarization by reflection on 12 Dec 1808, no date for the law). WebSearch "Malus's law cos² intensity year 1809". 1809 is plausible but no reached source dates the law itself.

- **units/03-tensor-products/slides.html:281: "the second is Einstein's 1905 reading of the photoelectric effect"**
  - status: confirmed
  - source: Crossref 10.1002/andp.19053220607: Einstein, "Über einen die Erzeugung und Verwandlung des Lichtes betreffenden heuristischen Gesichtspunkt", Annalen der Physik, 1905.

- **units/03-tensor-products/slides.html:468–469: "The tensor-product rule for composite systems is in von Neumann's Mathematische Grundlagen der Quantenmechanik (1932)"**
  - status: unconfirmed (year confirmed; content not)
  - source: openlibrary.org search: "Mathematische grundlagen der quantenmechanik | John Von Neumann | 1932 | J. Springer".
  - already tried: archive.org items mathematicalfoun0000vonn and mathematicalfoun0613vonn (English tr.) — full text access-restricted (401). The claim that the rule is *in* the book is not checked.

- **units/03-tensor-products/slides.html:469–470: "The word "entanglement" (Schrödinger's Verschränkung) is from 1935, the year of the Einstein–Podolsky–Rosen paper"** (also :1078 "Schrödinger's verschränkt (1935)")
  - status: confirmed
  - source: iqoqi-vienna.at/blogs/blog/schroedingers-notebooks-and-the-history-of-the-einstein-podolsky-rosen-paradox: Schrödinger, in "Die gegenwärtige Situation in der Quantenmechanik" (1935), "also coining the term 'entanglement' (Verschränkung)", replying to EPR "in the same year". Crossref 10.1103/physrev.47.777: EPR, Phys. Rev. 47, 777, 1935.

- **units/03-tensor-products/slides.html:531: "Tensor products of abelian groups were introduced by Whitney (1938); the universal-property definition became the standard one through Bourbaki's Algebra"**
  - status: unconfirmed (Whitney year/paper confirmed; "introduced" and the Bourbaki clause not)
  - source: Crossref 10.1215/s0012-7094-38-00442-9: Whitney, "Tensor products of Abelian groups", Duke Math. J. 4, 495–528, 1938.
  - already tried: en.wikipedia.org/wiki/Tensor_product_of_modules (both halves; no history of Whitney/Bourbaki, Bourbaki only as a reference).

- **units/03-tensor-products/slides.html:690: "(Håstad, 1990, showed tensor rank NP-hard for three factors; cited)"**
  - status: confirmed
  - source: Crossref 10.1016/0196-6774(90)90014-6: Håstad, "Tensor rank is NP-complete", J. Algorithms 11, 644–654, 1990. Hillar & Lim, arxiv.org/pdf/0911.1393 §8: "It was shown in [Håstad 1990] that any 3SAT boolean formula can be encoded as a 3-tensor … tensor rank is NP-hard over Q and NP-complete over finite fields."

- **units/03-tensor-products/slides.html:1175, :1298: "John Bell, whose 1964 theorem" / "Bell's (1964) or CHSH's (1969)"**
  - status: confirmed
  - source: Crossref 10.1103/physicsphysiquefizika.1.195 (Bell, Physics 1, 195, 1964); 10.1103/physrevlett.23.880 (Clauser, Horne, Shimony, Holt, PRL 23, 880, 1969).

- **units/03-tensor-products/slides.html:1414–1415: "Peres, Physics Letters A 202, 16 (1995), cited"**
  - status: confirmed
  - source: Crossref 10.1016/0375-9601(95)00315-t: Peres, "Higher order Schmidt decompositions", Phys. Lett. A 202, 16–17, 1995.

- **units/03-tensor-products/slides.html:1421: "Erhard Schmidt (1907) proved the integral-equation version"**
  - status: confirmed
  - source: Crossref 10.1007/bf01449770: Schmidt, "Zur Theorie der linearen und nichtlinearen Integralgleichungen", Math. Ann. 63, 433–476, 1907.

- **units/03-tensor-products/slides.html:1423: "Ekert and Knight, American Journal of Physics 63, 415 (1995)"**
  - status: confirmed
  - source: Crossref 10.1119/1.17904: Ekert, Knight, "Entangled quantum systems and the Schmidt decomposition", Am. J. Phys. 63, 415–423, 1995.

- **units/03-tensor-products/slides.html:1951: "the Segre embedding … (cited: Harris, Algebraic Geometry: A First Course, Lecture 2)"**
  - status: unconfirmed
  - source (partial): Crossref 10.1007/978-1-4757-2189-8_2: Harris, GTM 133, chapter 2 = "Regular Functions and Maps", pp. 17–31 (1992). Does not by itself show the Segre maps are in it.
  - already tried: link.springer.com/chapter/10.1007/978-1-4757-2189-8_2 (login redirect); rd.springer.com same; springerprofessional.de/en/regular-functions-and-maps/13872412 (no TOC); link.springer.com front-matter TOC PDFs (HTML returned); archive.org advancedsearch (no copy); openlibrary and Google Books APIs (nothing). A WebSearch summary asserted "The Segre Maps" is a subsection of Lecture 2, but no page I reached shows it.

- **units/03-tensor-products/slides.html:1971: "(the easy case of Sard's theorem, cited: Lee, Introduction to Smooth Manifolds, 2nd ed., chapter 6)"** (same locator repeated in units/10-circuits/slides.html:1807 and referred to at :1791)
  - status: confirmed
  - source: Crossref 10.1007/978-1-4419-9982-5_6: Lee, chapter "Sard's Theorem", GTM, pp. 125–149, 2013 (the 2nd-edition ISBN).

---------------------------------------------------------------------------
## Unit 05 — 05-no-cloning-discrimination

- **units/05-no-cloning-discrimination/slides.html:1753: "Nielsen and Chuang, … §2.2.4 with Box 2.3 (non-orthogonal states cannot be distinguished; it uses the general measurements of their §2.2.3 …) and Box 12.1 (no-cloning)"**
  - status: confirmed
  - source: N&C OCR text: "2.2.3 Quantum measurement 84", "2.2.4 Distinguishing quantum states 86", "Box 2.3: Proof that non-orthogonal states can't be reliably distinguished" (inside §2.2.4), "Box 12.1: The no-cloning theorem" (p. 532 per "Box 12.1 on page 532").

- **units/05-no-cloning-discrimination/slides.html:346–349: "N. Herbert, "FLASH — a superluminal communicator …", Found. Phys. 12, 1171 (1982). W. K. Wootters and W. H. Zurek, Nature 299, 802 (1982). D. Dieks, Phys. Lett. A 92, 271 (1982). A. Peres, "How the no-cloning theorem got its name", Fortschr. Phys. 51, 458 (2003)."** (also :19, :108, :218, :328, :427, :1753, GLOSSARY.org:15, :49; unit 22 slides.html:175)
  - status: confirmed
  - source: Crossref 10.1007/bf00729622 (Herbert, Found. Phys. 12, 1171–1179, 1982); 10.1038/299802a0 (Wootters, Zurek, "A single quantum cannot be cloned", Nature 299, 802–803, 1982); 10.1016/0375-9601(82)90084-6 (Dieks, "Communication by EPR devices", PLA 92, 271, 1982); 10.1002/prop.200310062 (Peres, Fortschr. Phys. 51, 458–461, 2003).

- **units/05-no-cloning-discrimination/slides.html:328, :350–356: "Nick Herbert's FLASH goes to referees in 1981 … One referee, Asher Peres, recommended publication knowing it was wrong" / "The other referee, GianCarlo Ghirardi, recommended rejection … Peres received the manuscript early in 1981"**
  - status: confirmed
  - source: arxiv.org/pdf/quant-ph/0205076 (Peres): "I was the referee who approved the publication of Nick Herbert's FLASH paper, knowing perfectly well that it was wrong"; "Early in 1981, the editor of Foundations of Physics asked me to be a referee"; "There was another referee, GianCarlo Ghirardi, who recommended to reject Herbert's paper. His anonymous referee's report contained an argument which was a special case of the theorem".

- **units/05-no-cloning-discrimination/slides.html:353–354: "G. C. Ghirardi, "Entanglement, nonlocality, superluminal signaling and cloning", arXiv:1305.2305, 2013"**
  - status: confirmed
  - source: arxiv.org/abs/1305.2305: title as quoted, author Ghirardi, dated 2013/05/10; abstract: the no-cloning theorem "has been proved, for the first time, by the author … in his referee's report to Herbert's paper".

- **units/05-no-cloning-discrimination/slides.html:357–359: "J. L. Park, "The concept of transition in quantum mechanics", Found. Phys. 1, 23 (1970) … J. Ortigoso ("Twelve years before the quantum no-cloning theorem", Am. J. Phys. 86, 201, 2018)"**
  - status: confirmed
  - source: Crossref 10.1007/bf00708652 (Park, Found. Phys. 1, 23–33, 1970); 10.1119/1.5021356 (Ortigoso, Am. J. Phys. 86, 201–205, 2018).

- **units/05-no-cloning-discrimination/slides.html:315–316: "P. W. Milonni and M. L. Hardies, "Photons cannot always be replicated", Phys. Lett. A 92, 321 (1982), and L. Mandel, Nature 304, 188 (1983)"** (also :283 "1982–83", :1678, GLOSSARY.org:37)
  - status: confirmed
  - source: Crossref 10.1016/0375-9601(82)90899-4 (Milonni, Hardies, PLA 92, 321–322, 1982); 10.1038/304188a0 (Mandel, "Is a photon amplifier always polarization dependent?", Nature 304, 188, 1983).

- **units/05-no-cloning-discrimination/slides.html:280, :311: "stimulated emission (Einstein 1917, cited)"** (also GLOSSARY.org:28)
  - status: confirmed (via Wikipedia)
  - source: en.wikipedia.org/wiki/Stimulated_emission: "The key work was his 1917 paper", which introduced spontaneous and stimulated emission, "In his 1917 derivation of Planck's law". (Crossref query for Phys. Z. 1917 returned only reprints.)

- **units/05-no-cloning-discrimination/slides.html:226, :268: "Relativity (Einstein 1905, cited …)"** (also unit 06 slides.html:199, :241–242 "A. Einstein, Annalen der Physik 17, 891 (1905)")
  - status: confirmed
  - source: Crossref 10.1002/andp.19053221004 ("Zur Elektrodynamik bewegter Körper", Annalen der Physik, pp. 891–921, 1905) and 10.1002/andp.2005517s113, whose title carries the classic locator "[AdP 17, 891 (1905)]".

- **units/05-no-cloning-discrimination/slides.html:633: "(Duan and Guo, Phys. Rev. Lett. 80, 4999, 1998, cited)"** (also GLOSSARY.org:61)
  - status: confirmed
  - source: Crossref 10.1103/physrevlett.80.4999: "Probabilistic Cloning and Identification of Linearly Independent Quantum States", PRL 80, 4999–5002, 1998.

- **units/05-no-cloning-discrimination/slides.html:1043: "C. W. Helstrom, Quantum Detection and Estimation Theory (Academic Press, 1976)"** (also :1014, GLOSSARY.org:85, problems.html:462)
  - status: confirmed
  - source: openlibrary.org search: "Quantum detection and estimation theory | Carl W. Helstrom | 1976 | Academic Press".

- **units/05-no-cloning-discrimination/slides.html:1499–1500: "I. D. Ivanovic, Phys. Lett. A 123, 257 (1987); D. Dieks, Phys. Lett. A 126, 303 (1988); A. Peres, Phys. Lett. A 128, 19 (1988)"** (also :1472, GLOSSARY.org:94)
  - status: confirmed
  - source: Crossref 10.1016/0375-9601(87)90222-2 (Ivanovic, "How to differentiate between non-orthogonal states", PLA 123, 257, 1987); 10.1016/0375-9601(88)90840-7 (Dieks, "Overlap and distinguishability of quantum states", PLA 126, 303, 1988); 10.1016/0375-9601(88)91034-1 (Peres, PLA 128, 19, 1988).

- **units/05-no-cloning-discrimination/slides.html:1555–1558: "V. Bužek and M. Hillery, "Quantum copying: beyond the no-cloning theorem", Phys. Rev. A 54, 1844 (1996) … fidelity 5/6 … N. Gisin and S. Massar, Phys. Rev. Lett. 79, 2153 (1997), and D. Bruß et al., Phys. Rev. A 57, 2368 (1998), prove no symmetric universal 1→2 cloner beats 5/6"** (also :1526–1527, GLOSSARY.org:103–104, problems.html:510)
  - status: confirmed
  - source: Crossref 10.1103/physreva.54.1844, 10.1103/physrevlett.79.2153, 10.1103/physreva.57.2368 (Bruß, DiVincenzo, Ekert, Fuchs, Macchiavello, Smolin, "Optimal universal and state-dependent quantum cloning"). arxiv.org/pdf/quant-ph/9607018 (Bužek–Hillery): "value 5/6 for all input states". arxiv.org/pdf/quant-ph/9705046 (Gisin–Massar): "fidelity F ≤ (2M + 1)/3M. This bound is saturated … proving that it is optimal" (M = 2 gives 5/6).

- **units/05-no-cloning-discrimination/slides.html:1565–1566: "(Massar and Popescu 1995, cited …)" — measure-and-prepare average 2/3** (also problems.html:536)
  - status: confirmed
  - source: Crossref 10.1103/physrevlett.74.1259 (Massar, Popescu, PRL 74, 1259, 1995). Gisin–Massar (quant-ph/9705046): "(N+1)/(N+2) … the optimal fidelity achievable by carrying out a measurement on N identical qubits [9]", [9] = "S. Massar and S. Popescu, Phys. Rev. Lett. 74, 1259, 1995" (N = 1 gives 2/3).

- **units/05-no-cloning-discrimination/slides.html:1753: "Barnett and Croke, "Quantum state discrimination", Adv. Opt. Photon. 1, 238 (2009), §§2–3 — … it uses general measurements throughout"**
  - status: confirmed
  - source: Crossref 10.1364/aop.1.000238 (AOP 1, 238, 2009); arxiv.org/pdf/0810.1970: sections "2. Generalised measurements", "3. State Discrimination - Theory", "4. State Discrimination - Experiments".

- **units/05-no-cloning-discrimination/problems.html:230: "(Pati and Braunstein, Nature 404, 164, 2000)"**
  - status: confirmed
  - source: Crossref 10.1038/35004532: Pati, Braunstein, "Impossibility of deleting an unknown quantum state", Nature 404, 164–165, 2000.

---------------------------------------------------------------------------
## Unit 06 — 06-bell-chsh

- **units/06-bell-chsh/slides.html:1653–1654: "The settings, as Bloch angles from z: 0 and π/2 for A; −3π/4 − ε and 3π/4 + ε for B, with ε = 0.026π."**
  - status: confirmed
  - source: arxiv.org/pdf/1508.05949v1 (Hensen et al.): "A numerical optimization yields the following angles for the readout bases with respect to Z: 0 (for a = 0), +1/2π (for a = 1), −3/4π − ε (for b = 0), 3/4π + ε (for b = 1), with ε = 0.026π."

- **units/06-bell-chsh/slides.html:1650–1653: "B. Hensen et al., "Loophole-free Bell inequality violation using electron spins separated by 1.3 kilometres", Nature 526, 682 (2015) … spins 1280 m apart; 245 trials in 220 hours; S = 2.42; a standard deviation 0.20 under a Gaussian, independent-trials analysis; and the game won k = 196 times out of 245"** (also :18, :248, :1604, :1634–1636, :1672–1675, :1700–1714, :1895, :1912, :1926, problems.html:530, :557, :571–580, GLOSSARY.org:15)
  - status: confirmed
  - source: Crossref 10.1038/nature15759 (title exactly as quoted, Nature 526, 682–686, 2015). arXiv 1508.05949v1: "We perform 245 trials … find S = 2.42 ± 0.20"; "The separation of the spins by 1280 m defines a 4.27 µs time window"; "245 trials … during a total measurement time of 220 hours"; conventional analysis "yields a standard deviation of 0.20 on S … rejected with a p-value of 0.019"; complete analysis "allows for arbitrary memory, takes the partial predictability of the random input bits into account … p-value of 0.039"; "we find k = 196".

- **units/06-bell-chsh/slides.html:246–248: "from the start of the random choice of setting to the start of the readout took at most 480 ns, and the readout itself 3.7 μs, inside the window (Hensen et al., Nature 526, 682 (2015), cited)"** (also :202, :1621 "1280 m: light needs 4.27 μs")
  - status: confirmed
  - source: arXiv 1508.05949v1: "a maximum time from the start of the basis choice to the start of the readout of 480 ns. We choose the readout duration to be 3.7 µs".

- **units/06-bell-chsh/slides.html:1700–1701: "Delft quotes 0.019 for its "conventional" analysis"** and **:1710–1711 "Delft's published analysis also allowed for slight predictability of its random number generators"**
  - status: confirmed
  - source: as above ("conventional" … "p-value of 0.019"; complete analysis "takes the partial predictability of the random input bits into account").

- **units/06-bell-chsh/slides.html:1639: "Vienna and NIST (Giustina et al., Shalm et al., Phys. Rev. Lett. 115, 250401 and 250402) … (NIST: 2.3×10⁻⁷)"** (also :1659–1660)
  - status: confirmed
  - source: Crossref 10.1103/physrevlett.115.250401, …250402 (both 2015). arxiv.org/abs/1511.03189 (Shalm): "Accounting for this predictability, our smallest adjusted p-value is 2.3 × 10⁻⁷."

- **units/06-bell-chsh/slides.html:1587–1588: "detection efficiency above 2(√2 − 1) ≈ 0.8284 (A. Garg and N. D. Mermin, Phys. Rev. D 35, 3831 (1987), cited)"**
  - status: confirmed (to the abstract's precision)
  - source: Crossref 10.1103/physrevd.35.3831 (PRD 35, 3831–3835, 1987); journals.aps.org/prd/abstract/10.1103/PhysRevD.35.3831: "do not violate this condition unless the quantum efficiency of the detectors exceeds 83%." The exact form 2(√2 − 1) is not in the abstract.

- **units/06-bell-chsh/slides.html:1491–1492, :1531–1533, :1537–1539: Freedman and Clauser PRL 28, 938 (1972); Aspect, Dalibard, Roger PRL 49, 1804 (1982), "Experimental test of Bell's inequalities using time-varying analyzers"; Weihs et al. PRL 81, 5039 (1998)**
  - status: confirmed
  - source: Crossref 10.1103/physrevlett.28.938, 10.1103/physrevlett.49.1804 (title as quoted), 10.1103/physrevlett.81.5039; en.wikipedia.org/wiki/Bell_test gives the same volume/pages.

- **units/06-bell-chsh/slides.html:311, :551: "J. S. Bell, "On the Einstein Podolsky Rosen paradox", Physics 1, 195 (1964)"; CHSH "Phys. Rev. Lett. 23, 880 (1969)"** (also :503, GLOSSARY.org:67, problems.html:152, :188)
  - status: confirmed
  - source: Crossref as in unit 03.

- **units/06-bell-chsh/slides.html:1247–1248: "B. S. Cirel'son (Tsirelson), "Quantum generalizations of Bell's inequality", Lett. Math. Phys. 4, 93 (1980)"** (also GLOSSARY.org:104)
  - status: confirmed
  - source: Crossref 10.1007/bf00417500.

- **units/06-bell-chsh/slides.html:1748, :1764: "S. Popescu and D. Rohrlich, "Quantum nonlocality as an axiom", Found. Phys. 24, 379 (1994)"** (also GLOSSARY.org:129)
  - status: confirmed
  - source: Crossref 10.1007/bf02058098.

- **units/06-bell-chsh/slides.html:1808, :1820–1824: Pawłowski et al., Nature 461, 1101 (2009); Navascués and Wunderlich, "A glance beyond the quantum model", Proc. R. Soc. A 466, 881 (2010); "W. van Dam (2005): with PR boxes, two parties could compute any Boolean function … with one bit of communication"** (also GLOSSARY.org:134)
  - status: confirmed
  - source: Crossref 10.1038/nature08400, 10.1098/rspa.2009.0453; arxiv.org/abs/quant-ph/0501159 (van Dam, dated 2005-01-27): "all distributed computations can be performed with a trivial amount of communication, i.e. with one bit."

- **units/06-bell-chsh/slides.html:1837, :1840, :1871–1872: Renou et al., Nature 600, 625 (2021); "Tested in 2022 (Phys. Rev. Lett. 128, 040402 and 040403), one with photons, one with superconducting qubits"**
  - status: confirmed
  - source: Crossref 10.1038/s41586-021-04160-4 (title and authors as quoted); 10.1103/physrevlett.128.040402 ("Testing Real Quantum Theory in an Optical Quantum Network"); 10.1103/physrevlett.128.040403 (Chen et al.); arxiv.org/abs/2103.08123: "Here, using superconducting qubits …".

- **units/06-bell-chsh/problems.html:462–463: "(Werner, Phys. Rev. A 40, 4277 (1989), cited)"**
  - status: confirmed (venue/year)
  - source: Crossref 10.1103/physreva.40.4277.

- **units/06-bell-chsh/slides.html:105–106: "Cleve, Høyer, Toner and Watrous (2004) made nonlocal games a subject in complexity theory"**
  - status: confirmed (paper/year)
  - source: Crossref 10.1109/ccc.2004.1313847: "Consequences and limits of nonlocal strategies", Proc. 19th IEEE Conf. on Computational Complexity, 2004.

- **units/06-bell-chsh/slides.html:647: "(J. S. Bell, "The theory of local beables", 1976)"**
  - status: unconfirmed
  - already tried: Crossref bibliographic query (returns only the 1995 and 2001 World Scientific reprints, 10.1142/9789812795854_0078 and 10.1142/9789812386540_0008, neither showing the 1976 original).

- **units/06-bell-chsh/slides.html:1951, :1961–1964: "Nielsen and Chuang, … §2.6 ("EPR and the Bell inequality"), all of it. Preskill, Lecture Notes for Physics 219, chapter 4, the sections on Bell inequalities and Tsirelson's bound … chapter 4 treats Bell inequalities in the language of games"**
  - status: confirmed
  - source: N&C contents "2.6 EPR and the Bell inequality 111". preskill.caltech.edu/ph229/ lists "Chapter 4. Quantum Entanglement"; ph229/notes/chap4_01.pdf headings "4.2 The Bell inequality", "4.3.1 CHSH inequality", "4.3.2 Maximal violation", "4.3.3 Quantum strategies outperform classical strategies"; Tsirelson named 5 times.

---------------------------------------------------------------------------
## Unit 10 — 10-circuits (gate counts)

- **units/10-circuits/slides.html:1389–1390: "(cited: Shende, Markov and Bullock, Phys. Rev. A 69, 062321, 2004, who classify two-qubit gates by the CNOTs they need)"**
  - status: fixed
  - source: arxiv.org/pdf/quant-ph/0308033v3 = PRA 69, 062321 (Crossref 10.1103/physreva.69.062321, "Minimal universal two-qubit controlled-NOT-based circuits", Shende, Markov, Bullock). Its sections are gate libraries, lower bounds, invariants, technical lemmata, minimal two-qubit circuits, conclusions; it gives the generic 3-CNOT bound and 3-CNOT circuits, not a classification by CNOT count. The classification is in arxiv.org/pdf/quant-ph/0308045v3 = Crossref 10.1103/physreva.70.012310, Shende, Bullock, Markov, "Recognizing small-circuit structure in two-qubit operators", PRA 70, 012310 (2004), §III "Optimizing CNOT-count": "We now characterize which two-qubit operators admit a quantum circuit using only m CNOT gates", with Props III.1–III.3 for m = 0, 1, 2.
  - change: "Shende, Markov and Bullock, Phys. Rev. A 69, 062321, 2004" -> "Shende, Bullock and Markov, Phys. Rev. A 70, 012310, 2004" in units/10-circuits/slides.html only (grep of the course: no other occurrence of this attribution; the other 062321 citations are for different claims, below). _site/units/10-circuits/slides.html still has the old text (build output, not edited).

- **units/10-circuits/slides.html:1546–1548: "The best known constructions use about (23/48)4ⁿ CNOTs (Shende, Bullock and Markov, "Synthesis of quantum-logic circuits", IEEE Trans. CAD 25, 1000, 2006; cited), and at least ⌈¼(4ⁿ − 3n − 1)⌉ CNOTs are necessary for some unitaries (Shende, Markov and Bullock 2004; cited)"**
  - status: confirmed
  - source: Crossref 10.1109/tcad.2005.855930 (IEEE TCAD 25, 1000–1010, 2006, title as quoted). arxiv.org/pdf/quant-ph/0406176v5: "no more than (23/48) × 4ⁿ − (3/2) × 2ⁿ + 4/3" CNOTs; lower bound "⌈¼(4ⁿ − 3n − 1)⌉ CNOTs [27]". quant-ph/0308033 (= PRA 69, 062321, 2004), Proposition III.1: "… ⌈¼(4ⁿ − 3n − 1)⌉ CNOT gates."

- **units/10-circuits/slides.html:1545–1546: "Total O(n² 4ⁿ) (Nielsen and Chuang §4.5.2 get the same)"**
  - status: confirmed
  - source: N&C §4.5.2 text: "an arbitrary unitary operation on n qubits can be implemented using a circuit containing O(n² 4ⁿ) single qubit and CNOT gates."

- **units/10-circuits/slides.html:1332–1333: "Barenco et al. give O(k²) gates without work qubits, and O(k) with a single one"**
  - status: confirmed
  - source: arxiv.org/pdf/quant-ph/9503016 (= PRA 52, 3457, 1995 per Crossref 10.1103/physreva.52.3457): "Corollary 7.6: For any unitary U, a ∧n−1(U) gate can be simulated in terms of Θ(n²) basic operations" (n-bit network, no extra bit); "Corollary 7.12: … a ∧n−2(U) gate can be simulated by Θ(n) basic operations in n-bit network, where the initial value of one bit is fixed and incurs no net change."

- **units/10-circuits/slides.html:1731: "a three-CNOT version with real entries is Margolus's gate (discussed in Barenco et al. 1995; cited)"**
  - status: confirmed (the gate is discussed; the name is not)
  - source: quant-ph/9503016 §6.2: "a more efficient simulation of a gate congruent to ∧2(σx) modulo phase shifts" — three CNOTs with A = Ry(π/4), "differ at most in the phases of their amplitudes, which are all ±1". The paper does not call it "Margolus's gate".

- **units/10-circuits/problems.html:106–107: "Two CNOTs are not enough either, and three are optimal … (cited: G. Vidal and C. M. Dawson, Phys. Rev. A 69, 010301, 2004; and Shende, Markov and Bullock, Phys. Rev. A 69, 062321, 2004)"** (context: SWAP)
  - status: confirmed for Vidal–Dawson; unconfirmed for SMB as support for the SWAP claim (left as is)
  - source: Crossref 10.1103/physreva.69.010301 (Vidal, Dawson, PRA 69, 010301, 2004). arxiv.org/pdf/quant-ph/0307177: "three CNOT gates are required in order to perform a generic two-qubit gate … we characterize the subset of two-qubit gates that require only two CNOT gates". quant-ph/0308033 (062321) shows only that generic operators need three; it does not single out SWAP. quant-ph/0308045 attributes "the swap gate requires three CNOTs" to Vatan–Williams [4]. Not changed: the pair still supports the sentence through Vidal–Dawson.

- **units/10-circuits/problems.html:654–655: "optimal circuits for a generic two-qubit gate use three CNOTs … (cited: Vatan and Williams, Phys. Rev. A 69, 032315, 2004)"** (also slides.html:1956)
  - status: confirmed
  - source: Crossref 10.1103/physreva.69.032315 ("Optimal quantum circuits for general two-qubit gates", 2004); arxiv.org/pdf/quant-ph/0308006v3: "an optimal quantum circuit for a general two-qubit gate that requires at most 3 CNOT gates and 15 elementary one-qubit gates … these constructions are optimal".

- **units/10-circuits/slides.html:1912, :1921–1923: "Seven is the least T-count for an exact Toffoli without work qubits (cited)" / "D. Gosset, V. Kliuchnikov, M. Mosca and V. Russo, "An algorithm for the T-count", Quantum Inf. Comput. 14, 1261 (2014)"**
  - status: confirmed
  - source: Crossref 10.26421/qic14.15-16-1 (QIC 14, 1261–1276, 2014); arxiv.org/pdf/1308.4134: "the Toffoli or the Fredkin gate requires at least 7 T gates"; §5.3 "The T-count of Toffoli and Fredkin is 7".

- **units/10-circuits/slides.html:1923–1924: "four T's per Toffoli in some constructions (cited: Jones, Phys. Rev. A 87, 022328, 2013)"**
  - status: confirmed
  - source: Crossref 10.1103/physreva.87.022328 ("Low-overhead constructions for the fault-tolerant Toffoli gate", 2013); arxiv.org/pdf/1212.5069: "plus only four T = exp(iπσz/8) gates, whereas conventional circuits require seven T gates"; Gosset et al.: "Jones has shown how to perform a Toffoli gate using these additional ingredients and only four T gates [7]".

- **units/10-circuits/slides.html:1038–1040: "Phys. Rev. A 52, 3457 (1995). The two-level route is the one Nielsen and Chuang give in §4.5"** (also :1034, :1516, GLOSSARY.org:100)
  - status: confirmed
  - source: Crossref 10.1103/physreva.52.3457 (Barenco … Weinfurter, "Elementary gates for quantum computation", PRA 52, 3457–3467, 1995). N&C contents: "4.5 Universal quantum gates 188 / 4.5.1 Two-level unitary gates are universal 189".

- **units/10-circuits/slides.html:1602, :1627: "After Nielsen and Chuang, Fig. 4.9" / "(and is in Nielsen and Chuang §4.3)"**
  - status: confirmed
  - source: N&C OCR: "Figure 4.9. Implementation of the Toffoli gate using Hadamard, phase, controlled-NOT and π/8 gates", located after the §4.3 "Controlled operations" heading and before §4.4 "Measurement".

- **units/10-circuits/slides.html:1948, :1958: "Nielsen and Chuang, … §3.2.5 (reversible computation), §4.2–4.5 (…); skip §4.5.3 and §4.5.5 (…) and §4.7 (simulation, unit 19); §4.5.4 is section 5's count made for approximation … their Corollary 4.2 is the ABC construction"**
  - status: confirmed
  - source: N&C contents: "3.2.5 Energy and computation 153" (its text discusses reversible computation; 33 occurrences of "reversib" in the section), "4.2 Single qubit operations", "4.3 Controlled operations", "4.4 Measurement", "4.5 Universal quantum gates", "4.5.3 A discrete set of universal operations", "4.5.4 Approximating arbitrary unitary gates is generically hard", "4.5.5 Quantum computational complexity", "4.7 Simulation of quantum systems"; "Corollary 4.2: … there exist unitary operators A, B, C on a single qubit such that ABC = I and U = e^{iα}AXBXC".

- **units/10-circuits/slides.html:1948: "Preskill, Lecture Notes for Physics 219, chapter 6, the sections on the circuit model and universality"**
  - status: confirmed (edition-dependent, see note)
  - source: preskill.caltech.edu/ph229/: the old notes ph229/notes/chap6.pdf are "Chapter 6 Quantum Computation" with "6.2 Quantum Circuits" and "6.2.3 Universal quantum gates". The same page also says "What is now Chapter 5 (also updated July 2015) is a new version of what was previously the first half of Chapter 6"; in the current notes (ph219/chap5_15.pdf) the material is "Chapter 5 … 5.3 Quantum Circuits … 5.4 Universal quantum gates", and Chapter 6 is now "Quantum Algorithms". So "chapter 6" is right for the 1998 notes and wrong for the current ones. Not changed, since both are hosted; the version should be named.

---------------------------------------------------------------------------
## Unit 16 — 16-shor

- **units/16-shor/slides.html:1026: "Shor's words (1994): round c/q "to the nearest fraction having a denominator smaller than n. This fraction can be found in polynomial time by using a continued fraction expansion of c/q, which finds all the best approximations of c/q by fractions.""**
  - status: fixed
  - source: Shor, "Algorithms for Quantum Computation: Discrete Log and Factoring", DIMACS TR 94-37, dated "June 1994", "extended abstract" (archive.dimacs.rutgers.edu/…/1994/94-37.ps, page rendered and read): "we can obtain r by rounding c/q to the nearest fraction with a denominator of at most n. Because q ≥ 2n², there is at most one such fraction. This fraction can be found in polynomial time by using a continued fraction expansion of c/q, which finds all the best approximations of c/q by fractions." The quoted wording is instead word for word in the expanded version, arxiv.org/pdf/quant-ph/9508027v2: "rounding c/q to the nearest fraction having a denominator smaller than n. This fraction can be found in polynomial time by using a continued fraction expansion of c/q, which finds all the best approximations of c/q by fractions". Crossref 10.1137/s0097539795293172 (SIAM J. Comput. 26, 1484–1509, 1997) is the published form of that version.
  - change: "(1994)" -> "(1997)" in units/16-shor/slides.html only (no other occurrence; _site copy not edited).
  - caveat: the FOCS proceedings text itself (10.1109/SFCS.1994.365700, pp. 124–134) was not reached (IEEE Xplore page empty; scribd.com/document/700583906 is not it). The 1994 text I reached is the June 1994 DIMACS extended abstract, not the camera-ready FOCS paper.

- **units/16-shor/slides.html:633: "Shor's 1994 paper chose q = 2^t in exactly this range"** (range n² ≤ 2^t < 2n², slide 628)
  - status: fixed
  - source: DIMACS TR 94-37 (June 1994), §7: "First, we find a smooth q with 2n² ≤ q < 4n²" (a smooth number, not a power of 2, in a different range). arXiv quant-ph/9508027v2: "First, we find q, the power of 2 with n² ≤ q < 2n²".
  - change: "Shor's 1994 paper" -> "Shor's 1997 paper" in units/16-shor/slides.html only. Same caveat as above.

- **units/16-shor/slides.html:1007: "the nearest-fraction rule (Shor 1994)"**
  - status: confirmed (the rule; its bound wording differs)
  - source: DIMACS TR 94-37 (June 1994): "rounding c/q to the nearest fraction with a denominator of at most n". The 1994 bound is "at most n", the slide's "q < N"; for an order r < n the two agree.

- **units/16-shor/slides.html:1018: "(cited: Khinchin, Continued Fractions, §6)"** (also GLOSSARY.org:110 "(Khinchin, cited)")
  - status: confirmed
  - source: Khinchin, Continued Fractions (Univ. of Chicago Press, 1964), archive.org/details/khinchin-continued-fractions: Chapter II, "6. Convergents as best approximations"; "THEOREM 15. Every best approximation of a number α is a convergent or an intermediate fraction of the continued fraction representing that number." Intermediate fractions are defined in §3 (Khinchin's term for semiconvergents).

- **units/16-shor/slides.html:139–140: "Rivest, Shamir and Adleman, Comm. ACM 21, 120 (1978) … Shor's paper (FOCS 1994; SIAM J. Comput. 26, 1484, 1997)"**
  - status: confirmed
  - source: Crossref 10.1109/sfcs.1994.365700 (Proc. 35th FOCS, 124–134); 10.1137/s0097539795293172 (SIAM J. Comput. 26, 1484, 1997); the DIMACS TR's bibliography gives RSA as "Communications ACM Vol. 21, No. 2, pp. 120–126 (1978)".

- **units/16-shor/slides.html:554: "This is how Shor described the algorithm in 1994"** (the comb/period picture)
  - status: confirmed
  - source: DIMACS TR 94-37 §7: computes x^a (mod n), Fourier transforms a → c, then "Writing a = br + k" sums over b, i.e. the comb with spacing r.

- **units/16-shor/slides.html:1165–1166: "the paper appeared at FOCS that November. Simon's paper, which he had read, appeared at the same conference"**
  - status: confirmed (the dates and venue; "which he had read" not checked)
  - source: arXiv quant-ph/9508027 comments "Santa Fe, NM, Nov. 20--22, 1994"; Crossref 10.1109/sfcs.1994.365701: Simon, "On the power of quantum computation", Proc. 35th FOCS, 116–123. The DIMACS TR cites "[Sim] D. Simon, On the power of quantum computation, manuscript (1993)".

---------------------------------------------------------------------------
## Unit 22 — 22-first-codes

- **units/22-first-codes/slides.html:105–106: "an NMR experiment on three nuclear spins in a molecule (Cory et al., Phys. Rev. Lett. 81, 2152, 1998)"** (context: "It [the three-qubit bit-flip code] is also the code the first experiments ran")
  - status: confirmed (venue/year); content discrepancy reported, not fixed
  - source: Crossref 10.1103/physrevlett.81.2152 ("Experimental Quantum Error Correction", Cory et al., PRL 81, 2152–2155, 1998). arxiv.org/abs/quant-ph/9802018: "The experiment implemented the 3-bit code for phase errors in liquid state NMR." The deck's running example is the bit-flip code, so "the code the first experiments ran" is true only up to the Hadamard change of basis. A fix would mean rewording prose, which is out of scope here.

- **units/22-first-codes/slides.html:106–107: "a row of nine superconducting qubits running a repetition code against bit flips only (Kelly et al., Nature 519, 66, 2015)"**
  - status: confirmed
  - source: Crossref 10.1038/nature14270 (Nature 519, 66–69, 2015); arxiv.org/abs/1411.7403: "we report the protection of classical states from environmental bit-flip errors … We use a linear array of nine qubits".

- **units/22-first-codes/slides.html:162–164: "Von Neumann showed in 1956 … ("Probabilistic logics and the synthesis of reliable organisms from unreliable components", Automata Studies, 1956)"**
  - status: confirmed
  - source: Crossref 10.1515/9781400882618-003: von Neumann, title as quoted, Automata Studies (AM-34), pp. 43–98, 1956.

- **units/22-first-codes/slides.html:165–166: "(one published version: W. G. Unruh, Phys. Rev. A 51, 992, 1995). Shor's nine-qubit code, later the same year"**
  - status: confirmed
  - source: Crossref 10.1103/physreva.51.992 (Unruh, "Maintaining coherence in quantum computers", PRA 51, 992, Feb 1995); 10.1103/physreva.52.r2493 (Shor, Oct 1995).

- **units/22-first-codes/slides.html:890–891: "P. W. Shor, "Scheme for reducing decoherence in quantum computer memory", Phys. Rev. A 52, R2493 (1995): the first quantum error-correcting code, a year after his factoring algorithm"** (also :820, GLOSSARY.org:73)
  - status: confirmed
  - source: Crossref 10.1103/physreva.52.r2493 (title as quoted, PRA 52, R2493–R2496, 1995). N&C ch. 10 history: "Quantum error-correction was independently discovered by Shor[Sho95], who found the nine qubit code presented in Section 10.2".

- **units/22-first-codes/slides.html:891–892: "A. M. Steane found a seven-qubit code independently soon after (Phys. Rev. Lett. 77, 793, 1996)"**
  - status: unconfirmed (venue/year and "independently" confirmed; that this paper contains the seven-qubit code not)
  - source: Crossref 10.1103/physrevlett.77.793 (Steane, "Error Correcting Codes in Quantum Theory", PRL 77, 793–797, 1996). N&C history: QEC "independently discovered … by Steane[Ste96a]", [Ste96a] = PRL 77:793.
  - already tried: journals.aps.org/prl/abstract/10.1103/PhysRevLett.77.793 (abstract does not mention seven qubits); arXiv API search (paper not on arXiv); en.wikipedia.org/wiki/Steane_code cites a different paper for the code: Steane, "Multiple-particle interference and quantum error correction", Proc. R. Soc. Lond. A 452, 2551 (1996), quant-ph/9601029. Unresolved without the PRL full text.

- **units/22-first-codes/slides.html:1062–1063: "E. Knill and R. Laflamme, "Theory of quantum error-correcting codes", Phys. Rev. A 55, 900 (1997). Bennett, DiVincenzo, Smolin and Wootters found equivalent conditions at the same time (Phys. Rev. A 54, 3824, 1996)."** (also :1032, GLOSSARY.org:95)
  - status: confirmed
  - source: Crossref 10.1103/physreva.55.900 (title as quoted, 1997); 10.1103/physreva.54.3824 (BDSW, "Mixed-state entanglement and quantum error correction", PRA 54, 3824, 1996). N&C history: "The quantum error-correction conditions were proved independently by Bennett, DiVincenzo, Smolin and Wootters[BDSW96], and by Knill and Laflamme[KL97]".

- **units/22-first-codes/slides.html:1745–1747: "R. W. Hamming, "Error detecting and error correcting codes", Bell System Technical Journal 29, 147 (1950), written because the relay computers at Bell Labs stopped on detected errors over weekends with nobody there to restart them."** (also :1667, GLOSSARY.org:136)
  - status: confirmed (reference); anecdote only loosely supported
  - source: Crossref 10.1002/j.1538-7305.1950.tb00463.x (BSTJ 29, 147–160, 1950). en.wikipedia.org/wiki/Hamming_code (a pointer only): "During after-hours periods and on weekends, when there were no operators, the machine simply moved on to the next job"; Hamming "grew increasingly frustrated with having to restart his programs from scratch due to detected errors". The deck says the machines "stopped"; Wikipedia says they skipped to the next job. Prose, not changed; reported.

- **units/22-first-codes/slides.html:1900: "Nielsen and Chuang, … §10.1 (the three-qubit codes), §10.2 (Shor's code), §10.3 (the theory: their Theorem 10.1 is Knill–Laflamme, Theorem 10.2 the discretisation), and §10.4.1 (classical linear codes). Stop before §10.4.2 (CSS codes, unit 23); §10.5 is unit 23 and §10.6 unit 24."**
  - status: confirmed
  - source: N&C contents: "10.1 Introduction / 10.1.1 The three qubit bit flip code / 10.1.2 Three qubit phase flip code / 10.2 The Shor code / 10.3 Theory of quantum error-correction / 10.3.1 Discretization of the errors / 10.4.1 Classical linear codes / 10.4.2 Calderbank-Shor-Steane codes / 10.5 Stabilizer codes / 10.6 Fault-tolerant quantum computation"; "Theorem 10.1: (Quantum error-correction conditions)"; "Theorem 10.2" appears in §10.3.1.

- **units/22-first-codes/slides.html:1900: "Preskill, Lecture Notes for Physics 219, chapter 7, the sections before stabiliser codes"**
  - status: confirmed
  - source: preskill.caltech.edu/ph229/: "Chapter 7. Quantum Error Correction"; ph219/chap7_26_6A.pdf contents 7.1 … 7.9, then "7.10 Stabilizer Codes".

---------------------------------------------------------------------------
## Counts

76 entries: confirmed 67 · fixed 3 · unconfirmed 6 (Malus 1809; von Neumann content; Whitney "introduced"/Bourbaki; Harris Lecture 2; Bell 1976; Steane PRL seven-qubit). One confirmed entry is partly unconfirmed: 10/problems.html:106–107, where SMB 062321 does not single out SWAP.

No sheet-check was run (no problems.html was edited). The /tmp/sheet-check-94xx–95xx directories present on the machine are not from this audit and were left alone.


# Citation audit B — units 24, 25, 26 (2026-10-28)

Tools used: arXiv API (`export.arxiv.org/api/query?id_list=…`), arXiv PDFs read through `pdftotext`
(full text, for section titles and figures), Crossref API (`api.crossref.org/works/<DOI>`) for
journal/volume/page/year, the APS abstract page, nature.com (article HTML), preskill.caltech.edu,
blog.google, dagstuhl (via search). Line numbers are those after the edits.

## Unit 24 — fault tolerance

- **units/24-fault-tolerance/slides.html:2161–2163: "Λ = 2.14±0.02; at d = 7, ε7 = 0.143%±0.003% per cycle; … factor 2.4±0.3 … Nature 638, 920 (2025); arXiv:2408.13687 (2024)"** (also slides.html:20 template, GLOSSARY.org:151–158, problems.html:472)
  - status: confirmed
  - source: arXiv API abstract of 2408.13687: "suppressed by a factor of Λ = 2.14 ± 0.02 … 101-qubit distance-7 code with 0.143% ± 0.003% error per cycle … exceeding its best physical qubit's lifetime by a factor of 2.4 ± 0.3"; journal_ref "Nature 638 (2025) 920-926", DOI 10.1038/s41586-024-08449-y; title "Quantum error correction below the surface code threshold"; submitted 2024-08-24.
- **units/24-fault-tolerance/slides.html:2154: "Google Quantum AI's Willow chip: 105 superconducting qubits"**
  - status: confirmed
  - source: arXiv PDF 2408.13687 p.1–2: "We begin with results from our 105-qubit processor"; Fig. 1 caption "a distance-7 surface code on a 105-qubit processor". The name "Willow" is not in the paper; https://blog.google/technology/research/google-willow-quantum-chip/ : "With 105 qubits, Willow now has best-in-class performance", and links the Nature paper.
- **units/24-fault-tolerance/slides.html:996 and :1010: "Proved thresholds for concatenated Steane schemes are of order 10^-5 (Aliferis–Gottesman–Preskill)"**
  - status: confirmed
  - source: arXiv quant-ph/0504218 abstract: "Our lower bound on the threshold, epsilon_0 > 2.73 × 10^-5 for an adversarial independent stochastic noise model"; full text §8 is titled "Threshold estimate for the [[7,1,3]] code" (Steane's code). Order 10^-5 is correct.
- **units/24-fault-tolerance/slides.html:984: "Aliferis, Gottesman and Preskill (QIC 6, 97, 2006)"** (also :393, :821 "2006")
  - status: confirmed
  - source: arXiv API journal_ref for quant-ph/0504218: "Quant. Inf. Comput. 6 (2006) 97-165".
- **units/24-fault-tolerance/slides.html:984: "Aharonov and Ben-Or (STOC 1997; SIAM J. Comput. 38, 1207, 2008); Kitaev (Russ. Math. Surv. 52, 1191, 1997); Knill, Laflamme and Zurek (Science 279, 342, 1998)"**
  - status: confirmed
  - source: Crossref 10.1145/258533.258579 (STOC '97, pp. 176–188, 1997); 10.1137/S0097539799359385 (SIAM J. Comput. 38, 1207–1282, 2008); 10.1070/RM1997v052n06ABEH002155 (Russ. Math. Surveys 52, 1191, 1997); 10.1126/science.279.5349.342 (Science 279, 342, 1998).
- **units/24-fault-tolerance/slides.html:2338: "Gottesman, arXiv:0904.2557, sections 1–6"**
  - status: fixed
  - source: arXiv PDF 0904.2557 (Gottesman, "An Introduction to Quantum Error Correction and Fault-Tolerant Quantum Computation", 2009) has five numbered sections: 1 Background, 2 Basic properties and structure of QEC, 3 More quantum error-correcting codes, 4 Fault-tolerant gates, 5 Fault-tolerant circuits and the threshold theorem; then References. There is no section 6.
  - change: "sections 1–6" -> "sections 1–5"; units/24-fault-tolerance/slides.html only (grep of the course, CURRICULUM.html, build/syllabus.json, build/spec: no other occurrence; the generated copy in _site/ was not touched).
- **units/24-fault-tolerance/slides.html:1013–1014: Gottesman's survey title "An introduction to quantum error correction and fault-tolerant quantum computation" (arXiv:0904.2557)**
  - status: confirmed
  - source: arXiv API title as above.
- **units/24-fault-tolerance/slides.html:2338: "Fowler et al., PRA 86, 032324 (2012), sections I–V and its appendix on logical error rates"**
  - status: fixed
  - source: arXiv PDF 1208.0928 (JREF Phys. Rev. A 86, 032324 (2012)). Appendices are A Notation, B Z and X stabilizer circuits, C X-cut initialization, D Measuring an X-cut qubit, E Making a larger qubit, F One-cell move, G Multi-cell moves, H Single qubit braid, I Two-qubit braid, J Logical Hadamard, K Short qubits, L S and T distillation sub-circuits, M Estimating the time and size of a factoring circuit — none on logical error rates. The logical error rate is in Sect. VII "Error detection": "P_L ≅ 0.03 (p/p_th)^{d_e}" (Eq. 11), then "A. Statistical model for the logical error rate".
  - change: "sections I–V and its appendix on logical error rates" -> "sections I–V and section VII on logical error rates"; units/24-fault-tolerance/slides.html only. The notes at :2350 ("its sections on the lattice, the circuits and the logical error rate") already agree, unchanged.
- **units/24-fault-tolerance/slides.html:1013: "Preskill's lecture notes, chapter 7 … give the threshold argument in more detail than this deck"**
  - status: unconfirmed (the source contradicts it, but there is no correct locator to change it to, so the text was left alone; needs the author's decision)
  - source: https://preskill.caltech.edu/ph219/ lists "Chapter 7. Quantum Error Correction, 86 pages (March 2026)" and says "A typeset version of Chapter 8 (on fault-tolerant quantum computation) is not yet available". Chapter 7 itself (http://www.preskill.caltech.edu/ph219/chap7_26_6A.pdf; old version …/ph229/notes/chap7.pdf) has §7.17 Concatenated codes and §7.18.5 "Surface code accuracy threshold", but the old version says "Such fault-tolerant protocols will be developed in Chapter 8." So the concatenated fault-tolerance threshold argument this slide is about is not in chapter 7, and chapter 8 has no typeset version.
  - already tried: theory.caltech.edu/~preskill/ph229/ (404, certificate error), the ph219 course page, and both chapter 7 PDFs listed above.
- **units/24-fault-tolerance/slides.html:85: "Gidney and Ekerå, Quantum 5, 433, 2021" as an estimate that assumes p = 10^-3**
  - status: confirmed
  - source: Crossref 10.22331/q-2021-04-15-433 (Quantum 5, 433, 2021, "How to factor 2048 bit RSA integers in 8 hours using 20 million noisy qubits"); arXiv 1905.09749 abstract: "a characteristic physical gate error rate of 10^-3". Full text §2.13: logical error per cycle ≈ 10^{-⌈d/2⌉-1} at p = 10^-3, which equals the deck's 0.1(p/10^-2)^{(d+1)/2} for odd d (supports :1604 "resource estimates use A = 0.1, p_th = 10^-2").
- **units/24-fault-tolerance/slides.html:516: "Shor … 'Fault-tolerant quantum computation', Proc. 37th FOCS, 56 (1996); Steane's is Phys. Rev. Lett. 78, 2252 (1997)"**
  - status: confirmed
  - source: Crossref 10.1109/SFCS.1996.548464 (Shor, "Fault-tolerant quantum computation", 37th Conference on Foundations of Computer Science, pp. 56–65; event "SFCS-96"); arXiv quant-ph/9605011 dated 1996; Crossref 10.1103/PhysRevLett.78.2252 (Steane, PRL 78, 2252, 1997).
- **units/24-fault-tolerance/slides.html:421: "H, S and CNOT generate the Clifford group (… Gottesman 1998, cited)"**
  - status: confirmed
  - source: arXiv quant-ph/9702029 (JREF Phys. Rev. A 57, 127 (1998); Crossref 1998): "N(G) is generated by Hadamard rotations, π/2 phase rotations, and controlled NOT operations".
- **units/24-fault-tolerance/slides.html:1011: "Knill's post-selected schemes (Nature 434, 39, 2005) reported thresholds of a few per cent"**
  - status: confirmed
  - source: Crossref 10.1038/nature03350 (Nature 434, 39–44, 2005); arXiv quant-ph/0410199 abstract: "error probabilities above 3% per gate".
- **units/24-fault-tolerance/slides.html:1157: "Bombín and Martin-Delgado, Phys. Rev. A 76, 012305, 2007; Horsman, Fowler, Devitt and Van Meter, New J. Phys. 14, 123011, 2012"** (and :1722 "Horsman et al. 2012" for lattice surgery)
  - status: confirmed
  - source: Crossref 10.1103/PhysRevA.76.012305; 10.1088/1367-2630/14/12/123011 ("Surface code quantum computing by lattice surgery", NJP 14, 123011, 2012).
- **units/24-fault-tolerance/slides.html:1459: "Tomita and Svore, Phys. Rev. A 90, 062320, 2014, cited" (CNOT order and hook errors)**
  - status: confirmed
  - source: Crossref 10.1103/PhysRevA.90.062320; arXiv 1404.3747 §III B: "A Z error on a Z-stabilizer syndrome qubit after the first two CNOT gates propagates onto two horizontally aligned data qubits … This order maintains the alignment of qubits a and c such that they are perpendicular to the direction of the corresponding logical chain."
- **units/24-fault-tolerance/slides.html:1484: "Edmonds' algorithm, 1965; Dennis et al. 2002"** (also GLOSSARY.org:106)
  - status: confirmed
  - source: Crossref 10.4153/CJM-1965-045-4 (Edmonds, "Paths, Trees, and Flowers", Canad. J. Math. 17, 1965); 10.1063/1.1499754 (Dennis, Kitaev, Landahl, Preskill, "Topological quantum memory", J. Math. Phys. 43, 4452, 2002).
- **units/24-fault-tolerance/slides.html:1600: "p_th ≈ 1 per cent (Wang, Fowler and Hollenberg, Phys. Rev. A 83, 020302, 2011; Fowler et al., Phys. Rev. A 86, 032324, 2012)"**
  - status: confirmed
  - source: arXiv 1009.3686 (JREF PRA 83, 020302(R) (2011)): "we calculate values in the range 1.1–1.4%"; Crossref 10.1103/PhysRevA.86.032324. (Fowler et al.'s own simulation gives p_th = 0.57%, Sect. VII; the deck's "≈ 1 per cent" rests on Wang et al.)
- **units/24-fault-tolerance/slides.html:1800: "Eastin and Knill, Phys. Rev. Lett. 102, 110502, 2009"**
  - status: confirmed
  - source: arXiv 0811.4262 (JREF PRL 102, 110502 (2009)): "the ability of a quantum code to detect an arbitrary error on any single physical subsystem is incompatible with the existence of a universal, transversal encoded gate set".
- **units/24-fault-tolerance/slides.html:1827: "Anderson, Duclos-Cianci and Poulin, PRL 113, 080501, 2014"**
  - status: confirmed
  - source: Crossref 10.1103/PhysRevLett.113.080501 ("Fault-Tolerant Conversion between the Steane and Reed-Muller Quantum Codes", 2014).
- **units/24-fault-tolerance/slides.html:1949–1950: "Gottesman and Chuang (Nature 402, 390, 1999) … Zhou, Leung and Chuang (Phys. Rev. A 62, 052316, 2000)"**
  - status: confirmed
  - source: Crossref 10.1038/46503 (Nature 402, 390–393, 1999); 10.1103/PhysRevA.62.052316 (PRA 62, 052316, 2000).
- **units/24-fault-tolerance/slides.html:2005: "about 35p^3 … (Bravyi and Kitaev, Phys. Rev. A 71, 022316, 2005 …)"** (also problems.html:572, GLOSSARY.org:137)
  - status: confirmed
  - source: Crossref 10.1103/PhysRevA.71.022316; arXiv quant-ph/0403025 full text Eq. (38): "ǫout ≈ 35ǫ^3".
- **units/24-fault-tolerance/slides.html:2104–2105: "magic state cultivation (Gidney, Shutty and Jones 2024)"; "Litinski, 'Magic state distillation: not as costly as you think' (Quantum 3, 205, 2019)"** (and :2122 "Litinski 2019")
  - status: confirmed
  - source: arXiv 2409.17595 ("Magic state cultivation: growing T states as cheap as CNOT gates", Gidney, Shutty, Jones, 2024-09-26); Crossref 10.22331/q-2019-12-02-205 (Quantum 3, 205, 2019).
- **units/24-fault-tolerance/slides.html:2338: "Nielsen and Chuang §10.6"**
  - status: confirmed (weak source)
  - source: unofficial table-of-contents copy at ncatlab.org (via WebSearch): "10.6 Fault-tolerant quantum computation 474", with subsections on the big picture, fault-tolerant quantum logic, fault-tolerant measurement, and elements of resilient quantum computation. No publisher table of contents was reached.

## Unit 25 — transmon

- **units/25-transmon/slides.html:192: "Koch et al., Phys. Rev. A 76, 042319 (2007), §III." (the ladder: E_n, α < 0)**
  - status: fixed
  - source: arXiv cond-mat/0703002 (JREF PRA 76, 042319 (2007)) full text: §II "From the Cooper pair box to the transmon" (A Model, B Charge dispersion, C "Anharmonicity of the transmon": "E_m ≃ −E_J + √(8E_CE_J)(m+½) − …", "α ≃ −E_C"); §III is "Circuit QED for the transmon"; §IV "Estimates for the transmon's relaxation time (T1)".
  - change: "§III" -> "§II"; units/25-transmon/slides.html only.
- **units/25-transmon/slides.html:262 and :291–292: "Koch et al. (2007), §IV" (the drive coupling through b + b†; √(k+1) between neighbours, zero two apart)**
  - status: fixed
  - source: same full text: §III A "The coupling strength of the transmon" gives the coupling to the voltage through n̂ (Eqs. 3.1–3.3) and the matrix elements ⟨j|n̂|k⟩ (Eq. 3.4, Fig. 7): "coupling between neighboring transmon states is the only relevant coupling in the limit of large EJ/EC". §IV is about T1.
  - change: "§IV" -> "§III" at both places; units/25-transmon/slides.html only.
- **units/25-transmon/slides.html:1647: "Koch et al. (2007), §§II–IV, for the transmon's ladder and coupling, skipping the charge-dispersion analysis"**
  - status: confirmed (left unchanged)
  - source: same: the ladder is in §II, the coupling in §III A, charge dispersion in §II B. §IV (T1 estimates) is extra reading but not mislabelled, so not changed. Author may prefer §§II–III.
- **units/25-transmon/slides.html:1648, :1369–1371, :1346, problems.html:547–548: "Gambetta et al. (2011), §§II–III"; "Analytic control methods for high-fidelity unitary operations in a weakly nonlinear oscillator", Phys. Rev. A 83, 012308 (2011)**
  - status: confirmed (reference); locator noted
  - source: arXiv 1011.1949 (JREF PRA 83, 012308 (2011)); sections: I Introduction, II The system (B Rotating frame Hamiltonian), III Gaussian shaping and errors, IV Simple adiabatic control pulses (A General procedure for DRAG solutions; B Zero, first, and second order DRAG solutions — "optimal first order solution", "Second order solution"), V Leakage extension, VI Conclusions. The deck gives no description of §§II–III, so nothing contradicts it. But the results the deck cites from this paper (the first- and higher-order solutions, and the trade-off between leakage and phase error) are in §IV, which the reading list leaves out. Not changed; for the author.
- **units/25-transmon/slides.html:1648–1649: "P. Krantz et al., 'A quantum engineer's guide to superconducting qubits', Appl. Phys. Rev. 6, 021318 (2019), §IV on single-qubit gates"**
  - status: confirmed (left unchanged)
  - source: arXiv 1904.06560 (JREF Applied Physics Reviews 6, 021318 (2019)); Crossref 10.1063/1.5089550. The table of contents gives §IV as "Qubit control", with subsection §IV D "Single-qubit gates" (1 Capacitive coupling for X,Y control, 2 Virtual Z gate, 3 The DRAG scheme); §II is "Engineering quantum circuits" (circuit quantisation). §IV contains the single-qubit gates, but they are only part of it; §IV D is the exact place.
- **units/25-transmon/slides.html:1120–1121: "Motzoi, Gambetta, Rebentrost and Wilhelm, 'Simple pulses for elimination of leakage in weakly nonlinear qubits', Phys. Rev. Lett. 103, 110501 (2009)"**
  - status: confirmed
  - source: arXiv 0901.0534 (JREF PRL 103, 110501 (2009)); Crossref 10.1103/PhysRevLett.103.110501.
- **units/25-transmon/slides.html:1648: "Motzoi et al. (2009), two pages"**
  - status: unconfirmed
  - source: the arXiv PDF 0901.0534 is 4 pages (pdfinfo); the PRL is a standard letter. "two pages" may mean the core derivation; nothing I reached says so. Left alone.
- **units/25-transmon/slides.html:175–176: "Nakamura, Pashkin and Tsai, 1999"; "Koch et al. 2007"**
  - status: confirmed
  - source: Crossref 10.1038/19718 (Nature 398, 786, 1999); 10.1103/PhysRevA.76.042319 (2007).
- **units/25-transmon/slides.html:1442–1443: "Horodecki, Horodecki and Horodecki, Phys. Rev. A 60, 1888, 1999; M. A. Nielsen, Phys. Lett. A 303, 249, 2002"**
  - status: confirmed
  - source: Crossref 10.1103/PhysRevA.60.1888; 10.1016/S0375-9601(02)01272-0 ("A simple formula for the average gate fidelity of a quantum dynamical operation").
- **units/25-transmon/slides.html:703–704: "Gerry and Knight, Introductory Quantum Optics, ch. 3"**
  - status: unconfirmed
  - already tried: not searched (time). Left alone.

## Unit 26 — hardware

- **units/26-hardware/slides.html:1674, :1679–1681, problems.html:554, :567: "Pednault et al. 2019 … an estimate of 2.5 days"; "arXiv:1910.09534 (2019): an estimate, not a run, using the supercomputer's file system of about 250 PB"**
  - status: confirmed (2.5 days, title, arXiv, estimate-not-run); the unit of the 250 is flagged, not changed
  - source: arXiv 1910.09534v2 full text: "we estimate that the computations would take approximately two and a half days. While we did not carry out these computations…"; "overall estimate of 2.55 days … 53-qubit … all amplitudes stored on disk"; "64 PiB of disk space are required for 53-qubit circuits … Both fit within the 250 PiB available on Summit."
  - note: the source says 250 **PiB** (= 2.8×10^17 bytes ≈ 281 PB); the deck says "about 250 PB" at slides.html:1681, :1692 and problems.html:567, next to arithmetic in decimal PB (72 PB, 144 PB). The conclusion (it fits) holds either way. Not edited, because any edit means either bringing in an undefined unit (PiB) or converting the value (≈ 280 PB). Author's decision.
- **units/26-hardware/slides.html:1704, :1718–1719: "67 qubits in 2024 (Morvan et al.)"; "A. Morvan et al., 'Phase transitions in random circuit sampling', Nature 634, 328 (2024): 67 qubits"**
  - status: confirmed
  - source: Crossref 10.1038/s41586-024-07998-6: "Phase transitions in random circuit sampling", Nature 634, 328–333, 2024-10-10; arXiv 2304.11119 abstract: "an RCS experiment with 67 qubits at 32 cycles".
- **units/26-hardware/slides.html:1704, :1717–1718: "56 superconducting qubits in 2021 (Wu et al.)"; "Y. Wu et al., 'Strong quantum computational advantage using a superconducting quantum processor', PRL 127, 180501 (2021): 56 qubits, 20 cycles"**
  - status: confirmed
  - source: Crossref 10.1103/PhysRevLett.127.180501 (2021-10-25); arXiv 2106.14734 abstract: "Zuchongzhi, which is composed of 66 functional qubits … up to a system size of 56 qubits and 20 cycles".
- **units/26-hardware/slides.html:320: "H. J. Manetsch et al., arXiv:2403.12021, 2024: about 6100 atoms"**
  - status: confirmed
  - source: arXiv API 2403.12021, "A tweezer array with 6100 highly coherent atomic qubits", submitted 2024-03-18: "trapping over 6,100 neutral atoms in around 12,000 sites". Note: now published as Nature 647, 60–67 (2025), DOI 10.1038/s41586-025-09641-4 (arXiv journal_ref). The arXiv citation is not wrong, so not changed.
- **units/26-hardware/slides.html:325: "Two-qubit fidelities of 99.5% have been reported (S. J. Evered et al., Nature 622, 268, 2023)"**
  - status: confirmed
  - source: Crossref 10.1038/s41586-023-06481-y (Nature 622, 268–272, 2023-10-12); arXiv 2304.05420 abstract: "two-qubit entangling gates with 99.5% fidelity on up to 60 atoms in parallel".
- **units/26-hardware/slides.html:327–328: "a 2024 experiment encoded up to 48 logical qubits in 280 atoms … (D. Bluvstein et al., Nature 626, 58, 2024)"** (also :1891)
  - status: confirmed
  - source: Crossref 10.1038/s41586-023-06927-3 (Nature 626, 58–65, 2024-02-01); arXiv 2312.03982 abstract: "up to 280 physical qubits … sampling circuits with up to 48 logical qubits".
- **units/26-hardware/slides.html:226–227: "the best transmons above 0.3 ms (A. P. M. Place et al., Nature Communications 12, 1779, 2021, as reported)"**
  - status: confirmed
  - source: Crossref 10.1038/s41467-021-22030-5: "New material platform for superconducting transmon qubits with coherence times exceeding 0.3 milliseconds", Nat. Commun. 12, 1779 (2021). (Tantalum is in the paper, not in the deck's sentence.)
- **units/26-hardware/slides.html:1241: "J. Wurtz and P. Love, PRA 103, 042612, 2021"**
  - status: confirmed
  - source: Crossref 10.1103/PhysRevA.103.042612: Wurtz, Love, "MaxCut quantum approximate optimization algorithm performance guarantees for p > 1", Phys. Rev. A 103, 042612 (2021-04-27).
- **units/26-hardware/slides.html:1637–1638: "X. Gao et al., 'Limitations of linear cross-entropy as a measure for quantum advantage', arXiv:2112.01657, 2021"**
  - status: confirmed
  - source: arXiv API 2112.01657 (2021-12-03), same title. Note: now published as PRX Quantum 5, 010334 (2024) (Crossref 10.1103/PRXQuantum.5.010334). Not changed.
- **units/26-hardware/slides.html:1912–1913: "about twenty million physical qubits for about eight hours (C. Gidney and M. Ekerå, Quantum 5, 433, 2021)"**
  - status: confirmed
  - source: Crossref 10.22331/q-2021-04-15-433, title "How to factor 2048 bit RSA integers in 8 hours using 20 million noisy qubits".
- **units/26-hardware/slides.html:1913: "under a million for under a week (C. Gidney, arXiv:2505.15917, 2025)"**
  - status: confirmed
  - source: arXiv API 2505.15917 (2025-05-21), "How to factor 2048 bit RSA integers with less than a million noisy qubits": "factored in less than a week by a quantum computer with less than a million noisy qubits".
- **units/26-hardware/slides.html:1977 and :1988: "Farhi, Goldstone and Gutmann (2014), sections I–IV"; "first four sections define QAOA and do the 3-regular depth-one analysis"**
  - status: fixed
  - source: arXiv PDF 1411.4028: I Introduction, (II fixed-p algorithm), III Concentration, IV The ring of disagrees, V "MaxCut on 3-regular graphs" (the p = 1 analysis giving 0.6924), VI Relation to the quantum adiabatic algorithm, VII A variant, VIII Conclusion. The 3-regular depth-one analysis is §V.
  - change: "sections I–IV" -> "sections I–V" (:1977); "first four sections" -> "first five sections" (:1988); units/26-hardware/slides.html only (no other occurrence in the course).
- **units/26-hardware/slides.html:1130, :1236 neighbourhood: "Farhi, Goldstone and Gutmann (2014) report that depth one achieves at least 0.6924", arXiv:1411.4028 (2014)**
  - status: confirmed
  - source: arXiv 1411.4028 abstract: "For p = 1, on 3-regular graphs the quantum algorithm always finds a cut that is at least 0.6924 times the size of the optimal cut."
- **units/26-hardware/slides.html:1621, :1631–1632, :1673, problems.html:538: Arute et al., Nature 574, 505 (2019): 53 qubits, 20 cycles, F_XEB ≈ 0.2%, a million samples in about 200 s; 10 000 years estimate by hybrid Schrödinger–Feynman on the largest supercomputer**
  - status: confirmed
  - source: Crossref 10.1038/s41586-019-1666-5 (Nature 574, 505–510, 2019); nature.com article text: "quantum states on 53 qubits"; "about 200 seconds to sample one instance of a quantum circuit a million times … approximately 10,000 years"; "For the largest circuit with 53 qubits and 20 cycles … F_XEB = (2.24 ± 0.21)×10^-3 for the elided circuits"; "we use a hybrid Schrödinger–Feynman algorithm"; "On the Summit supercomputer, which is currently the most powerful in the world".
- **units/26-hardware/slides.html:1675, :1681–1683: "F. Pan, K. Chen and P. Zhang, 'Solving the sampling problem of the Sycamore quantum circuits', PRL 129, 090502 (2022) … 15 hours on 512 GPUs … fidelity about 0.0037"** (also GLOSSARY.org:174, problems.html:571)
  - status: confirmed
  - source: arXiv 2111.03011 (JREF PRL 129, 090502 (2022)): "fidelity F ≈ 0.0037. The whole computation has cost about 15 hours on a computational cluster with 512 GPUs."
- **units/26-hardware/slides.html:1684–1685: "F. Pan and P. Zhang, PRL 128, 030501, 2022; arXiv:2103.03074 … XEB of 0.739 on 60 GPUs … correlated samples"**
  - status: confirmed (the pairing of the two records is inferred from matching content)
  - source: arXiv 2103.03074 abstract (titled "Simulating the Sycamore quantum supremacy circuits", no journal_ref): "60 graphical processing units … one million correlated bitstrings … XEB fidelity equals 0.739". APS page 10.1103/PhysRevLett.128.030501 (published title "Simulation of Quantum Circuits Using the Big-Batch Tensor Network Method", received 7 May 2021): abstract mentions Sycamore, 60 GPUs and correlated bitstrings.
- **units/26-hardware/slides.html:274–276: Ballance et al. PRL 117, 060504; Gaebler et al. PRL 117, 060505 (2016); Y. Wang et al., Nature Photonics 11, 646, 2017 (over ten minutes)**
  - status: confirmed
  - source: Crossref 10.1103/PhysRevLett.117.060504, 10.1103/PhysRevLett.117.060505 (both 2016-08-04); 10.1038/s41566-017-0007-1 ("Single-qubit quantum memory exceeding ten-minute coherence time", Nat. Photon. 11, 646, 2017).
- **units/26-hardware/slides.html:380–381: "a 2020 experiment detected up to 76 photons (H.-S. Zhong et al., Science 370, 1460, 2020)"**
  - status: confirmed
  - source: arXiv 2012.01625 (JREF Science 370, 1460 (2020)): "We observe up to 76 output photon-clicks".
- **units/26-hardware/slides.html:428, :434–435: Raussendorf and Briegel, PRL 86, 5188, 2001; Bartolucci et al., Nature Communications 14, 912, 2023**
  - status: confirmed
  - source: Crossref 10.1103/PhysRevLett.86.5188; 10.1038/s41467-023-36493-1.
- **units/26-hardware/slides.html:825, :1089, :1240, :1343–1344, :1360, :1380–1382, :1389, :1480, :1483, :1527, :1591, :1762, :1769–1770, :1801–1806, :1874–1875, :1911, :949–952, :1977: other references** — Karp 1972; Wang–Hadfield–Jiang–Rieffel PRA 97, 022304 (2018); Basso et al. TQC 2022; Khot–Kindler–Mossel–O'Donnell 2007; Håstad 2001; Hastings arXiv:1905.07047 (2019); Barak–Marwaha ITCS 2022; Bondy–Locke J. Graph Theory 10, 477 (1986); Aaronson–Arkhipov 2011; Bremner–Jozsa–Shepherd 2011; Preskill 2012; Boixo et al. Nature Physics 14, 595 (2018); Porter–Thomas 1956; Kerenidis–Prakash ITCS 2017 / arXiv:1603.08675 (2016); Grover–Rudolph quant-ph/0208112 (2002); Tang STOC 2019 / arXiv:1807.04271 (2018); Frieze–Kannan–Vempala J. ACM 51, 1025 (2004); Chia et al. STOC 2020; Babbush et al. PRX Quantum 2, 010103 (2021); Smolin–Smith–Vargo Nature 499, 163 (2013); Peruzzo et al. Nat. Commun. 5, 4213 (2014); McClean et al. Nat. Commun. 9, 4812 (2018); DiVincenzo 2000
  - status: confirmed (bibliographic data: authors, venue, volume, page, year)
  - source: Crossref 10.1007/978-1-4684-2001-2_9, 10.1103/PhysRevA.97.022304, 10.1137/S0097539705447372, 10.1145/502090.502098, 10.1002/jgt.3190100407, 10.1145/1993636.1993682, 10.1098/rspa.2010.0301, 10.1038/s41567-018-0124-x, 10.1103/PhysRev.104.483, 10.1145/1039488.1039494, 10.1145/3313276.3316310 (STOC '19), 10.1145/3357713.3384314 (STOC '20), 10.1103/PRXQuantum.2.010103, 10.1038/nature12290, 10.1038/ncomms5213, 10.1038/s41467-018-07090-4; arXiv API 2110.14206 (JREF TQC '22, 7:1–7:21), 1905.07047, 2106.05900 (JREF ITCS 2022), 1203.5813 (2012, "quantum supremacy"), 1603.08675, quant-ph/0208112, 1807.04271, 1910.06151, quant-ph/0002077 (2000); dagstuhl record 10.4230/LIPIcs.ITCS.2017.49 (via WebSearch) for Kerenidis–Prakash at ITCS 2017. The claims each paper is cited for were not all checked beyond the abstracts.
- **units/26-hardware/slides.html:1871: "1.1 µs in the 2024 below-threshold experiment, as reported"**
  - status: confirmed
  - source: arXiv 2408.13687 abstract: "with a cycle time of 1.1 μs".
