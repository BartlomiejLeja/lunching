import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../shared/services/delivery.service';
import { Restaurant } from '../shared/models/restaurant.model';
import { LunchSpot } from '../shared/models/lunch-spot.model';
import { filter, map, flatMap } from 'rxjs/operators';

@Component({
  selector: 'app-pending-delivery',
  templateUrl: './pending-delivery.component.html',
  styleUrls: ['./pending-delivery.component.css']
})
export class PendingDeliveryComponent implements OnInit {

  public lunchSpots : LunchSpot[]
  constructor(private deliveryService: DeliveryService) { }

  ngOnInit() {
    this.deliveryService.getRestaurants()
    .pipe(
      map((r: Restaurant)=> r.lunchSpots.filter(ls=>ls.status==='UNDELIVERED'))
    )
    .subscribe(
      (ls: LunchSpot[])=> {
        this.lunchSpots = ls
      } 
    )
  }
}
