import {Component, OnInit} from '@angular/core';
import {AirCalculationsService} from "../../shared-services/air-calculations.service";

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
      ventilation: 4,
      heating: 5
    },
    {
      ventilation: 10,
      heating: 1
    },
    {
      ventilation: 9,
      heating: 7
    }
  ];

  constructor(private airCalculationsService: AirCalculationsService) {
  }

  ngOnInit() {
    console.log(`Room temperature: ${this.airCalculationsService.calculateRoomTemperature(this.users)}°C`);
    console.log(`Room humidity: ${this.airCalculationsService.calculateRoomHumidity(this.users)}%`);
  }

}
