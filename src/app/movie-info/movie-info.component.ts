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

  constructor(
    movieHolder : MovieInfoHolderService,
    //searchbar : SearchbarComponent,
    renderer : Renderer2,
    
  ) { }
    fds:any;
    
    
    
   

  ngOnInit(): void {
    

  }

  ngDoCheck(){
    this.fds=sessionStorage.getItem('result');
    const result=JSON.parse(this.fds);
    //console.log(result);

    for (let i:any=0; i<3; i++){
      console.log(result[i].Title)
    }
  //   for (let item of result) {
  //     console.log(item);
  //     // for (let title of item.Title) {
  //     //   console.log(title);
  //   //} 
  // } 
   
    
 
   
  }

}