import { Schema, model } from "mongoose";
const StatusSchema = Schema({
    name: {
        type: String,
        required: [true, 'status is required']
    }
});
export default model('Statu', StatusSchema);