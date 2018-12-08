import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AuthenticationService } from './../../shared/authentication.service';

@Component({
  selector: 'app-user-logout',
  templateUrl: './user-logout.component.html',
  styleUrls: ['./user-logout.component.css']
})
export class UserLogoutComponent implements OnInit {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }

  ngOnInit() {
    // redirect to home if already logged in
    this.authenticationService.logout();
    this.router.navigate(['/']);
  }
}
