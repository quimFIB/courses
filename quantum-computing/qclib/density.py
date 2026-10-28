"""Mixed states of n qubits, and channels acting on them (units 04, 08, 20–24).

Stored as a tensor of shape (2,)*2n: the first n axes are the row (ket) qubits,
the last n the column (bra) qubits, so ρ ↦ UρU† is U on the first group and
Ū on the second. Memory grows as 4^n — fine to about 12 qubits; past that, use
Statevector with sampled noise (see Circuit.run).
"""
import numpy as np

from . import _tensor, linalg
from .gates import controlled, permutation_matrix
from .statevector import Statevector


class DensityMatrix:
    def __init__(self, matrix):
        m = np.asarray(matrix, dtype=complex)
        n = int(round(np.log2(len(m))))
        if m.shape != (2**n, 2**n):
            raise ValueError(f"shape {m.shape} is not 2^n × 2^n")
        if not np.isclose(np.trace(m).real, 1):
            raise ValueError(f"trace {np.trace(m):.6g}, not 1")
        if not linalg.is_hermitian(m, atol=1e-8):
            raise ValueError("not Hermitian")
        self.n = n
        self._t = m.reshape((2,) * (2 * n))

    @classmethod
    def from_statevector(cls, psi):
        return cls(psi.density_matrix() if isinstance(psi, Statevector) else
                   np.outer(psi, np.conj(psi)))

    @classmethod
    def from_label(cls, label):
        return cls.from_statevector(Statevector.from_label(label))

    @classmethod
    def zeros(cls, n):
        return cls.from_statevector(Statevector.zeros(n))

    @classmethod
    def maximally_mixed(cls, n):
        return cls(np.eye(2**n) / 2**n)

    @classmethod
    def mixture(cls, weights, states):
        """Σ p_i |ψ_i⟩⟨ψ_i| from an ensemble — the preparation story of unit 04."""
        return cls(sum(w * DensityMatrix.from_statevector(s).matrix for w, s in zip(weights, states)))

    @property
    def matrix(self):
        return self._t.reshape(2**self.n, 2**self.n).copy()

    def __array__(self, dtype=None, copy=None):
        return self.matrix if dtype is None else self.matrix.astype(dtype)

    def copy(self):
        d = DensityMatrix.__new__(DensityMatrix)
        d.n, d._t = self.n, self._t.copy()
        return d

    # ---------------- evolution ----------------

    def apply(self, u, *qubits):
        cols = [q + self.n for q in qubits]
        self._t = _tensor.apply_matrix(_tensor.apply_matrix(self._t, u, qubits), np.conj(u), cols)
        return self

    def apply_controlled(self, u, controls, targets):
        return self.apply(controlled(u, len(controls)), *controls, *targets)

    def apply_permutation(self, perm, qubits, controls=()):
        p = controlled(permutation_matrix(perm), len(controls))
        return self.apply(p, *controls, *qubits)

    def apply_channel(self, kraus, *qubits):
        """ρ ↦ Σ K ρ K† with the Kraus operators acting on the listed qubits."""
        cols = [q + self.n for q in qubits]
        self._t = sum(_tensor.apply_matrix(_tensor.apply_matrix(self._t, k, qubits), np.conj(k), cols)
                      for k in kraus)
        return self

    # ---------------- reading it out ----------------

    def probabilities(self, qubits=None):
        diag = np.real(np.diagonal(self.matrix)).reshape((2,) * self.n)
        if qubits is None:
            return diag.reshape(-1)
        return _tensor.register_probabilities(diag, list(qubits))

    def partial_trace(self, keep):
        """The reduced state on the qubits in `keep`, in their given order."""
        return DensityMatrix(linalg.partial_trace(self.matrix, list(keep), self.n))

    def expectation(self, op, *qubits):
        qubits = qubits or tuple(range(self.n))
        rows = _tensor.apply_matrix(self._t, op, qubits).reshape(2**self.n, 2**self.n)
        return complex(np.trace(rows))

    def purity(self):
        m = self.matrix
        return float(np.real(np.trace(m @ m)))

    def entropy(self, base=2):
        return linalg.von_neumann_entropy(self.matrix, base)

    def fidelity(self, other):
        return linalg.fidelity(self.matrix, np.asarray(other))

    def trace_distance(self, other):
        return linalg.trace_distance(self.matrix, np.asarray(other))

    def __repr__(self):
        return f"DensityMatrix[{self.n}], purity {self.purity():.4f}\n{np.round(self.matrix, 4)}"
