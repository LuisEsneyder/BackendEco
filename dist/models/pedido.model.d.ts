import { Entity } from '@loopback/repository';
import { Producto } from './producto.model';
export declare class Pedido extends Entity {
    id?: string;
    total: number;
    cantidad: number;
    confirmacionPedido: boolean;
    estado: boolean;
    usuarioId: string;
    producto: Producto;
    productoId?: string;
    constructor(data?: Partial<Pedido>);
}
export interface PedidoRelations {
}
export declare type PedidoWithRelations = Pedido & PedidoRelations;
