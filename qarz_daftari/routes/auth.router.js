import { Router } from "express";


const router = Router()


// router.use("/auth/register")

export default router;

const authController = require('../controllers/authController');
import authController from "../controllers/"

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;