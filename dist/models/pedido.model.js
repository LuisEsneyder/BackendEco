"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pedido = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const producto_model_1 = require("./producto.model");
const usuario_model_1 = require("./usuario.model");
let Pedido = class Pedido extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Pedido.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Pedido.prototype, "total", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'number',
        required: false,
    }),
    (0, tslib_1.__metadata)("design:type", Number)
], Pedido.prototype, "cantidad", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Pedido.prototype, "confirmacionPedido", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'boolean',
        required: false,
    }),
    (0, tslib_1.__metadata)("design:type", Boolean)
], Pedido.prototype, "estado", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.belongsTo)(() => usuario_model_1.Usuario),
    (0, tslib_1.__metadata)("design:type", String)
], Pedido.prototype, "usuarioId", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasOne)(() => producto_model_1.Producto),
    (0, tslib_1.__metadata)("design:type", producto_model_1.Producto)
], Pedido.prototype, "producto", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Pedido.prototype, "productoId", void 0);
Pedido = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Pedido);
exports.Pedido = Pedido;
//# sourceMappingURL=pedido.model.js.map