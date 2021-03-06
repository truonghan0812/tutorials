import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Third party
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
//Custom items
import { CustomPipeComponent } from './custom-pipe/custom-pipe.component';
import { GetMemberShipLevelPipe } from './custom-pipe/get-member-ship-level.pipe';
import { SortByPipe } from './custom-pipe/sort-by.pipe';
import { AppService } from './app-service.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomPipeComponent,
    GetMemberShipLevelPipe,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Third party
    AngularFontAwesomeModule,
    NgbDropdownModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
