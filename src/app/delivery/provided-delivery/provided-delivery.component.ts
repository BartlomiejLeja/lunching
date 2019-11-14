import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../shared/services/delivery.service';
import { map, tap, filter, mergeMap, first } from 'rxjs/operators';
import { Restaurant } from '../shared/models/restaurant.model';
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
  private DeliveryStatus = DeliveryStatus;
  public providedDeliverySpots: Observable<LunchSpot[]>;
  private restaurants$: Observable<Restaurant[]>;
  
  
  constructor(
    private deliveryService: DeliveryService
    ) {
      this.restaurants$ = this.deliveryService.entities$;
   }

  ngOnInit() {
     this.deliveryService.getAll();

     this.providedDeliverySpots = this.restaurants$.pipe(
      mergeMap((r: Restaurant[]) => 
      r.map(r=>r.lunchSpots.filter((ls:LunchSpot) => 
   ls.status === DeliveryStatus.Delivered))),
  )
}

public changeDeliveryStatus(lunchSpot: LunchSpot) :void {
  let restarantToUpdate: Restaurant;
  this.restaurants$.pipe(
    mergeMap((r: Restaurant[]) => 
      r.filter(r=> r.lunchSpots.some((ls=>ls.lunchSpotId===lunchSpot.lunchSpotId))
   )),first()
   ).subscribe((r: Restaurant) =>{
    restarantToUpdate = r;
    lunchSpot.status = DeliveryStatus.Undelivered
    restarantToUpdate.lunchSpots.map(ls => lunchSpot )
    this.deliveryService.update(restarantToUpdate);
   }
   )
}
}
