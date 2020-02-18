import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: any;
  public searchResults: any;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.initialize();
  }

  // this method is used to get the users
  initialize() {
    this.userService.getUsers().subscribe(
      (data: any) => {
        this.users = data;
      },
      err => {
        console.error(err);
      }
    );
  }

}
