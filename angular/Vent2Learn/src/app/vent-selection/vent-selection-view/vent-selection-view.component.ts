import {Component, OnInit} from '@angular/core';
import {RoomsService} from "../../shared-services/rooms.service";
import {FormControl} from "@angular/forms";
import {VentsService} from "../../shared-services/vents.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UsersService} from "../../shared-services/users.service";
import {Observable} from "rxjs";
import {map, startWith} from "rxjs/operators";

@Component({
  selector: 'app-vent-selection-view',
  templateUrl: './vent-selection-view.component.html',
  styleUrls: ['./vent-selection-view.component.scss']
})
export class VentSelectionViewComponent implements OnInit {

  userId; // Found from the URL parameter.
  user; // The user that is logged in.

  rooms; // Contains all rooms from the rooms table in the database.
  vents; // Contains all vents
  selectedRoom = null; // Will default to the user's last used room from the database, or else default to null.
  selectedRoomName = null;
  selectedVent = null;

  roomControl = new FormControl();
  ventControl = new FormControl();

  options: string[] = ['One', 'Two', 'Three'];

  filteredRooms: Observable<string[]>;

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.rooms.filter(room => room.roomName.toLowerCase().indexOf(filterValue) === 0);
  }

  constructor(
    private router: Router,
    private _route: ActivatedRoute,
    private usersService: UsersService,
    private roomsService: RoomsService,
    private ventsService: VentsService
  ) {
  }

  ngOnInit() {
    // Finds the userId parameter from the URL.
    this._route.params.subscribe(params => {
      this.userId = params["userId"];
    });

    this.filteredRooms = this.roomControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

    this.retrieveRooms();
    this.retrieveVents();

    // Retrieves the user and finds the room they are/were last connected to.
    this.retrieveUser();
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

  retrieveUser() {
    this.usersService.get(this.userId)
      .subscribe(
        data => {
          this.user = data;

          // This sets the selectedVent as the ventId the user has in the database. However, this will return to null
          // when the selectedRoom is changed because of the onModelChange on the room dropdown in the HTML.
          this.selectedVent = this.user.ventId;

          // Loops over the vents to find the vent the user is/was at, and sets the selectedRoom from the roomId from
          // the vent.
          this.vents.forEach(vent => {
            if (vent.ventId === this.selectedVent) {

              this.rooms.forEach(room => {
                if (room.roomId === vent.roomId) {
                console.log("Selected room!", this.selectedRoom);
                this.selectedRoom = room;
                this.selectedRoomName = room.roomName;
                }
              })
            }
          });

        },
        error => {
          console.log(error);
        });
  }

  // Updates the vent for the user in the database, and sends the user to the next page with the userId as parameter.
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

  updateRoom() {
    this.selectedVent = null;
    this.rooms.forEach(room => {
      if (room.roomName === this.selectedRoomName) {
        this.selectedRoom = room;
      }
    });
  }

}
