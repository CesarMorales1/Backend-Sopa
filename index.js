import express from "express";
import {router as V1Router} from "./src/v1/routes/userRoutes.js"

const app = express();
const __PORT  = process.env.PORT || 3000;
//para usar json
app.use(express.json());
// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
//
app.use(V1Router)

//

//

app.listen(__PORT,() => console.log(`Escuchando en el puerto ${__PORT}`));