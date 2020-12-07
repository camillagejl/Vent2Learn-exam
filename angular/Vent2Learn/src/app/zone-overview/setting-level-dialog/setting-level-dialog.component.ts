import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {UsersService} from "../../shared-services/users.service";

@Component({
  selector: 'app-setting-level-dialog',
  templateUrl: './setting-level-dialog.component.html',
  styleUrls: ['./setting-level-dialog.component.scss']
})
export class SettingLevelDialogComponent implements OnInit {

  @Output() someEvent = new EventEmitter();

  userId: number;
  setting: string;

  user; // The user that is logged in.
  settingValue: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) data,
    private usersService: UsersService
  ) {
    this.userId = data.userId;
    this.setting = data.setting;
  }

  ngOnInit() {
    this.retrieveUser()
  }

  retrieveUser() {
    this.usersService.get(this.userId)
      .subscribe(
        data => {
          this.user = data;

          // Sets the user's heating- and ventilationLevel based on the user's levels in the database.
          this.settingValue = this.user[this.setting];

        },
        error => {
          console.log(error);
        });
  }

  // Runs when the user updates either their ventilation- or heating level.
  updateUserLevel(setting, value) {
    console.log(setting, value);

    this.usersService.update(this.userId, {
      [setting]: value
    })
      .subscribe(
        response => {
          console.log(response);

          // Runs all methods to calculate and display the new zone temperature and humidity. 'retrieveTrue' is true so
          // it will also update in the front end and display the new values.
          // this.findZoneUsers('retrieveTrue');
          this.someEvent.emit('retrieveTrue');
        },
        error => {
          console.log(error);
        });
  }

  testFunction() {
    console.log("Testing");
    this.someEvent.emit('retrieveTrue');
  }

}
