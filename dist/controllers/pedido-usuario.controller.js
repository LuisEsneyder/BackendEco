"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PedidoUsuarioController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let PedidoUsuarioController = class PedidoUsuarioController {
    constructor(pedidoRepository) {
        this.pedidoRepository = pedidoRepository;
    }
    async getUsuario(id) {
        return this.pedidoRepository.usuario(id);
    }
};
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/pedidos/{id}/usuario', {
        responses: {
            '200': {
                description: 'Usuario belonging to Pedido',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Usuario) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], PedidoUsuarioController.prototype, "getUsuario", null);
PedidoUsuarioController = (0, tslib_1.__decorate)([
    (0, authentication_1.authenticate)('admin'),
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.PedidoRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.PedidoRepository])
], PedidoUsuarioController);
exports.PedidoUsuarioController = PedidoUsuarioController;
//# sourceMappingURL=pedido-usuario.controller.js.map