import { Router } from "express";
import { check } from "express-validator";

import statusController from "../controllers/statusController.js";
import { existEstadosID } from "../helpers/db-validators.js";
import validateInputs from "../middlewares/validations-inputs.js";
import validationsJWT from "../middlewares/validations-jwt.js";


const statusRouter = Router();

statusRouter.get('/', [
    validationsJWT
], statusController.statusGet);
statusRouter.post('/', [
    validationsJWT,
    check('name', 'Nombre del estado es obligatorio').not().isEmpty(),
    check('name').custom(existEstadosID),
    validateInputs
], statusController.statusPost);
statusRouter.put('/:id', [
    validationsJWT,
    check('id', 'El ID no es valido!').isMongoId(),
    check('name', 'Nombre del estado es obligatorio').not().isEmpty(),
    validateInputs
], statusController.statusPut);
statusRouter.delete('/:id', [
    validationsJWT,
    check('id', 'El ID no es valido!').isMongoId(),
    validateInputs
], statusController.statusDelete);

export default statusRouter;