import express from 'express';
import { getBooks, getBookById } from '../controllers/bookController.js';

const router = express.Router();

router.get('/', getBooks); // [cite: 41]
router.get('/:id', getBookById); // [cite: 41]

export default router;