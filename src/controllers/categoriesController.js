import { request, response } from 'express';
import { Categorie } from '../models/index.js';

const categoriesController = {
    categoriesGet: (async (req = request, res = response) => {
        const categories = await Categorie.find();
        res.json({ message: "Success", categories });
    }),

    categoriesIDGet: (async (req = request, res = response) => {
        const { id } = req.params;
        const categoria = await Categorie.findById(id);
        res.json({ message: "Success", categoria });
    }),

    categoriesPost: (async (req = request, res = response) => {
        const { name } = req.body;
        const categorias = new Categorie({ name });
        try {
            await categorias.save();
            res.json({ message: 'Guardado correctamente' });
        } catch (error) {
            res.status(400).json({ message: 'Ocurrio un error!!' });
        }
    }),
    categoriesPut: (async (req = request, res = response) => {
        const { id } = req.params;
        const { ...name } = req.body;
        try {
            await Categorie.findByIdAndUpdate(id, name);
            res.json({ message: 'Actualizado correctamente' });
        } catch (error) {
            res.status(400).json({ message: 'Ocurrio un error!!' });
        }
    }),
    categoriesDelete: (async (req = request, res = response) => {
        const { id } = req.params;
        try {
            await Categorie.findByIdAndDelete(id);
            res.json({ message: 'Borrado Correctamente' });
        } catch (error) {
            res.status(400).json({ message: 'Ocurrio un error!!' });
        }
    })
}

export default categoriesController;