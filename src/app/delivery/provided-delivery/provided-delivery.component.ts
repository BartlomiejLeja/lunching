import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../shared/services/delivery.service';
import { map } from 'rxjs/operators';
import { Restaurant } from '../shared/models/restaurant.model';
import { LunchSpot } from '../shared/models/lunch-spot.model';
import { DeliveryStatus } from '../shared/enums/delivery-status.enum';

@Component({
  selector: 'app-provided-delivery',
  templateUrl: './provided-delivery.component.html',
  styleUrls: ['./provided-delivery.component.css']
})
export class ProvidedDeliveryComponent implements OnInit {
  public lunchSpots : LunchSpot[];
  public rowColor = 'rgba(187, 187,187)';
  private DeliveryStatus = DeliveryStatus;

  constructor(private deliveryService: DeliveryService) {
   }

  ngOnInit() {
    this.deliveryService.getRestaurants()
    .pipe(
      map((r: Restaurant)=> r.lunchSpots.filter(ls=>ls.status === this.DeliveryStatus.Delivered))
    )
    .subscribe(
      (ls: LunchSpot[])=> {
        this.lunchSpots = ls
      } 
    )
  }

}
