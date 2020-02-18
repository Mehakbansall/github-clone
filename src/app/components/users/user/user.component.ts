import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user;
  constructor(private route: ActivatedRoute, private router: Router,
              private userService: UserService) { }

  // watch the route parameters for changes
  // every time it changes (or on first load), go get a user from userservice
  ngOnInit() {
    this.route.params.subscribe(params => {
      const username = params['username'];
      this.userService
          .getUser(username)
          .subscribe(user => this.user = user);
    });
  }

  back(): void {
    this.router.navigateByUrl('/users');
  }

}
