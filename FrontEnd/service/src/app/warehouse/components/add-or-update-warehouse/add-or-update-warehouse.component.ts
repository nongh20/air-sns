import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-or-update-warehouse',
  templateUrl: './add-or-update-warehouse.component.html',
  styleUrls: ['./add-or-update-warehouse.component.css']
})
export class AddOrUpdateWarehouseComponent implements OnInit {

  @Output() warehouseCreated = new EventEmitter<any>();
  @Input() warehouseInfo: any;

  public buttonText = 'Save';

  constructor() {
    this.clearWarehouseInfo();
    console.log(this.warehouseInfo.date);
  }

  ngOnInit() {
  }

  private clearWarehouseInfo = function () {
    // Create an empty Warehouse object
    this.warehouseInfo = {
      id: undefined,
      name: '',
      description: '',
      size: ''
    };
  };

  public addOrUpdateWarehouseRecord = function (event) {
    this.warehouseCreated.emit(this.warehouseInfo);
    this.clearWarehouseInfo();
  };

}
