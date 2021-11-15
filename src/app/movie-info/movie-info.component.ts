import { Component, OnInit, Renderer2, Input } from '@angular/core';

import { SearchbarComponent } from '../searchbar/searchbar.component';

import { MovieInfoHolderService } from '../services/movie-info-holder.service';

import { Movie } from '../models/movie';
import { Observable } from 'rxjs';
import { Title } from '@angular/platform-browser';



@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.css']
})
export class MovieInfoComponent implements OnInit {

  @Input() movie : Movie = new Movie("", "", "", "", "");
  movieTitle:any;//this.movie.title;

  public titles : Array<String> = [];

  constructor(
    movieHolder : MovieInfoHolderService,
    //searchbar : SearchbarComponent,
    renderer : Renderer2,
    
  ) { }
    //fds:any;
    
    
   

  ngOnInit(): void {
    
    console.log(this.titles.length);

    this.titles.length = 0;


  }

  getfrom(fds : any) {

    const result = JSON.parse(this.fds);

    if (result) {

    console.log(result.Title);
    this.titles.push(result.Title);

    }

  }



  public fds : any = sessionStorage.getItem('result');
  
  public fd2 : any;

  //ngDoCheck(){

  public readFlag : number = 0;

  public activeCompare : String = "";

  public match : number = 0;

  ngOnChange() {

    this.titles.length = 0;

  }

  public lastSize : number = 0;

  ngAfterViewChecked() {

    this.fd2=sessionStorage.getItem('flag');
    if (this.fd2 == "flag String") {

      this.titles.length = 0;
      sessionStorage.removeItem('flag');

    }

    this.fds=sessionStorage.getItem('result');
    const result=JSON.parse(this.fds);
    console.log(result.Title);

    let lengthStor : typeof sessionStorage;
    
    // if (result.length == this.lastSize) {

    //   this.titles.length = 0;

    // }

    // this.lastSize = result.length;

    if (!result) {
      console.error("WOOOOH");
    }

    console.error(sessionStorage.getItem('result')?.length);
    console.error();

    if (result.length == 0) { this.titles.length = 0; }

    this.match = 0;

    for (let i = 0; i < this.titles.length; ++ i) {

      this.activeCompare = this.titles[i];

      if (this.activeCompare == result.Title) {

        //console.error("Match");
        this.match = 1;

      }

    }

    if (this.match == 0) {

      this.titles.push(result.Title);

      console.log(this.titles);

    }
   
    //this.ngOnInit();


  } // << End Of ngAfterViewChecked

  ngOnDestroy() {

    
    this.titles.length = 0;

  }



}