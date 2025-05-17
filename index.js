import express from "express";
import UsuariosRouter from "./src/routes/usuarios.route.js";

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use("/", new UsuariosRouter().start());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

console.log("running server on url http://localhost:8080");