import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ForgetPassComponent } from './user-auth/forget-pass/forget-pass.component';
import { LoginAuthComponent } from './user-auth/login-auth/login-auth.component';
import { SignupComponent } from './user-auth/signup/signup.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginAuthComponent,
  },
  {
    path: 'signup',
    component: SignupComponent,
  },
  {
    path: 'forgetpass',
    component: ForgetPassComponent,
  },
  {
    path: '',
    component: AppComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
