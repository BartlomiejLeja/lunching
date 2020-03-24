import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingDeliveryComponent } from './pending-delivery/pending-delivery.component';
import { ProvidedDeliveryComponent } from './provided-delivery/provided-delivery.component';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AppStoreModule } from './store/restaurant-store.module';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { AddLunchSpotDialogComponent } from './add-lunch-spot-dialog/add-lunch-spot-dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material';

@NgModule({
  declarations: [PendingDeliveryComponent, ProvidedDeliveryComponent, DeliveryListComponent, AddLunchSpotDialogComponent],
  imports: [
    CommonModule,
    DragDropModule,
    AppStoreModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule
  ],
  entryComponents: [AddLunchSpotDialogComponent],
  providers: []
})
export class DeliveryModule { }
