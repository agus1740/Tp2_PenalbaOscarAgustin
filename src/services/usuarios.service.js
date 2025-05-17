import UsuariosModel from "../models/usuarios.model.js";

class UsuariosService {
    constructor() {
        this.model = new UsuariosModel();
    }

    getUsuarios = async () => {
        const data = await this.model.getUsuarios();
        return data;
    }

    postUsuarios = async (usuario) => {
        const data = await this.model.postUsuarios(usuario);
        return data;
    }

    patchUsuarios = async (id, usuario) => {
        const data = await this.model.patchUsuarios(id, usuario);
        return data;
    }
}



export default UsuariosService;