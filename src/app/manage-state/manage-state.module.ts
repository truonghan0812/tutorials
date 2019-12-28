import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageStateRoutingModule } from './manage-state-routing.module';
import { ManageStateComponent } from './manage-state/manage-state.component';
import { StoreModule } from '@ngrx/store';
import { reducer } from './manage-state/store';
import { FruitEffects } from './manage-state/store/effects';
import { EffectsModule } from '@ngrx/effects';


@NgModule({
  declarations: [ManageStateComponent],
  imports: [
    CommonModule,
    ManageStateRoutingModule,
    EffectsModule.forFeature([FruitEffects]),
    StoreModule.forFeature('fruitStore',reducer),
  ]
})
export class ManageStateModule { }
