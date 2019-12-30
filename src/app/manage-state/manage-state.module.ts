import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageStateRoutingModule } from './manage-state-routing.module';
import { ManageStateComponent } from './manage-state/manage-state.component';
import { StoreModule } from '@ngrx/store';
import { FruitEffects } from './manage-state/store/effects';
import { EffectsModule } from '@ngrx/effects';
import { reducers, FRUIT_STATE_MODULE_KEY, customSerializer } from './manage-state/store/states';
import { FruitDetailComponent } from './manage-state/fruit-detail/fruit-detail.component';
import { RouterStateSerializer } from '@ngrx/router-store';


@NgModule({
  declarations: [ManageStateComponent, FruitDetailComponent],
  imports: [
    CommonModule,
    ManageStateRoutingModule,
    EffectsModule.forFeature([FruitEffects]),
    StoreModule.forFeature(FRUIT_STATE_MODULE_KEY, reducers)
  ]
})
export class ManageStateModule { }
