import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tutorial-starting-view',
  templateUrl: './tutorial-starting-view.component.html',
  styleUrls: ['./tutorial-starting-view.component.scss']
})
export class TutorialStartingViewComponent implements OnInit {

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
