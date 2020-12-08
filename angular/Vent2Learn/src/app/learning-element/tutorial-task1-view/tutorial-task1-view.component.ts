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

  users = [
    {
      heatingLevel: 1,
      ventilationLevel: 7
    }
  ];

  setting = 'heatingLevel';
  zoneTemperature;
  zoneHumidity;

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
  }
}
