import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {TutorialTask1ModalContentComponent} from "./tutorial-task1-modal-content/tutorial-task1-modal-content.component";
import {AirCalculationsService} from "../../shared-services/air-calculations.service";

@Component({
  selector: 'app-tutorial-task1-view',
  templateUrl: './tutorial-task1-view.component.html',
  styleUrls: ['./tutorial-task1-view.component.scss']
})
export class TutorialTask1ViewComponent implements OnInit {

  userId; // Found from the URL parameter.

  // ----- Task specific properties - will change from task to task, but starts at task 1 -----

  // Only has one user in array for simplicity for the user, but still uses array to work with the service
  taskHeadline = 'Task 1: Get a temperature of approx. 22 degrees';
  users = [
    {
      heatingLevel: 1,
      ventilationLevel: 7
    }
  ];
  targetTemperature = 22;
  targetHumidity = null;

  // ----- Non-task specific properties -----
  setting = 'heatingLevel';
  zoneTemperature;
  zoneHumidity;

  nextButton = false;

  constructor(
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

    this.updateZoneValues();

    // Opens the modal when loading the page
    // this.openInfoDialog();
  }

  openInfoDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;

    this.dialog.open(TutorialTask1ModalContentComponent, dialogConfig);
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
}
