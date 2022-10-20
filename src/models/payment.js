import { Schema, model } from "mongoose";
const PaymentSchema = Schema({
    name: {
        type: String,
        required: [true, 'payment is required']
    }
});
export default model('Payment', PaymentSchema);