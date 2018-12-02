import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { DecimalPipe } from '@angular/common';
import { DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import * as _ from 'lodash';
import { FileUploadModule } from 'ng2-file-upload';
import { FormWizardModule } from 'angular-wizard-form';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserLoginComponent } from './user/pages/login/user-login.component';
import { UserRegisterComponent } from './user/pages/register/user-register.component';
import { WarehouseSearchComponent } from './warehouse/pages/search/warehouse-search.component';
import { WarehouseDetailComponent } from './warehouse/pages/detail/warehouse-detail.component';
import { WarehouseRegisterComponent } from './warehouse/pages/register/warehouse-register.component';
import { RegisterStepsComponent } from './warehouse/pages/register-steps/register-steps.component';

import { ContactComponent } from './our_company/pages/contact/contact.component';


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
  { path: 'warehouse/register', component: WarehouseRegisterComponent},
  { path: 'warehouse/register-steps', component: RegisterStepsComponent},
  { path: 'warehouse/search', component: WarehouseSearchComponent},
  { path: 'warehouse/detail', component: WarehouseDetailComponent},
  { path: 'contact', component: ContactComponent},


];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserLoginComponent,
    UserRegisterComponent,
    WarehouseSearchComponent,
    WarehouseDetailComponent,
    WarehouseRegisterComponent,
    RegisterStepsComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    GridWarehouseComponent,
    AddOrUpdateWarehouseComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule,
    FileUploadModule,
    FormWizardModule
  ],
  providers: [
    UserService,
    WarehouseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
