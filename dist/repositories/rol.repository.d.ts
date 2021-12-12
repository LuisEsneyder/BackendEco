import { Getter } from '@loopback/core';
import { DefaultCrudRepository, HasManyRepositoryFactory } from '@loopback/repository';
import { EcoMongoDbDataSource } from '../datasources';
import { Rol, RolRelations, Usuario } from '../models';
import { UsuarioRepository } from './usuario.repository';
export declare class RolRepository extends DefaultCrudRepository<Rol, typeof Rol.prototype.id, RolRelations> {
    protected usuarioRepositoryGetter: Getter<UsuarioRepository>;
    readonly usuarios: HasManyRepositoryFactory<Usuario, typeof Rol.prototype.id>;
    constructor(dataSource: EcoMongoDbDataSource, usuarioRepositoryGetter: Getter<UsuarioRepository>);
}
