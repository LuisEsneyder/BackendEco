import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import { repository } from '@loopback/repository';
import { Usuario } from '../models';
import { RolRepository, UsuarioRepository } from '../repositories';
const generador = require('password-generator');
const cryptojs = require('crypto-js');
const jwt = require('jsonwebtoken');
import { llaves } from '../config/llaves';

@injectable({scope: BindingScope.TRANSIENT})
export class AutenticacionService {
  constructor(
    @repository(UsuarioRepository)
    public usuarioRepositorio : UsuarioRepository,
    @repository(RolRepository)
    public rolRepositorio : RolRepository
  ) {}
  generarClave(){
    let clave = generador(8,false);
    return clave;
  }
  cifradoClave(clave:string){
    let claveCifrada = cryptojs.MD5(clave).toString();
    return claveCifrada;
  }
  identificarUsuario(usr:string, clave:string){
    try {
      let usuario = this.usuarioRepositorio.findOne({where: {correo: usr, contrasena: clave}});
      if (usuario) {
        return usuario;
      }
      return false;
    } catch (error) {
      return false;
    }
  }
  generarTokenJw(usuario : Usuario){
    let token = jwt.sign({
      expiresIn: 3600,
      data: {
        id: usuario.id,
        correro: usuario.correo,
        nombre : usuario.nombre,
        rol : usuario.rolId,
        nombreRol: usuario.nombreROl
      },
    },
    llaves.claveJwt);
    return token;

  }
  validarToken(token : string){
    try {
      let datos = jwt.verify(token,llaves.claveJwt);
      return datos;
    } catch (error) {
      return false;
    }
  }
  cambiarContrasena(Usr:string){
    try {
      let usuario = this.usuarioRepositorio.findOne({where: {correo:Usr }});
      if(usuario){
        return usuario;
      }else{
        return false;
      }
    } catch (error) {
      return false
    }
  }
  ValidarRol(nombrerol: string){
    try {
      let rol = this.rolRepositorio.findOne({where: {nombre : `${nombrerol}`}})
      if(rol){
        return rol
      }else{
        return false;
      }
    } catch (error) {
      return false
    }

    }
  }

