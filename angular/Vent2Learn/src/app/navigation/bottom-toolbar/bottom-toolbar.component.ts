import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-bottom-toolbar',
  templateUrl: './bottom-toolbar.component.html',
  styleUrls: ['./bottom-toolbar.component.scss']
})
export class BottomToolbarComponent implements OnInit {

  userId: any; // Found from the path
  displayNavigation: boolean;

  currentRouteGroup;

  constructor(
    private _route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {
  }

  ngOnInit() {

    this.setUserId();

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

    console.log("RouterGroup", this.currentRouteGroup);

    this.router.events.subscribe(event => {

      // Splits the path, so we can find the path without the userId (since this varies).
      // The result of this path is an array:
      // [0] = "", because there is nothing before the first /
      // [1] = the path (e.g. 'login')
      // [2] = userId, the thing after the last /
      // We only use [1] in this array.
      const thisPath = this.location.path().split('/')[1];

      // Checking if the 'Leave tutorial' bottom toolbar should be displayed.
      const hideNavigationPaths = [
        'vent-selection',
        'time-selection'
      ];

      // Checks if the tutorialPaths array includes the path from the split above
      this.displayNavigation = !hideNavigationPaths.includes(thisPath);

    });

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
