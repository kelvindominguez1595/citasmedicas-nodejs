import { response, request } from 'express';

const paymentsController = {
    paymentsGet: (async (req = request, res = response) => {
        res.json({ message: 'Response Get' });
    }),
    paymentsPost: (async (req = request, res = response) => {
        res.json({ message: 'Response Post' });
    }),
    paymentsPut: (async (req = request, res = response) => {
        res.json({ message: 'Response Put' });
    }),
    paymentsDelete: (async (req = request, res = response) => {
        res.json({ message: 'Response Delete' });
    })
}

export default paymentsController;