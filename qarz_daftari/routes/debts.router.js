import { Router } from 'express'
const router = Router()
import { createDebt, getDebts, updateDebt, deleteDebt } from "../controllers/debtController.js"
import { authenticate } from "../middlewares/authMiddleware.js"

router.post('/', authenticate, createDebt);
router.get('/', authenticate, getDebts);
router.put('/:id', authenticate, updateDebt);
router.delete('/:id', authenticate, deleteDebt);

export default router