
import { Router } from "express";
import { check } from "express-validator";
import usersController from "../controllers/usersController.js";
import { existeElRol, existeElUsuario, validarEmailExiste } from "../helpers/db-validators.js";
import validateInputs from "../middlewares/validations-inputs.js";
import validationsJWT from "../middlewares/validations-jwt.js";

const userRouter = Router();

userRouter.get('/', [
    validationsJWT
], usersController.usersGet);

userRouter.get('/usuarioid/:id', [
    validationsJWT,
    check('id', 'Is no valid ID').isMongoId(),
], usersController.usersIDGet);

userRouter.get('/pacientes/:rol', [
    validationsJWT,
    check('rol', 'rol es requerido').notEmpty(),
], usersController.userWhere);

userRouter.post('/', [
    validationsJWT,
    check('name', 'el nombre es requerido').notEmpty(),
    check('lastname', 'el apellido es requerido').notEmpty(),
    check('password', 'Contraseña es requerida').notEmpty(),
    check('password', 'Contraseña debe ser mayor o igual a 6').isLength({ min: 6 }),
    check('email', "Email no es valido").isEmail(),
    check('email').custom(validarEmailExiste),
    validateInputs
], usersController.usersPost);
userRouter.put('/:id', [
    validationsJWT,
    check('id', 'Is no valid ID').isMongoId(),
    check('id').custom(existeElUsuario),
    check('rol').custom(existeElRol),
    validateInputs
], usersController.usersPut);
userRouter.delete('/:id', [
    validationsJWT,
    check('id', 'Is no valid ID').isMongoId(),
], usersController.usersDelete);

export default userRouter;