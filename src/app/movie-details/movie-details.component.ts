import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ImdbMultiData } from '../models/imdb-multi-data';
import { AllMovieData } from '../models/all-movie-data';

import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(
    public router : ActivatedRoute,
    public apiServicer : ApiService
  ) { }



  public movieData :  AllMovieData | null = null;

  ngOnInit(): void {

        console.log(this.router.snapshot.paramMap.get("id"));

    this.apiServicer.getSeriesMovieData(this.router.snapshot.paramMap.get("id")).subscribe(
      res2 => {

        console.log(res2);

        this.movieData = res2;

        console.log(this.movieData);

        console.log(res2.Title);
        
      
      
    })
    
    

  }

}
