"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioRolController = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const services_1 = require("../services");
const llaves_1 = require("../config/llaves");
const authentication_1 = require("@loopback/authentication");
const fetch = require('node-fetch');
let UsuarioRolController = class UsuarioRolController {
    constructor(usuarioRepository, rolRepository, servicioAutentificacion) {
        this.usuarioRepository = usuarioRepository;
        this.rolRepository = rolRepository;
        this.servicioAutentificacion = servicioAutentificacion;
    }
    async crearUsuariosConDIstintosRol(usuario) {
        //asignar contraseña
        let clave = this.servicioAutentificacion.generarClave();
        let claceCifrada = this.servicioAutentificacion.cifradoClave(clave);
        usuario.contrasena = claceCifrada;
        //Esta ruta solo tendra el rol de cliente
        let rol = await this.servicioAutentificacion.ValidarRol(usuario.nombreROl);
        if (rol) {
            usuario.rolId = `${rol.id}`;
        }
        else {
            let nuevoRol = await this.rolRepository.create({ nombre: `${usuario.nombreROl}` });
            usuario.rolId = `${nuevoRol.id}`;
        }
        let Usr = await this.usuarioRepository.create(usuario);
        //Notificación Usuario
        let destino = usuario.correo;
        let asunto = 'Registro Eco-Sastreria';
        let contenido = `Hola ${usuario.nombre}, su usuario es: ${usuario.correo}, su contraseña es: ${clave} y su rol es: ${usuario.nombreROl}.
    Bienvenido a eco-satreria`;
        fetch(`${llaves_1.llaves.urlServiciosNotificaciones}/envio-correo?destino=${destino}&asunto=${asunto}&contenido=${contenido}`).then((data) => {
            console.log(data);
        });
        return usuario;
    }
    async getRol(id) {
        return this.usuarioRepository.rol(id);
    }
};
(0, tslib_1.__decorate)([
    (0, authentication_1.authenticate)("admin"),
    (0, rest_1.post)('/usuarios/roles'),
    (0, rest_1.response)(200, {
        description: 'Usuario model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario) } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario, {
                    title: 'NewUsuario',
                    exclude: ['id'],
                }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioRolController.prototype, "crearUsuariosConDIstintosRol", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/usuarios/{id}/rol', {
        responses: {
            '200': {
                description: 'Rol belonging to Usuario',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: (0, rest_1.getModelSchemaRef)(models_1.Rol) },
                    },
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioRolController.prototype, "getRol", null);
UsuarioRolController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.UsuarioRepository)),
    (0, tslib_1.__param)(1, (0, repository_1.repository)(repositories_1.RolRepository)),
    (0, tslib_1.__param)(2, (0, core_1.service)(services_1.AutenticacionService)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.UsuarioRepository,
        repositories_1.RolRepository,
        services_1.AutenticacionService])
], UsuarioRolController);
exports.UsuarioRolController = UsuarioRolController;
//# sourceMappingURL=usuario-rol.controller.js.map