import {Entity, hasOne, model, property} from '@loopback/repository';
import {Pedido} from './pedido.model';

@model()
export class Producto extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;
  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  @property({
    type: 'number',
    required: true,
  })
  precio: number;

  @property({
    type: 'string',
    required: true,
  })
  talla: string;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;
  @property({
    type: 'string',
    required: false,
  })
  img: string;
  @property({
    type: 'string',
  })
  pedidoId?: string;

  @hasOne(() => Pedido)
  pedido: Pedido;

  constructor(data?: Partial<Producto>) {
    super(data);
  }
}

export interface ProductoRelations {
  // describe navigational properties here
}

export type ProductoWithRelations = Producto & ProductoRelations;
