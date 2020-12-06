import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-setting-level-button',
  templateUrl: './setting-level-button.component.html',
  styleUrls: ['./setting-level-button.component.scss']
})
export class SettingLevelButtonComponent implements OnInit {

  @Input() props: {
    setting: string,
    value: any,
    editText: string
  };

  constructor() { }

  ngOnInit(): void {
  }

}
