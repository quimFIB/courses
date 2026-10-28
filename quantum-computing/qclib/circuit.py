"""Circuits as lists of operations, runnable on either kind of state.

    c = Circuit(3).h(0).cx(0, 1).cx(0, 2)        # GHZ
    c.run().probabilities()                        # [0.5, 0, …, 0, 0.5]
    c.run(DensityMatrix.zeros(3), noise=1e-2)      # with depolarising noise, exactly
    c.counts()["t"]                                # how many T gates — the costly ones (unit 11)
"""
from collections import Counter
from dataclasses import dataclass

import numpy as np

from . import gates
from .channels import depolarizing
from .density import DensityMatrix
from .gates import controlled
from .linalg import dagger
from .statevector import Statevector


@dataclass(frozen=True)
class Op:
    name: str
    qubits: tuple
    matrix: np.ndarray = None   # a unitary on `qubits`, controls already folded in
    perm: np.ndarray = None     # or a basis permutation on `targets` …
    targets: tuple = ()
    controls: tuple = ()        # … applied only where every control is 1

    def inverse(self):
        if self.perm is not None:
            return Op(self.name + "†", self.qubits, perm=np.argsort(self.perm),
                      targets=self.targets, controls=self.controls)
        return Op(self.name + "†", self.qubits, matrix=dagger(self.matrix))


class Circuit:
    def __init__(self, n):
        self.n = n
        self.ops = []

    def _check(self, qubits):
        bad = [q for q in qubits if not 0 <= q < self.n]
        if bad or len(set(qubits)) != len(qubits):
            raise ValueError(f"bad qubits {qubits} for a {self.n}-qubit circuit")

    def gate(self, u, *qubits, name="U"):
        self._check(qubits)
        u = np.asarray(u, dtype=complex)
        if u.shape != (2 ** len(qubits),) * 2:
            raise ValueError(f"{name} is {u.shape}, but {len(qubits)} qubits were given")
        self.ops.append(Op(name, tuple(qubits), matrix=u))
        return self

    def controlled(self, u, controls, targets, name="cU"):
        return self.gate(controlled(u, len(controls)), *controls, *targets, name=name)

    def permutation(self, perm, targets, controls=(), name="perm"):
        """|y⟩ ↦ |perm[y]⟩ on `targets` where all `controls` are 1 — e.g. modular multiplication."""
        self._check(tuple(controls) + tuple(targets))
        self.ops.append(Op(name, tuple(controls) + tuple(targets), perm=np.asarray(perm),
                           targets=tuple(targets), controls=tuple(controls)))
        return self

    def oracle(self, f, inputs, outputs, name="oracle"):
        """|x⟩|y⟩ ↦ |x⟩|y ⊕ f(x)⟩, counted as one query."""
        a, b = len(inputs), len(outputs)
        x, y = np.divmod(np.arange(2 ** (a + b)), 2**b)
        fx = np.array([f(int(v)) for v in range(2**a)])
        return self.permutation(x * 2**b + (y ^ fx[x]), tuple(inputs) + tuple(outputs), name=name)

    # the named gates, each one line
    def i(self, q): return self.gate(gates.I, q, name="i")
    def x(self, q): return self.gate(gates.X, q, name="x")
    def y(self, q): return self.gate(gates.Y, q, name="y")
    def z(self, q): return self.gate(gates.Z, q, name="z")
    def h(self, q): return self.gate(gates.H, q, name="h")
    def s(self, q): return self.gate(gates.S, q, name="s")
    def sdg(self, q): return self.gate(gates.Sdg, q, name="sdg")
    def t(self, q): return self.gate(gates.T, q, name="t")
    def tdg(self, q): return self.gate(gates.Tdg, q, name="tdg")
    def rx(self, theta, q): return self.gate(gates.rx(theta), q, name="rx")
    def ry(self, theta, q): return self.gate(gates.ry(theta), q, name="ry")
    def rz(self, theta, q): return self.gate(gates.rz(theta), q, name="rz")
    def phase(self, phi, q): return self.gate(gates.phase(phi), q, name="phase")
    def cx(self, c, t): return self.gate(gates.CX, c, t, name="cx")
    def cz(self, a, b): return self.gate(gates.CZ, a, b, name="cz")
    def swap(self, a, b): return self.gate(gates.SWAP, a, b, name="swap")
    def ccx(self, a, b, t): return self.gate(gates.CCX, a, b, t, name="ccx")

    def extend(self, other, qubits=None):
        """Append another circuit, its qubit j placed on qubits[j]."""
        qubits = list(range(other.n)) if qubits is None else list(qubits)
        for op in other.ops:
            m = lambda qs: tuple(qubits[q] for q in qs)
            self.ops.append(Op(op.name, m(op.qubits), op.matrix, op.perm, m(op.targets), m(op.controls)))
        return self

    def inverse(self):
        c = Circuit(self.n)
        c.ops = [op.inverse() for op in reversed(self.ops)]
        return c

    def counts(self):
        return Counter(op.name for op in self.ops)

    def __len__(self):
        return len(self.ops)

    def __str__(self):
        return "\n".join(f"{op.name:>8}  {' '.join(map(str, op.qubits))}" for op in self.ops)

    # ---------------- running it ----------------

    def run(self, state=None, noise=0.0, rng=None):
        """Run on a copy of `state` (default |0…0⟩, or a label such as '0+1').

        noise = p adds a single-qubit depolarising channel of strength p on every
        qubit an operation touches, after it. On a DensityMatrix that is exact; on a
        Statevector it is one sampled trajectory (random Paulis), so average many
        runs — that scales to circuits a density matrix cannot hold.
        """
        if state is None:
            state = Statevector.zeros(self.n)
        elif isinstance(state, str):
            state = Statevector.from_label(state)
        else:
            state = state.copy()
        if state.n != self.n:
            raise ValueError(f"{state.n}-qubit state for a {self.n}-qubit circuit")
        rng = np.random.default_rng() if rng is None else rng
        paulis = (gates.X, gates.Y, gates.Z)
        for op in self.ops:
            if op.perm is not None:
                state.apply_permutation(op.perm, op.targets, op.controls)
            else:
                state.apply(op.matrix, *op.qubits)
            if noise:
                for q in op.qubits:
                    if isinstance(state, DensityMatrix):
                        state.apply_channel(depolarizing(noise), q)
                    elif rng.random() < noise:
                        state.apply(paulis[rng.integers(3)], q)
        return state

    def unitary(self):
        """The circuit's 2^n × 2^n matrix, column by column (sensible up to about 12 qubits)."""
        return np.column_stack([self.run(Statevector.basis(j, self.n)).vector for j in range(2**self.n)])
