import { response, request } from 'express';

const statusController = {
    statusGet: (async (req = request, res = response) => {
        res.json({ message: 'Response Get' });
    }),
    statusPost: (async (req = request, res = response) => {
        res.json({ message: 'Response Post' });
    }),
    statusPut: (async (req = request, res = response) => {
        res.json({ message: 'Response Put' });
    }),
    statusDelete: (async (req = request, res = response) => {
        res.json({ message: 'Response Delete' });
    })
}

export default statusController;