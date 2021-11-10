import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginAuthComponent } from './login-auth/login-auth.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';



@NgModule({
  declarations: [
    LoginAuthComponent,
    SignupComponent,
    ForgetPassComponent 
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LoginAuthComponent,
    SignupComponent,
    ForgetPassComponent
  ]

})
export class UserAuthModule { }
