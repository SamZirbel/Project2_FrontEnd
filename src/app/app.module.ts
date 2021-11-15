import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//importing by umer
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {UserAuthModule} from './user-auth/user-auth.module'
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
<<<<<<< HEAD
import {HttpClientModule} from '@angular/common/http';
=======
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
>>>>>>> p4f
import { NoPageComponent } from './no-page/no-page.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularMaterialModule} from './angular-material/angular-material.module';
<<<<<<< HEAD
import { NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';



//import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';



=======
import { NgModule,NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA, ErrorHandler  } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HomeComponent } from './home/home.component';
import {AppHttpInterceptor} from './user-auth/services/app-http-interceptor'
import  {GlobalErrorHandlerService} from './global-error-handler-service';
import { SuccessDialogComponent } from './shared/dialogs/success-dialog/success-dialog.component';
import { ErrorDialogComponent } from './shared/dialogs/error-dialog/error-dialog.component';
>>>>>>> p4f
@NgModule({
  declarations: [
    AppComponent,
    NoPageComponent,
    HomeComponent,
<<<<<<< HEAD
    SearchbarComponent,
    NavBarComponent
=======
    SuccessDialogComponent,
    ErrorDialogComponent
>>>>>>> p4f
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
