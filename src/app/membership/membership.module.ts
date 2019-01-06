import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembershipComponent } from './membership.component';

@NgModule({
  declarations: [
    MembershipComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MembershipComponent
  ]
})
export class MembershipModule {}
