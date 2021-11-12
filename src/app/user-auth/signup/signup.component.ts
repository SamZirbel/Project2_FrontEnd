import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
userId:any='';
  constructor(private route: ActivatedRoute) { }
  Roles: any = ['Admin', 'Author', 'Reader'];
  ngOnInit(): void {
    this.userId=this.route.snapshot.paramMap.get("id");
  }
  

}
