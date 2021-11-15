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

  dosomething(sea:any){

    if (!(sessionStorage.getItem('result') == null)) { 

      sessionStorage.removeItem('result');

    }
  // console.log(sea.seah)
  this.apiServicer.getAllMovies(sea.seah).subscribe(res=>{
    
    //console.log(Object(res).Search[0].imdbID )
    for(let i:any=0; i<Object(res).Search.length; i++){ 
    this.apiServicer.getSeriesMovies(Object(res).Search[i].imdbID).subscribe(res2=>{
      //console.log(res2 )
      sessionStorage.setItem("result", JSON.stringify(res2));
      //sessionStorage.setItem("flag", "flag String");
    })
    } // << End FOr Loop

  }) // << End Of API First Subscription

    console.error("Something");
    this.router.navigateByUrl('Something Wrong');
    this.router.navigateByUrl('home');

  }


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


  }

  ngOnChange(): void {

    sessionStorage.removeItem('result');

  }

}