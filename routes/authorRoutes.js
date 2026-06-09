import express from 'express';
import { getAuthors, createAuthor } from '../controllers/authorController.js';

const router = express.Router();

router.get('/', getAuthors);
router.post('/', createAuthor);

export default router;