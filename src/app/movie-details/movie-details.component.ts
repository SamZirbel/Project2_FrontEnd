import { Component, OnInit, SimpleChange } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ImdbMultiData } from '../models/imdb-multi-data';
import { AllMovieData } from '../models/all-movie-data';
import {ReviewsComponent} from '../reviews/reviews.component'
import { ApiService } from '../services/api.service';
import { FavoriteService } from '../services/favorite.service';
import { MovieToBackendService } from '../services/movie-to-backend.service';
import { DateFormaterService } from '../services/date-formater.service';
import { Movie } from '../models/movie';
import { Favorite } from '../models/favorite';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  constructor(
    public router : ActivatedRoute,
    public apiServicer : ApiService,
    public favoriteService : FavoriteService,
    public movietoBackend : MovieToBackendService,
    public dateFormatter : DateFormaterService
  ) { }

  public currentRate = 8;
  public buttonState : number = 0;
  public movieData :  AllMovieData | null = null;

  ngOnInit(): void {

        console.log(this.router.snapshot.paramMap.get("id"));
    this.buttonState = 0;
    this.apiServicer.getSeriesMovieData(this.router.snapshot.paramMap.get("id")).subscribe(
      res2 => {

        console.log(res2);

        this.movieData = res2;

        console.log(this.movieData);

        console.log(res2.Title);
        
      
      
    })
    
    

  }
  ngOnChanges(changes: SimpleChange): void {
    console.log(this.currentRate);
  }

  public onFav() {
    // if (this.buttonState == 1) {
      if (this.movieData != null) {
        let date = this.dateFormatter.formatDate(this.movieData.Released)
        let movie = new Movie(this.movieData?.imdbID, this.movieData?.Title, date, this.movieData?.Plot, this.movieData?.Genre, this.movieData?.Director);
        console.log(movie);
        // this.movietoBackend.generateToken(movie).subscribe(
        //         data => {
        //           let tokenized : any = sessionStorage.setItem("token", data.toString());
        //           console.log(data);
        //         }
        //       )

        let user = sessionStorage.getItem('user');
        if (user) {
          user = JSON.parse(user);
        }
        let username = Object(user).username;
        let userId = Object(user).userId;

        let favorite = new Favorite(username, userId, movie);
        console.log(favorite);

        this.favoriteService.addFavorite(favorite).subscribe(
          data => {
            let tokenized : any = sessionStorage.setItem("token", data.toString());
            console.log(data);
          }
        )

      }
      this.buttonState = 0;
    // } else {
    //   if (this.movieData != null) {
    //     let date = this.dateFormatter.formatDate(this.movieData.Released)
    //     let movie = new Movie(this.movieData?.imdbID, this.movieData?.Title, date, this.movieData?.Plot, this.movieData?.Genre, this.movieData?.Director);
    //     console.log(movie);
    //     // this.movietoBackend.generateToken(movie).subscribe(
    //     //         data => {
    //     //           let tokenized : any = sessionStorage.setItem("token", data.toString());
    //     //           console.log(data);
    //     //         }
    //     //       )

    //     let user = sessionStorage.getItem('user');
    //     if (user) {
    //       user = JSON.parse(user);
    //     }
    //     let username = Object(user).username;
    //     let userId = Object(user).userId;

    //     let favorite = new Favorite(username, userId, movie);
    //     console.log(favorite);

    //     this.favoriteService.deleteFavorite(userId, movie.imdbId);
    // }
  }

}