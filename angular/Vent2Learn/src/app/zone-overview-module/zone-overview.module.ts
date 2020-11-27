import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SettingLevelButtonComponent} from "./setting-level-button/setting-level-button.component";
import {SettingCurrentValueComponent} from "./setting-current-value/setting-current-value.component";
import { ZoneOverviewViewComponent } from './zone-overview-view/zone-overview-view.component';



@NgModule({
  declarations: [SettingLevelButtonComponent, SettingCurrentValueComponent, ZoneOverviewViewComponent],
  imports: [
    CommonModule
  ]
})
export class ZoneOverviewModule { }
