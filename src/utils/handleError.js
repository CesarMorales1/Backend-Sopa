import { validationResult } from "express-validator";

const validateResult = (req, res, next, options = {}) => {
    const {
        requiredKeys = [],
        errorCode = 400,
        errorMessage = 'Ah ocurrido un error: ',
    } = options;

    try {
        validationResult(req).throw();
        return next();
    } catch (err) {
        res.status(errorCode);
        const missingKeys = getMissingKeys(err.array());
        const fullErrorMessage = `${errorMessage} ${missingKeys.join(', ')}`;
        res.send(fullErrorMessage);
    }
};
//para extraer las claves (o parámetros) que faltan en los resultados de validación proporcionados por validationResult(req). Esta función toma un array de errores y devuelve un array de claves faltantes, eliminando cualquier duplicado.
const getMissingKeys = (errors) => {
    const missingKeys = errors.map((error) => error.param);
    return Array.from(new Set(missingKeys)); // Elimina duplicados
};


export 
{
    validateResult
}