import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembershipModule } from './membership/membership.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MembershipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
