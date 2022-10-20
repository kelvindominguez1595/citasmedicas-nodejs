import { response, request } from 'express';

const reservationsController = {
    reservationsGet: (async (req = request, res = response) => {
        res.json({ message: 'Response Get' });
    }),
    reservationsPost: (async (req = request, res = response) => {
        res.json({ message: 'Response Post' });
    }),
    reservationsPut: (async (req = request, res = response) => {
        res.json({ message: 'Response Put' });
    }),
    reservationsDelete: (async (req = request, res = response) => {
        res.json({ message: 'Response Delete' });
    })
}

export default reservationsController;