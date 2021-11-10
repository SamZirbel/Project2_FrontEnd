import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginCompComponent } from './login-comp/login-comp.component';
import { ViewCompComponent } from './view-comp/view-comp.component';
import { SubmitCompComponent } from './submit-comp/submit-comp.component';
import { NavCompComponent } from './nav-comp/nav-comp.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    LoginCompComponent,
    ViewCompComponent,
    SubmitCompComponent,
    NavCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
