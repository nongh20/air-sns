import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../core/authentication.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean;
  constructor(
    public authenticationService: AuthenticationService
  ) {
    

  }

  ngOnInit() {
    this.loggedIn = this.authenticationService.isLoggedIn;
  }

}
