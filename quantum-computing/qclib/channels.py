"""Single-qubit noise as Kraus operators, and the checks unit 20 proves things about."""
import numpy as np

from . import linalg
from .gates import I, X, Y, Z


def bit_flip(p):
    return [np.sqrt(1 - p) * I, np.sqrt(p) * X]


def phase_flip(p):
    return [np.sqrt(1 - p) * I, np.sqrt(p) * Z]


def depolarizing(p):
    """ρ ↦ (1 − p)ρ + (p/3)(XρX + YρY + ZρZ): each Pauli error with probability p/3."""
    return [np.sqrt(1 - p) * I] + [np.sqrt(p / 3) * P for P in (X, Y, Z)]


def amplitude_damping(gamma):
    """Energy loss |1⟩ → |0⟩ with probability γ; over time t, γ = 1 − e^{−t/T₁}."""
    return [np.array([[1, 0], [0, np.sqrt(1 - gamma)]], dtype=complex),
            np.array([[0, np.sqrt(gamma)], [0, 0]], dtype=complex)]


def phase_damping(lam):
    """Loss of coherence without loss of energy: off-diagonals scale by √(1 − λ)."""
    return [np.array([[1, 0], [0, np.sqrt(1 - lam)]], dtype=complex),
            np.array([[0, 0], [0, np.sqrt(lam)]], dtype=complex)]


def is_trace_preserving(kraus, atol=linalg.ATOL):
    d = len(kraus[0])
    return np.allclose(sum(linalg.dagger(k) @ k for k in kraus), np.eye(d), atol=atol)


def choi(kraus):
    """The Choi matrix Σ_ij |i⟩⟨j| ⊗ Φ(|i⟩⟨j|); Φ is completely positive iff it is PSD."""
    d = len(kraus[0])
    out = np.zeros((d * d, d * d), dtype=complex)
    for i in range(d):
        for j in range(d):
            e = np.zeros((d, d), dtype=complex)
            e[i, j] = 1
            out += np.kron(e, sum(k @ e @ linalg.dagger(k) for k in kraus))
    return out


def choi_of_map(phi, d):
    """Choi matrix of any linear map given as a Python function on d × d matrices."""
    out = np.zeros((d * d, d * d), dtype=complex)
    for i in range(d):
        for j in range(d):
            e = np.zeros((d, d), dtype=complex)
            e[i, j] = 1
            out += np.kron(e, phi(e))
    return out
