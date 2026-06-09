// src/controllers/bookController.js

export const getBooks = async (req, res) => {
    // Lógica para obtener todos los libros
    res.json({ message: "Lista de libros" });
};

export const getBookById = async (req, res) => {
    // Lógica para obtener un libro por ID
    res.json({ message: "Detalle del libro" });
};