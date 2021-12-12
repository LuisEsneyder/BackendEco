"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rol = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const usuario_model_1 = require("./usuario.model");
let Rol = class Rol extends repository_1.Entity {
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
], Rol.prototype, "id", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    (0, tslib_1.__metadata)("design:type", String)
], Rol.prototype, "nombre", void 0);
(0, tslib_1.__decorate)([
    (0, repository_1.hasMany)(() => usuario_model_1.Usuario),
    (0, tslib_1.__metadata)("design:type", Array)
], Rol.prototype, "usuarios", void 0);
Rol = (0, tslib_1.__decorate)([
    (0, repository_1.model)(),
    (0, tslib_1.__metadata)("design:paramtypes", [Object])
], Rol);
exports.Rol = Rol;
//# sourceMappingURL=rol.model.js.map