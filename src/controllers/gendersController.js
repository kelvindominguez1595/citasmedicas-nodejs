import { response, request } from 'express';

const gendersController = {
    gendersGet: (async (req = request, res = response) => {
        res.json({ message: 'Response Get' });
    }),
    gendersPost: (async (req = request, res = response) => {
        res.json({ message: 'Response Post' });
    }),
    gendersPut: (async (req = request, res = response) => {
        res.json({ message: 'Response Put' });
    }),
    gendersDelete: (async (req = request, res = response) => {
        res.json({ message: 'Response Delete' });
    })
}

export default gendersController;