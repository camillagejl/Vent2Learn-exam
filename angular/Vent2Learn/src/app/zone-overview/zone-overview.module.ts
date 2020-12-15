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
import {MatRippleModule} from "@angular/material/core";
import {UsersService} from "../shared-services/users.service";
import {RoomsService} from "../shared-services/rooms.service";
import {VentsService} from "../shared-services/vents.service";
import {PreviousRouteService} from "../shared-services/previous-route.service";
import {AirCalculationsService} from "../shared-services/air-calculations.service";


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
    RouterModule,
    MatRippleModule
  ],
  providers: [
    AirCalculationsService,
    UsersService,
    RoomsService,
    VentsService
  ],
})
export class ZoneOverviewModule {
}
