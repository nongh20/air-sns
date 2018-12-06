import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { WarehouseService } from '../../shared/warehouse.service';

@Component({
  selector: 'app-warehouse-register',
  templateUrl: './warehouse-register.component.html',
  styleUrls: ['./warehouse-register.component.css']
})
export class WarehouseRegisterComponent implements OnInit {

  private model: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private warehouseService: WarehouseService) {

    this.model = {};
  }

  ngOnInit() {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.model);
    if(this.model.id){
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
