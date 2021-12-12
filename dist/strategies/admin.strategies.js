"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminStrategy = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
const parse_bearer_token_1 = (0, tslib_1.__importDefault)(require("parse-bearer-token"));
const services_1 = require("../services");
let AdminStrategy = class AdminStrategy {
    constructor(servicioAutenticacion) {
        this.servicioAutenticacion = servicioAutenticacion;
        this.name = 'admin';
    }
    async authenticate(request) {
        let token = (0, parse_bearer_token_1.default)(request);
        if (token) {
            let datos = this.servicioAutenticacion.validarToken(token);
            if (datos.data.rol === '619889758db3da310c6db1c2') {
                let perfil = Object.assign({
                    nombre: datos.data.nombre,
                    correo: datos.data.correo,
                    id: datos.data.id
                });
                return perfil;
            }
            else {
                throw new rest_1.HttpErrors[401]('El token incluido no es valido.');
            }
        }
        else {
            throw new rest_1.HttpErrors[401]('No se ha incluido un token en la solicitud.');
        }
    }
};
AdminStrategy = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.service)(services_1.AutenticacionService)),
    (0, tslib_1.__metadata)("design:paramtypes", [services_1.AutenticacionService])
], AdminStrategy);
exports.AdminStrategy = AdminStrategy;
//# sourceMappingURL=admin.strategies.js.map