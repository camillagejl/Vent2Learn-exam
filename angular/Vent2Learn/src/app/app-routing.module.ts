import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginViewComponent} from "./login/login-view/login-view.component";
import {VentSelectionViewComponent} from "./vent-selection/vent-selection-view/vent-selection-view.component";
import {TimeSelectionViewComponent} from "./time-selection/time-selection-view/time-selection-view.component";
import {ZoneOverviewViewComponent} from "./zone-overview/zone-overview-view/zone-overview-view.component";
import {SettingsViewComponent} from "./settings/settings-view/settings-view.component";
import {TutorialStartingViewComponent} from "./learning-element/tutorial-starting-view/tutorial-starting-view.component";
import {AboutViewComponent} from "./about/about-view/about-view.component";
import {TutorialTask1ViewComponent} from "./learning-element/tutorial-task1-view/tutorial-task1-view.component";
import {TutorialTask2ViewComponent} from "./learning-element/tutorial-task2-view/tutorial-task2-view.component";
import {TutorialEndingViewComponent} from "./learning-element/tutorial-ending-view/tutorial-ending-view.component";

const routes: Routes = [
  {path: 'login', component: LoginViewComponent},
  {path: 'vent-selection/:userId', component: VentSelectionViewComponent},
  {path: 'time-selection/:userId', component: TimeSelectionViewComponent},
  {path: 'zone-overview/:userId', component: ZoneOverviewViewComponent},
  {path: 'settings/:userId', component: SettingsViewComponent},

  // Tutorial routes
  {path: 'tutorial-starting/:userId', component: TutorialStartingViewComponent},
  {path: 'tutorial-task-1/:userId', component: TutorialTask1ViewComponent},
  {path: 'tutorial-task-2/:userId', component: TutorialTask2ViewComponent},
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
