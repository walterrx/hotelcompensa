import {DefaultCrudRepository} from '@loopback/repository';
import {Hotel, HotelRelations} from '../models';
import {HotelDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HotelRepository extends DefaultCrudRepository<
  Hotel,
  typeof Hotel.prototype.id,
  HotelRelations
> {
  constructor(@inject('datasources.hotel') dataSource: HotelDataSource) {
    super(Hotel, dataSource);
  }
}
