import { Component, OnInit } from '@angular/core';
//import { NgbDatepickerNavigationSelect } from '@ng-bootstrap/ng-bootstrap/datepicker/datepicker-navigation-select';
import { LoginInfo } from '../models/login-info';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-auth',
  templateUrl: './login-auth.component.html',
  styleUrls: ['./login-auth.component.css'],
})
export class LoginAuthComponent implements OnInit {
  constructor(private service: UserServiceService, private router: Router) {}

  forgetpass() {
    this.router.navigateByUrl('forgetpass');
  }

  doLogin(fdata: LoginInfo) {
    // console.log(fdata.username);
    this.service.generateToken(fdata).subscribe((data) => {
      sessionStorage.setItem('token', data);
      this.service.getUserInfo(fdata.username).subscribe((userdata) => {
        sessionStorage.setItem('user', JSON.stringify(userdata));
        console.log(userdata);
      });
      this.router.navigateByUrl('home');
    });
  }

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
    if (sessionStorage.getItem('token') != null) {
      this.router.navigateByUrl('home');
    }
  }
}
