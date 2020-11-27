import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {LearningElementModule} from "./learning-element/learning-element.module";
import {LoginModule} from "./login/login.module";
import {SharedComponentsModule} from "./shared-components/shared-components.module";
import {VentSelectionModule} from "./vent-selection/vent-selection.module";
import {ZoneOverviewModule} from "./zone-overview/zone-overview.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LearningElementModule,
    LoginModule,
    SharedComponentsModule,
    VentSelectionModule,
    ZoneOverviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
