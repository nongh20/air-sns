import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { WarehouseService } from '../../shared/warehouse.service';

@Component({
  selector: 'app-warehouse-register',
  templateUrl: './warehouse-register.component.html',
  styleUrls: ['./warehouse-register.component.css']
})
export class WarehouseRegisterComponent implements OnInit {

  model: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private warehouseService: WarehouseService) {

    this.model = {};
  }

  ngOnInit() {
  }

  onSubmitted(model: any) {
    // TODO: Use EventEmitter with form value
    console.warn(model);
    if(model.id){
      this.warehouseService.update(model).subscribe((data: any) => 
        this.router.navigate(['/warehouse/list'])
      );  
    }else{
      this.warehouseService.add(model).subscribe((data: any) => 
        this.router.navigate(['/warehouse/list'])
      );
    }
  }

}
