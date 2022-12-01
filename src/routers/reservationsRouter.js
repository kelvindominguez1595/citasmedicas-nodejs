import { Router } from "express";
import { check } from "express-validator";
import reservationsController from "../controllers/reservationsController.js";
import validateInputs from "../middlewares/validations-inputs.js";
import validationsJWT from "../middlewares/validations-jwt.js";

const reservationsRouter = Router();

reservationsRouter.get('/', [
    validationsJWT
], reservationsController.reservationsGet);

reservationsRouter.get('/horadeconsultas', [
    validationsJWT
], reservationsController.horasConsultas);
reservationsRouter.get('/pacientesdoctor/:id', reservationsController.reservationsGetDoctor);
reservationsRouter.get('/reservationuid/:id', reservationsController.reservationsUIDGet);
reservationsRouter.post('/', [
    validationsJWT,
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('date', 'la fecha es obligatoria').not().isEmpty(),
    check('time', 'la fecha es obligatoria').not().isEmpty(),
    check('user', 'Usuario UID no es valido').isMongoId(),
    check('paciente', 'Paciente UID no es valido').isMongoId(),
    validateInputs
], reservationsController.reservationsPost);
reservationsRouter.put('/:id', [
    validationsJWT,
    check('id', 'UID no es valido').isMongoId(),
    check('title', 'El titulo es obligatorio').not().isEmpty(),
    check('date', 'la fecha es obligatoria').not().isEmpty(),
    check('time', 'la fecha es obligatoria').not().isEmpty(),
    check('user', 'Usuario UID no es valido').isMongoId(),
    check('paciente', 'Paciente UID no es valido').isMongoId(),
    validateInputs
], reservationsController.reservationsPut);
reservationsRouter.delete('/:id', [
    validationsJWT,
    check('id', 'UID no es valido').isMongoId(),
    validateInputs
], reservationsController.reservationsDelete);

export default reservationsRouter;