import { Router } from "express";
import { check } from "express-validator";
import paymentsController from "../controllers/paymentsController.js";
import { existPagosID } from "../helpers/db-validators.js";

import validateInputs from "../middlewares/validations-inputs.js";
import validationsJWT from "../middlewares/validations-jwt.js";

const paymentsRouter = Router();

paymentsRouter.get('/', [
    validationsJWT
], paymentsController.paymentsGet);
paymentsRouter.post('/', [
    validationsJWT,
    check('name', 'Nombre del pago es obligatorio').not().isEmpty(),
    check('name').custom(existPagosID),
    validateInputs
], paymentsController.paymentsPost);

paymentsRouter.put('/:id', [
    validationsJWT,
    check('id', 'El ID no es valido!').isMongoId(),
    check('name', 'Nombre del pago es obligatorio').not().isEmpty(),
    validateInputs
], paymentsController.paymentsPut);
paymentsRouter.delete('/:id', [
    validationsJWT,
    check('id', 'El ID no es valido!').isMongoId(),
    validateInputs
], paymentsController.paymentsDelete);

export default paymentsRouter;