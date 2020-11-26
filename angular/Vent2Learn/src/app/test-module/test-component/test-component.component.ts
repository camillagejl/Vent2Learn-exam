import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../shared-services/users.service";

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.scss']
})
export class TestComponentComponent implements OnInit {

  users: object;

  constructor(
    private usersService: UsersService
  ) {
  }

  ngOnInit(){
    this.retrieveUsers();
  }

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

}
