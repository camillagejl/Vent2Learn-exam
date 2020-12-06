import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-current-zone-value',
  templateUrl: './current-zone-value.component.html',
  styleUrls: ['./current-zone-value.component.scss']
})
export class CurrentZoneValueComponent implements OnInit {

  @Input() props: {
    setting: string,
    value: number
  };

  constructor() { }

  ngOnInit(): void {
  }

}
