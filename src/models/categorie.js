import { Schema, model } from "mongoose";
const CategorieSchema = Schema({
    name: {
        type: String,
        required: [true, 'categories is required'],
        unique: true
    }
});
export default model('Categorie', CategorieSchema);