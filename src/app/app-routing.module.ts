import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout-shell/layout/layout.component';
import { PendingDeliveryComponent } from './delivery/pending-delivery/pending-delivery.component';
import { ProvidedDeliveryComponent } from './delivery/provided-delivery/provided-delivery.component';

const routes: Routes = []

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
