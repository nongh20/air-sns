import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarehouseSearchComponent } from './pages/search/warehouse-search.component';
import { WarehouseRegisterComponent } from './pages/register/warehouse-register.component';
import { WarehouseDetailComponent } from './pages/detail/warehouse-detail.component';
import { RegisterStepsComponent } from './pages/register-steps/register-steps.component';

@NgModule({
  declarations: [WarehouseSearchComponent, WarehouseRegisterComponent, WarehouseDetailComponent, RegisterStepsComponent],
  imports: [
    CommonModule
  ]
})
export class WarehouseModule { }
