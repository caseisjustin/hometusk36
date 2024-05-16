import { Router } from 'express'
const router = Router()
import { createDebt } from "../controllers/debtController.js"
import { authenticate } from "../middlewares/authMiddleware.js"

router.post('/', authenticate, createDebt);
router.get('/', authMiddleware.authenticate, debtController.getDebts);
router.put('/:id', authMiddleware.authenticate, debtController.updateDebt);
router.delete('/:id', authMiddleware.authenticate, debtController.deleteDebt);

export default router