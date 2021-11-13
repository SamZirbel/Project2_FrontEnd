import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceService} from '../services/user-service.service'
import {SignupInfo} from '../models/signup-info'
import{ UserInfo} from '../models/user-info'

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.css'],
})
export class ResetPassComponent implements OnInit {
  constructor(private service: UserServiceService, private router: Router) {}
  
  usr:any|null=null;
  changepass(newpass:UserInfo){
    this.usr=sessionStorage.getItem("temp");
    const obj = JSON.parse(this.usr);
    console.log(obj);
    this.service.geUpdatePass(obj.userId, newpass).subscribe((pdata) => {
        console.warn(pdata);
        if(pdata!=null)
        alert("password changed successfully")
        sessionStorage.removeItem("temp")
    });
  }


  ngOnInit(): void {}
}
