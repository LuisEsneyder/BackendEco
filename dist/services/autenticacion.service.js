"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutenticacionService = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const repositories_1 = require("../repositories");
const generador = require('password-generator');
const cryptojs = require('crypto-js');
const jwt = require('jsonwebtoken');
const llaves_1 = require("../config/llaves");
let AutenticacionService = class AutenticacionService {
    constructor(usuarioRepositorio, rolRepositorio) {
        this.usuarioRepositorio = usuarioRepositorio;
        this.rolRepositorio = rolRepositorio;
    }
    generarClave() {
        let clave = generador(8, false);
        return clave;
    }
    cifradoClave(clave) {
        let claveCifrada = cryptojs.MD5(clave).toString();
        return claveCifrada;
    }
    identificarUsuario(usr, clave) {
        try {
            let usuario = this.usuarioRepositorio.findOne({ where: { correo: usr, contrasena: clave } });
            if (usuario) {
                return usuario;
            }
            return false;
        }
        catch (error) {
            return false;
        }
    }
    generarTokenJw(usuario) {
        let token = jwt.sign({
            expiresIn: 3600,
            data: {
                id: usuario.id,
                correro: usuario.correo,
                nombre: usuario.nombre,
                rol: usuario.rolId,
                nombreRol: usuario.nombreROl
            },
        }, llaves_1.llaves.claveJwt);
        return token;
    }
    validarToken(token) {
        try {
            let datos = jwt.verify(token, llaves_1.llaves.claveJwt);
            return datos;
        }
        catch (error) {
            return false;
        }
    }
    cambiarContrasena(Usr) {
        try {
            let usuario = this.usuarioRepositorio.findOne({ where: { correo: Usr } });
            if (usuario) {
                return usuario;
            }
            else {
                return false;
            }
        }
        catch (error) {
            return false;
        }
    }
    ValidarRol(nombrerol) {
        try {
            let rol = this.rolRepositorio.findOne({ where: { nombre: `${nombrerol}` } });
            if (rol) {
                return rol;
            }
            else {
                return false;
            }
        }
        catch (error) {
            return false;
        }
    }
};
AutenticacionService = (0, tslib_1.__decorate)([
    (0, core_1.injectable)({ scope: core_1.BindingScope.TRANSIENT }),
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.UsuarioRepository)),
    (0, tslib_1.__param)(1, (0, repository_1.repository)(repositories_1.RolRepository)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.UsuarioRepository,
        repositories_1.RolRepository])
], AutenticacionService);
exports.AutenticacionService = AutenticacionService;
//# sourceMappingURL=autenticacion.service.js.map