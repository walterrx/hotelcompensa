import {model, property, Entity} from '@loopback/repository';

@model()
export class Hotel extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  nome?: string;

  @property({
    type: 'string',
  })
  endereco?: string;

  @property({
    type: 'string',
  })
  telefone?: string;

  @property({
    type: 'string',
  })
  email?: string;

  @property({
    type: 'string',
  })
  cep?: string;

  @property({
    type: 'string',
  })
  cidade?: string;

  @property({
    type: 'string',
  })
  estado?: string;

  @property({
    type: 'string',
  })
  pais?: string;
}

export interface HotelRelations {
  // describe navigational properties here
}

export type HotelWithRelations = Hotel & HotelRelations;
