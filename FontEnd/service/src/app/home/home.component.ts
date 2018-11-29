import { Component, OnInit } from '@angular/core';

import { WarehouseService } from '../warehouse/shared/warehouse.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public warehouseData: Array<any>;

  constructor(private warehouseService: WarehouseService) {
    warehouseService.get().subscribe((data: any) => this.warehouseData = data);
  }

  ngOnInit() {
  }

}
