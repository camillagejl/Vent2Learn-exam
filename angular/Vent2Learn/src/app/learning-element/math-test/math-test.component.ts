import {Component, OnInit} from '@angular/core';
import {AirCalculationsService} from "../../shared-services/air-calculations.service";
import {UsersService} from "../../shared-services/users.service";

@Component({
  selector: 'app-math-test',
  templateUrl: './math-test.component.html',
  styleUrls: ['./math-test.component.scss']
})
export class MathTestComponent implements OnInit {

  users: any;

  constructor(
    private usersService: UsersService,
    private airCalculationsService: AirCalculationsService) {
  }

  ngOnInit() {
    this.retrieveUsers();
  }

  console(logging) {
    console.log(logging);
  }

  retrieveUsers() {
    this.usersService.getAll()
      .subscribe(
        data => {
          this.users = data;
          console.log(`Room temperature: ${this.airCalculationsService.calculateRoomTemperature(this.users)}°C`);
          console.log(`Room humidity: ${this.airCalculationsService.calculateRoomHumidity(this.users)}%`);
        },
        error => {
          console.log(error);
        });
  }

}
