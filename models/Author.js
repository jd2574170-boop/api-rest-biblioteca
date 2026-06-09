import mongoose from 'mongoose';

const roomSchema = new mongoose.Schema({
    titulo: String,
    isbn: { type: String, unique: true, required: true },
    genero: { type: String, enum: ['fiction', 'non-fiction', 'sci-fi', 'history', 'other'] },
    copiasDisponibles: Number
});

export default mongoose.model('Room', roomSchema);