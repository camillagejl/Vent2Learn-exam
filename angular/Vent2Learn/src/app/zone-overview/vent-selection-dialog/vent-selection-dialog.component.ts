import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-vent-selection-dialog',
  templateUrl: './vent-selection-dialog.component.html',
  styleUrls: ['./vent-selection-dialog.component.scss']
})
export class VentSelectionDialogComponent implements OnInit {

  userId: number;

  constructor(
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.userId = data.userId;
    console.log("Dialog user ID", this.userId)
  }

  ngOnInit(): void {
  }

}
