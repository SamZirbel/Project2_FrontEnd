import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.css']
})
export class ForgetPassComponent implements OnInit {

  constructor(private router: Router) { }
  resetpass() {

    this.router.navigateByUrl('resetpass');
  }
  ngOnInit(): void {
  }

}
