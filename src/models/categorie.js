import { Schema, model } from "mongoose";
const CategorieSchema = Schema({
    name: {
        type: String,
        required: [true, 'categories is required']
    }
});
export default model('Categorie', CategorieSchema);