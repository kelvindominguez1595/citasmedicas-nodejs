import { Router } from "express";
import { check } from "express-validator";
import gendersController from "../controllers/gendersController.js";
import { existGenerosID } from "../helpers/db-validators.js";
import validateInputs from "../middlewares/validations-inputs.js";

const gendersRouter = Router();

gendersRouter.get('/', gendersController.gendersGet);
gendersRouter.get('/generosid/:id', [
    check('id', 'El ID no es valido!').isMongoId(),
    validateInputs
], gendersController.gendersGet);
gendersRouter.post('/', [
    check('name', 'Nombre del genero es obligatorio').not().isEmpty(),
    check('name').custom(existGenerosID),
    validateInputs
], gendersController.gendersPost);
gendersRouter.put('/:id', [
    check('id', 'El ID no es valido!').isMongoId(),
    check('name', 'Nombre del genero es obligatorio').not().isEmpty(),
    validateInputs
], gendersController.gendersPut);
gendersRouter.delete('/:id', [
    check('id', 'El ID no es valido!').isMongoId(),
    validateInputs
], gendersController.gendersDelete);

export default gendersRouter;