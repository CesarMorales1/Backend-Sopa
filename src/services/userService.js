//manejar los mismo nombres que en el controdor
import db from "../config/config.js"
const user = {}

user.postUser = (usuario) => 
{
        const sql = `
          INSERT INTO
              login.usuarios(
                  nombre_usuario,
                  email,
                  foto_perfil,
                  google_id,
                  created_at,
                  rol_id
              )
          VALUES($1, $2, $3, $4, $5, $6) RETURNING usuario_id
          `;
      
        return db.oneOrNone(sql, [
          //retorne uno o ninguno porque le estamos diciendo que nos retorne el valor guardado
          usuario.nombre_usuario,
          usuario.email,
          usuario.foto_perfil,
          usuario.google_id,
          new Date(),
          1
        ]);
}

export default user