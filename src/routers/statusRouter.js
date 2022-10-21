import { Router } from "express";
import { check } from "express-validator";

import statusController from "../controllers/statusController.js";
import { existEstadosID } from "../helpers/db-validators.js";
import validateInputs from "../middlewares/validations-inputs.js";


const statusRouter = Router();

statusRouter.get('/', statusController.statusGet);
statusRouter.post('/', [
    check('name', 'Nombre del estado es obligatorio').not().isEmpty(),
    check('name').custom(existEstadosID),
    validateInputs
], statusController.statusPost);
statusRouter.put('/:id', [
    check('id', 'El ID no es valido!').isMongoId(),
    check('name', 'Nombre del estado es obligatorio').not().isEmpty(),
    validateInputs
], statusController.statusPut);
statusRouter.delete('/:id', [
    check('id', 'El ID no es valido!').isMongoId(),
    validateInputs
], statusController.statusDelete);

export default statusRouter;