import { Router } from "express";
import gendersController from "../controllers/gendersController.js";

const gendersRouter = Router();

gendersRouter.get('/', gendersController.gendersGet);
gendersRouter.post('/', gendersController.gendersPost);
gendersRouter.put('/:id', gendersController.gendersPut);
gendersRouter.delete('/:id', gendersController.gendersDelete);

export default gendersRouter;