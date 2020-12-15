import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TutorialStartingViewComponent} from './tutorial-starting-view/tutorial-starting-view.component';
import {TutorialTaskViewComponent} from './tutorial-task1-view/tutorial-task-view.component';
import {TutorialEndingViewComponent} from './tutorial-ending-view/tutorial-ending-view.component';
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {TutorialTask1ModalContentComponent} from './tutorial-task1-view/tutorial-task1-modal-content/tutorial-task1-modal-content.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatDialogModule} from "@angular/material/dialog";
import {MatSliderModule} from "@angular/material/slider";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {TutorialTask2ModalContentComponent} from "./tutorial-task1-view/tutorial-task2-modal-content/tutorial-task2-modal-content.component";
import {TutorialTask3ModalContentComponent} from "./tutorial-task1-view/tutorial-task3-modal-content/tutorial-task3-modal-content.component";
import {TutorialTask4ModalContentComponent} from "./tutorial-task1-view/tutorial-task4-modal-content/tutorial-task4-modal-content.component";
import {UsersService} from "../shared-services/users.service";
import {AirCalculationsService} from "../shared-services/air-calculations.service";

@NgModule({
  declarations: [TutorialStartingViewComponent, TutorialTaskViewComponent, TutorialEndingViewComponent, TutorialTask1ModalContentComponent, TutorialTask2ModalContentComponent, TutorialTask3ModalContentComponent, TutorialTask4ModalContentComponent],
  exports: [],
  imports: [
    CommonModule,
    MatButtonModule,
    RouterModule,
    MatToolbarModule,
    MatDialogModule,
    MatSliderModule,
    FormsModule,
    MatCardModule
  ],
  providers: [
    AirCalculationsService
  ]
})
export class TutorialModule {
}
