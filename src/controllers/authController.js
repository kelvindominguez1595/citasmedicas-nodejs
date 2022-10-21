import { request, response } from "express";
import bcryptjs from 'bcryptjs';
import { User } from '../models/index.js';
import { generarJWT } from '../helpers/generar-JWT.js';

const login = async (req = request, res = response) => {
    const { email, password } = req.body;
    try {
        // verified email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Usuario y contraseña incorrectos' });
        }
        // verified user
        if (!user.state) {
            return res.status(400).json({ message: 'Usuario y contraseña es incorrectos' });
        }
        // verifid password
        const validatepassword = bcryptjs.compareSync(password, user.password);
        if (!validatepassword) {
            return res.status(400).json({ message: 'Usuario y contraseña es incorrectos' });
        }
        // generate JWT
        const token = await generarJWT(user.id);
        res.json({ message: 'Success!', user, token });
    } catch (error) {
        return res.status(500).json({ message: "Ocurrio un error en el servidor!" })
    }
}

export { login }