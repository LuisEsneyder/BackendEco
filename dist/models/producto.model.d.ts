import { Entity } from '@loopback/repository';
import { Pedido } from './pedido.model';
export declare class Producto extends Entity {
    id?: string;
    nombre: string;
    estado: string;
    precio: number;
    talla: string;
    descripcion: string;
    img: string;
    pedidoId?: string;
    pedido: Pedido;
    constructor(data?: Partial<Producto>);
}
export interface ProductoRelations {
}
export declare type ProductoWithRelations = Producto & ProductoRelations;
