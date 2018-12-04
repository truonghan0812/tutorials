import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Third party
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { GetMemberShipLevelPipe } from './custom-pipe/get-member-ship-level.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipeComponent,
    GetMemberShipLevelPipe
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
