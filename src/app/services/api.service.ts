import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import{Login} from '../models/login';

import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': 'true'

    })
  }
   URL = "http://localhost:8081/";
  constructor(private http:HttpClient) {   }

  login(data:Login):Observable<Login>
  {
    return this.http.post<Login>(URL+"login"+"/", JSON.stringify(data), this.httpOptions)
    //return this.http.get("https://pokeapi.co/api/v2/pokemon/"+id+"/") as Observable<Pokemon>; 
  }
 
  
  
  
}
