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
import { SeasonEspisodeComponent } from './season-espisode/season-espisode.component';
import { HttpClientModule } from '@angular/common/http';
import { SeasonService } from './season.service';
import { TypeAheadComponent } from './type-ahead/type-ahead.component';
import {NgbTypeaheadModule} from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    FormStepsComponent,
    FormStep1Component,
    FormStep2Component,
    FormStep3Component,
    PrettyPrintPipe,
    PersonalInformationComponent,
    AddressComponent,
    SeasonEspisodeComponent,
    TypeAheadComponent
  ],
  imports: [
    CommonModule,
    FormStepsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbTypeaheadModule
  ],
  providers:[SeasonService]
})
export class FormStepsModule { }
