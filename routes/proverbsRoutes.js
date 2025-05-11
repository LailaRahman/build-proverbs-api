import express from 'express';
import {
  getAllProverbs,
  getProverbById,
  addProverb,
  updateProverb,
  deleteProverb
} from '../controllers/proverbsController.js';

const router = express.Router();

router.get('/', getAllProverbs);
router.get('/:id', getProverbById);
router.post('/', addProverb);
router.put('/:id', updateProverb);
router.delete('/:id', deleteProverb);

export default router;
