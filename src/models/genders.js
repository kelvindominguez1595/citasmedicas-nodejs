import { Schema, model } from "mongoose";
const GenderSchema = Schema({
    gender: {
        type: String,
        required: [true, 'gender is required']
    }
});
export default model('Gender', GenderSchema);