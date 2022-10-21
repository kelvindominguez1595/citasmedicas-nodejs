import { response, request } from 'express';
import { Gender } from '../models/index.js';

const gendersController = {
    gendersGet: (async (req = request, res = response) => {
        const generos = await Gender.find();
        res.json({ message: "Success", generos });
    }),
    gendersIDGet: (async (req = request, res = response) => {
        const { id } = req.params;
        const genero = await Gender.findById(id);
        res.json({ message: "Success", genero });
    }),
    gendersPost: (async (req = request, res = response) => {
        const { name } = req.body;
        const data = new Gender({ name });
        try {
            await data.save();
            res.json({ message: 'Guardado correctamente' });
        } catch (error) {
            res.status(400).json({ message: 'Ocurrio un error!!' });
        }
    }),
    gendersPut: (async (req = request, res = response) => {
        const { id } = req.params;
        const { ...name } = req.body;
        try {
            await Gender.findByIdAndUpdate(id, name);
            res.json({ message: 'Actualizado correctamente' });
        } catch (error) {
            res.status(400).json({ message: 'Ocurrio un error!!' });
        }
    }),
    gendersDelete: (async (req = request, res = response) => {
        const { id } = req.params;
        try {
            await Gender.findByIdAndDelete(id);
            res.json({ message: 'Borrado Correctamente' });
        } catch (error) {
            res.status(400).json({ message: 'Ocurrio un error!!' });
        }
    })
}

export default gendersController;