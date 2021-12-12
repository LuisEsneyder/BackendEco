import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Credenciales, Usuario } from '../models';
import { RolRepository, UsuarioRepository } from '../repositories';
import { AutenticacionService } from '../services';
export declare class UsuarioController {
    usuarioRepository: UsuarioRepository;
    rolRepositorio: RolRepository;
    servicioAutentificacion: AutenticacionService;
    constructor(usuarioRepository: UsuarioRepository, rolRepositorio: RolRepository, servicioAutentificacion: AutenticacionService);
    cambiarContrasena(credenciales: Credenciales): Promise<void>;
    identificarUsuario(credenciales: Credenciales): Promise<{
        datos: {
            nombre: string;
            correo: string;
            id: string | undefined;
            rol: string;
        };
        tk: any;
    }>;
    create(usuario: Omit<Usuario, 'id'>): Promise<Usuario>;
    count(where?: Where<Usuario>): Promise<Count>;
    find(filter?: Filter<Usuario>): Promise<Usuario[]>;
    updateAll(usuario: Usuario, where?: Where<Usuario>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Usuario>): Promise<Usuario>;
    updateById(id: string, usuario: Usuario): Promise<void>;
    replaceById(id: string, usuario: Usuario): Promise<void>;
    deleteById(id: string): Promise<void>;
}
