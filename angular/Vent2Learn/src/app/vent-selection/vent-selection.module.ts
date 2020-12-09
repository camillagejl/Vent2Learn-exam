import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VentSelectionViewComponent} from './vent-selection-view/vent-selection-view.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatInputModule} from "@angular/material/input";
import {VentSelectionDropdownsComponent} from './vent-selection-dropdowns/vent-selection-dropdowns.component';
import {MatDialogModule} from "@angular/material/dialog";
import {PreviousRouteService} from "../shared-services/previous-route.service";

@NgModule({
  declarations: [VentSelectionViewComponent, VentSelectionDropdownsComponent],
  exports: [
    VentSelectionDropdownsComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [PreviousRouteService],
})
export class VentSelectionModule {
}
