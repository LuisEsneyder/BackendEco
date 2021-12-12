import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Rol } from '../models';
import { RolRepository } from '../repositories';
export declare class RolController {
    rolRepository: RolRepository;
    constructor(rolRepository: RolRepository);
    create(rol: Omit<Rol, 'id'>): Promise<Rol>;
    count(where?: Where<Rol>): Promise<Count>;
    find(filter?: Filter<Rol>): Promise<Rol[]>;
    updateAll(rol: Rol, where?: Where<Rol>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Rol>): Promise<Rol>;
    updateById(id: string, rol: Rol): Promise<void>;
    replaceById(id: string, rol: Rol): Promise<void>;
    deleteById(id: string): Promise<void>;
}
