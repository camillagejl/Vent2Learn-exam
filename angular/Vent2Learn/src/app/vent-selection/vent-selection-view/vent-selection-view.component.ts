import {Component, OnInit} from '@angular/core';
import {RoomsService} from "../../shared-services/rooms.service";
import {FormControl} from "@angular/forms";
import {VentsService} from "../../shared-services/vents.service";
import {ActivatedRoute, Router} from "@angular/router";
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
    private router: Router
  ) {
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.userId = params["userId"];
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
          this.selectedVent = this.user.ventId;

          this.vents.forEach(vent => {
            if (vent.ventId === this.selectedVent) {
              this.selectedRoom = vent.roomId;
            }

          });

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

  updateUserVent() {
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

    this.router.navigate(['/time-selection', this.userId]);

  }
}
