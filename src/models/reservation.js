import { Schema, model } from "mongoose";

const ReservationSchema = Schema({
    title: {
        type: String,
        required: [true, 'The field title is required']
    },
    note: {
        type: String,
    },
    message: {
        type: String,
    },
    date: {
        type: String,
        required: [true, 'The field date is required']
    },
    time: {
        type: String,
        required: [true, 'The field date is required']
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    paciente: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    medicaments: {
        type: String,
    },
    price: {
        type: Number,
    },
    payment: {
        type: Schema.Types.ObjectId,
        ref: 'Payment',
    },
}, { timestamps: true });
export default model('Reservation', ReservationSchema);