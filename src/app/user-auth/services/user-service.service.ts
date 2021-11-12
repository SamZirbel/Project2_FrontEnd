import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import{LoginInfo} from '../models/login-info';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

 
   URL = "http://localhost:8085/";
  constructor(private http:HttpClient) {   }

public generateToken(request:LoginInfo):Observable<string> {
  return this.http.post<string>("http://localhost:8085/loginauth", request, {responseType:'text' as 'json'});
}







public welcome(token:string){
  let tokenStr= 'Bearer '+token;
 //const headers= new HttpHeaders().set("Authorization", tokenStr);
 const httpOptions = {
  headers: new HttpHeaders({
    "Authorization": tokenStr,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Credentials': 'true',
     responseType: 'text' as 'json'
  })
}
  return this.http.get(this.URL+"welcome", httpOptions);
 //return this.http.get(this.URL+"welcome", {headers, responseType:'text' as 'json'});
}

  login(data:LoginInfo)//:Observable<LoginInfo>
  {
   

    //return this.http.get<LoginInfo>(URL+"login"+"/", httpOptions) as Observable<LoginInfo>
    //return this.http.post<LoginInfo>(URL+"login"+"/", JSON.stringify(data), this.httpOptions)
    //return this.http.get("https://pokeapi.co/api/v2/pokemon/"+id+"/") as Observable<Pokemon>; 
  }
 
 }
