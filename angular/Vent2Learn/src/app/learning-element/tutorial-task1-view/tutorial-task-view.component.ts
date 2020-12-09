import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {TutorialTask1ModalContentComponent} from "./tutorial-task1-modal-content/tutorial-task1-modal-content.component";
import {AirCalculationsService} from "../../shared-services/air-calculations.service";
import {TutorialTask2ModalContentComponent} from "./tutorial-task2-modal-content/tutorial-task2-modal-content.component";
import {TutorialTask3ModalContentComponent} from "./tutorial-task3-modal-content/tutorial-task3-modal-content.component";
import {TutorialTask4ModalContentComponent} from "./tutorial-task4-modal-content/tutorial-task4-modal-content.component";

@Component({
  selector: 'app-tutorial-task-view',
  templateUrl: './tutorial-task-view.component.html',
  styleUrls: ['./tutorial-task-view.component.scss']
})
export class TutorialTaskViewComponent implements OnInit {

  userId; // Found from the URL parameter.

  // ----- Task specific properties - will change from task to task, but starts at task 1 -----

  // Only has one user in array for simplicity for the user, but still uses array to work with the service
  taskHeadline = 'Task 1: Get a temperature of approx. 22°';
  users = [
    {
      heatingLevel: 3,
      ventilationLevel: 8
    }
  ];
  targetTemperature = 22;
  targetHumidity = null;

  // ----- Non-task specific properties -----
  setting = 'heatingLevel';
  zoneTemperature;
  zoneHumidity;

  nextButton = false;
  nextTaskNumber = 2;

  constructor(
    private router: Router,
    private airCalculationsService: AirCalculationsService,
    public dialog: MatDialog,
    private _route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    // Finds the userId parameter from the URL.
    this._route.params.subscribe(params => {
      this.userId = params["userId"];
    });

    console.log("userId", this.userId);

    this.updateZoneValues();

    // Opens the modal when loading the page
    this.openInfoDialog();
  }

  openInfoDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;

    if (this.nextTaskNumber === 2) {
      this.dialog.open(TutorialTask1ModalContentComponent, dialogConfig);
    }

    else if (this.nextTaskNumber === 3) {
      this.dialog.open(TutorialTask2ModalContentComponent, dialogConfig);
    }

    else if (this.nextTaskNumber === 4) {
      this.dialog.open(TutorialTask3ModalContentComponent, dialogConfig);
    }

    else if (this.nextTaskNumber === 5) {
      this.dialog.open(TutorialTask4ModalContentComponent, dialogConfig);
    }


  }

  updateZoneValues() {
    this.zoneTemperature = this.airCalculationsService.calculateRoomTemperature(this.users);
    this.zoneHumidity = this.airCalculationsService.calculateRoomHumidity(this.users);

    // Changes the nextButton to true if the temperature and humidity are within the targets, or they have no targets.
    // Falls if they don't fit this criteria.
    this.nextButton = (this.zoneTemperature >= this.targetTemperature
      && this.zoneTemperature < this.targetTemperature + 1
      || this.targetTemperature === null
    ) && (
      this.zoneHumidity >= this.targetHumidity
      && this.zoneHumidity < this.targetHumidity + 1
      || this.targetHumidity === null)
  }

  nextTask() {
    // Going forward to task no 2
    if (this.nextTaskNumber === 2) {

      this.taskHeadline = 'Task 2: Get a temperature of 22° and humidity of 45%';
      this.users = [
        {
          heatingLevel: 2,
          ventilationLevel: 2
        }
      ];
      this.targetTemperature = 22;
      this.targetHumidity = 45;
      this.nextButton = false;

      // Open dialog for the next task
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = false;
      this.dialog.open(TutorialTask2ModalContentComponent, dialogConfig);

      this.nextTaskNumber = this.nextTaskNumber + 1;
    }


    // Going forward to task no 3
    else if (this.nextTaskNumber === 3) {

      this.taskHeadline = 'Task 3: Turn up heating and ventilation to 10';
      this.users = [
        {
          heatingLevel: 3,
          ventilationLevel: 5
        }
      ];
      this.targetTemperature = 22;
      this.targetHumidity = 30;
      this.nextButton = false;

      // Open dialog for the next task
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = false;
      this.dialog.open(TutorialTask3ModalContentComponent, dialogConfig);

      this.nextTaskNumber = this.nextTaskNumber + 1;
    }

    // Going forward to task no 4
    else if (this.nextTaskNumber === 4) {

      this.taskHeadline = 'Task 4: Find the maximum limits of temperature and humidity';
      this.users = [
        {
          heatingLevel: 3,
          ventilationLevel: 7
        }
      ];
      this.targetTemperature = 27;
      this.targetHumidity = 60;
      this.nextButton = false;

      // Open dialog for the next task
      const dialogConfig = new MatDialogConfig();
      dialogConfig.autoFocus = false;
      this.dialog.open(TutorialTask4ModalContentComponent, dialogConfig);

      this.nextTaskNumber = this.nextTaskNumber + 1;
    }

    else {

      this.router.navigate(['/tutorial-ending', this.userId]);
    }


  }

}
