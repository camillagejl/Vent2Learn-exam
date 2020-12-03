import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginViewComponent} from "./login/login-view/login-view.component";
import {VentSelectionViewComponent} from "./vent-selection/vent-selection-view/vent-selection-view.component";
import {ZoneOverviewModule} from "./zone-overview/zone-overview.module";
import {TimeSelectionViewComponent} from "./time-selection/time-selection-view/time-selection-view.component";

const routes: Routes = [
  {path: 'login', component: LoginViewComponent},
  {path: 'vent-selection/:userId', component: VentSelectionViewComponent},
  {path: 'time-selection/:userId', component: TimeSelectionViewComponent},
  {path: 'zone-overview', component: ZoneOverviewModule},
  {path: '**', redirectTo: '/login'} // When no route is defined, the app will display the login page.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
