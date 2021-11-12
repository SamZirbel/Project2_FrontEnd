import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Login } from '../models/login';
import {ApiService} from '../services/api.service'

@Component({
  selector: 'app-login-comp',
  templateUrl: './login-comp.component.html',
  styleUrls: ['./login-comp.component.css']
})
export class LoginCompComponent implements OnInit {

  constructor(private api:ApiService) {  }

  log:Login|null=null;
  userData:any;

  submit(data:any) {

    console.log(data.user);
    console.log(data.pass);
    this.log=new Login(data.user,data.pass);

//     this.api.login(this.log).subscribe(res => {
//       console.log(res);
//       console.log("inside")
      
//  });

    this.api.getall().subscribe( res=>{ console.log(res); } )
  
  }

  loggedId: any=0;

  //is remember me ...................................
  lsRememberMe(rem:any, usr:any, pass:any) {
    //console.log(rem )
    if (rem && usr.value !== "") {
      localStorage.username = usr.value;
      localStorage.password = pass.value;
      localStorage.checkbox = rem.value;
     // console.log("sellting")
    } else {
      localStorage.username = "";
      localStorage.password = "";
      localStorage.checkbox = "";
     // console.log("dsellting")
    }
  }

 
  ngOnInit(): void {
    this.loggedId =sessionStorage.setItem("userId","0");

  }
  ngAfterViewInit(): void{
    this.loggedId =sessionStorage.getItem("userId");

  }

}
