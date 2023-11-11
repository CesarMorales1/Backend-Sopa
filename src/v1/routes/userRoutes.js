//aqui saco la informacion y en controlador manejo la informacion y sus valores
import express from "express";
//llamamos al controlador que maneja la logica
import * as userController from "../../controllers/userController.js"
import * as sopaControllers from "../../controllers/sopasController.js"

import { validateCreateUser } from "../../validators/userValidator.js";
const router = express.Router();
const __url = '/api/v1/';
// No usar verbos dentro de las url y concatenar en la url para manejar mejor
router.get(`${__url}user`,userController.getAllUsers);
router.get(`${__url}sopa/:categoria`,sopaControllers.getCategorias);
//post
router.post(`${__url}user`, validateCreateUser ,userController.postUser);

export {router}


