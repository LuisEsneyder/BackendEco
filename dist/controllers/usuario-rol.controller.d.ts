import { Usuario, Rol } from '../models';
import { RolRepository, UsuarioRepository } from '../repositories';
import { AutenticacionService } from '../services';
export declare class UsuarioRolController {
    usuarioRepository: UsuarioRepository;
    rolRepository: RolRepository;
    servicioAutentificacion: AutenticacionService;
    constructor(usuarioRepository: UsuarioRepository, rolRepository: RolRepository, servicioAutentificacion: AutenticacionService);
    crearUsuariosConDIstintosRol(usuario: Omit<Usuario, 'id'>): Promise<Usuario>;
    getRol(id: typeof Usuario.prototype.id): Promise<Rol>;
}
