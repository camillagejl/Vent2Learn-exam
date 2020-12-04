import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { BottomToolbarComponent } from './bottom-toolbar/bottom-toolbar.component';
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [TopToolbarComponent, BottomToolbarComponent],
  exports: [
    TopToolbarComponent,
    BottomToolbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule
  ]
})
export class NavigationModule { }
