import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private router: Router) { }
   
  show:any;
  
  logout(){
    
    sessionStorage.clear();
   this.show=0;
    this.router.navigateByUrl("login")
    this.ngOnInit();
  }

  ngOnInit(): void {
    if(!(sessionStorage.getItem("token")==null))
    this.show=1;
    else this.show=0;
    
  }
  ngAfterViewInit(): void {
    if(!(sessionStorage.getItem("token")==null))
    this.show=1;
   
    
  }
  ngDoCheck(){
    if(!(sessionStorage.getItem("token")==null))
    this.show=1;
  }

}
