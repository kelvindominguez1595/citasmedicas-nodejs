import { response, request } from 'express';

const categoriesController = {
    categoriesGet: (async (req = request, res = response) => {
        res.json({ message: 'Response Get' });
    }),
    categoriesPost: (async (req = request, res = response) => {
        res.json({ message: 'Response Post' });
    }),
    categoriesPut: (async (req = request, res = response) => {
        res.json({ message: 'Response Put' });
    }),
    categoriesDelete: (async (req = request, res = response) => {
        res.json({ message: 'Response Delete' });
    })
}

export default categoriesController;