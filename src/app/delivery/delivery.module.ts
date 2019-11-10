import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PendingDeliveryComponent } from './pending-delivery/pending-delivery.component';
import { ProvidedDeliveryComponent } from './provided-delivery/provided-delivery.component';
import { DeliveryListComponent } from './delivery-list/delivery-list.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { DeliveryService } from './shared/services/delivery.service';

@NgModule({
  declarations: [PendingDeliveryComponent, ProvidedDeliveryComponent, DeliveryListComponent],
  imports: [
    CommonModule,
    DragDropModule
  ],
  providers: [DeliveryService]
})
export class DeliveryModule { }
