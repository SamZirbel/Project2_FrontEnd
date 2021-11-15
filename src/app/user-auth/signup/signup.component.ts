import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import {SignupInfo} from '../models/signup-info';
import {UserServiceService} from '../services/user-service.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private service: UserServiceService) { }
  
  signup(register:SignupInfo){
    this.service.signup(register).subscribe((data) => {
      this.router.navigateByUrl('login'); 
    },
    (error) => {                              //Error callback
      console.error('error caught in sign up component')
     console.error(error);

      //throw error;   //You can also throw the error to a global error handler
    });
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('token') != null) {
      this.router.navigateByUrl('home');}
   // this.userId=this.route.snapshot.paramMap.get("id");
  }
  

}
