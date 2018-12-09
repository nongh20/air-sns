import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from '../../core/authentication.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  loggedIn: boolean
  constructor(
    public authenticationService: AuthenticationService
  ) {
    this.loggedIn = this.authenticationService.isLoggedIn;

  }

  ngOnInit() {
    this.loggedIn = this.authenticationService.isLoggedIn;
  }

}
