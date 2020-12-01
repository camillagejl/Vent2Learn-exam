import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginViewComponent} from './login-view/login-view.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {AppRoutingModule} from "../app-routing.module";


@NgModule({
  declarations: [LoginViewComponent],
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
    AppRoutingModule
  ]
})
export class LoginModule {
}
