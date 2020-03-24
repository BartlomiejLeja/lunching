import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../shared/services/delivery.service';
import { map, tap, filter, mergeMap, first } from 'rxjs/operators';
import { LunchSpot } from '../shared/models/lunch-spot.model';
import { DeliveryStatus } from '../shared/enums/delivery-status.enum';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-provided-delivery',
  templateUrl: './provided-delivery.component.html',
  styleUrls: ['./provided-delivery.component.css']
})
export class ProvidedDeliveryComponent implements OnInit {
  public rowColor = 'rgba(187, 187,187)';
  public DeliveryStatus = DeliveryStatus;
  public providedDeliverySpots: Observable<LunchSpot[]>;
  public deliverySpots$: Observable<LunchSpot[]>;
  
  constructor(
    private deliveryService: DeliveryService
    ) {
      this.deliverySpots$ = this.deliveryService.entities$;
   }

  ngOnInit() {
     this.deliveryService.getAll();

     this.providedDeliverySpots = this.deliverySpots$.pipe(
      map( ds => ds.filter((ls:LunchSpot) => ls.status === DeliveryStatus.Delivered))
    );
}

  public changeDeliveryStatus(lunchSpot: LunchSpot) :void {
    lunchSpot.status = DeliveryStatus.Undelivered;
    this.deliveryService.update(lunchSpot);
  }

  public deleteLunchSpot(lunchSpot: LunchSpot) :void {
    this.deliveryService.delete(lunchSpot);
  }
}
