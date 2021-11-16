import { ThisReceiver } from '@angular/compiler';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../models/movie';
import { Review } from '../models/review';
import { ApiService } from '../services/api.service';
//import { MovieToBackendService } from '../services/movie-to-backend.service';
import { ReviewToBackendService } from '../services/review-to-backend.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  movie = new Movie("", "", "", "", "", "");;
  reviews : Array<Review> = [];

  constructor(//private movieService: MovieToBackendService,
              private reviewService: ReviewToBackendService,
              public router : ActivatedRoute,
              public apiServicer : ApiService) { }

  ngOnInit(): void {

    this.apiServicer.getSeriesMovieData(this.router.snapshot.paramMap.get("id")).subscribe(res2 => {
      this.movie = new Movie(res2.imdbID, res2.Title, res2.Released, res2.Plot, res2.Genre, res2.Director);
      console.log("Current movie: " + this.movie.title);
      this.populateReviews();
    });
  }

  submitReview(fdata: {content: string, rating: number}){
    console.log("input fields: content: " + fdata.content + " rating: " + fdata.rating);
    let user = sessionStorage.getItem('user');
    let newReview : Review = new Review(JSON.parse(user ? user : 'oops'), this.movie, fdata.rating, fdata.content);
    this.reviewService.addReview(newReview).subscribe(reviewList =>{
      this.reviews = reviewList;
    });
  }

  populateReviews(){
    this.reviewService.getReviews(this.movie.imdbId).subscribe(
      reviewList => {
        if(reviewList){
          this.reviews = reviewList;
          console.log(this.reviews);
        }
      }
    )
  }

  userHasReview() : boolean{
    let u = sessionStorage.getItem('user');
    let user = JSON.parse(u ? u : 'oops');
    let hasReview : boolean = false;
    this.reviews.forEach(review => {
      if(user.username === review.username){
        hasReview = true;
      }
    });
    return hasReview;
  }

}
