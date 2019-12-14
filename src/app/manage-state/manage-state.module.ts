import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ManageStateRoutingModule } from './manage-state-routing.module';
import { ManageStateComponent } from './manage-state/manage-state.component';


@NgModule({
  declarations: [ManageStateComponent],
  imports: [
    CommonModule,
    ManageStateRoutingModule
  ]
})
export class ManageStateModule { }
