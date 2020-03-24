import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
    EntityDataModule,
    DefaultDataServiceConfig
} from  '@ngrx/data';
import { entityMetadata } from './entity-metadata';

const defaultDataServiceConfig: DefaultDataServiceConfig = {
    root: 'https://ngrx-data-example.com:8000/api/',
    timeout: 8000, // request timeout
  }

  @NgModule({
    imports: [
      StoreModule.forRoot({}),
      EffectsModule.forRoot([]),
      EntityDataModule.forRoot({entityMetadata}),
    ],
    providers: [{ provide: DefaultDataServiceConfig, useValue: defaultDataServiceConfig }]
  })
  export class AppStoreModule { }