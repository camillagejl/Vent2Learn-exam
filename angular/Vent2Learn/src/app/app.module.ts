import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {TutorialModule} from "./learning-element/tutorial.module";
import {LoginModule} from "./login/login.module";
import {VentSelectionModule} from "./vent-selection/vent-selection.module";
import {ZoneOverviewModule} from "./zone-overview/zone-overview.module";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavigationModule} from "./navigation/navigation.module";
import {TimeSelectionModule} from "./time-selection/time-selection.module";
import {SettingsModule} from "./settings/settings.module";
import {AboutModule} from "./about/about.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TutorialModule,
    LoginModule,
    VentSelectionModule,
    ZoneOverviewModule,
    BrowserAnimationsModule,
    NavigationModule,
    TimeSelectionModule,
    SettingsModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
