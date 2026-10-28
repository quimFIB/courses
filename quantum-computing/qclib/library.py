"""Definitions to check your circuits against — the object, not a circuit for it.

The referee deliberately ships no QFT circuit, no Grover iteration and no
modular multiplier: building those is the work of units 15–17. It ships what
they must equal.
"""
import numpy as np


def qft_matrix(n):
    """The Fourier transform on ℤ_{2^n}: F_{jk} = ω^{jk}/√N with ω = e^{2πi/N}."""
    N = 2**n
    j, k = np.meshgrid(np.arange(N), np.arange(N), indexing="ij")
    return np.exp(2j * np.pi * j * k / N) / np.sqrt(N)


def multiply_mod(a, N, n):
    """The permutation |y⟩ ↦ |a·y mod N⟩ for y < N, identity above — Shor's oracle (unit 16)."""
    if np.gcd(a, N) != 1:
        raise ValueError(f"{a} is not invertible mod {N}")
    if N > 2**n:
        raise ValueError(f"{N} does not fit in {n} qubits")
    y = np.arange(2**n)
    return np.where(y < N, (a * y) % N, y)


def bell_state(which="phi+"):
    s = 1 / np.sqrt(2)
    return {"phi+": np.array([s, 0, 0, s]), "phi-": np.array([s, 0, 0, -s]),
            "psi+": np.array([0, s, s, 0]), "psi-": np.array([0, s, -s, 0])}[which].astype(complex)
