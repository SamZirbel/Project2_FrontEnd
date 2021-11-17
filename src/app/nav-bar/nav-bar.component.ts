import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public currentUser = ''
  constructor(private router: Router) { }
   
  show:any;
  
  logout(){
    
    localStorage.clear();
    sessionStorage.clear();
   this.show=0;
    this.router.navigateByUrl("login")
    this.ngOnInit();
  }

  ngOnInit(): void {
    if(!(localStorage.getItem("token")==null))
    this.show=1;
    else this.show=0;
    
  }
  ngAfterViewInit(): void {
    if(!(localStorage.getItem("token")==null))
    this.show=1;
    
  }
  ngDoCheck(){
    if(!(localStorage.getItem("token")==null))
    this.show=1;
  }

}
