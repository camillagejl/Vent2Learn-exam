import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {UsersService} from "../../shared-services/users.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-time-selection-view',
  templateUrl: './time-selection-view.component.html',
  styleUrls: ['./time-selection-view.component.scss']
})
export class TimeSelectionViewComponent implements OnInit {


  userId; // Found from the URL parameter.
  user; // The user that is logged in.

  // The user will have to choose between our hardcoded times below.
  timeStamps = [
    '00:00',
    '00:15',
    '00:30',
    '00:45',
    '01:00',
    '01:15',
    '01:30',
    '01:45',
    '02:00',
    '02:15',
    '02:30',
    '02:45',
    '03:00',
    '03:15',
    '03:30',
    '03:45',
    '04:00',
    '04:15',
    '04:30',
    '04:45',
    '05:00',
    '05:15',
    '05:30',
    '05:45',
    '06:00',
    '06:15',
    '06:30',
    '06:45',
    '07:00',
    '07:15',
    '07:30',
    '07:45',
    '08:00',
    '08:15',
    '08:30',
    '08:45',
    '09:00',
    '09:15',
    '09:30',
    '09:45',
    '10:00',
    '10:15',
    '10:30',
    '10:45',
    '11:00',
    '11:15',
    '11:30',
    '11:45',
    '12:00',
    '12:15',
    '12:30',
    '12:45',
    '13:00',
    '13:15',
    '13:30',
    '13:45',
    '14:00',
    '14:15',
    '14:30',
    '14:45',
    '15:00',
    '15:15',
    '15:30',
    '15:45',
    '16:00',
    '16:15',
    '16:30',
    '16:45',
    '17:00',
    '17:15',
    '17:30',
    '17:45',
    '18:00',
    '18:15',
    '18:30',
    '18:45',
    '19:00',
    '19:15',
    '19:30',
    '19:45',
    '20:00',
    '20:15',
    '20:30',
    '20:45',
    '21:00',
    '21:15',
    '21:30',
    '21:45',
    '22:00',
    '22:15',
    '22:30',
    '22:45',
    '23:00',
    '23:15',
    '23:30',
    '23:45'
  ];

  // The selected time will be taken from the user's leavingTime. If this is null, it will default to the below value.
  selectedTime = '14:30';

  timeControl = new FormControl();

  constructor(
    private router: Router,
    private _route: ActivatedRoute,
    private usersService: UsersService
  ) {
  }

  ngOnInit() {
    // Finds the userId parameter from the URL.
    this._route.params.subscribe(params => {
      this.userId = params["userId"];
    });

    // Finds the user with the userId.
    this.retrieveUser();
  }

  retrieveUser() {
    this.usersService.get(this.userId)
      .subscribe(
        data => {
          this.user = data;
          this.selectedTime = this.user.leavingTime.substring(0,5); // Sets the selected time from leavingTime from user
          // in database. substring is used to remove the last :00 (seconds) from the time string.
        },
        error => {
          console.log(error);
        });
  }

  // Updates the leavingTime for the user in the database, and navigates to the next page with the userId as parameter.
  updateUserLeavingTime() {
    this.usersService.update(this.userId, {
      leavingTime: this.selectedTime
    })
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });

    this.router.navigate(['/zone-overview', this.userId]);
  }
}
