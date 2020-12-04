import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathTestComponent } from './math-test/math-test.component';
import { TutorialStartingViewComponent } from './tutorial-starting-view/tutorial-starting-view.component';



@NgModule({
  declarations: [MathTestComponent, TutorialStartingViewComponent],
  exports: [
    MathTestComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LearningElementModule { }
