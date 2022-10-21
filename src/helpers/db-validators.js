import bcryptjs from 'bcryptjs';
import { Categorie, User } from '../models/index.js';

const encriptPassword = async (password) => {
    const salt = bcryptjs.genSaltSync();
    const encript = bcryptjs.hashSync(password, salt);
    return encript;
}

/** Para validar categoria existente */
const existCategoriaID = async (name) => {
    const existCategoria = await Categorie.findOne({ name });
    if (existCategoria) {
        throw new Error(`Esta categoria ya existe!!!`);
    }
}
const existCategoriaIDEnUsuario = async (id) => {
    const existUsuarioCategoria = await User.findOne({ categorie: id });
    if (existUsuarioCategoria) {
        throw new Error(`Esta categoría esta asignada a un usuario, asi que no se puede borrar`);
    }
}

export {
    encriptPassword,
    existCategoriaID,
    existCategoriaIDEnUsuario
}