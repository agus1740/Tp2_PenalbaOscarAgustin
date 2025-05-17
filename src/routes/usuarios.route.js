import UsuariosController from "../controllers/usuarios.controller.js";
import express from "express";

class UsuariosRouter {
    constructor() {
        this.controller = new UsuariosController();
        this.router = express.Router();
    }

    start() {
        this.router.get("/usuarios", this.controller.getUsuarios);
        this.router.post("/usuarios", this.controller.postUsuarios);
        this.router.patch("/actualizarUsuario/:id", this.controller.patchUsuarios);
        //this.router.delete("/delete/:id", this.controller.deleteUsuarios);

        return this.router;
    }
}

export default UsuariosRouter;