import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentSelectionViewComponent } from './vent-selection-view/vent-selection-view.component';
import { VentSettingComponent } from './vent-setting/vent-setting.component';



@NgModule({
  declarations: [VentSelectionViewComponent, VentSettingComponent],
  imports: [
    CommonModule
  ]
})
export class VentSelectionModule { }
