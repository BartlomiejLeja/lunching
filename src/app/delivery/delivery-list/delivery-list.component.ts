import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { LunchSpot } from '../shared/models/lunch-spot.model';
import { Observable } from 'rxjs/internal/Observable';
import { DeliveryStatus } from '../shared/enums/delivery-status.enum';
import { DeliveryService } from '../shared/services/delivery.service';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.css']
})
export class DeliveryListComponent implements OnInit {
  @Input() public lunchSpots$: Observable<LunchSpot[]>;
  @Input() public colorOfRow: string;
  @Input() public deliveryStatus: DeliveryStatus;
  @Output() public changeDeliveryStatusOutput = new EventEmitter<LunchSpot>()
  
  public lunchSpots: LunchSpot[];
  private selectedDeliveryItem: LunchSpot;
  private DeliveryStatus = DeliveryStatus;

  constructor() { }

  public ngOnInit(): void {
    console.log(this.deliveryStatus)
    this.lunchSpots$.subscribe( (ls:LunchSpot[]) =>
      this.lunchSpots =ls
    )
  }

  public drop(event: CdkDragDrop<string[]>): void {
    moveItemInArray(this.lunchSpots, event.previousIndex, event.currentIndex);
  }

  public selectedDelivery(selectedDelivery: LunchSpot){
    this.selectedDeliveryItem = selectedDelivery;
  }
  public changeDeliveryStatus() : void{
    this.changeDeliveryStatusOutput.emit(this.selectedDeliveryItem);
  }
}
