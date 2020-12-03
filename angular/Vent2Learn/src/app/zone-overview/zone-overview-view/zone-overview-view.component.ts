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

  userId;
  user;

  room;
  vent;

  userHeatingLevel = 5;
  userVentilationLevel = 5;

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
    this._route.params.subscribe(params => {
      this.userId = params["userId"];
    });

    this.retrieveUser();
  }

  retrieveUser() {
    this.usersService.get(this.userId)
      .subscribe(
        data => {
          this.user = data;
          this.userHeatingLevel = this.user.heatingLevel;
          this.userVentilationLevel = this.user.ventilationLevel;
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
          this.zoneTemperature = this.vent.currentTemperature;
          this.zoneHumidity = this.vent.currentHumidity;
          this.calculateZoneValues(retrieve);
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

  calculateZoneValues(retrieve) {
    this.usersService.getAll()
      .subscribe(
        (data: Array<any>) => {
          const users = data;
          console.log("Array?", users);
          let zoneUsers = [];
          users.forEach(user => {
            if (user.ventId === this.vent.ventId) {
            zoneUsers.push(user);
            }
          });

          this.updateAirCaulculations(zoneUsers, retrieve);

          console.log(`Room temperature: ${this.airCalculationsService.calculateRoomTemperature(zoneUsers)}°C`);
          console.log(`Room humidity: ${this.airCalculationsService.calculateRoomHumidity(zoneUsers)}%`);
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

          console.log("Retrieve?", retrieve);

          if (retrieve === 'retrieveTrue') {
            this.retrieveVent('retrieveFalse');
          }
          this.zoneTemperature = this.vent.currentTemperature;
          console.log("TEMPERATURE", this.zoneTemperature)
        },
        error => {
          console.log(error);
        });
  }

  updateUserLevel(setting, value) {
    console.log(setting, this[value]);

    this.usersService.update(this.userId, {
      [setting]: this[value]
    })
      .subscribe(
        response => {
          console.log(response);
          this.calculateZoneValues('retrieveTrue');
        },
        error => {
          console.log(error);
        });
  }

}
