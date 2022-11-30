import { response, request } from 'express';
import { encriptarPassword } from '../helpers/db-validators.js';
import { User } from '../models/index.js';
const usersController = {
    usersGet: (async (req = request, res = response) => {
        const usuario = await User.find()
            .populate('categorie', 'name')
            .populate('gender', 'name');
        res.json({ message: 'Success', usuario });
    }),
    userWhere: (async (req = request, res, response) => {
        const { rol } = req.params;
        const usuario = await User.find({ rol });
        res.json({ usuario });
    }),
    usersIDGet: (async (req = request, res = response) => {
        const { id } = req.params;
        const usuario = await User.findById(id);
        res.json({ message: 'Success', usuario });
    }),
    usersPost: (async (req = request, res = response) => {
        const { password, ...otros } = req.body;
        const usuario = new User(otros);
        const passEncrypt = await encriptarPassword(password);
        usuario.password = passEncrypt;
        await usuario.save();
        res.json({ message: 'Nuevo usuario creado correctamente' });
    }),
    usersPut: (async (req = request, res = response) => {
        const { id } = req.params;
        const { password, ...otros } = req.body;
        if (password) {
            const passEncrypt = await encriptarPassword(password);
            otros.password = passEncrypt;
        }
        const user = await User.findByIdAndUpdate(id, otros);
        res.json({ message: 'Actualizo usuario correctamente', user });
    }),
    usersDelete: (async (req = request, res = response) => {
        const { id } = req.params;
        const response = await User.findByIdAndDelete(id);
        res.json({ message: 'Usuario Borrado Correctamente', response });
    })
}

export default usersController;