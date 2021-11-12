import { Component, OnInit } from '@angular/core';
import { NgbDatepickerNavigationSelect } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation-select';
import { LoginInfo } from '../models/login-info';
import { UserServiceService } from '../services/user-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-auth',
  templateUrl: './login-auth.component.html',
  styleUrls: ['./login-auth.component.css'],
})
export class LoginAuthComponent implements OnInit {
  constructor(private services : UserServiceService, private router: Router) {}

  user:string="";

  forgetpass(){
      this.router.navigateByUrl("forgetpass")
  }
  
  

   message: any;
  doLogin(fdata: LoginInfo) {
  
    console.log(fdata.username);
    //let resp=this.service.login(this.lg);

    //resp.subscribe(
    // //  data=>{
    //     console.log(data);
    //   }

    //)
  }
  // log:LoginInfo|null=null;
  // userData:any;
  // submit(data:any){
  //   console.log(data.user);
  //   console.log(data.pass);
  //   this.log=new LoginInfo(data.user,data.pass);
  //     this.api.login(this.log).subscribe(res => {
  //       console.log(res);
  //       console.log("inside")

  //  });

  // }
  // loggedId: any=0;
  // //is remember me ...................................
  // lsRememberMe(rem:any, usr:any, pass:any) {
  //   //console.log(rem )
  //   if (rem && usr.value !== "") {
  //     localStorage.username = usr.value;
  //     localStorage.password = pass.value;
  //     localStorage.checkbox = rem.value;
  //    // console.log("sellting")
  //   } else {
  //     localStorage.username = "";
  //     localStorage.password = "";
  //     localStorage.checkbox = "";
  //    // console.log("dsellting")
  //   }
  // }

  ngOnInit(): void {
    // this.loggedId =sessionStorage.setItem("userId","0");
  }
  ngAfterViewInit(): void {
    // this.loggedId =sessionStorage.getItem("userId");
  }
}
