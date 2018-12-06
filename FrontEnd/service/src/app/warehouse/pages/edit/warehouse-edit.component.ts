import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-warehouse-edit',
  templateUrl: './warehouse-edit.component.html',
  styleUrls: ['./warehouse-edit.component.css']
})
export class WarehouseEditComponent implements OnInit {

  private Id: String;
  
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { 
    
  }

  ngOnInit() {
    // get return url from route parameters or default to '/'
    this.Id = this.route.snapshot.queryParams['Id'] || '/';
  }

}
