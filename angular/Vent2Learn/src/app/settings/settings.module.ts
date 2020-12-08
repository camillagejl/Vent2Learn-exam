import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SettingsViewComponent} from './settings-view/settings-view.component';
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [SettingsViewComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule
  ]
})

export class SettingsModule {
}
