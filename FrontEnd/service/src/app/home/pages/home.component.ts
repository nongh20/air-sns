import { Component, OnInit } from '@angular/core';

import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  location1: string;
  location2: string;
  location3: string;
  constructor() {
    this.location1 = 'TP HCM';
    this.location2 = 'Đà Nẵng';
    this.location3 = 'Hà Nội';
  }

  ngOnInit() {
  }

}
