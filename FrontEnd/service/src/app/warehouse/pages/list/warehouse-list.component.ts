import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WarehouseService } from '../../shared/warehouse.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-warehouse-list',
  templateUrl: './warehouse-list.component.html',
  styleUrls: ['./warehouse-list.component.css']
})
export class WarehouseListComponent implements OnInit {

  private warehouseList: Array<any>;
  private selectedWarehouse: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private warehouseService: WarehouseService) {
    warehouseService.get().subscribe((data: any) => this.warehouseList = data);

    this.selectedWarehouse = this.setInitialValuesForWarehouseData();
  }

  ngOnInit() {
  }

  private setInitialValuesForWarehouseData() {
    return {};
  }

  public createOrUpdateWarehouse = function (warehouse: any) {
    // if Warehouse is present in WarehouseData, we can assume this is an update
    // otherwise it is adding a new element
    let warehouseWithId;
    warehouseWithId = _.find(this.warehouseList, (el => el.id === warehouse.id));

    if (warehouseWithId) {
      const updateIndex = _.findIndex(this.WarehouseData, { id: warehouseWithId.id });
      this.warehouseService.update(warehouse).subscribe(
        warehouseRecord => this.warehouseList.splice(updateIndex, 1, warehouse)
      );
    } else {
      this.warehouseService.add(warehouse).subscribe(
        warehouseRecord => this.warehouseList.push(warehouse)
      );
    }

    this.selectedWarehouse = this.setInitialValuesForWarehouseData();
  };

  public edit = function (record) {
    this.router.navigate(['/warehouse/edit/'+ record.id]);
  };

  public newClicked = function () {
    this.selectedWarehouse = this.setInitialValuesForWarehouseData();
  };

  public delete(record) {
    const deleteIndex = _.findIndex(this.warehouseList, { id: record.id });
    this.warehouseService.remove(record).subscribe(
      result => this.warehouseList.splice(deleteIndex, 1)
    );
  }

}
