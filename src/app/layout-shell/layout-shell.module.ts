import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { FooterComponent } from './footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [LayoutComponent, ToolbarComponent, FooterComponent],
  imports: [
    CommonModule,
    MatToolbarModule
  ]
})
export class LayoutShellModule { }
