import express from 'express';

import AuthRouter from './Auth';
import RoleRouter from './Role';
import UserRouter from './User';

const router = express.Router();

router.get("/", (_, res: express.Response) => res.status(200))

router.use("/auth", AuthRouter);
router.use("/role", RoleRouter);
router.use("/user", UserRouter);

export default router;
