import { Count, Filter, Where } from '@loopback/repository';
import { Usuario, Pedido } from '../models';
import { UsuarioRepository } from '../repositories';
export declare class UsuarioPedidoController {
    protected usuarioRepository: UsuarioRepository;
    constructor(usuarioRepository: UsuarioRepository);
    find(id: string, filter?: Filter<Pedido>): Promise<Pedido[]>;
    create(id: typeof Usuario.prototype.id, pedido: Omit<Pedido, 'id'>): Promise<Pedido>;
    patch(id: string, pedido: Partial<Pedido>, where?: Where<Pedido>): Promise<Count>;
    delete(id: string, where?: Where<Pedido>): Promise<Count>;
}
