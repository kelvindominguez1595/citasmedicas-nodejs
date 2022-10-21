import jwt from "jsonwebtoken";

const generarJWT = (uid = '') => {
    return new Promise((resolve, reject) => {
        const payload = { uid };
        jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: '4h'
        }, (err, token) => {
            if (err) {
                reject("no se pudo crear el JWT");
            } else {
                resolve(token);
            }
        })
    });
}

export default generarJWT;