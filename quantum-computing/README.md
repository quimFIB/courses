# Quantum Computing — course materials

`CURRICULUM.html` explains what the course covers and why; open it first.
All 27 units are built and verified; `WHAT.md` has the state.

```fish
./qc slides 00         # a unit's deck in the browser
./qc problems 00       # its problem sheet: hints and worked solutions folded under each problem
./qc done 00           # record that you met its checkpoint
./qc status            # where you are
```

`./qc` is standard-library Python: nothing to install. `AUTHORING.md` is the
contract every unit keeps; `BUILD.md` is how units get built.

## The referee (optional)

`qclib` is a small simulator for checking hand calculations. Nothing in the
course requires it: every checkpoint is reachable on paper.

```fish
uv sync                  # once: creates .venv with NumPy and pytest
uv run pytest            # the referee's own tests
uv run python            # then: from qclib import *
```

```python
from qclib import Circuit, DensityMatrix, Statevector, channels, gates, library, linalg

bell = Circuit(2).h(0).cx(0, 1).run()            # Statevector, |00⟩ + |11⟩
bell.probabilities()                              # [0.5, 0, 0, 0.5]
DensityMatrix.from_statevector(bell).partial_trace([1])   # I/2, unit 04

noisy = Circuit(2).h(0).cx(0, 1).run(DensityMatrix.zeros(2), noise=0.01)  # exact channel
linalg.equal_up_to_phase(my_matrix, Circuit(3).ccx(0, 1, 2).unitary())    # check a circuit
```

**Qubit order.** Qubit 0 is the leftmost symbol of a ket and the most
significant bit of an index, as in textbooks: `|01⟩` is index 1. Qiskit uses
the reverse.

**What it deliberately lacks.** No QFT circuit, Grover iteration or modular
multiplier — building those is the work of units 15–17. `qclib.library` holds
what they must equal (`qft_matrix`, `multiply_mod`) instead.

**Noise.** `run(..., noise=p)` puts a depolarising channel of strength `p` on
every qubit an operation touches. On a `DensityMatrix` that is exact, to about
12 qubits; on a `Statevector` it is one sampled trajectory, so average many
runs — that is how the capstone runs Shor on 21 (14 qubits) under noise.

`tests/test_known_results.py` reproduces every number `CURRICULUM.html`
states. Those tests are answers: do not read a unit's test before working the
unit.
