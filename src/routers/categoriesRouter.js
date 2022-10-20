import { Router } from "express";
import categoriesController from "../controllers/categoriesController";

const categoriesRouter = Router();

categoriesRouter.get('/', categoriesController.categoriesGet);
categoriesRouter.post('/', categoriesController.categoriesPost);
categoriesRouter.put('/:id', categoriesController.categoriesPut);
categoriesRouter.delete('/:id', categoriesController.categoriesDelete);

export default categoriesRouter;