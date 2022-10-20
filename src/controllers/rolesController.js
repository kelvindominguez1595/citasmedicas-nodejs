import { response, request } from 'express';

const rolesController = {
    rolesGet: (async (req = request, res = response) => {
        res.json({ message: 'Response Get' });
    }),
    rolesPost: (async (req = request, res = response) => {
        res.json({ message: 'Response Post' });
    }),
    rolesPut: (async (req = request, res = response) => {
        res.json({ message: 'Response Put' });
    }),
    rolesDelete: (async (req = request, res = response) => {
        res.json({ message: 'Response Delete' });
    })
}

export default rolesController;