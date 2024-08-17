import express from 'express'
import { loginController, registerController } from '../controllers/authController.js';


const router = express.Router()

// http://localhost:3000/api/auth/register
router.post('/register', registerController)

// http://localhost:3000/api/auth/login
router.post('/login', loginController)





export default router;