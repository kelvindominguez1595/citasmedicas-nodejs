import { request, response } from "express";
import jwt from 'jsonwebtoken';

import { User } from '../models/index.js';

const validationsJWT = async (req = request, res = response, next) => {
    // creamos nuestro header propio
    const token = req.header('token-app');
    if (!token) {
        return res.status(401).json({ message: 'Oops! esta tratando de utilizar esta API REST sin autenficacion.' })
    }

    try {
        const { uid } = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findById(uid);
        if (!user) {
            return res.status(401).json({ message: 'No existe el usuario' });
        }

        if (!user.state) {
            return res.status(401).json({ message: 'El token no es valido!' })
        }
        req.user = user;
        req.uid = uid;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Oops! esta tratando de utilizar esta API REST sin autenficacion.' });
    }
}

export default validationsJWT;