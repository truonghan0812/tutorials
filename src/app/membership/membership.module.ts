import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembershipComponent } from './membership.component';
import { CalcMemberShipLevelPipe } from './calc-member-ship-level.pipe';

@NgModule({
  declarations: [
    MembershipComponent,
    CalcMemberShipLevelPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MembershipComponent
  ]
})
export class MembershipModule {}
