import { Component, OnInit, OnDestroy } from '@angular/core';
import { DeliveryService } from '../shared/services/delivery.service';
import { Restaurant } from '../shared/models/restaurant.model';
import { LunchSpot } from '../shared/models/lunch-spot.model';
import { mergeMap, first } from 'rxjs/operators';
import { DeliveryStatus } from '../shared/enums/delivery-status.enum';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-pending-delivery',
  templateUrl: './pending-delivery.component.html',
  styleUrls: ['./pending-delivery.component.css']
})
export class PendingDeliveryComponent implements OnInit {
  public lunchSpots: LunchSpot[];
  public rowColor = 'rgba(244, 67,54)';

  private DeliveryStatus = DeliveryStatus;
  public pendingDeliverySpots: Observable<LunchSpot[]>;
  private restaurants$: Observable<Restaurant[]>;

  constructor(
    private deliveryService: DeliveryService
    ) {
      this.restaurants$ = this.deliveryService.entities$;
     }

  public ngOnInit(): void {
    this.deliveryService.getAll();

    this.pendingDeliverySpots = this.restaurants$.pipe(
     mergeMap((r: Restaurant[]) => 
        r.map(r=>r.lunchSpots.filter((ls:LunchSpot) => 
     ls.status === DeliveryStatus.Undelivered))),
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
      lunchSpot.status = DeliveryStatus.Delivered
      restarantToUpdate.lunchSpots.map(ls => lunchSpot )
      this.deliveryService.update(restarantToUpdate);
     }
     )
  }
}
