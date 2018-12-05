import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { WarehouseService } from '../../shared/warehouse.service';

import { FileUploader } from 'ng2-file-upload';

import * as _ from 'lodash';

@Component({
  selector: 'app-warehouse-register',
  templateUrl: './warehouse-register.component.html',
  styleUrls: ['./warehouse-register.component.css']
})
export class WarehouseRegisterComponent implements OnInit {

  private warehouseData: Array<any>;
  private model: any;

  constructor(private warehouseService: WarehouseService) {
    warehouseService.get().subscribe((data: any) => this.warehouseData = data);

    this.model = this.setInitialValuesForWarehouseData();
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

    this.model = this.setInitialValuesForWarehouseData();
  };

  public editClicked = function (record) {
    this.model = record;
  };

  public newClicked = function () {
    this.model = this.setInitialValuesForWarehouseData();
  };

  public deleteClicked(record) {
    const deleteIndex = _.findIndex(this.warehouseData, { id: record.id });
    this.warehouseService.remove(record).subscribe(
      result => this.warehouseData.splice(deleteIndex, 1)
    );
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.model);
  }

}
