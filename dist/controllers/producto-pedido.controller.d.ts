import { Count, Filter, Where } from '@loopback/repository';
import { Producto, Pedido } from '../models';
import { ProductoRepository } from '../repositories';
export declare class ProductoPedidoController {
    protected productoRepository: ProductoRepository;
    constructor(productoRepository: ProductoRepository);
    get(id: string, filter?: Filter<Pedido>): Promise<Pedido>;
    create(id: typeof Producto.prototype.id, pedido: Omit<Pedido, 'id'>): Promise<Pedido>;
    patch(id: string, pedido: Partial<Pedido>, where?: Where<Pedido>): Promise<Count>;
    delete(id: string, where?: Where<Pedido>): Promise<Count>;
}
