"""qclib — the quantum computing course's optional referee.

A small simulator for checking hand calculations: pure states (Statevector),
mixed states (DensityMatrix), circuits, channels, and the linear algebra the
course keeps asking about. NumPy only. Nothing in the course requires it.
"""
from . import channels, gates, library, linalg
from .circuit import Circuit
from .density import DensityMatrix
from .statevector import Statevector

__all__ = ["Circuit", "DensityMatrix", "Statevector", "channels", "gates", "library", "linalg"]
