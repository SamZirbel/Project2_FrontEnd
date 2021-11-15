import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//importing by umer
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {UserAuthModule} from './user-auth/user-auth.module'
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NoPageComponent } from './no-page/no-page.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import { NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';



//import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MovieInfoComponent } from './movie-info/movie-info.component';



@NgModule({
  declarations: [
    AppComponent,
    NoPageComponent,
    HomeComponent,
    SearchbarComponent,
    NavBarComponent,
    MovieInfoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    [FormsModule, ReactiveFormsModule],
    HttpClientModule,
    UserAuthModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularMaterialModule
     
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
