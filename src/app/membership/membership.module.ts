import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MembershipComponent } from './membership.component';
//Third party import
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MembershipComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
     //Third party
     NgbModule
  ],
  exports:[
    MembershipComponent
  ]
})
export class MembershipModule { }
