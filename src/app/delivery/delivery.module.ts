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

@NgModule({
  declarations: [PendingDeliveryComponent, ProvidedDeliveryComponent, DeliveryListComponent],
  imports: [
    CommonModule,
    DragDropModule,
    AppStoreModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: []
})
export class DeliveryModule { }
