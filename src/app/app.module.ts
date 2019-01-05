import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Third party import
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MembershipComponent } from './membership/membership.component';


@NgModule({
  declarations: [
    AppComponent,
    MembershipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Third party
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
