import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { LayoutShellRouting } from './layout-shell.routing';
import { DeliveryModule } from '../delivery/delivery.module';

@NgModule({
  declarations: [LayoutComponent, ToolbarComponent, FooterComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    LayoutShellRouting,
    DeliveryModule
  ]
})
export class LayoutShellModule { }
