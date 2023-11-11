import { check } from "express-validator";
import { validateResult } from "../utils/handleError.js";
const validateCreateUser = [
    //TODO: solo valida nombre usuario, email, url de la foto y google_id dado que manejamos la informacion a traves de google
    check('nombre_usuario')
    .exists()
    .notEmpty(),
    check('email')
    .exists()
    .notEmpty()
    .isEmail(),
    check('foto_perfil')
    .exists()
    .notEmpty()
    .isURL(),
    check('google_id')
    .exists()
    .notEmpty()
    .isString(),
    (req,res,next) => 
    {
        validateResult(req,res,next,{requieredKeys: ['nombre_usuario','email','foto_perfil','google_id']})
    }
]

export {validateCreateUser};