import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Vent2Learn';

  displayTopToolbar = true;
  displayBottomToolbar = true;
  displayTutorialBottomToolbar = false;
  displayCircles = true;

  constructor(
    private location: Location,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      // Checking if the top toolbar should be displayed - should not be displayed on login screen.
      this.displayTopToolbar = this.location.path() !== '/login';


      // Checking if the design circles and bottom toolbar should be displayed.
      // Those are together here because both should be hidden on login- and tutorial screens.
      const hideDesignPaths = [
        'login',
        'tutorial-task-1',
        'tutorial-task-2'
      ];

      // Splits the path, so we can find the path without the userId (since this varies).
      // The result of this path is an array:
      // [0] = "", because there is nothing before the first /
      // [1] = the path (e.g. 'login')
      // [2] = userId, the thing after the last /
      // We only use [1] in this array.
      const thisPath = this.location.path().split('/')[1];

      // Checks if the hideDesignPaths array includes the path from the split above
      this.displayCircles = !hideDesignPaths.includes(thisPath);
      this.displayBottomToolbar = !hideDesignPaths.includes(thisPath);


      // Checking if the 'Leave tutorial' bottom toolbar should be displayed.
      const tutorialPaths = [
        'tutorial-task-1',
        'tutorial-task-2'
      ];

      // Checks if the tutorialPaths array includes the path from the split above
      this.displayTutorialBottomToolbar = tutorialPaths.includes(thisPath);

    });

  };
}
