import express from 'express';
import AuthController from '../controllers/AuthController';

const router = express.Router();

router.get("/signin", AuthController.signIn)

export default router;