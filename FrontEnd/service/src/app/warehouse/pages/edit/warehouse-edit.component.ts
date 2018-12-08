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
  model: any;
  
  constructor(
    private activeRoute: ActivatedRoute,
    private router: Router,
    private warehouseService: WarehouseService) {
      this.model = {};
  }

  ngOnInit() {
    this.activeRoute.queryParams.subscribe(queryParams => {
      // do something with the query params
    });

    this.activeRoute.params.subscribe(params => {
      console.log(params) //log the entire params object
      console.log(params['id']) //log the value of id
      this.id = params['id'];

      this.warehouseService.getById(this.id).subscribe((data: any) => this.model = data);
    });
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
