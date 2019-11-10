import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout/layout.component';
import { PendingDeliveryComponent } from '../delivery/pending-delivery/pending-delivery.component';
import { ProvidedDeliveryComponent } from '../delivery/provided-delivery/provided-delivery.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children :[
            {
                path: 'pendingdelivery',
                component: PendingDeliveryComponent 
            },
            {
                path: 'provideddelivery',
                component: ProvidedDeliveryComponent 
            },
        ]
    }

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class LayoutShellRouting { }