import {Component, OnInit} from '@angular/core';
import {RoomsService} from "../../shared-services/rooms.service";
import {FormControl} from "@angular/forms";
import {VentsService} from "../../shared-services/vents.service";

@Component({
  selector: 'app-vent-selection-view',
  templateUrl: './vent-selection-view.component.html',
  styleUrls: ['./vent-selection-view.component.scss']
})
export class VentSelectionViewComponent implements OnInit {

  rooms: any;
  vents: any;
  selectedRoom = null;
  selectedVent = null;

  roomControl = new FormControl();
  ventControl = new FormControl();

  constructor(
    private roomsService: RoomsService,
    private ventsService: VentsService
  ) {
  }

  ngOnInit() {
    this.retrieveRooms();
    this.retrieveVents();
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
  }

}
