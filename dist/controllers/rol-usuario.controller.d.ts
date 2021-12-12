import { Count, Filter, Where } from '@loopback/repository';
import { Rol, Usuario } from '../models';
import { RolRepository } from '../repositories';
export declare class RolUsuarioController {
    protected rolRepository: RolRepository;
    constructor(rolRepository: RolRepository);
    find(id: string, filter?: Filter<Usuario>): Promise<Usuario[]>;
    create(id: typeof Rol.prototype.id, usuario: Omit<Usuario, 'id'>): Promise<Usuario>;
    patch(id: string, usuario: Partial<Usuario>, where?: Where<Usuario>): Promise<Count>;
    delete(id: string, where?: Where<Usuario>): Promise<Count>;
}
