import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {LearningElementModule} from "./learning-element-module/learning-element.module";
import {LoginModule} from "./login-module/login.module";
import {SharedComponentsModule} from "./shared-components-module/shared-components.module";
import {VentSelectionModule} from "./vent-selection-module/vent-selection.module";
import {ZoneOverviewModule} from "./zone-overview-module/zone-overview.module";

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
