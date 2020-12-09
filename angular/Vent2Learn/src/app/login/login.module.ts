import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginViewComponent} from './login-view/login-view.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {AppRoutingModule} from "../app-routing.module";
import { LoginInfoDialogComponent } from './login-info-dialog/login-info-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { FirstLoginViewComponent } from './first-login-view/first-login-view.component';
import { SkippingDialogComponent } from './first-login-view/skipping-dialog/skipping-dialog.component';


@NgModule({
  declarations: [LoginViewComponent, LoginInfoDialogComponent, FirstLoginViewComponent, SkippingDialogComponent],
  exports: [
    LoginViewComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    MatDialogModule
  ]
})
export class LoginModule {
}
