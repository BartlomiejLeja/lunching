import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutShellModule } from './layout-shell/layout-shell.module';
import { HttpClientModule } from '@angular/common/http';
import { EntityDataModule } from '@ngrx/data';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { fakeBackendProvider } from './fake-backend/fake-restaurant-backend-interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutShellModule,
    HttpClientModule,
    StoreDevtoolsModule.instrument({
      name : 'Template app DevTool',
      maxAge: 25
    }),
  ],
  providers: [ fakeBackendProvider ],
  bootstrap: [AppComponent]
})
export class AppModule { }
