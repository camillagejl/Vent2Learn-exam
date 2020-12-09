import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import {UsersService} from "../../shared-services/users.service";
import {Router} from "@angular/router";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {LoginInfoDialogComponent} from "../login-info-dialog/login-info-dialog.component";

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {

  // All users from database will be saved here.
  users: any;

  // Variables that are modeled by the form, to check with the users.
  userEmail: string;
  userPassword: string;

  // Password is hidden by default, and shown/hidden on click.
  hidePassword = true;

  constructor(
    public dialog: MatDialog,
    private usersService: UsersService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.retrieveUsers();
  }


  // ----- FORM CONTROL -----
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  passwordFormControl = new FormControl('', [
    Validators.required,
  ]);

  formGroup = new FormControl({
    email: this.emailFormControl,
    password: this.passwordFormControl
  });

  matcher = new MyErrorStateMatcher();


  // ----- USER DATA -----

  // Retrieves all users, so we can check if the form values match.
  retrieveUsers() {
    this.usersService.getAll()
      .subscribe(
        data => {
          this.users = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  openInfoDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = false;

    this.dialog.open(LoginInfoDialogComponent, dialogConfig);
  }

  // Loops over the users to see if the form values match a user. If they do, the user will be sent to the next page
  // with the userId of the user as parameter.
  submitForm() {
    this.users.forEach(user => {
      if (this.userEmail === user.email && this.userPassword === user.password) {
        this.router.navigate(['/first-login', user.userId]);
      }
    })

  }
}
