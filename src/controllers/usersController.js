import { response, request } from 'express';

const usersController = {
    usersGet: (async (req = request, res = response) => {
        res.json({ message: 'Response Get' });
    }),
    usersPost: (async (req = request, res = response) => {
        res.json({ message: 'Response Post' });
    }),
    usersPut: (async (req = request, res = response) => {
        res.json({ message: 'Response Put' });
    }),
    usersDelete: (async (req = request, res = response) => {
        res.json({ message: 'Response Delete' });
    })
}

export default usersController;