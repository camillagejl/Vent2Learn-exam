import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-bottom-toolbar',
  templateUrl: './bottom-toolbar.component.html',
  styleUrls: ['./bottom-toolbar.component.scss']
})
export class BottomToolbarComponent implements OnInit {

  userId = 1; // Found from the URL parameter.

  currentRouteGroup;

  constructor(
    private _route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {
  }

  ngOnInit() {
    // Finds the userId parameter from the URL. Except it doesn't work!
    this._route.params.subscribe(params => {
      // The userId will only be updated if it finds a userId in the parameter - otherwise, it'll stay at 1.
      if (params["userId"]) {
      this.userId = params["userId"];
      }
      // console.log("UserId:", this.userId);
    });

    this.router.events.subscribe(event => {

      let currentRoute;
      currentRoute = this.location.path(); // Finds the current router location

      // The currentRouteGroup can have one of four strings as value - corresponding to our four menu buttons in the
      // bottom navigation. The button that corresponds to the currentRouteGroup will get a 'selected' class and be
      // styled so the user can see that that is the active path.

      if (
        currentRoute.includes('/vent-selection') ||
          currentRoute.includes('/time-selection') ||
          currentRoute.includes('/zone-overview')
        ) {
        this.currentRouteGroup = 'vent';
      } else if (currentRoute.includes('/settings')) {
        this.currentRouteGroup = 'settings';
      } else if (currentRoute.includes('/tutorial')) {
        this.currentRouteGroup = 'help';
      } else if (currentRoute.includes('/about')) {
        this.currentRouteGroup = 'about';
      } else {
        this.currentRouteGroup = null;
      }

    });
  }
}
