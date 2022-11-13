import { Router } from "express";
import { check } from "express-validator";
import { login } from "../controllers/authController.js";
import validateInputs from "../middlewares/validations-inputs.js";

const authRouter = Router();
authRouter.post('/', [
    check('email', 'email is requierd').isEmail(),
    check('password', 'password is requierd').not().isEmpty(),
    validateInputs
], login);


export default authRouter;