"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let RolRepository = class RolRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource, usuarioRepositoryGetter) {
        super(models_1.Rol, dataSource);
        this.usuarioRepositoryGetter = usuarioRepositoryGetter;
        this.usuarios = this.createHasManyRepositoryFactoryFor('usuarios', usuarioRepositoryGetter);
        this.registerInclusionResolver('usuarios', this.usuarios.inclusionResolver);
    }
};
RolRepository = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.inject)('datasources.EcoMongoDB')),
    (0, tslib_1.__param)(1, repository_1.repository.getter('UsuarioRepository')),
    (0, tslib_1.__metadata)("design:paramtypes", [datasources_1.EcoMongoDbDataSource, Function])
], RolRepository);
exports.RolRepository = RolRepository;
//# sourceMappingURL=rol.repository.js.map