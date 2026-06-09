import Loan from '../models/Loan.js';
import Book from '../models/Book.js';

export const createLoan = async (req, res) => {
  try {
    const { fechaPrestamo, fechaDevolucionEsperada, book, reader } = req.body;
    
    // Validación de negocio [cite: 32]
    if (new Date(fechaDevolucionEsperada) <= new Date(fechaPrestamo)) {
      return res.status(400).json({ message: "La fecha de devolución debe ser posterior" });
    }

    const newLoan = await Loan.create(req.body);
    // Actualizar copias disponibles [cite: 59]
    await Book.findByIdAndUpdate(book, { $inc: { copiasDisponibles: -1 } });
    
    res.status(201).json(newLoan);
  } catch (error) {
    res.status(500).json({ error: error.message }); // [cite: 71]
  }
};