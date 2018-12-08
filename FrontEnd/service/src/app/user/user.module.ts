import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './pages/login/user-login.component';
import { UserRegisterComponent } from './pages/register/user-register.component';
import { UserLogoutComponent } from './pages/logout/user-logout.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserLoginComponent, UserRegisterComponent, UserLogoutComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    UserLoginComponent, UserRegisterComponent
  ]
})
export class UserModule { }
