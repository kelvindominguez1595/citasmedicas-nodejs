import { Router } from "express";
import { check } from "express-validator";
import paymentsController from "../controllers/paymentsController.js";
import { existCategoriaID, existCategoriaIDEnUsuario } from "../helpers/db-validators.js";

import validateInputs from "../middlewares/validations-inputs.js";

const paymentsRouter = Router();

paymentsRouter.get('/', paymentsController.paymentsGet);
paymentsRouter.post('/', [
    check('name', 'Nombre de categoria es obligatorio').not().isEmpty(),
    check('name').custom(existCategoriaID),
    validateInputs
], paymentsController.paymentsPost);

paymentsRouter.put('/:id', [
    check('id', 'El ID no es valido!').isMongoId(),
    check('name', 'Nombre de categoria es obligatorio').not().isEmpty(),
    validateInputs
], paymentsController.paymentsPut);
paymentsRouter.delete('/:id', [
    check('id', 'El ID no es valido!').isMongoId(),
    check('id').custom(existCategoriaIDEnUsuario),
    validateInputs
], paymentsController.paymentsDelete);

export default paymentsRouter;