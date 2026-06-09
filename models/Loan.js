import mongoose from 'mongoose';

const loanSchema = new mongoose.Schema({
  fechaPrestamo: { type: Date, default: Date.now }, // [cite: 19]
  fechaDevolucionEsperada: { type: Date, required: true },
  fechaDevuelto: { type: Date, default: null },
  estado: { type: String, enum: ['active', 'returned', 'overdue'], default: 'active' },
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  reader: { type: mongoose.Schema.Types.ObjectId, ref: 'Reader', required: true }
});

export default mongoose.model('Loan', loanSchema);