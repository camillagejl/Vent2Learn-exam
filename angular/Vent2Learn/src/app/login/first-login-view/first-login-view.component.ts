import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {TooltipDialogComponent} from "../../zone-overview/tooltip-dialog/tooltip-dialog.component";
import {SkippingDialogComponent} from "./skipping-dialog/skipping-dialog.component";

@Component({
  selector: 'app-first-login-view',
  templateUrl: './first-login-view.component.html',
  styleUrls: ['./first-login-view.component.scss']
})
export class FirstLoginViewComponent implements OnInit {

  userId; // Found from the URL parameter.

  constructor(
    public dialog: MatDialog,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this._route.params.subscribe(params => {
      this.userId = params["userId"];
    });
  }

  openSkippingDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;

    dialogConfig.data = {
      userId: this.userId
    };

    this.dialog.open(SkippingDialogComponent, dialogConfig);
  }

}
