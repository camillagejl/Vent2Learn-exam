import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingLevelButtonComponent} from "./setting-level-button/setting-level-button.component";
import {CurrentZoneValueComponent} from "./current-zone-value/current-zone-value.component";
import {ZoneOverviewViewComponent} from './zone-overview-view/zone-overview-view.component';
import {MatSliderModule} from "@angular/material/slider";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {TooltipDialogComponent} from './tooltip-dialog/tooltip-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";


@NgModule({
  declarations: [SettingLevelButtonComponent, CurrentZoneValueComponent, ZoneOverviewViewComponent, TooltipDialogComponent],
  imports: [
    CommonModule,
    MatSliderModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class ZoneOverviewModule {
}
