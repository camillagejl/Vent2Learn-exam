import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginViewComponent} from "./login/login-view/login-view.component";
import {VentSelectionViewComponent} from "./vent-selection/vent-selection-view/vent-selection-view.component";
import {ZoneOverviewModule} from "./zone-overview/zone-overview.module";

const routes: Routes = [
  {path: 'login', component: LoginViewComponent},
  {path: 'vent-selection', component: VentSelectionViewComponent},
  {path: 'zone-overview', component: ZoneOverviewModule}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
