import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NoPageComponent } from './no-page/no-page.component';
import { ChangePasswordComponent } from './user-auth/change-password/change-password.component';
import { ForgetPassComponent } from './user-auth/forget-pass/forget-pass.component';
import { LoginAuthComponent } from './user-auth/login-auth/login-auth.component';
import { ResetPassComponent } from './user-auth/reset-pass/reset-pass.component';
import { SignupComponent } from './user-auth/signup/signup.component';

import { SearchbarComponent } from './searchbar/searchbar.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FavListComponent } from './fav-list/fav-list.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
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
    path: 'changepass',
    component: ChangePasswordComponent,
  },
  {
    path: 'resetpass',
    component: ResetPassComponent,
  },
  {
    path: 'favlist',
    component: FavListComponent,
  },
  {
    path: 'home/movie/:id',
    component: MovieDetailsComponent,
  },
  {
    path: '', pathMatch: 'full', redirectTo: 'login'
  },
  {
    path: '**',
    component: NoPageComponent,
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  
})
export class AppRoutingModule {}
