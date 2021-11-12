import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {SignupInfo} from '../models/signup-info'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  
  signup(register:SignupInfo){

  }

  ngOnInit(): void {
   // this.userId=this.route.snapshot.paramMap.get("id");
  }
  

}
