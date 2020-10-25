import express from 'express';
import UserController from '../controllers/User';

const router = express.Router();

router.post("/create", UserController.create);

export default router;