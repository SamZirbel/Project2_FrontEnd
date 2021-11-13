import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';
import{ UserInfo} from '../models/user-info'

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private service: UserServiceService, private router: Router) { }
  
  usr:any|null=null;
  changepass(newpass:UserInfo){
   this.usr= sessionStorage.getItem("user");
    const jsonobj= JSON.parse(this.usr);
    console.log(jsonobj.userId);
    
    newpass.username=jsonobj.username;
    this.service.geUpdatePass(jsonobj.userId, newpass).subscribe((pdata) => {
        console.warn(pdata);
    });
  }
  ngOnInit(): void {
    
  }

}
