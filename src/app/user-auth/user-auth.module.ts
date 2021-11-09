import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginAuthComponent } from './login-auth/login-auth.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { SignupInfoComponent } from './models/signup-info/signup-info.component';



@NgModule({
  declarations: [
    LoginAuthComponent,
    SignupComponent,
    ForgetPassComponent,
    SignupInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserAuthModule { }
