import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home.component';
import { WarehouseCategoryComponent } from './components/warehouse-category/warehouse-category.component';
import { WarehouseLocationComponent } from './components/warehouse-location/warehouse-location.component';
import { HomeSliderComponent } from './components/home-slider/home-slider.component';
import { WarehouseLatestComponent } from './components/warehouse-latest/warehouse-latest.component';

@NgModule({
  declarations: [HomeComponent, WarehouseCategoryComponent, WarehouseLocationComponent, HomeSliderComponent, WarehouseLatestComponent],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
