import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VentSelectionViewComponent } from './vent-selection-view/vent-selection-view.component';
import { VentSettingComponent } from './vent-setting/vent-setting.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [VentSelectionViewComponent, VentSettingComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule
  ]
})
export class VentSelectionModule { }
