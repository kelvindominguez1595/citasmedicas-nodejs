import bcryptjs from 'bcryptjs';
import { Categorie, User, Gender, Statu, Payment } from '../models/index.js';

const encriptPassword = async (password) => {
    const salt = bcryptjs.genSaltSync();
    const encript = bcryptjs.hashSync(password, salt);
    return encript;
}

/** Para validar categoria existente */
const existCategoriaID = async (name) => {
    const data = await Categorie.findOne({ name });
    if (data) {
        throw new Error(`Esta categoria ya existe!!!`);
    }
}
const existGenerosID = async (name) => {
    const data = await Gender.findOne({ name });
    if (data) {
        throw new Error(`El nombre del genero ya existe!!!`);
    }
}

const existEstadosID = async (name) => {
    const data = await Statu.findOne({ name });
    if (data) {
        throw new Error(`El nombre del estado ya existe!!!`);
    }
}
const existPagosID = async (name) => {
    const data = await Payment.findOne({ name });
    if (data) {
        throw new Error(`El nombre de pago ya existe!!!`);
    }
}
const existCategoriaIDEnUsuario = async (id) => {
    const data = await User.findOne({ categorie: id });
    if (data) {
        throw new Error(`Esta categoría esta asignada a un usuario, asi que no se puede borrar`);
    }
}

export {
    encriptPassword,
    existCategoriaID,
    existCategoriaIDEnUsuario,
    existGenerosID,
    existEstadosID,
    existPagosID
}