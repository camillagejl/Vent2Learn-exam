import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../shared-services/users.service";
import {RoomsService} from "../../shared-services/rooms.service";
import {VentsService} from "../../shared-services/vents.service";
import {AirCalculationsService} from "../../shared-services/air-calculations.service";

@Component({
  selector: 'app-zone-overview-view',
  templateUrl: './zone-overview-view.component.html',
  styleUrls: ['./zone-overview-view.component.scss']
})
export class ZoneOverviewViewComponent implements OnInit {

  userId; // Found from the URL parameter.
  user; // The user that is logged in.

  room; // The current room the user is in.
  vent; // The current vent the user is connected to.

  userHeatingLevel = 5; // Will default to the user's last level from the database, or else default to this.
  userVentilationLevel = 5; // Will default to the user's last level from the database, or else default to this.

  // The calculated temperature and humidity based on all users in the zone's ventilation- and heatingLevels and zone
  // democracy.
  zoneTemperature;
  zoneHumidity;

  constructor(
    private _route: ActivatedRoute,
    private airCalculationsService: AirCalculationsService,
    private usersService: UsersService,
    private roomsService: RoomsService,
    private ventsService: VentsService) {
  }

  ngOnInit() {
    // Finds the userId parameter from the URL.
    this._route.params.subscribe(params => {
      this.userId = params["userId"];
    });

    // This function retrieves the user and goes on to calculate the current temperature and humidity.
    this.retrieveUser();
  }

  retrieveUser() {
    this.usersService.get(this.userId)
      .subscribe(
        data => {
          this.user = data;

          // Sets the user's heating- and ventilationLevel based on the user's levels in the database.
          this.userHeatingLevel = this.user.heatingLevel;
          this.userVentilationLevel = this.user.ventilationLevel;

          // Retrieves the vent that the user is connected to - WITHOUT going to retrieve it again. If the parameter was
          // 'retrieveTrue', it would go retrieve it again and go in an infinite loop.
          this.retrieveVent('retrieveFalse');
        },
        error => {
          console.log(error);
        });
  }

  retrieveVent(retrieve) {
    this.ventsService.get(this.user.ventId)
      .subscribe(
        data => {
          this.vent = data;

          // Finds all users at this vent.
          this.findZoneUsers(retrieve);

          // Retrieves the room. This is only done now because the vents needs to be retrieved first, so the room can
          // be retrieved based on the roomId.
          this.retrieveRoom();
        },
        error => {
          console.log(error);
        });
  }

  retrieveRoom() {
    this.roomsService.get(this.vent.roomId)
      .subscribe(
        data => {
          this.room = data;

        },
        error => {
          console.log(error);
        });
  }

  findZoneUsers(retrieve) {
    this.usersService.getAll()
      .subscribe(
        (data: Array<any>) => {
          const users = data;

          // Finds all users in the specific vent, so we can find the average of only their settings, instead of all
          // users in the system.
          let zoneUsers = [];
          users.forEach(user => {
            if (user.ventId === this.vent.ventId) {
            zoneUsers.push(user);
            }
          });

          // Goes on to calculate- and update the the zoneTemperature and zoneHumidity based on the users at the vent.
          this.updateAirCaulculations(zoneUsers, retrieve);
        },
        error => {
          console.log(error);
        });
  }

  updateAirCaulculations(users, retrieve) {
    this.ventsService.update(this.vent.ventId, {
      currentTemperature: this.airCalculationsService.calculateRoomTemperature(users),
      currentHumidity: this.airCalculationsService.calculateRoomHumidity(users)
    })
      .subscribe(
        response => {
          console.log(response);

          // Sets the temperature and humidity locally in this ts file.
          this.zoneTemperature = this.vent.currentTemperature;
          this.zoneHumidity = this.vent.currentHumidity;

          // if 'retrieveTrue', this means that the heating- or ventilation value have been changed by the user, and the
          // code needs to run again to update the current temperature and humidity. This is done to update it in the
          // front after it is updated in the database.
          if (retrieve === 'retrieveTrue') {
            this.retrieveVent('retrieveFalse');
          }

        },
        error => {
          console.log(error);
        });
  }

  // Runs when the user updates either their ventilation- or heating level.
  updateUserLevel(setting, value) {
    console.log(setting, this[value]);

    this.usersService.update(this.userId, {
      [setting]: this[value]
    })
      .subscribe(
        response => {
          console.log(response);

          // Runs all methods to calculate and display the new zone temperature and humidity. 'retrieveTrue' is true so
          // it will also update in the front end and display the new values.
          this.findZoneUsers('retrieveTrue');
        },
        error => {
          console.log(error);
        });
  }

}
