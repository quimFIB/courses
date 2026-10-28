A 27-unit self-study course in quantum computing, maths-first — all 27 units built and verified (00–26); next is the learner's reading.

# Where to pick up (2026-10-28)

**Built and verified:** all 27 units, every one through an independent verify
pass and `build/check_batch.py`. The last three batches ran chained on
2026-10-28: 17–20 (`wf_60e04f7f-0d0`), 21–24 (`wf_35eb9792-926`), 25–26
(`wf_cdb2d920-5e9`). `./qc batch next` reports `done` (exit 4), and
`python3 build/check_batch.py --referee` runs all 139 referee blocks clean.

**Next:** the learner reads units 01–26; a full citation audit is still to do
(`CITATIONS.md` has the flagged-items one).

**Still to be read by the learner:** units 01–26 (00 was read and approved).
Published 2026-10-28: the course moved into `published-courses/` and is served at
<https://quimfib.github.io/courses/quantum-computing/>.

**Tooling changed under this checkpoint (2026-10-27, from the Circuits and
Power session, at the learner's request).** `slides/tools/deck-check.sh` and
`slides/tools/deck-overflow.mjs` now carry three fixes found building that
course: the overflow check also **fails on KaTeX errors and on unrendered maths**
(a stray `$`, `\(` or `\[` outside rendered formulas, notes included);
`deck-check.sh` reports "overflow: the slides above need fixing" on exit 2
instead of the misleading "did not finish loading", and "no report (exit N)"
only when nothing was measured; and it deletes old `slide-*.png` screenshots
first, so one that timed out is missing rather than stale. Exit codes are
unchanged. All 17 built decks (00–16) pass. A deck that fails a later batch's
check with "KaTeX error" or "unrendered maths" is the new check working, not a
tooling regression.

**Tooling changed again (2026-10-28, from the Circuits and Power session, at
the learner's request).** Two gaps in `slides/tools/deck-check.sh` and
`deck-click.mjs`, found while building that course. Both are now fixed here,
and `deck-shot.mjs` is new.

- **Screenshots were never taken.** The browser's `--screenshot` mode hung,
  and under `set -e` its timeout ended the script. Screenshots now come from
  `deck-shot.mjs`, which loads the deck once and captures each requested slide
  over the DevTools protocol. They are taken even when a check fails.
- **The link check failed on maths in slide titles.** It now compares titles
  the way `deck.js` does, putting each formula back from KaTeX's TeX annotation
  on both sides.
- **The exit status is now meaningful**, which changes behaviour. The script
  exits 0 only if the overflow check and the terms-and-links check both pass.
  Before, an overflowing deck still exited 0.

All 25 built decks pass, and each produced its screenshot.

# State

`CURRICULUM.html` is the proposal: premise, unit contract, assumed background,
dependency map, all 27 units with checkpoints, two closed short routes, the
capstone, reading, and the record of how its seven open questions were settled.

`qclib/` is the optional referee — a NumPy-only statevector and density-matrix
simulator, uv-managed. `uv run pytest` runs 43 tests: the simulator against
slow reference constructions, and every number the curriculum states
(`tests/test_known_results.py`, which are answers).

The build tooling, adapted from Mechanics to Relativity: `AUTHORING.md` (its
contract, the course-wide conventions — inner product conjugate-linear in the
first slot, qubit 0 leftmost, R_P(θ) = exp(−iθP/2), QFT with e^{+2πijk/N},
ħ = 1 except in 02, 25, 26 — and the rules for the optional referee on the
sheets, with one named exception: unit 10's optional write-your-own-simulator
problem); the `./qc` CLI (`qctool/`, standard library); deck and sheet assets
and checks in `slides/`; and `build/` with the Workflow script, `syllabus.json`
extracted from the page's 27 cards, `index.md`, `slugs.json`, the 27 specs, and
`check_batch.py`, the post-batch checks.

## Units built

| unit | slides | figures | problems | defects fixed | run |
|---|---|---|---|---|---|
| 00 complex amplitudes | 48 | 19 | 12 | 16 | `wf_acd13679-541` + figure pass |
| 01 postulates | 45 | 27 | 11 | 14 | `wf_fbe55789-bee` |
| 02 one qubit | 46 | 17 | 11 | 9 | 〃 |
| 03 tensor products | 45 | 32 | 11 | 10 | 〃 |
| 04 density operators | 41 | 18 | 12 | 9 | 〃 |
| 05 no-cloning | 40 | 30 | 12 | 15 | `wf_3de6117d-a6f` |
| 06 Bell, CHSH | 41 | 29 | 11 | 7 | 〃 |
| 07 teleportation | 37 | 24 | 12 | 8 | 〃 |
| 08 entropy, Holevo | 42 | 31 | 12 | 15 | 〃 |
| 09 key distribution | 42 | 33 | 12 | 8 | `wf_111b7875-e88` |
| 10 circuits | 44 | 33 | 12 | 9 | 〃 |
| 11 gate sets | 41 | 17 | 12 | 14 | 〃 |
| 12 BQP | 44 | 31 | 12 | 10 | 〃 |
| 13 query model | 39 | 26 | 11 | 8 | `wf_6a9bfda6-68b` |
| 14 Simon | 41 | 21 | 12 | 6 | 〃 |
| 15 Fourier, phase estimation | 43 | 21 | 12 | 11 | 〃 |
| 16 Shor | 41 | 24 | 12 | 8 | 〃 |
| 17 Grover | 36 | 27 | 12 | 9 | `wf_60e04f7f-0d0` |
| 18 lower bounds | 33 | 18 | 12 | 12 | 〃 |
| 19 Hamiltonian simulation | 36 | 17 | 13 | 8 | 〃 |
| 20 QMA | 45 | 34 | 12 | 14 | 〃 |
| 21 channels | 39 | 15 | 12 | 9 | `wf_35eb9792-926` |
| 22 first codes | 42 | 27 | 12 | 5 | 〃 |
| 23 stabilisers | 39 | 21 | 12 | 11 | 〃 |
| 24 fault tolerance | 42 | 25 | 12 | 15 | 〃 |
| 25 transmon | 37 | 21 | 12 | 12 | `wf_cdb2d920-5e9` |
| 26 hardware | 45 | 28 | 12 | 15 | 〃 |

No verifier left a defect open. All 89 problems with referee blocks in 00–16
run (`python3 build/check_batch.py --referee`), the 16 in 17–20 and the 23 in 21–24.

## Loose ends the verifiers raised

- **Citations: the flagged items are audited (2026-10-28), the rest are not.**
  Everything the verifiers had marked as checked from memory (units 03, 05,
  06, 10, 16, 22, 24, 25, 26) was checked against sources: 113 confirmed, 8
  fixed, 9 unconfirmed; and ten points that needed a decision, nine of them
  applied the same day (the first QEC experiment in 22 corrected to the
  phase-flip form, a wrong Preskill chapter dropped from 24, 250 PiB no
  longer quoted as PB in 26, …). All in `CITATIONS.md`. A full audit like Mechanics to Relativity's, of the
  citations nobody flagged, is still to do. The 1975 neutron-interferometry
  angles are deliberately not quoted in 02.
- One claim is computed rather than proved, and labelled so: the best real
  measurement angle for the trine in 08.
- Unit 02's rotating-frame Hamiltonian carries the honest signs
  (−(ΔZ + ΩX)/2 with the proton convention), not the spec's.

# Log

- 2026-10-27: curriculum drafted and settled; referee built; tooling adapted;
  unit 00 specified, built, approved by the learner and given a figure pass
  (7 figures to 19 — the contract had lost "draw it when it can be drawn", now
  restored, with no quota: the learner said the number depends on the unit).
- 2026-10-27: specs for all 27 units written part by part and approved.
  Writing them caught three card errors, corrected on the page and in
  `syllabus.json`: unit 03's pair is the singlet, *anti*correlated in every
  basis (|Φ⁺⟩ is correlated only in real bases); unit 08's Holevo proof uses
  strong subadditivity directly; unit 11's irrationality is now proved, not
  cited. Several Part D and E cards lean on units outside their prerequisite
  paths (14, 17 on BQP and phase estimation; 21, 22 on 05; 23 on 11's
  Clifford group); each spec handles it locally and the cards are unchanged.
  A verifier later corrected unit 05's card ("unit 04's theorem" → unit 03's
  projective no-signalling).
- 2026-10-27: batches 01–04, 05–08, 09–12, 13–16, each about an hour. 02–04
  were written in parallel from their predecessors' specs; the cross-unit
  references were checked afterwards and land. 13–16 hit the session limit
  midway and were resumed from the run's cache once it lifted (`BUILD.md`).
  The learner chose to chain the batches; at their request the build stopped
  after 13–16 for this checkpoint.
- 2026-10-28: batch 17–20, about 77 minutes, clean; Part D is finished. 43
  defects fixed by the verifiers (two in 17 were wrong statements about the
  probability curve and about Markov's bound in exponential search; AES key
  search needs two plaintext–ciphertext pairs, not one, for M = 1), none left
  open. One unmatched quotation (17 → 12, "a quadratic speedup for NP search")
  is the deck's own phrasing, not a citation. Batch 21–24 launched.
- 2026-10-28: batch 21–24, about an hour, clean; Part E's spine is built. 40
  defects fixed by the verifiers, none open (a false claim in 21 that an echo
  time can exceed 2T₁; Watrous's Choi convention misstated). One quotation in
  23 paraphrased unit 22's theorem in quote marks; reworded to its actual
  title. `check_batch.py` step 6 no longer crashes on a unit still being
  written, which had cut short the verifiers' own runs in both batches. Batch
  25–26 launched.
- 2026-10-28: batch 25–26, about an hour, clean; the build is finished. 27
  defects fixed, none open (in 25 a wrong fourth-order Stark coefficient, a
  false claim that leakage is below T₁ beyond 9 ns, and a sign error in P12's
  κ). 139 referee blocks run course-wide.
- 2026-10-28: the flagged citations audited by two agents with web access
  (about 30 minutes); 8 fixes, each re-checked against its source before
  being kept: one wrong paper (10's CNOT classification is PRA 70, 012310),
  two Shor quotations dated 1994 that are from the 1997 version, five wrong
  section numbers (Gottesman, Fowler, Koch ×2, Farhi–Goldstone–Gutmann).
  Record in `CITATIONS.md`. The learner then settled the ten points it
  raised; nine applied (22, 24, 26 the substantive ones), "Margolus's gate"
  left.

The map is generated: `python3 map/mkmap.py` regenerates it inside
`CURRICULUM.html`.
