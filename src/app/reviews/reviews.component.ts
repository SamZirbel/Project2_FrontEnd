import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { Review } from '../models/review';
import { MovieToBackendService } from '../services/movie-to-backend.service';
import { ReviewToBackendService } from '../services/review-to-backend.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  movie : Movie;
  reviews : Array<Review> = [];

  constructor(private movieService: MovieToBackendService, private reviewService: ReviewToBackendService) { }

  ngOnInit(): void {
  }

  submitReview(fdata: {content: string, rating: number}){
    let user = sessionStorage.getItem('user');
    let newReview : Review = new Review(JSON.parse(user ? user : 'oops'), this.movie, fdata.rating, fdata.content);
    this.reviewService.addReview(newReview).subscribe(reviewList =>{
      this.reviews = reviewList;
    });
  }

  populateReviews(){
    this.reviewService.getReviews(this.movie).subscribe(
      reviewList => {
        this.reviews = reviewList;
      }
    )
  }

}
