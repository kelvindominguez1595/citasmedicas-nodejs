import { Router } from "express";
import { check } from "express-validator";
import categoriesController from "../controllers/categoriesController.js";
import { existCategoriaID, existCategoriaIDEnUsuario } from "../helpers/db-validators.js";
import validateInputs from "../middlewares/validations-inputs.js";
import validationsJWT from "../middlewares/validations-jwt.js";

const categoriesRouter = Router();
categoriesRouter.get('/', [
    validationsJWT
], categoriesController.categoriesGet);
categoriesRouter.get('/categoriaid/:id', [
    validationsJWT,
    check('id', 'El ID no es valido!').isMongoId(),
    validateInputs
], categoriesController.categoriesIDGet);
categoriesRouter.post('/', [
    validationsJWT,
    check('name', 'Nombre de categoria es obligatorio').not().isEmpty(),
    check('name').custom(existCategoriaID),
    validateInputs
], categoriesController.categoriesPost);
categoriesRouter.put('/:id', [
    validationsJWT,
    check('id', 'El ID no es valido!').isMongoId(),
    check('name', 'Nombre de categoria es obligatorio').not().isEmpty(),
    validateInputs
], categoriesController.categoriesPut);
categoriesRouter.delete('/:id', [
    validationsJWT,
    check('id', 'El ID no es valido!').isMongoId(),
    check('id').custom(existCategoriaIDEnUsuario),
    validateInputs
], categoriesController.categoriesDelete);

export default categoriesRouter;