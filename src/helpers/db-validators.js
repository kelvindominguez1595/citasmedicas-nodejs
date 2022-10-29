import bcryptjs from 'bcryptjs';
import {
    Categorie,
    User,
    Gender,
    Statu,
    Payment,
    Role,
    Reservation
} from '../models/index.js';

const encriptarPassword = async (password) => {
    const salt = bcryptjs.genSaltSync();
    const encript = bcryptjs.hashSync(password, salt);
    return encript;
}
/** Verificar si el correo existe */
const validarEmailExiste = async (email = '') => {
    const existEmail = await User.findOne({ email });
    if (existEmail) {
        throw new Error(`El correo ya existe: ${email}`);
    }
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
// para validar si existe el usuario a actualizar
const existeElUsuario = async (id) => {
    const existuser = await User.findById(id);
    if (!existuser) {
        throw new Error(`No existe el usuario con el UID:${id}`);
    }
}

// validos si el rol existe
const existeElRol = async (rol = '') => {
    const existRol = await Role.findOne({ rol })
    if (!existRol) {
        throw new Error(`Rol no existe!: ${rol}`)
    }
}

export {
    encriptarPassword,
    existCategoriaID,
    existCategoriaIDEnUsuario,
    existGenerosID,
    existEstadosID,
    existPagosID,
    validarEmailExiste,
    existeElUsuario,
    existeElRol
}