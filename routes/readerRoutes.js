import express from 'express';
import { createMember, getMembers } from '../controllers/readerController.js';

const router = express.Router();
router.post('/', createMember);
router.get('/', getMembers);

export default router;