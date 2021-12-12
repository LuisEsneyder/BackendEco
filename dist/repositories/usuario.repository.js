"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let UsuarioRepository = class UsuarioRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, pedidoRepositoryGetter, rolRepositoryGetter) {
        super(models_1.Usuario, dataSource);
        this.pedidoRepositoryGetter = pedidoRepositoryGetter;
        this.rolRepositoryGetter = rolRepositoryGetter;
        this.rol = this.createBelongsToAccessorFor('rol', rolRepositoryGetter);
        this.registerInclusionResolver('rol', this.rol.inclusionResolver);
        this.pedidos = this.createHasManyRepositoryFactoryFor('pedidos', pedidoRepositoryGetter);
        this.registerInclusionResolver('pedidos', this.pedidos.inclusionResolver);
    }
};
UsuarioRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.EcoMongoDB')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('PedidoRepository')),
    (0, tslib_1.__param)(2, repository_1.repository.getter('RolRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.EcoMongoDbDataSource, Function, Function])
], UsuarioRepository);
exports.UsuarioRepository = UsuarioRepository;
//# sourceMappingURL=usuario.repository.js.map