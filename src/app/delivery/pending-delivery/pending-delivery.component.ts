import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../shared/services/delivery.service';
import { Restaurant } from '../shared/models/restaurant.model';
import { LunchSpot } from '../shared/models/lunch-spot.model';
import { map } from 'rxjs/operators';
import { DeliveryStatus } from '../shared/enums/delivery-status.enum';

@Component({
  selector: 'app-pending-delivery',
  templateUrl: './pending-delivery.component.html',
  styleUrls: ['./pending-delivery.component.css']
})
export class PendingDeliveryComponent implements OnInit {

  public lunchSpots: LunchSpot[];
  public rowColor = 'rgba(244, 67,54)';
  private DeliveryStatus = DeliveryStatus;

  constructor(private deliveryService: DeliveryService) { }

  ngOnInit() {
    this.deliveryService.getRestaurants()
    .pipe(
      map((r: Restaurant) => r.lunchSpots.filter(ls => ls.status === this.DeliveryStatus.Undelivered))
    )
    .subscribe(
      (ls: LunchSpot[]) => {
        this.lunchSpots = ls;
      }
    );
  }
}
