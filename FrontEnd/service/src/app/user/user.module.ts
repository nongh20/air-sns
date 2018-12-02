import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserLoginComponent } from './pages/login/user-login.component';
import { UserRegisterComponent } from './pages/register/user-register.component';

@NgModule({
  declarations: [UserLoginComponent, UserRegisterComponent],
  imports: [
    CommonModule
  ],
  exports: [
    UserLoginComponent, UserRegisterComponent
  ]
})
export class UserModule { }
