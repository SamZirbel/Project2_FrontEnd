import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Movie } from '../models/movie'
import { Review } from '../models/review'


@Injectable({
  providedIn: 'root'
})
export class ReviewToBackendService {

  URL = "http://localhost:8085/";
  constructor(private http : HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': 'true'

    })
  }

  public getReviews(request:Movie):Observable<Review[]> {
    return this.http.get<Review[]>(URL + "reviewsByMovie/" + request, {responseType:'text' as 'json'});
  }

}
