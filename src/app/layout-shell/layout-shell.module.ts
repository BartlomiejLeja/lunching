import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { LayoutShellRouting } from './layout-shell.routing';
import { DeliveryModule } from '../delivery/delivery.module';
import { AddLunchSpotDialogComponent } from '../delivery/add-lunch-spot-dialog/add-lunch-spot-dialog.component';

@NgModule({
  declarations: [LayoutComponent, ToolbarComponent, FooterComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    LayoutShellRouting,
    DeliveryModule
  ],
  entryComponents: [AddLunchSpotDialogComponent],
})
export class LayoutShellModule { }
