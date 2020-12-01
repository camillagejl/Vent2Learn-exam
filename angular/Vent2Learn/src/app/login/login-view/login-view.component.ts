import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import {UsersService} from "../../shared-services/users.service";
import {Router} from "@angular/router";

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

  users: any;

  userEmail: string;
  userPassword: string;

  hidePassword = true;


  constructor(
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

  // ----- -----


  // ----- USER DATA -----

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

  submitForm() {
    let userId;

    this.users.forEach(user => {
      if (this.userEmail === user.email && this.userPassword === user.password) {
        console.log("It's a match!");
        this.router.navigate(['/vent-selection', user.userId]);
      }
    })

  }

}
