import { Component, OnInit, OnDestroy } from '@angular/core';
import { DeliveryService } from '../shared/services/delivery.service';
import { LunchSpot } from '../shared/models/lunch-spot.model';
import {  map } from 'rxjs/operators';
import { DeliveryStatus } from '../shared/enums/delivery-status.enum';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-pending-delivery',
  templateUrl: './pending-delivery.component.html',
  styleUrls: ['./pending-delivery.component.css']
})
export class PendingDeliveryComponent implements OnInit {
  public lunchSpots: LunchSpot[];
  public rowColor = 'rgba(250,128,114)';

  public DeliveryStatus = DeliveryStatus;
  public pendingDeliverySpots: Observable<LunchSpot[]>;
  public deliverySpots$: Observable<LunchSpot[]>;
 
  constructor(
    private deliveryService: DeliveryService
    ) {
      this.deliverySpots$ = this.deliveryService.entities$;
     }

  public ngOnInit(): void {
    this.deliveryService.getAll();

    this.pendingDeliverySpots = this.deliverySpots$.pipe(
      map( ds => ds.filter((ls:LunchSpot) => ls.status === DeliveryStatus.Undelivered))
    );
  }

  public changeDeliveryStatus(lunchSpot: LunchSpot) :void {
    lunchSpot.status = DeliveryStatus.Delivered;
    this.deliveryService.update(lunchSpot);
  }

  public deleteLunchSpot(lunchSpot: LunchSpot) :void {
    this.deliveryService.delete(lunchSpot);
  }
}
