"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientStrategy = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const rest_1 = require("@loopback/rest");
const parse_bearer_token_1 = (0, tslib_1.__importDefault)(require("parse-bearer-token"));
const services_1 = require("../services");
let ClientStrategy = class ClientStrategy {
    constructor(servicioAutenticacion) {
        this.servicioAutenticacion = servicioAutenticacion;
        this.name = 'cliente';
    }
    async authenticate(request) {
        let token = (0, parse_bearer_token_1.default)(request);
        if (token) {
            let datos = this.servicioAutenticacion.validarToken(token);
            if (datos.data.rol === '6196d4c5f87ca32fac994dfa') {
                let perfil = Object.assign({
                    nombre: datos.data.nombre,
                    correo: datos.data.correo,
                    id: datos.data.id
                });
                return perfil;
            }
            else {
                throw new rest_1.HttpErrors[401]("El token incluido no es valido.");
            }
        }
        else {
            throw new rest_1.HttpErrors[401]("No se ha incluido un token en la solicitud.");
        }
    }
};
ClientStrategy = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, core_1.service)(services_1.AutenticacionService)),
    (0, tslib_1.__metadata)("design:paramtypes", [services_1.AutenticacionService])
], ClientStrategy);
exports.ClientStrategy = ClientStrategy;
//# sourceMappingURL=client.strategies.js.map