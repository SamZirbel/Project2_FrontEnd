import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Movie } from './movie'


@Injectable({
  providedIn: 'root'
})
export class MovieToBackendService {

  constructor(private httpclient : HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': 'true'

    })
  }

  addMovie(movie : Movie) : Observable<Movie> {

    console.log("Sending Movie : " + movie);

    return this.httpclient.post<Movie>(('http://localhost:8085/movie'),JSON.stringify(movie), this.httpOptions);

  }

}
