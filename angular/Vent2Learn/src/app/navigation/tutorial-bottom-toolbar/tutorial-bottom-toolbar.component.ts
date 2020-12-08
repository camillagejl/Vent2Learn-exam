import { Component, OnInit } from '@angular/core';
import {Location} from "@angular/common";

@Component({
  selector: 'app-tutorial-bottom-toolbar',
  templateUrl: './tutorial-bottom-toolbar.component.html',
  styleUrls: ['./tutorial-bottom-toolbar.component.scss']
})
export class TutorialBottomToolbarComponent implements OnInit {

  userId: any; // Found from the path

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
    this.setUserId();
  }

  setUserId() {
    // Splits the path so we can find the userId.
    // In our current routes, the array will contain of:
    // [0] = "", because there is nothing before the first /
    // [1] = the path (e.g. 'login')
    // [2] = userId, the thing after the last /
    this.userId = this.location.path().split('/')[2];
  };

}
