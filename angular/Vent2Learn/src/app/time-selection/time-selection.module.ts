import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimeSelectionViewComponent} from './time-selection-view/time-selection-view.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatOptionModule} from "@angular/material/core";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {UsersService} from "../shared-services/users.service";

@NgModule({
  declarations: [TimeSelectionViewComponent],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    MatOptionModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    RouterModule
  ],
  providers: [UsersService]
})
export class TimeSelectionModule {
}
