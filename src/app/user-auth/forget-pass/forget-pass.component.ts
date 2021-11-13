import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceService} from '../services/user-service.service'
import {SignupInfo} from '../models/signup-info'

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.css']
})
export class ForgetPassComponent implements OnInit {

  constructor(private router: Router, private service: UserServiceService) { }
  resetpass(forget:SignupInfo ) {

    this.router.navigateByUrl('resetpass');
  }
  ngOnInit(): void {
    if (sessionStorage.getItem('token') != null) {
      this.router.navigateByUrl('home');}
  }

}
