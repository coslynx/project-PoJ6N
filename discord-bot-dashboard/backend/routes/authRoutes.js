import express from 'express';
import { login, logout, reLogin } from '../controllers/authController.js';

const router = express.Router();

router.post('/login', login);
router.post('/logout', logout);
router.post('/relogin', reLogin);

export default router;