import { Console } from 'console';
import fs from 'fs';

class UsuariosModel {
    constructor() {
        this.usuarios = "datos_estudiantes.txt"
    }

    getUsuarios = async () => {
        const usuariosData = await fs.promises.readFile(this.usuarios, 'utf-8')
        return JSON.parse(usuariosData)
    }

    postUsuarios = async (usuario) => {
        const misUsuarios = await this.getUsuarios()
        misUsuarios.push(usuario)
        await fs.promises.writeFile(this.usuarios, JSON.stringify(misUsuarios), 'utf-8')
        return usuario
    }

    patchUsuarios = async (id, usuario) => {
        const misUsuarios = await this.getUsuarios()
        const usuarioIndex = misUsuarios.findIndex(usuario => usuario.id == id)
        if (usuarioIndex !== -1) {
            misUsuarios[usuarioIndex] = { ...misUsuarios[usuarioIndex], ...usuario }
            await fs.promises.writeFile(this.usuarios, JSON.stringify(misUsuarios), 'utf-8')
            console.log(usuario);
            return misUsuarios[usuarioIndex]
        } else {
            return null
        }
    }
}

export default UsuariosModel;




//    getUsuarioById = async (id) => {
//        const misUsuarios = await this.getAlumnos()
//        const usuario = misUsuarios.find(usuario => usuario.id == id)
//        return usuario
//    }
