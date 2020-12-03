import {Component, OnInit} from '@angular/core';
import {RoomsService} from "../../shared-services/rooms.service";
import {FormControl} from "@angular/forms";
import {VentsService} from "../../shared-services/vents.service";
import {ActivatedRoute} from "@angular/router";
import {UsersService} from "../../shared-services/users.service";

@Component({
  selector: 'app-vent-selection-view',
  templateUrl: './vent-selection-view.component.html',
  styleUrls: ['./vent-selection-view.component.scss']
})
export class VentSelectionViewComponent implements OnInit {

  userId;
  user;

  rooms;
  vents;
  selectedRoom = null;
  selectedVent = null;

  roomControl = new FormControl();
  ventControl = new FormControl();

  constructor(
    private _route: ActivatedRoute,
    private usersService: UsersService,
    private roomsService: RoomsService,
    private ventsService: VentsService,
  ) {
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.userId = params["user"];
    });

    this.retrieveRooms();
    this.retrieveVents();
    this.retrieveUser();
  }

  retrieveUser() {
    this.usersService.get(this.userId)
      .subscribe(
        data => {
          this.user = data;
          console.log("USER", data);
        },
        error => {
          console.log(error);
        });
  }

  retrieveRooms() {
    this.roomsService.getAll()
      .subscribe(
        data => {
          this.rooms = data;
        },
        error => {
          console.log(error);
        });
  }

  retrieveVents() {
    this.ventsService.getAll()
      .subscribe(
        data => {
          this.vents = data;
        },
        error => {
          console.log(error);
        });
  }

  updateSelectedRoom() {
    console.log("updating room!");
    console.log(this.selectedRoom);
  }

  updateSelectedVent() {
    console.log("updating room!");
    console.log(this.selectedRoom);

    this.usersService.update(this.userId, {
      ventId: this.selectedVent
    })
      .subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        });

  }
}
