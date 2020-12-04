import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tutorial-task1-view',
  templateUrl: './tutorial-task1-view.component.html',
  styleUrls: ['./tutorial-task1-view.component.scss']
})
export class TutorialTask1ViewComponent implements OnInit {

  userId; // Found from the URL parameter.

  constructor(
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Finds the userId parameter from the URL.
    this._route.params.subscribe(params => {
      this.userId = params["userId"];
    });
  }
}
