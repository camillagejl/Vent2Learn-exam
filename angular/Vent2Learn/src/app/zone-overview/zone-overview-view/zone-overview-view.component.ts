import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../shared-services/users.service";
import {RoomsService} from "../../shared-services/rooms.service";
import {VentsService} from "../../shared-services/vents.service";
import {AirCalculationsService} from "../../shared-services/air-calculations.service";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {TooltipDialogComponent} from "../tooltip-dialog/tooltip-dialog.component";
import {SettingLevelDialogComponent} from "../setting-level-dialog/setting-level-dialog.component";
import {VentSelectionDialogComponent} from "../vent-selection-dialog/vent-selection-dialog.component";

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

  tooltips =
    [
      {
        // Too hot
        minTemperature: 25,
        maxTemperature: 100,
        shortTip: 'Try turning the heating down or ventilation up.',
        longTip: `
            <p>
                Our recommended classroom temperature is <b>between 20°C and 24°C</b>, but your zone is warmer than
                this.
            </p>
            <p>    
                What you can do:
            </p> 
            <ul>
                <li><b>Turn down the heating</b>, lowering the temperature</li>
                <li><b>Turn up the ventilation</b>, lowering the temperature and humidity</li>
            </ul>
        `
      },
      {
        // Too cold
        minTemperature: 0,
        maxTemperature: 19,
        shortTip: 'Try turning the heating up or the ventilation down.',
        longTip: `
            <p>
                Our recommended classroom temperature is <b>between 20°C and 24°C</b>, but your zone is colder than
                this.
            </p>
            <p>    
                What you can do:
            </p> 
            <ul>
                <li><b>Turn up the heating</b>, increasing the temperature</li>
                <li><b>Turn down the ventilation</b>, increasing the temperature and humidity</li>
            </ul>
        `
      },
      {
        // Too humid
        minHumidity: 51,
        maxHumidity: 100,
        shortTip: 'Try turning the ventilation up.',
        longTip: `
            <p>
                Our recommended classroom humidity is <b>between 40% and 50%</b>, but your zone is more humid than
                this.
            </p>
            <p>    
                What you can do:
            </p> 
            <ul>
                <li><b>Turn up the ventilation</b>, lowering the humidity and temperature.</li>
                <li>If you want to keep your current temperature, you can <b>turn up the heating</b> at the same
                time. </li>
            </ul>
        `
      },
      {
        // Too dry
        minHumidity: 0,
        maxHumidity: 39,
        shortTip: 'Try turning the ventilation down.',
        longTip: `
            <p>
                Our recommended classroom humidity is <b>between 40% and 50%</b>, but your zone is dryer than
                this.
            </p>
            <p>    
                What you can do:
            </p> 
            <ul>
                <li><b>Turn down the ventilation</b>, increasing the humidity and temperature.</li>
                <li>If you want to keep your current temperature, you can <b>turn up the heating</b> at the same
                time. </li>
            </ul>
        `
      }
    ];

  currentTooltip: object;

  constructor(
    public dialog: MatDialog,
    private _route: ActivatedRoute,
    private airCalculationsService: AirCalculationsService,
    private usersService: UsersService,
    private roomsService: RoomsService,
    private ventsService: VentsService) {
  }

  ngOnInit() {
    // Finds the userId parameter from the URL.
    this._route.params.subscribe(params => {
        this.userId = parseInt(params["userId"]);
      }
    );

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
    console.log("Emitting");
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

            console.log("This doesn't fit fits", user.userId, this.userId);

            if (user.userId === this.userId) {
              console.log("This fits", user.userId, this.userId);
              this.userHeatingLevel = user.heatingLevel;
              this.userVentilationLevel = user.ventilationLevel;
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

          // Filters the tooltips, and returns the first tooltip that matches the settings, or null if none do.
          const tooltip = this.tooltips.filter(tooltip => {
            return this.zoneTemperature > tooltip.minTemperature
              && this.zoneTemperature < tooltip.maxTemperature
              || this.zoneHumidity > tooltip.minHumidity
              && this.zoneHumidity < tooltip.maxHumidity
          });
          this.currentTooltip = tooltip[0] || null;

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

  openTooltipDialog(longTip) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;

    dialogConfig.data = {
      tooltip: longTip
    };

    this.dialog.open(TooltipDialogComponent, dialogConfig);
  }

  openSettingDialog(userId, setting) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;

    dialogConfig.data = {
      userId: userId,
      setting: setting
    };

    let dialogRef = this.dialog.open(SettingLevelDialogComponent, dialogConfig);

    dialogRef.afterClosed().subscribe(result => {
      this.findZoneUsers('retrieveTrue');
    });
  }

  // Should open the selectVentDialog - but it doesn't live update the values, so dropping it for now

  // openVentDialog() {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.autoFocus = false;
  //
  //   dialogConfig.data = {
  //     userId: this.userId,
  //   };
  //
  //   let dialogRef = this.dialog.open(VentSelectionDialogComponent, dialogConfig);
  //
  //   dialogRef.afterClosed().subscribe(result => {
  //     this.retrieveRoom();
  //     console.log(this.room.name);
  //   });
  // }

}
