import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DecimalPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as _ from 'lodash';

import { WarehouseService } from './warehouse.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GridWarehouseComponent } from './grid-warehouse/grid-warehouse.component';
import { AddOrUpdateWarehouseComponent } from './add-or-update-warehouse/add-or-update-warehouse.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GridWarehouseComponent,
    AddOrUpdateWarehouseComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    WarehouseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
