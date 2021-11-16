import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Favorite } from '../models/favorite'

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(private httpclient : HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': 'true'

    })
  }

  addFavorite(favorite : Favorite) : Observable<Favorite> {

    console.log("Adding Favorite : " + favorite);

    return this.httpclient.post<Favorite>(('http://localhost:8085/favorite'),JSON.stringify(favorite), this.httpOptions);

  }

  getAllFavorites() {
    return this.httpclient.get<Favorite>(('http://localhost:8085/favorite'), this.httpOptions);
  }

  getMyFavorites(id:number) {
    return this.httpclient.get<Favorite>(('http://localhost:8085/favorite/user/'+id));
  }

  getFavoriteByMovie(id:number) {
    return this.httpclient.get<Favorite>(('http://localhost:8085/favorite/movie/'+id));
  }
  // deleteFavorite(uid : number, mid : string) {
  //   console.log("called");
  //   console.log(uid);
  //   console.log(mid);
  //   return this.httpclient.post<Favorite>(('http://localhost:8085/favorite/' + uid + '/' + mid), this.httpOptions);
  //   // return this.httpclient.request("delete", 'http://localhost:8085/favorite/delete', {body: favorite});
  // }
}
