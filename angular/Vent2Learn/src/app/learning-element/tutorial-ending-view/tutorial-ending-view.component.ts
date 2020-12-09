import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-tutorial-ending-view',
  templateUrl: './tutorial-ending-view.component.html',
  styleUrls: ['./tutorial-ending-view.component.scss']
})
export class TutorialEndingViewComponent implements OnInit {

  userId; // Found from the URL parameter.

  constructor(
    private router: Router,
    private _route: ActivatedRoute
    ) { }

  ngOnInit() {
    // Finds the userId parameter from the URL.
    this._route.params.subscribe(params => {
        this.userId = params["userId"];
    });
  }
}
