import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NoPageComponent } from './no-page/no-page.component';
import { ForgetPassComponent } from './user-auth/forget-pass/forget-pass.component';
import { LoginAuthComponent } from './user-auth/login-auth/login-auth.component';
import { SignupComponent } from './user-auth/signup/signup.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginAuthComponent,
  },
  {
    path: 'register',
    component: SignupComponent,
  },
  {
    path: 'forgetpass',
    component: ForgetPassComponent,
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'login'
  },
  {
    path: '**',
    component: NoPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule {}
