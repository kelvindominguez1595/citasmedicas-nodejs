import { Double } from "bson";
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
        type: Date,
        required: [true, 'The field date is required']
    },
    time: {
        type: Number,
        default: true
    },
    user: {
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
    created_at: {
        type: Date,
        required: [true, 'The field created at is required']
    }
});
export default model('Reservation', ReservationSchema);