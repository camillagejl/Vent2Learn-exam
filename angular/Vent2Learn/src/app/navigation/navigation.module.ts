import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { BottomToolbarComponent } from './bottom-toolbar/bottom-toolbar.component';
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import { TutorialBottomToolbarComponent } from './tutorial-bottom-toolbar/tutorial-bottom-toolbar.component';

@NgModule({
  declarations: [TopToolbarComponent, BottomToolbarComponent, TutorialBottomToolbarComponent],
  exports: [
    BottomToolbarComponent,
    TutorialBottomToolbarComponent,
    TopToolbarComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule
  ]
})
export class NavigationModule { }
