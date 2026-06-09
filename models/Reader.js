import mongoose from 'mongoose';

const readerSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    membresia: { type: String, enum: ['standard', 'premium'], default: 'standard' },
    activo: { type: Boolean, default: true }
});

export default mongoose.model('Reader', readerSchema);