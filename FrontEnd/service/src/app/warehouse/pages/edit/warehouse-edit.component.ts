import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { WarehouseService } from '../../shared/warehouse.service';

@Component({
  selector: 'app-warehouse-edit',
  templateUrl: './warehouse-edit.component.html',
  styleUrls: ['./warehouse-edit.component.css']
})
export class WarehouseEditComponent implements OnInit {

  private id: String;
  private model: any;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private warehouseService: WarehouseService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.id = params['id'];

      this. warehouseService.getById(this.id).subscribe((data: any) => this.model = data);
    });
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
