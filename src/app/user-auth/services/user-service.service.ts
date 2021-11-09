import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import{LoginInfo} from '../models/login-info';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': 'true'

    })
  }
   URL = "http://localhost:8081/";
  constructor(private http:HttpClient) {   }

  login(data:LoginInfo):Observable<LoginInfo>
  {
    return this.http.post<LoginInfo>(URL+"login"+"/", JSON.stringify(data), this.httpOptions)
    //return this.http.get("https://pokeapi.co/api/v2/pokemon/"+id+"/") as Observable<Pokemon>; 
  }
 
  
  

}
