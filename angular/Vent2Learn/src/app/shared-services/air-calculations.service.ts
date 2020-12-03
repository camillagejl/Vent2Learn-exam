import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AirCalculationsService {

  constructor() { }

  calculateRoomTemperature(users) {

    // Variables are defined in this function as they are not needed anywhere else.

    // Min and max temperatures are set from recommended classroom temperatures +/- 2deg.
    // The baseTemperature is calculated as the average value of those.
    const minTemperature = 18;
    const maxTemperature = 27;
    const baseTemperature = ( minTemperature + maxTemperature ) / 2;

    // With no user interference, the ventilation and heating will not affect the roomTemperature.
    let userVentilation = 0;
    let userHeating = 0;

    // roomTemperature is only calculated later.
    let roomTemperature: number;


    // For each user in the array, the userVentilation and userHeating is added up and then calculated as the average
    // of each user's setting. The average for both will be between 0 and 10, which corresponds to that value of
    // degrees.
    users.forEach(user => {
      userVentilation = userVentilation + user.ventilationLevel;
      userHeating = userHeating + user.heatingLevel;
    });
    userVentilation = userVentilation / users.length;
    userHeating = userHeating / users.length;


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

  calculateRoomHumidity(users) {
    // Variables are defined in this function as they are not needed anywhere else.

    // Min and max humidity are set from recommended classroom humidity in %.
    // As the base humidity for this project, we use the maxHumidity, because the  ventilation can only bring the
    // humidity down, not up.
    const minHumidity = 30;
    const maxHumidity = 60;

    // With no user interference, the ventilation will not affect the roomHumidity.
    let userVentilation = 0;

    // roomHumidity is only calculated later.
    let roomHumidity: number;


    // For each user in the array, the userVentilation is added up.
    users.forEach(user => {
      userVentilation = userVentilation + user.ventilationLevel;
    });

    // This line starts out by finding the average of all users' ventilation setting.
    // Then, this is calculated to the corresponding percentage that should be subtracted from the maxHumidity.
    userVentilation = ( userVentilation / users.length ) * ( maxHumidity - minHumidity ) / 10;

    // The roomHumidity is the maxHumidity, minus the userVentilation as calculated above.
    roomHumidity = maxHumidity - userVentilation;

    return roomHumidity;
  }

}
