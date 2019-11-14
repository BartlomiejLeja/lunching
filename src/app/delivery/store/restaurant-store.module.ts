import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  EntityMetadataMap,
    EntityDataModule
} from  '@ngrx/data';

export const entityMetadata: EntityMetadataMap = {
    Restaurant: {},
  };

  @NgModule({
    imports: [
      StoreModule.forRoot({}),
      EffectsModule.forRoot([]),
      EntityDataModule.forRoot({entityMetadata}),
    ]
  })
  export class AppStoreModule { }