import { Entity } from '@loopback/repository';
import { Pedido } from './pedido.model';
export declare class Usuario extends Entity {
    id?: string;
    nombre: string;
    correo: string;
    contrasena: string;
    nombreROl: string;
    pedidos: Pedido[];
    rolId: string;
    constructor(data?: Partial<Usuario>);
}
export interface UsuarioRelations {
}
export declare type UsuarioWithRelations = Usuario & UsuarioRelations;
