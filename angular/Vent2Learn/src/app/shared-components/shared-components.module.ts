import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingSliderComponent } from './setting-slider/setting-slider.component';



@NgModule({
  declarations: [SettingSliderComponent],
  exports: [
    SettingSliderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedComponentsModule { }
