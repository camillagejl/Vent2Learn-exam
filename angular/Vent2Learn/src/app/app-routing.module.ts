import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginViewComponent} from "./login/login-view/login-view.component";
import {VentSelectionViewComponent} from "./vent-selection/vent-selection-view/vent-selection-view.component";
import {TimeSelectionViewComponent} from "./time-selection/time-selection-view/time-selection-view.component";
import {ZoneOverviewViewComponent} from "./zone-overview/zone-overview-view/zone-overview-view.component";
import {SettingsViewComponent} from "./settings/settings-view/settings-view.component";
import {TutorialStartingViewComponent} from "./learning-element/tutorial-starting-view/tutorial-starting-view.component";
import {AboutViewComponent} from "./about/about-view/about-view.component";
import {TutorialTaskViewComponent} from "./learning-element/tutorial-task1-view/tutorial-task-view.component";
import {TutorialEndingViewComponent} from "./learning-element/tutorial-ending-view/tutorial-ending-view.component";
import {FirstLoginViewComponent} from "./login/first-login-view/first-login-view.component";

const routes: Routes = [
  {path: 'login', component: LoginViewComponent},
  {path: 'first-login/:userId', component: FirstLoginViewComponent},
  {path: 'vent-selection/:userId', component: VentSelectionViewComponent},
  {path: 'time-selection/:userId', component: TimeSelectionViewComponent},
  {path: 'zone-overview/:userId', component: ZoneOverviewViewComponent},
  {path: 'settings/:userId', component: SettingsViewComponent},

  // Tutorial routes
  {path: 'tutorial-starting/:userId', component: TutorialStartingViewComponent},
  {path: 'tutorial-task-1/:userId', component: TutorialTaskViewComponent},
  {path: 'tutorial-ending/:userId', component: TutorialEndingViewComponent},

  {path: 'about/:userId', component: AboutViewComponent},
  {path: '**', redirectTo: '/login'}, // When no route is defined, the app will display the login page.

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
