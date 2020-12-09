import {Component, Inject, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-skipping-dialog',
  templateUrl: './skipping-dialog.component.html',
  styleUrls: ['./skipping-dialog.component.scss']
})
export class SkippingDialogComponent implements OnInit {

  userId;

  constructor(
    @Inject(MAT_DIALOG_DATA) data,
    private _route: ActivatedRoute
  ) {
    this.userId = data.userId;
  }

  ngOnInit(): void {
  }

}
