// src/routes/bookRoutes.js
import { getBooks, getBookById } from '../controllers/bookController.js';
import express from 'express';

const router = express.Router();

router.get('/', getBooks);
router.get('/:id', getBookById);

export default router;