import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-warehouse-location',
  templateUrl: './warehouse-location.component.html',
  styleUrls: ['./warehouse-location.component.css']
})
export class WarehouseLocationComponent implements OnInit {

  @Input() location: any;

  constructor() { }

  ngOnInit() {
  }

}
