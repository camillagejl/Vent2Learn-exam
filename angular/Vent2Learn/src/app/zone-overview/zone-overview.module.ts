import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SettingLevelButtonComponent} from "./setting-level-button/setting-level-button.component";
import {CurrentZoneValueComponent} from "./current-zone-value/current-zone-value.component";
import { ZoneOverviewViewComponent } from './zone-overview-view/zone-overview-view.component';
import {MatSliderModule} from "@angular/material/slider";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [SettingLevelButtonComponent, CurrentZoneValueComponent, ZoneOverviewViewComponent],
  imports: [
    CommonModule,
    MatSliderModule,
    FormsModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class ZoneOverviewModule { }
