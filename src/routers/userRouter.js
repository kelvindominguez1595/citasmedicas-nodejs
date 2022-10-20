
import { Router } from "express";
import usersController from "../controllers/usersController.js";

const userRouter = Router();

userRouter.get('/', usersController.usersGet);
userRouter.post('/', usersController.usersPost);
userRouter.put('/:id', usersController.usersPut);
userRouter.delete('/:id', usersController.usersDelete);

export default userRouter;