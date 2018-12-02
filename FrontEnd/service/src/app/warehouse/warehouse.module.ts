import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarehouseSearchComponent } from './pages/search/warehouse-search.component';
import { WarehouseRegisterComponent } from './pages/register/warehouse-register.component';
import { WarehouseDetailComponent } from './pages/detail/warehouse-detail.component';
//import { RegisterStepsComponent } from './pages/register-steps/register-steps.component';

// import { GridWarehouseComponent } from './components/grid-warehouse/grid-warehouse.component';
// import { AddOrUpdateWarehouseComponent } from './components/add-or-update-warehouse/add-or-update-warehouse.component';

@NgModule({
  declarations: [
    WarehouseSearchComponent, 
    WarehouseRegisterComponent, 
    WarehouseDetailComponent,
    //RegisterStepsComponent,
    // GridWarehouseComponent,
    // AddOrUpdateWarehouseComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    WarehouseSearchComponent, 
    WarehouseRegisterComponent, 
    WarehouseDetailComponent
  ]
})
export class WarehouseModule { }
