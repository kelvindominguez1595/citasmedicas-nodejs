import { response, request } from 'express';
import { Reservation } from '../models/index.js';

const reservationsController = {
    reservationsGet: (async (req = request, res = response) => {
        const reservaciones = await Reservation.find()
            .populate('user', ['name', 'lastname'])
            .populate('paciente', 'name');
        res.json({ message: 'Success', reservaciones });
    }),
    reservationsUIDGet: (async (req = request, res = response) => {
        const { id } = req.params;
        const reservation = await Reservation.findById(id)
            .populate('user', ['name', 'lastname'])
            .populate('paciente', 'name');
        res.json({ message: 'Success', reservation });
    }),
    reservationsGetDoctor: (async (req = request, res = response) => {
        const { id } = req.params
        const reservaciones = await Reservation.find({ user: id })
            .populate('user', ['name', 'lastname'])
            .populate('paciente', 'name');
        const cantidadPacientes = reservaciones.length;
        res.json({ message: 'Success', reservaciones, cantidadPacientes });
    }),
    reservationsPost: (async (req = request, res = response) => {
        const { date, time, ...otros } = req.body;
        const existeReservacion = await Reservation.findOne({ date, time });
        if (existeReservacion) {
            res.status(401).json({ message: `La feacha ${date} y hora ${time} ya estan registradas` });
        } else {
            try {
                otros.date = date;
                otros.time = time;
                const reservaciones = new Reservation(otros);
                await reservaciones.save();
                res.status(200).json({ message: 'Nueva reservación creada correctame' });
            } catch (error) {
                console.log(error);
                res.status(401).json({ message: 'Ocurrio un problema' });
            }

        }
    }),
    reservationsPut: (async (req = request, res = response) => {
        const { id } = req.params;
        const body = req.body;
        const { date, time } = body;
        const existeReservacion = await Reservation.findOne({ date, time });
        if (existeReservacion) {
            res.status(401).json({ message: `La feacha ${date} y hora ${time} ya estan registradas` });
        } else {
            try {
                await Reservation.findByIdAndUpdate(id, body);
                res.status(200).json({ message: 'Actualizo la reservación correctame' });
            } catch (error) {
                res.status(401).json({ message: 'Ocurrio un problema' });
            }
        }
    }),
    reservationsDelete: (async (req = request, res = response) => {
        const { id } = req.params;
        const response = await Reservation.findByIdAndDelete(id);
        res.json({ message: 'borrado correctamente', response });
    }),
    horasConsultas: ((req = request, res = response) => {
        let horas = [
            "7:00 AM",
            "8:00 AM",
            "9:00 AM",
            "10:00 AM",
            "11:00 AM",
            "1:00 PM",
            "2:00 PM",
            "3:00 PM",
            "4:00 PM",
        ];
        res.json({ horas });
    })
}

export default reservationsController;