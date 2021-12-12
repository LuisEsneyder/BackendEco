"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolUsuarioController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let RolUsuarioController = class RolUsuarioController {
    constructor(rolRepository) {
        this.rolRepository = rolRepository;
    }
    async find(id, filter) {
        return this.rolRepository.usuarios(id).find(filter);
    }
    async create(id, usuario) {
        return this.rolRepository.usuarios(id).create(usuario);
    }
    async patch(id, usuario, where) {
        return this.rolRepository.usuarios(id).patch(usuario, where);
    }
    async delete(id, where) {
        return this.rolRepository.usuarios(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/rols/{id}/usuarios', {
        responses: {
            '200': {
                description: 'Array of Rol has many Usuario',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Usuario) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('filter')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RolUsuarioController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/rols/{id}/usuarios', {
        responses: {
            '200': {
                description: 'Rol model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario, {
                    title: 'NewUsuarioInRol',
                    exclude: ['id'],
                    optional: ['rolId']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RolUsuarioController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/rols/{id}/usuarios', {
        responses: {
            '200': {
                description: 'Rol.Usuario PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Usuario))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RolUsuarioController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/rols/{id}/usuarios', {
        responses: {
            '200': {
                description: 'Rol.Usuario DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Usuario))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], RolUsuarioController.prototype, "delete", null);
RolUsuarioController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.RolRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.RolRepository])
], RolUsuarioController);
exports.RolUsuarioController = RolUsuarioController;
//# sourceMappingURL=rol-usuario.controller.js.map