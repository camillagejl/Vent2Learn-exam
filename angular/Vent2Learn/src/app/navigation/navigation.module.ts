import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";



@NgModule({
  declarations: [TopToolbarComponent],
  exports: [
    TopToolbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule
  ]
})
export class NavigationModule { }
