import { Schema, model } from "mongoose";
const UserSchema = Schema({
    name: {
        type: String,
        required: [true, 'The field name is required']
    },
    lastname: {
        type: String,
        required: [true, 'The field lastname is required']
    },
    email: {
        type: String,
        required: [true, 'The field email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'The field password is required']
    },
    state: {
        type: Boolean,
        default: true
    },
    google: {
        type: Boolean,
        default: false
    },
    image: {
        type: String
    },
    birthday: {
        type: String
    },
    address: {
        type: String
    },
    phone: {
        type: String
    },
    rol: {
        type: String,
        required: [true, 'The field rol is required'],
        emun: ['ADMIN', 'DOCTOR', 'PATIENT']
    },
    gender: {
        type: Schema.Types.ObjectId,
        ref: 'Gender',
    },
    categorie: {
        type: Schema.Types.ObjectId,
        ref: 'Categorie',
    },
    created_at: {
        type: Date,
        required: [true, 'The field created at is required']
    }
});
export default model('User', UserSchema);