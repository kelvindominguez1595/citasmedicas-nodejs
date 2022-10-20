import bcryptjs from 'bcryptjs';

const encriptPassword = async (password) => {
    const salt = bcryptjs.genSaltSync();
    const encript = bcryptjs.hashSync(password, salt);
    return encript;
}
export { encriptPassword }