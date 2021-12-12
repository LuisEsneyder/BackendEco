"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoProductoController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PedidoProductoController = class PedidoProductoController {
    constructor(pedidoRepository) {
        this.pedidoRepository = pedidoRepository;
    }
    async get(id, filter) {
        return this.pedidoRepository.producto(id).get(filter);
    }
    async create(id, producto) {
        return this.pedidoRepository.producto(id).create(producto);
    }
    async patch(id, producto, where) {
        return this.pedidoRepository.producto(id).patch(producto, where);
    }
    async delete(id, where) {
        return this.pedidoRepository.producto(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/pedidos/{id}/producto', {
        responses: {
            '200': {
                description: 'Pedido has one Producto',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Producto),
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
], PedidoProductoController.prototype, "get", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/pedidos/{id}/producto', {
        responses: {
            '200': {
                description: 'Pedido model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Producto) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Producto, {
                    title: 'NewProductoInPedido',
                    exclude: ['id'],
                    optional: ['pedidoId']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PedidoProductoController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/pedidos/{id}/producto', {
        responses: {
            '200': {
                description: 'Pedido.Producto PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Producto, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(2, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Producto))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PedidoProductoController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/pedidos/{id}/producto', {
        responses: {
            '200': {
                description: 'Pedido.Producto DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Producto))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PedidoProductoController.prototype, "delete", null);
PedidoProductoController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.PedidoRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.PedidoRepository])
], PedidoProductoController);
exports.PedidoProductoController = PedidoProductoController;
//# sourceMappingURL=pedido-producto.controller.js.map