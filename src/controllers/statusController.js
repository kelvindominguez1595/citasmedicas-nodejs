import { response, request } from 'express';
import { Statu } from '../models/index.js';

const statusController = {
    statusGet: (async (req = request, res = response) => {
        const estados = await Statu.find();
        res.json({ message: "Success", estados });
    }),

    statusIDGet: (async (req = request, res = response) => {
        const { id } = req.params;
        const estado = await Statu.findById(id);
        res.json({ message: "Success", estado });
    }),

    statusPost: (async (req = request, res = response) => {
        const { name } = req.body;
        const data = new Statu({ name });
        try {
            await data.save();
            res.json({ message: 'Guardado correctamente' });
        } catch (error) {
            res.status(400).json({ message: 'Ocurrio un error!!' });
        }
    }),
    statusPut: (async (req = request, res = response) => {
        const { id } = req.params;
        const { ...name } = req.body;
        try {
            await Statu.findByIdAndUpdate(id, name);
            res.json({ message: 'Actualizado correctamente' });
        } catch (error) {
            res.status(400).json({ message: 'Ocurrio un error!!' });
        }
    }),
    statusDelete: (async (req = request, res = response) => {
        const { id } = req.params;
        try {
            await Statu.findByIdAndDelete(id);
            res.json({ message: 'Borrado Correctamente' });
        } catch (error) {
            res.status(400).json({ message: 'Ocurrio un error!!' });
        }
    })
}

export default statusController;