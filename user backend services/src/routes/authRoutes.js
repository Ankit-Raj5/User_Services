import express from 'express';
import { register, login, forgetPassword } from '../controllers/authController.js';

const router = express.Router();

router.post('/signup', register);
router.post('/login', login);
router.post('/forget-password', forgetPassword);

export default router;
