import usuariosService from "../services/usuarios.service.js";

class UsuariosController {
    constructor() {
        this.service = new usuariosService();
    }

    getUsuarios = async (req, res) => {
        const usuarios = await this.service.getUsuarios();
        res.send(usuarios);
    };

    postUsuarios = async (req, res) => {
        const usuario = req.body;
        if (Object.keys(usuario).includes("id") &&
            Object.keys(usuario).includes("nombre") &&
            Object.keys(usuario).includes("apellido") &&
            Object.keys(usuario).includes("nota")) {

            const postUsuario = await this.service.postUsuarios(usuario);
            res.send(postUsuario);

        } else {
            res.send("Faltan datos");
        }   
    }

     patchUsuarios = async (req, res) => {
        const { id } = req.params;
        const camposActualizados = req.body;

        const usuarioActualizado = await this.service.patchUsuarios(id, camposActualizados);

        if (usuarioActualizado !== null) {
            res.send(usuarioActualizado);
        } else {
            res.send("Usuario no encontrado");
        }
    }
}

export default UsuariosController;