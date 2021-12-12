import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory, BelongsToAccessor } from '@loopback/repository';
import { EcoMongoDbDataSource } from '../datasources';
import { Usuario, UsuarioRelations, Pedido, Rol } from '../models';
import { PedidoRepository } from './pedido.repository';
import { RolRepository } from './rol.repository';
export declare class UsuarioRepository extends DefaultCrudRepository<Usuario, typeof Usuario.prototype.id, UsuarioRelations> {
    protected pedidoRepositoryGetter: Getter<PedidoRepository>;
    protected rolRepositoryGetter: Getter<RolRepository>;
    readonly pedidos: HasManyRepositoryFactory<Pedido, typeof Usuario.prototype.id>;
    readonly rol: BelongsToAccessor<Rol, typeof Usuario.prototype.id>;
    constructor(dataSource: EcoMongoDbDataSource, pedidoRepositoryGetter: Getter<PedidoRepository>, rolRepositoryGetter: Getter<RolRepository>);
}
