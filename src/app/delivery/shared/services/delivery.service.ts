import { Injectable } from '@angular/core';
import { Restaurant } from '../models/restaurant.model';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';

@Injectable({
    providedIn: 'root',
})
export class DeliveryService extends EntityCollectionServiceBase<Restaurant> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('Restaurant', serviceElementsFactory);
      }
}

