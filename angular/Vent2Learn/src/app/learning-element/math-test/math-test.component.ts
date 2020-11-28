import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-math-test',
  templateUrl: './math-test.component.html',
  styleUrls: ['./math-test.component.scss']
})
export class MathTestComponent implements OnInit {

  users = [
    {
      ventilation: 1,
      heating: 3
    },
    {
      ventilation: 2,
      heating: 5
    },
    {
      ventilation: 4,
      heating: 1
    },
    {
      ventilation: 2,
      heating: 7
    }
  ];

  constructor() {
  }

  ngOnInit() {
    console.log(this.calculateRoomTemperature());
  }

  calculateRoomTemperature() {

    // Variables are set in this function as they are not needed anywhere else.

    // Min and max temperatures are set from recommended classroom temperatures +/- 2deg.
    // The base temperature is calculated as the average value of those.
    const minTemperature = 18;
    const maxTemperature = 27;
    const baseTemperature = ( minTemperature + maxTemperature ) / 2;

    // With no user interference, the ventilation and heating will not affect the roomTemperature.
    let userVentilation = 0;
    let userHeating = 0;

    // roomTemperature is only calculated later.
    let roomTemperature: number;


    // For each user in the array, the userVentilation and userHeating is calculated as the average of each user's
    // setting. The average for both will be between 0 and 10, which corresponds to that value of degrees.
    this.users.forEach(user => {
      userVentilation = userVentilation + user.ventilation;
      userHeating = userHeating + user.heating;
    });
    userVentilation = userVentilation / this.users.length;
    userHeating = userHeating / this.users.length;


    // The roomTemperature is calculated by taking the baseTemperature, subtracting the value from userVentilation and
    // adding the value from userHeating.
    roomTemperature = baseTemperature - userVentilation + userHeating;

    // The roomTemperature will never be able to go under or above the min- and maxTemperature defined earlier.
    if (roomTemperature <  minTemperature) {
      roomTemperature = minTemperature;
    }
    if (roomTemperature > maxTemperature) {
      roomTemperature = maxTemperature;
    }

    // Returns the final result for the roomTemperature.
    return roomTemperature;
  }

}
