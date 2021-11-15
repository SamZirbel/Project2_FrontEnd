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

  constructor(private movieService: MovieToBackendService, private reviewService: ReviewToBackendService) { }

  ngOnInit(): void {
  }

  populateReviews(){
    this.reviewService.getReviews(this.movie).subscribe({
      next(reviews){
        reviews.forEach(review => {
          let content = document.createElement("p");
          content.className = "reviewClass";
          content.innerText = review.reviewContent;
          let username = document.createElement("span");
          username.className = "reviewClass";
          username.innerText = review.username;
          //TODO
        })
      }
    })
  }

}
