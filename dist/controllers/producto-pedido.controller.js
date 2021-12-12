"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductoPedidoController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProductoPedidoController = class ProductoPedidoController {
    constructor(productoRepository) {
        this.productoRepository = productoRepository;
    }
    async get(id, filter) {
        return this.productoRepository.pedido(id).get(filter);
    }
    async create(id, pedido) {
        let ProductoEncontrado = await this.productoRepository.findById(id);
        pedido.total = pedido.cantidad * ProductoEncontrado.precio;
        let pedidoguardado = await this.productoRepository.pedido(id).create(pedido);
        await this.productoRepository.updateById(id, { pedidoId: pedidoguardado.id });
        return pedidoguardado;
    }
    async patch(id, pedido, where) {
        return this.productoRepository.pedido(id).patch(pedido, where);
    }
    async delete(id, where) {
        return this.productoRepository.pedido(id).delete(where);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/productos/{id}/pedido', {
        responses: {
            '200': {
                description: 'Producto has one Pedido',
                content: {
                    'application/json': {
                        schema: (0, rest_1.getModelSchemaRef)(models_1.Pedido),
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
], ProductoPedidoController.prototype, "get", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/productos/{id}/pedido', {
        responses: {
            '200': {
                description: 'Producto model instance',
                content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Pedido) } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Pedido, {
                    title: 'NewPedidoInProducto',
                    exclude: ['id'],
                    optional: ['productoId']
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductoPedidoController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/productos/{id}/pedido', {
        responses: {
            '200': {
                description: 'Producto.Pedido PATCH success count',
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
], ProductoPedidoController.prototype, "patch", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/productos/{id}/pedido', {
        responses: {
            '200': {
                description: 'Producto.Pedido DELETE success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.query.object('where', (0, rest_1.getWhereSchemaFor)(models_1.Pedido))),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], ProductoPedidoController.prototype, "delete", null);
ProductoPedidoController = (0, tslib_1.__decorate)([
    (0, authentication_1.authenticate)('cliente'),
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.ProductoRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.ProductoRepository])
], ProductoPedidoController);
exports.ProductoPedidoController = ProductoPedidoController;
//# sourceMappingURL=producto-pedido.controller.js.map