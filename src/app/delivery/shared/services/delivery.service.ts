import { Injectable } from '@angular/core';
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data';
import { LunchSpot } from '../models/lunch-spot.model';

@Injectable({
    providedIn: 'root',
})
export class DeliveryService extends EntityCollectionServiceBase<LunchSpot> {
    constructor(serviceElementsFactory: EntityCollectionServiceElementsFactory) {
        super('LunchSpot', serviceElementsFactory);
      }
}

