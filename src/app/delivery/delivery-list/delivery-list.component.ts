import { Component, OnInit, Input } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Restaurant } from '../shared/models/restaurant.model';
import { LunchSpot } from '../shared/models/lunch-spot.model';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.css']
})
export class DeliveryListComponent implements OnInit {
  @Input() public lunchSpots: LunchSpot[];
  @Input() public colorOfRow: string;

  constructor() { }

  public ngOnInit(): void {
  }

  public drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.lunchSpots, event.previousIndex, event.currentIndex);
  }
}
