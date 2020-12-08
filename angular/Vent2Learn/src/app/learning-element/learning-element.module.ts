import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathTestComponent } from './math-test/math-test.component';
import { TutorialStartingViewComponent } from './tutorial-starting-view/tutorial-starting-view.component';
import { TutorialTask2ViewComponent } from './tutorial-task2-view/tutorial-task2-view.component';
import { TutorialTask1ViewComponent } from './tutorial-task1-view/tutorial-task1-view.component';
import { TutorialEndingViewComponent } from './tutorial-ending-view/tutorial-ending-view.component';
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import { TutorialTask1ModalContentComponent } from './tutorial-task1-view/tutorial-task1-modal-content/tutorial-task1-modal-content.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSliderModule} from "@angular/material/slider";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [MathTestComponent, TutorialStartingViewComponent, TutorialTask2ViewComponent, TutorialTask1ViewComponent, TutorialEndingViewComponent, TutorialTask1ModalContentComponent],
  exports: [
    MathTestComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    MatToolbarModule,
    MatDialogModule,
    MatSliderModule,
    FormsModule,
    MatCardModule
  ]
})
export class LearningElementModule { }
