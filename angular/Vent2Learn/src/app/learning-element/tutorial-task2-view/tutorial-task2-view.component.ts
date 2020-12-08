import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-tutorial-task2-view',
  templateUrl: './tutorial-task2-view.component.html',
  styleUrls: ['../tutorial-task1-view/tutorial-task1-view.component.scss'] // Uses same styling as task1
})
export class TutorialTask2ViewComponent implements OnInit {

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
