import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormStepsComponent } from './form-steps.component';
import { FormStep1Component } from './form-step1/form-step1.component';
import { FormStep2Component } from './form-step2/form-step2.component';
import { FormStep3Component } from './form-step3/form-step3.component';
import { FormStepsRoutingModule } from './form-steps.routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrettyPrintPipe } from './pretty-print.pipe';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { AddressComponent } from './address/address.component';

@NgModule({
  declarations: [
    FormStepsComponent,
    FormStep1Component,
    FormStep2Component,
    FormStep3Component,
    PrettyPrintPipe,
    PersonalInformationComponent,
    AddressComponent
  ],
  imports: [
    CommonModule,
    FormStepsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class FormStepsModule { }
