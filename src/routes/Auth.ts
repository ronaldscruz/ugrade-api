import express from 'express';
import AuthController from '../controllers/Auth';

const router = express.Router();

router.post("/signin", AuthController.signIn)

export default router;