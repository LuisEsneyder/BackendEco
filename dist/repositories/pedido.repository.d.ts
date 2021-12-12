import { Getter } from '@loopback/core';
import { DefaultCrudRepository, BelongsToAccessor, HasOneRepositoryFactory } from '@loopback/repository';
import { EcoMongoDbDataSource } from '../datasources';
import { Pedido, PedidoRelations, Usuario, Producto } from '../models';
import { UsuarioRepository } from './usuario.repository';
import { ProductoRepository } from './producto.repository';
export declare class PedidoRepository extends DefaultCrudRepository<Pedido, typeof Pedido.prototype.id, PedidoRelations> {
    protected usuarioRepositoryGetter: Getter<UsuarioRepository>;
    protected productoRepositoryGetter: Getter<ProductoRepository>;
    readonly usuario: BelongsToAccessor<Usuario, typeof Pedido.prototype.id>;
    readonly producto: HasOneRepositoryFactory<Producto, typeof Pedido.prototype.id>;
    constructor(dataSource: EcoMongoDbDataSource, usuarioRepositoryGetter: Getter<UsuarioRepository>, productoRepositoryGetter: Getter<ProductoRepository>);
}
