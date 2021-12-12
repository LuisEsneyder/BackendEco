"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioPedidoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let UsuarioPedidoController = class UsuarioPedidoController {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    async find(id, filter) {
        return this.usuarioRepository.pedidos(id).find(filter);
    }
    async create(id, pedido) {
        return this.usuarioRepository.pedidos(id).create(pedido);
    }
    async patch(id, pedido, where) {
        return this.usuarioRepository.pedidos(id).patch(pedido, where);
    }
    async delete(id, where) {
        return this.usuarioRepository.pedidos(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/usuarios/{id}/pedidos', {
        responses: {
            '200': {
                description: 'Array of Usuario has many Pedido',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Pedido) },
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
], UsuarioPedidoController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/usuarios/{id}/pedidos', {
        responses: {
            '200': {
                description: 'Usuario model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Pedido) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Pedido, {
                    title: 'NewPedidoInUsuario',
                    exclude: ['id'],
                    optional: ['usuarioId']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioPedidoController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/usuarios/{id}/pedidos', {
        responses: {
            '200': {
                description: 'Usuario.Pedido PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Pedido, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Pedido))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioPedidoController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/usuarios/{id}/pedidos', {
        responses: {
            '200': {
                description: 'Usuario.Pedido DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Pedido))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioPedidoController.prototype, "delete", null);
UsuarioPedidoController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.UsuarioRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.UsuarioRepository])
], UsuarioPedidoController);
exports.UsuarioPedidoController = UsuarioPedidoController;
//# sourceMappingURL=usuario-pedido.controller.js.map