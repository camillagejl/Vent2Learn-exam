import {Component, OnInit} from '@angular/core';
import {Location} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-bottom-toolbar',
  templateUrl: './bottom-toolbar.component.html',
  styleUrls: ['./bottom-toolbar.component.scss']
})
export class BottomToolbarComponent implements OnInit {

  currentRouteGroup;

  constructor(
    private location: Location,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.router.events.subscribe(event => {

      let currentRoute;

      currentRoute = this.location.path();

      // The currentRouteGroup can have one of four strings as value - corresponding to our four menu buttons in the
      // bottom navigation. The button that corresponds to the currentRouteGroup will get a 'selected' class and be
      // styled so the user can see that that is the active path.

      if (
        currentRoute.includes('/vent-selection/' ||
          currentRoute.includes('/time-selection/') ||
          currentRoute.includes('/zone-overview/')
        )) {
        this.currentRouteGroup = 'vent';
      }
      if (currentRoute.includes('/settings/')) {
        this.currentRouteGroup = 'settings';
      }
      if (currentRoute.includes('/tutorial/')) {
        this.currentRouteGroup = 'help';
      }
      if (currentRoute.includes('/about/')) {
        this.currentRouteGroup = 'about';
      }

    });
  }

}
