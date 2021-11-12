import { Component, OnInit } from '@angular/core';
import { LoginInfo } from '../models/login-info';
import {UserServiceService} from '../services/user-service.service';


@Component({
  selector: 'app-login-auth',
  templateUrl: './login-auth.component.html',
  styleUrls: ['./login-auth.component.css']
})
export class LoginAuthComponent implements OnInit {

  constructor(private service:UserServiceService) {
  }

  user:string='';
  pass:string='';

   lg:LoginInfo|null=null;
  
  
  message:any;
  doLogin(fdata:any)
  {
    console.warn(fdata.username);
    this.lg= new LoginInfo(fdata.username,fdata.password);
    
    let resp=this.service.login(this.lg);
    
    
    resp.subscribe(
      data=>{
        console.log(data);
      }

    )
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
  ngAfterViewInit(): void{
   // this.loggedId =sessionStorage.getItem("userId");

  }


}
