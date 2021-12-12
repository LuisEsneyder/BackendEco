import { Entity } from '@loopback/repository';
import { Usuario } from './usuario.model';
export declare class Rol extends Entity {
    id?: string;
    nombre: string;
    usuarios: Usuario[];
    constructor(data?: Partial<Rol>);
}
export interface RolRelations {
}
export declare type RolWithRelations = Rol & RolRelations;
