"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let RolController = class RolController {
    constructor(rolRepository) {
        this.rolRepository = rolRepository;
    }
    async create(rol) {
        return this.rolRepository.create(rol);
    }
    async count(where) {
        return this.rolRepository.count(where);
    }
    async find(filter) {
        return this.rolRepository.find(filter);
    }
    async updateAll(rol, where) {
        return this.rolRepository.updateAll(rol, where);
    }
    async findById(id, filter) {
        return this.rolRepository.findById(id, filter);
    }
    async updateById(id, rol) {
        await this.rolRepository.updateById(id, rol);
    }
    async replaceById(id, rol) {
        await this.rolRepository.replaceById(id, rol);
    }
    async deleteById(id) {
        await this.rolRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/rols'),
    (0, rest_1.response)(200, {
        description: 'Rol model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Rol) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Rol, {
                    title: 'NewRol',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RolController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/rols/count'),
    (0, rest_1.response)(200, {
        description: 'Rol model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Rol)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RolController.prototype, "count", null);
(0, tslib_1.__decorate)([
    authentication_1.authenticate.skip(),
    (0, rest_1.get)('/rols'),
    (0, rest_1.response)(200, {
        description: 'Array of Rol model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Rol, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Rol)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RolController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/rols'),
    (0, rest_1.response)(200, {
        description: 'Rol PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Rol, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Rol)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Rol, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RolController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/rols/{id}'),
    (0, rest_1.response)(200, {
        description: 'Rol model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Rol, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Rol, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RolController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/rols/{id}'),
    (0, rest_1.response)(204, {
        description: 'Rol PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Rol, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Rol]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RolController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/rols/{id}'),
    (0, rest_1.response)(204, {
        description: 'Rol PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Rol]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RolController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/rols/{id}'),
    (0, rest_1.response)(204, {
        description: 'Rol DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RolController.prototype, "deleteById", null);
RolController = (0, tslib_1.__decorate)([
    (0, authentication_1.authenticate)('admin'),
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.RolRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.RolRepository])
], RolController);
exports.RolController = RolController;
//# sourceMappingURL=rol.controller.js.map