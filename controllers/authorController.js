import Author from '../models/Author.js';

export const getAuthors = async (req, res) => {
    try {
        const authors = await Author.find();
        res.status(200).json(authors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createAuthor = async (req, res) => {
    try {
        const newAuthor = await Author.create(req.body);
        res.status(201).json(newAuthor);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};