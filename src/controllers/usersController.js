import { response, request } from 'express';
import { encriptarPassword } from '../helpers/db-validators.js';
import { User } from '../models/index.js';
const usersController = {
    usersGet: (async (req = request, res = response) => {
        res.json({ message: 'Response Get' });
    }),
    usersPost: (async (req = request, res = response) => {

        const {
            name,
            lastname,
            email,
            password,
            image,
            birthday,
            address,
            phone,
            rol,
            gender,
            categorie
        } = req.body;
        const usuario = new User({
            name,
            lastname,
            email,
            password,
            image,
            birthday,
            address,
            phone,
            rol,
            gender,
            categorie
        });
        const passEncrypt = await encriptarPassword(password);
        usuario.password = passEncrypt;
        await usuario.save();
        res.json({ message: 'Nuevo usuario creado correctamente' });
    }),
    usersPut: (async (req = request, res = response) => {
        res.json({ message: 'Response Put' });
    }),
    usersDelete: (async (req = request, res = response) => {
        res.json({ message: 'Response Delete' });
    })
}

export default usersController;