import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Movie } from '../models/movie'
import { Review } from '../models/review'
//import { ifError } from 'assert';


@Injectable({
  providedIn: 'root'
})
export class ReviewToBackendService {

  constructor(private http : HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': 'true'

    })
  }

  public getReviews(movieId:string):Observable<Review[]> {
    return this.http.get<Review[]>("http://localhost:8085/review/reviewsByMovie/" + movieId, {responseType:'text' as 'json'});
  }

  public addReview(review:Review): Observable<Review[]> {
    return this.http.post<Review[]>("http://localhost:8085/review/addReview", review);
  }

}
