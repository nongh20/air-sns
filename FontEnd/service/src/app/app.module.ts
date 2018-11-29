import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DecimalPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as _ from 'lodash';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user/pages/login/user-login.component';
import { UserRegisterComponent } from './user/pages/register/user-register.component';
import { WarehouseSearchComponent } from './warehouse/pages/search/warehouse-search.component';
import { WarehouseRegisterComponent } from './warehouse/pages/register/warehouse-register.component';


import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavigationComponent } from './shared/navigation/navigation.component';

import { GridWarehouseComponent } from './warehouse/components/grid-warehouse/grid-warehouse.component';
import { AddOrUpdateWarehouseComponent } from './warehouse/components/add-or-update-warehouse/add-or-update-warehouse.component';

import { UserService } from './user/shared/user.service';
import { WarehouseService } from './warehouse/shared/warehouse.service';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'login', component: UserLoginComponent},
  { path: 'register', component: UserRegisterComponent},
  { path: 'warehouse/register', component: UserRegisterComponent},
  { path: 'warehouse/search', component: WarehouseSearchComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserLoginComponent,
    UserRegisterComponent,
    WarehouseSearchComponent,
    WarehouseRegisterComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
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
    UserService,
    WarehouseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
