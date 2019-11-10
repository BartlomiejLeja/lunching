import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../shared/services/delivery.service';
import { map } from 'rxjs/operators';
import { Restaurant } from '../shared/models/restaurant.model';
import { LunchSpot } from '../shared/models/lunch-spot.model';

@Component({
  selector: 'app-provided-delivery',
  templateUrl: './provided-delivery.component.html',
  styleUrls: ['./provided-delivery.component.css']
})
export class ProvidedDeliveryComponent implements OnInit {
  public lunchSpots : LunchSpot[]
  constructor(private deliveryService: DeliveryService) { }

  ngOnInit() {
    this.deliveryService.getRestaurants()
    .pipe(
      map((r: Restaurant)=> r.lunchSpots.filter(ls=>ls.status==='DELIVERED'))
    )
    .subscribe(
      (ls: LunchSpot[])=> {
        this.lunchSpots = ls
      } 
    )
  }

}
