import { Component, OnInit, Renderer2, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { Movie } from '../models/movie';

import { MovieToBackendService } from '../services/movie-to-backend.service';
import { HideComponentService } from '../services/hide-component.service';
import { DateFormaterService } from '../services/date-formater.service';
import { ApiService } from '../services/api.service';
import { MovieInfoHolderService } from '../services/movie-info-holder.service';
import { ImdbMultiData } from '../models/imdb-multi-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})



export class SearchbarComponent implements OnInit {


  public searchQuery : String = "";

  rest:any[]=[];


  dosomething(sea:any){


    if (!(sessionStorage.getItem('result') == null)) { 
      sessionStorage.removeItem('result');
    }
 



  this.apiServicer.getAllMovies(sea.seah).subscribe(res=>{
    for(let i:any=0; i<Object(res).Search.length; i++){ 
      this.rest.length=0;
    this.apiServicer.getSeriesMovies(Object(res).Search[i].imdbID).subscribe(res2=>{
      
      this.rest.push(res2)
      
      if((Object(res).Search.length-1)==i){
        console.log(this.rest)
        sessionStorage.setItem("result", JSON.stringify(this.rest));
      }
    })
   
    } // << End FOr Loop

  }) // << End Of API First Subscription


   this.ngOnInit();


  }


  public submitButton : HTMLElement | null= document.getElementById("SearchMovieButton");

  

 // this.button2.innerText = "  Search Movie  ";
//     this.renderer.listen(this.button2, 'click', () => {
//       this.getInputString(this.input1);
//       this.queryAPI();
//     });


  constructor( 
    private renderer : Renderer2,
    private movieToBackend : MovieToBackendService,
    private hider : HideComponentService,
    private dateFromatter : DateFormaterService,
    private apiServicer : ApiService,
    private movieInfoHoler : MovieInfoHolderService,
    private router : Router
  ) { }

  ngOnInit(): void {

    let inputVar = document.getElementById('SearchMovieInput');

    Object(inputVar).value = "one";
    Object(inputVar).value = "";

    this.renderer.setAttribute(Object(document.getElementById('SearchMovieInput')), 'value', ''); 

  //   this.renderer.listen(this.submitButton, 'click', (sea) => {

  //     //let sea = Object(document.getElementById('SearchMovieInput')).value;

      

  //   if (!(sessionStorage.getItem('result') == null)) { 
  //     sessionStorage.removeItem('result');
  //   }
 



  // this.apiServicer.getAllMovies(sea.seah).subscribe(res=>{
  //   for(let i:any=0; i<Object(res).Search.length; i++){ 
  //     this.rest.length=0;
  //   this.apiServicer.getSeriesMovies(Object(res).Search[i].imdbID).subscribe(res2=>{
      
  //     this.rest.push(res2)
      
  //     if((Object(res).Search.length-1)==i){
  //       console.log(this.rest)
  //       sessionStorage.setItem("result", JSON.stringify(this.rest));
  //     }
  //   })
   
  //   } // << End FOr Loop

  // }) // << End Of API First Subscription



  // });

  }

  ngOnChanges() : void {

    // //if (Object(document.getElementById('SearchMovieInput')).value) {
    // let queryValue : String | null = Object(document.getElementById('SearchMovieInput')).value;

    // if (queryValue) {
    // this.searchQuery = queryValue;
    // }

  }

  ngOnChange(): void {

    sessionStorage.removeItem('result');

  }

}