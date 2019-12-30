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
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { LoadingService } from './loading.service';
import { customSerializer } from './manage-state/manage-state/store';

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
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({     // Required for ReduxDevTools
      maxAge: 25                         // Track history for 25 actions
    }),
    //Third party
    AngularFontAwesomeModule,
    NgbDropdownModule,
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [AppService, 
    LoadingService, 
    {provide: RouterStateSerializer, useClass: customSerializer}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
