import { Router } from "express";
import { check } from "express-validator";
import reservationsController from "../controllers/reservationsController.js";
import validateInputs from "../middlewares/validations-inputs.js";

const reservationsRouter = Router();

reservationsRouter.get('/', reservationsController.reservationsGet);
reservationsRouter.post('/', [
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('date', 'la fecha es obligatoria').not().isEmpty(),
    check('time', 'la fecha es obligatoria').not().isEmpty(),
    check('user', 'Usuario UID no es valido').isMongoId(),
    check('paciente', 'Paciente UID no es valido').isMongoId(),
    validateInputs
], reservationsController.reservationsPost);
reservationsRouter.put('/:id', [
    check('id', 'UID no es valido').isMongoId(),
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('date', 'la fecha es obligatoria').not().isEmpty(),
    check('time', 'la fecha es obligatoria').not().isEmpty(),
    check('user', 'Usuario UID no es valido').isMongoId(),
    check('paciente', 'Paciente UID no es valido').isMongoId(),
    validateInputs
], reservationsController.reservationsPut);
reservationsRouter.delete('/:id', [
    check('id', 'UID no es valido').isMongoId(),
    validateInputs
], reservationsController.reservationsDelete);

export default reservationsRouter;