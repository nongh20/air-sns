import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from './user/shared/authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AirSnS';

  constructor(
    private router: Router,
    public  authenticationService: AuthenticationService
  ) {
  }

}
