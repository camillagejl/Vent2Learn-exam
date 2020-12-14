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
import { SettingLevelDialogComponent } from './setting-level-dialog/setting-level-dialog.component';
import { VentSelectionDialogComponent } from './vent-selection-dialog/vent-selection-dialog.component';
import {VentSelectionModule} from "../vent-selection/vent-selection.module";
import {RouterModule} from "@angular/router";


@NgModule({
  declarations: [SettingLevelButtonComponent, CurrentZoneValueComponent, ZoneOverviewViewComponent, TooltipDialogComponent, SettingLevelDialogComponent, VentSelectionDialogComponent],
  imports: [
    CommonModule,
    MatSliderModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    VentSelectionModule,
    RouterModule
  ]
})
export class ZoneOverviewModule {
}
