
import { Router } from "express";
import { check } from "express-validator";
import usersController from "../controllers/usersController.js";
import { validarEmailExiste } from "../helpers/db-validators.js";
import validateInputs from "../middlewares/validations-inputs.js";

const userRouter = Router();

userRouter.get('/', usersController.usersGet);
userRouter.post('/', [
    check('name', 'el nombre es requerido').notEmpty(),
    check('lastname', 'el apellido es requerido').notEmpty(),
    check('password', 'Contraseña es requerida').notEmpty(),
    check('password', 'Contraseña debe ser mayor o igual a 6').isLength({ min: 6 }),
    check('email', "Email no es valido").isEmail(),
    check('email').custom(validarEmailExiste),
    validateInputs
], usersController.usersPost);
userRouter.put('/:id', usersController.usersPut);
userRouter.delete('/:id', usersController.usersDelete);

export default userRouter;