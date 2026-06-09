import Book from '../models/Book.js';

export const getBooks = async (req, res) => {
    try {
        const { genre, author } = req.query;
        let query = {};
        if (genre) query.genero = genre;
        if (author) query.author = author;

        const books = await Book.find(query).populate('author');
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};