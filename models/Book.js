import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    isbn: { type: String, required: true, unique: true },
    genero: { type: String, enum: ['fiction', 'non-fiction', 'sci-fi', 'history', 'other'] },
    anio: { type: Number },
    copiasDisponibles: { type: Number, default: 1 },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Author', required: true }
});

export default mongoose.model('Book', bookSchema);