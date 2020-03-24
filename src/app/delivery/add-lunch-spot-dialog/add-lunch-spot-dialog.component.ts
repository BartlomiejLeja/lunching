import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DeliveryService } from '../shared/services/delivery.service';
import { LunchSpot } from '../shared/models/lunch-spot.model';
import { DeliveryStatus } from '../shared/enums/delivery-status.enum';



@Component({
  selector: 'app-add-lunch-spot-dialog',
  templateUrl: './add-lunch-spot-dialog.component.html',
  styleUrls: ['./add-lunch-spot-dialog.component.css']
})
export class AddLunchSpotDialogComponent implements OnInit {

  public lunchSpotDialogData: LunchSpot; 

  constructor( public dialogRef: MatDialogRef<AddLunchSpotDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: LunchSpot,
    private deliveryService: DeliveryService) {
      this.lunchSpotDialogData = {
        name : "", 
        address: "", 
        company: "",
        deliveryTime: "", 
        id: 0,
        status : DeliveryStatus.Undelivered
      }
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  addNewLunchSpot() : void {
    this.lunchSpotDialogData['id'] = Math.floor(Math.random() * 10000) + 1;
    this.deliveryService.add(this.lunchSpotDialogData);
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
