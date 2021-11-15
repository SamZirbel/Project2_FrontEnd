//import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//importing by umer
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {UserAuthModule} from './user-auth/user-auth.module'
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NoPageComponent } from './no-page/no-page.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './angular-material/angular-material.module';
import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA, ErrorHandler  } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import {AppHttpInterceptor} from './user-auth/services/app-http-interceptor'
import  {GlobalErrorHandlerService} from './global-error-handler-service';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NoPageComponent,
    HomeComponent
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
  providers: [
    {
        provide: HTTP_INTERCEPTORS,
        useClass: AppHttpInterceptor,
        multi: true
    },
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService },
],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
