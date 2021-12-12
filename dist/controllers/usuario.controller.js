"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuarioController = void 0;
const tslib_1 = require("tslib");
const authentication_1 = require("@loopback/authentication");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const llaves_1 = require("../config/llaves");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
const services_1 = require("../services");
const fetch = require('node-fetch');
let UsuarioController = class UsuarioController {
    constructor(usuarioRepository, rolRepositorio, servicioAutentificacion) {
        this.usuarioRepository = usuarioRepository;
        this.rolRepositorio = rolRepositorio;
        this.servicioAutentificacion = servicioAutentificacion;
    }
    //Cambiar contraseña
    async cambiarContrasena(credenciales) {
        let usr = await this.servicioAutentificacion.cambiarContrasena(credenciales.usuario);
        if (usr) {
            let nuevaContrasena = this.servicioAutentificacion.generarClave();
            let nuevaContrasenaCifrada = this.servicioAutentificacion.cifradoClave(nuevaContrasena);
            let usuarioActualizado = await this.usuarioRepository.updateById(usr.id, { contrasena: nuevaContrasenaCifrada });
            //notificación
            let destino = usr.correo;
            let asunto = 'Registro Eco-Sastreria';
            let contenido = `Hola ${usr.nombre}, su contraseña ahora es ${nuevaContrasena} y su rol es: ${usr.rolId}.`;
            fetch(`${llaves_1.llaves.urlServiciosNotificaciones}/envio-correo?destino=${destino}&asunto=${asunto}&contenido=${contenido}`).then((data) => {
                console.log(data);
                return usuarioActualizado;
            });
        }
        else {
            throw new rest_1.HttpErrors['401']("Usuario no existe");
        }
    }
    //identificación de usuario
    async identificarUsuario(credenciales) {
        let usr = await this.servicioAutentificacion.identificarUsuario(credenciales.usuario, credenciales.contrasena);
        if (usr) {
            let token = this.servicioAutentificacion.generarTokenJw(usr);
            return {
                datos: {
                    nombre: usr.nombre,
                    correo: usr.correo,
                    id: usr.id,
                    rol: usr.rolId
                },
                tk: token
            };
        }
        else {
            throw new rest_1.HttpErrors['401']("Datos incorrectos");
        }
    }
    async create(usuario) {
        //asignar contraseña
        let clave = this.servicioAutentificacion.generarClave();
        let claceCifrada = this.servicioAutentificacion.cifradoClave(clave);
        usuario.contrasena = claceCifrada;
        //Esta ruta solo tendra el rol de cliente
        let rol = await this.servicioAutentificacion.ValidarRol('cliente');
        if (rol) {
            usuario.rolId = `${rol.id}`;
            usuario.nombreROl = rol.nombre;
        }
        else {
            let nuevoRol = await this.rolRepositorio.create({ nombre: `${'cliente'}` });
            usuario.rolId = `${nuevoRol.id}`;
            usuario.nombreROl = nuevoRol.nombre;
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
    async count(where) {
        return this.usuarioRepository.count(where);
    }
    async find(filter) {
        return this.usuarioRepository.find(filter);
    }
    async updateAll(usuario, where) {
        return this.usuarioRepository.updateAll(usuario, where);
    }
    async findById(id, filter) {
        return this.usuarioRepository.findById(id, filter);
    }
    async updateById(id, usuario) {
        await this.usuarioRepository.updateById(id, usuario);
    }
    async replaceById(id, usuario) {
        await this.usuarioRepository.replaceById(id, usuario);
    }
    async deleteById(id) {
        await this.usuarioRepository.deleteById(id);
    }
};
(0, tslib_1.__decorate)([
    authentication_1.authenticate.skip(),
    (0, rest_1.put)('/cambiarComtrasena'),
    (0, rest_1.response)(200, {
        description: "Cambiar una contraseña"
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Credenciales]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioController.prototype, "cambiarContrasena", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/identificarUsuario'),
    (0, rest_1.response)(200, {
        description: "Identificar a un usuario con su rol"
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Credenciales]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioController.prototype, "identificarUsuario", null);
(0, tslib_1.__decorate)([
    (0, rest_1.post)('/usuarios'),
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
], UsuarioController.prototype, "create", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/usuarios/count'),
    (0, rest_1.response)(200, {
        description: 'Usuario model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, rest_1.param.where(models_1.Usuario)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioController.prototype, "count", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/usuarios'),
    (0, rest_1.response)(200, {
        description: 'Array of Usuario model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Usuario, { includeRelations: true }),
                },
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.filter(models_1.Usuario)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioController.prototype, "find", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/usuarios'),
    (0, rest_1.response)(200, {
        description: 'Usuario PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    (0, tslib_1.__param)(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__param)(1, rest_1.param.where(models_1.Usuario)),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [models_1.Usuario, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioController.prototype, "updateAll", null);
(0, tslib_1.__decorate)([
    (0, rest_1.get)('/usuarios/{id}'),
    (0, rest_1.response)(200, {
        description: 'Usuario model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario, { includeRelations: true }),
            },
        },
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, rest_1.param.filter(models_1.Usuario, { exclude: 'where' })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, Object]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioController.prototype, "findById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.patch)('/usuarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Usuario PATCH success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Usuario, { partial: true }),
            },
        },
    })),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Usuario]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioController.prototype, "updateById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.put)('/usuarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Usuario PUT success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__param)(1, (0, rest_1.requestBody)()),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String, models_1.Usuario]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioController.prototype, "replaceById", null);
(0, tslib_1.__decorate)([
    (0, rest_1.del)('/usuarios/{id}'),
    (0, rest_1.response)(204, {
        description: 'Usuario DELETE success',
    }),
    (0, tslib_1.__param)(0, rest_1.param.path.string('id')),
    (0, tslib_1.__metadata)("design:type", Function),
    (0, tslib_1.__metadata)("design:paramtypes", [String]),
    (0, tslib_1.__metadata)("design:returntype", Promise)
], UsuarioController.prototype, "deleteById", null);
UsuarioController = (0, tslib_1.__decorate)([
    (0, tslib_1.__param)(0, (0, repository_1.repository)(repositories_1.UsuarioRepository)),
    (0, tslib_1.__param)(1, (0, repository_1.repository)(repositories_1.RolRepository)),
    (0, tslib_1.__param)(2, (0, core_1.service)(services_1.AutenticacionService)),
    (0, tslib_1.__metadata)("design:paramtypes", [repositories_1.UsuarioRepository,
        repositories_1.RolRepository,
        services_1.AutenticacionService])
], UsuarioController);
exports.UsuarioController = UsuarioController;
//# sourceMappingURL=usuario.controller.js.map