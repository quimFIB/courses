"""Pure states of n qubits.

Convention, used everywhere in the course: qubit 0 is the leftmost symbol of a
ket and the most significant bit of a basis index, so |01⟩ is index 1 and the
vector (0, 1, 0, 0). Textbooks write it this way; Qiskit does the reverse.
"""
import numpy as np

from . import _tensor
from .gates import controlled

# single-qubit labels accepted by from_label
LABELS = {
    "0": (1, 0),
    "1": (0, 1),
    "+": (1 / np.sqrt(2), 1 / np.sqrt(2)),
    "-": (1 / np.sqrt(2), -1 / np.sqrt(2)),
    "r": (1 / np.sqrt(2), 1j / np.sqrt(2)),
    "l": (1 / np.sqrt(2), -1j / np.sqrt(2)),
}


class Statevector:
    def __init__(self, amplitudes):
        a = np.asarray(amplitudes, dtype=complex).ravel()
        n = int(round(np.log2(len(a))))
        if 2**n != len(a):
            raise ValueError(f"length {len(a)} is not a power of two")
        if not np.isclose(np.linalg.norm(a), 1):
            raise ValueError(f"not normalised: norm {np.linalg.norm(a):.6g}")
        self.n = n
        self._t = a.reshape((2,) * n)

    @classmethod
    def zeros(cls, n):
        a = np.zeros(2**n, dtype=complex)
        a[0] = 1
        return cls(a)

    @classmethod
    def from_label(cls, label):
        """A product state such as '01+-' (also 'r', 'l' for the ±i states)."""
        a = np.array([1], dtype=complex)
        for ch in label:
            a = np.kron(a, LABELS[ch])
        return cls(a)

    @classmethod
    def basis(cls, index, n):
        a = np.zeros(2**n, dtype=complex)
        a[index] = 1
        return cls(a)

    @property
    def vector(self):
        return self._t.reshape(-1).copy()

    def __array__(self, dtype=None, copy=None):
        return self.vector if dtype is None else self.vector.astype(dtype)

    def copy(self):
        s = Statevector.__new__(Statevector)
        s.n, s._t = self.n, self._t.copy()
        return s

    # ---------------- evolution ----------------

    def apply(self, u, *qubits):
        """Apply a 2^k × 2^k unitary to the listed qubits, in that order. Returns self."""
        self._t = _tensor.apply_matrix(self._t, u, qubits)
        return self

    def apply_controlled(self, u, controls, targets):
        return self.apply(controlled(u, len(controls)), *controls, *targets)

    def apply_permutation(self, perm, qubits, controls=()):
        """|y⟩ ↦ |perm[y]⟩ on a register — how classical reversible maps are applied."""
        self._t = _tensor.apply_permutation(self._t, perm, qubits, controls)
        return self

    def apply_oracle(self, f, inputs, outputs, controls=()):
        """The standard oracle |x⟩|y⟩ ↦ |x⟩|y ⊕ f(x)⟩ for any Python function f."""
        a, b = len(inputs), len(outputs)
        x, y = np.divmod(np.arange(2 ** (a + b)), 2**b)
        fx = np.array([f(int(v)) for v in range(2**a)])
        if fx.min() < 0 or fx.max() >= 2**b:
            raise ValueError(f"f takes values outside the {b}-bit output register")
        perm = x * 2**b + (y ^ fx[x])
        return self.apply_permutation(perm, list(inputs) + list(outputs), controls)

    # ---------------- reading it out ----------------

    def probabilities(self, qubits=None):
        """Outcome distribution of measuring the listed qubits (all, by default)."""
        p = np.abs(self._t) ** 2
        if qubits is None:
            return p.reshape(-1)
        return _tensor.register_probabilities(p, list(qubits))

    def measure(self, qubits=None, rng=None):
        """Measure in the computational basis, collapse, and return the outcome index."""
        qubits = list(range(self.n)) if qubits is None else list(qubits)
        rng = np.random.default_rng() if rng is None else rng
        p = self.probabilities(qubits)
        outcome = int(rng.choice(len(p), p=p / p.sum()))
        k = len(qubits)
        moved = np.moveaxis(self._t, qubits, list(range(k)))
        shape = moved.shape
        flat = moved.reshape(2**k, -1).copy()
        keep = flat[outcome].copy()
        flat[:] = 0
        flat[outcome] = keep / np.linalg.norm(keep)
        self._t = np.moveaxis(flat.reshape(shape), list(range(k)), qubits)
        return outcome

    def sample(self, shots, qubits=None, rng=None):
        """Counts of bitstrings from `shots` measurements, without collapsing this state."""
        rng = np.random.default_rng() if rng is None else rng
        p = self.probabilities(qubits)
        k = int(round(np.log2(len(p))))
        draws = rng.choice(len(p), size=shots, p=p / p.sum())
        values, counts = np.unique(draws, return_counts=True)
        return {format(int(v), f"0{k}b"): int(c) for v, c in zip(values, counts)}

    def expectation(self, op, *qubits):
        """⟨ψ|op|ψ⟩ with op acting on the listed qubits (all, if none are listed)."""
        qubits = qubits or tuple(range(self.n))
        phi = _tensor.apply_matrix(self._t, op, qubits)
        return complex(np.vdot(self._t, phi))

    def inner(self, other):
        """⟨self|other⟩."""
        return complex(np.vdot(self._t, other._t))

    def density_matrix(self):
        v = self.vector
        return np.outer(v, v.conj())

    def __repr__(self):
        v = self.vector
        terms = [(i, a) for i, a in enumerate(v) if abs(a) > 1e-9]
        shown = " + ".join(f"({a.real:+.4f}{a.imag:+.4f}j)|{i:0{self.n}b}⟩" for i, a in terms[:16])
        more = f" + … ({len(terms) - 16} more)" if len(terms) > 16 else ""
        return f"Statevector[{self.n}]: {shown}{more}"
