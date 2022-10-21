import { response, request } from 'express';
import { Payment } from '../models/index.js';

const paymentsController = {
    paymentsGet: (async (req = request, res = response) => {
        const payments = await Payment.find();
        res.json({ message: "Success", payments });
    }),
    paymentsIDGet: (async (req = request, res = response) => {
        const { id } = req.params;
        const pago = await Payment.findById(id);
        res.json({ message: "Success", pago });
    }),
    paymentsPost: (async (req = request, res = response) => {
        const { name } = req.body;
        const data = new Payment({ name });
        try {
            await data.save();
            res.json({ message: 'Guardado correctamente' });
        } catch (error) {
            res.status(400).json({ message: 'Ocurrio un error!!' });
        }
    }),
    paymentsPut: (async (req = request, res = response) => {
        const { id } = req.params;
        const { ...name } = req.body;
        try {
            await Payment.findByIdAndUpdate(id, name);
            res.json({ message: 'Actualizado correctamente' });
        } catch (error) {
            res.status(400).json({ message: 'Ocurrio un error!!' });
        }
    }),
    paymentsDelete: (async (req = request, res = response) => {
        const { id } = req.params;
        try {
            await Payment.findByIdAndDelete(id);
            res.json({ message: 'Borrado Correctamente' });
        } catch (error) {
            res.status(400).json({ message: 'Ocurrio un error!!' });
        }
    })
}

export default paymentsController;