import { Pedido, Usuario } from '../models';
import { PedidoRepository } from '../repositories';
export declare class PedidoUsuarioController {
    pedidoRepository: PedidoRepository;
    constructor(pedidoRepository: PedidoRepository);
    getUsuario(id: typeof Pedido.prototype.id): Promise<Usuario>;
}
