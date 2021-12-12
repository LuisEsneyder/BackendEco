import { Usuario } from '../models';
import { RolRepository, UsuarioRepository } from '../repositories';
export declare class AutenticacionService {
    usuarioRepositorio: UsuarioRepository;
    rolRepositorio: RolRepository;
    constructor(usuarioRepositorio: UsuarioRepository, rolRepositorio: RolRepository);
    generarClave(): any;
    cifradoClave(clave: string): any;
    identificarUsuario(usr: string, clave: string): false | Promise<(Usuario & import("../models").UsuarioRelations) | null>;
    generarTokenJw(usuario: Usuario): any;
    validarToken(token: string): any;
    cambiarContrasena(Usr: string): false | Promise<(Usuario & import("../models").UsuarioRelations) | null>;
    ValidarRol(nombrerol: string): false | Promise<(import("../models").Rol & import("../models").RolRelations) | null>;
}
