import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponentComponent } from './test-component/test-component.component';



@NgModule({
  declarations: [TestComponentComponent],
  exports: [
    TestComponentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TestModuleModule { }
