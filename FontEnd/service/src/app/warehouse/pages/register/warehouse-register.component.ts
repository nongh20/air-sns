import { Component, OnInit } from '@angular/core';

import { WarehouseService } from '../../shared/warehouse.service';

@Component({
  selector: 'app-warehouse-register',
  templateUrl: './warehouse-register.component.html',
  styleUrls: ['./warehouse-register.component.css']
})
export class WarehouseRegisterComponent implements OnInit {

  public warehouseData: Array<any>;
  public currentwarehouse: any;

  constructor(private warehouseService: WarehouseService) {
    warehouseService.get().subscribe((data: any) => this.warehouseData = data);

    this.currentwarehouse = this.setInitialValuesForWarehouseData();
  }

  ngOnInit() {
  }

  private setInitialValuesForWarehouseData() {
    return {
      id: undefined,
      name: '',
      description: '',
      size: ''
    }
  }

  public createOrUpdateWarehouse = function (warehouse: any) {
    // if Warehouse is present in WarehouseData, we can assume this is an update
    // otherwise it is adding a new element
    let warehouseWithId;
    warehouseWithId = _.find(this.warehouseData, (el => el.id === warehouse.id));

    if (warehouseWithId) {
      const updateIndex = _.findIndex(this.WarehouseData, { id: warehouseWithId.id });
      this.warehouseService.update(warehouse).subscribe(
        warehouseRecord => this.warehouseData.splice(updateIndex, 1, warehouse)
      );
    } else {
      this.warehouseService.add(warehouse).subscribe(
        warehouseRecord => this.warehouseData.push(warehouse)
      );
    }

    this.currentwarehouse = this.setInitialValuesForWarehouseData();
  };

  public editClicked = function (record) {
    this.currentwarehouse = record;
  };

  public newClicked = function () {
    this.currentwarehouse = this.setInitialValuesForWarehouseData();
  };

  public deleteClicked(record) {
    const deleteIndex = _.findIndex(this.warehouseData, { id: record.id });
    this.warehouseService.remove(record).subscribe(
      result => this.warehouseData.splice(deleteIndex, 1)
    );
  }

}
