import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { WarehouseService } from '../../shared/warehouse.service';

import * as _ from 'lodash';

@Component({
  selector: 'app-warehouse-register',
  templateUrl: './warehouse-register.component.html',
  styleUrls: ['./warehouse-register.component.css']
})
export class WarehouseRegisterComponent implements OnInit {

  private warehouseData: Array<any>;
  private model: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private warehouseService: WarehouseService) {
    warehouseService.get().subscribe((data: any) => this.warehouseData = data);

    this.model = this.setInitialValuesForWarehouseData();
  }

  ngOnInit() {
  }

  private setInitialValuesForWarehouseData() {
    return {};
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.model);
    if(this.model.Id){
      this.warehouseService.update(this.model).subscribe(
        //warehouseRecord => this.warehouseData.push(warehouse)
      );  
    }else{
      this.warehouseService.add(this.model).subscribe(
        //warehouseRecord => this.warehouseData.push(warehouse)
      );
    }
    
    this.router.navigate(['/warehouse/list']);
  }

}
