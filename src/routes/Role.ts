import express from 'express';
import RoleController from '../controllers/Role';

const router = express.Router();

router.post("/create", RoleController.create)

export default router;