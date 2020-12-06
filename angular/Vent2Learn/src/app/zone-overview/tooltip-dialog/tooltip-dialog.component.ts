import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-tooltip-dialog',
  templateUrl: './tooltip-dialog.component.html',
  styleUrls: ['./tooltip-dialog.component.scss']
})
export class TooltipDialogComponent implements OnInit {

  tooltip: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) data
  ) {

    this.tooltip = data.tooltip
  }

  ngOnInit(): void {
  }

}
