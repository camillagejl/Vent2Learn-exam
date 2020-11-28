import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MathTestComponent } from './math-test/math-test.component';



@NgModule({
  declarations: [MathTestComponent],
  exports: [
    MathTestComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LearningElementModule { }
