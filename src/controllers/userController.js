//manejando logica de las peticiones
import user from "../services/userService.js"
//
const getAllUsers = (req,res) => 
{
    //hago trabajos de comprobacion de variables y manejo la logica de la bd en services
    //funcion que devuelve todos los usuarios
    userService.getAllUsers(1);
    // aqui deberia de pasar las respuestas http y pasar en la respuesta un json que diga status ok y data
    res.send('Obteniendo todos los usuarios');
}


const postUser = async (req,res) => 
{
    //es necesario crear el objeto
    const {nombre_usuario,email,foto_perfil,google_id} = req.body;
    
    const usuario = {
        nombre_usuario: nombre_usuario,
        email: email,
        foto_perfil: foto_perfil,
        google_id: google_id,
    };
    //validar que el correo y nombre de usuario no este repetido y no notificar que el correo ya existe
    try {
        const userId = await user.postUser(usuario);
        res.status(201).json({ status: 'OK', message: `Usuario creado con exito ${userId.usuario_id}` });
        console.log(userId);
    } catch (error) {
        console.error('Error al crear el usuario:', error);
        res.status(500).json({ status: 'BAD', message: "Ah ocurrido un error en la creación del usuario", error: error.message });
    }

}

export {
    getAllUsers,
    postUser,
}