import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Movie } from '../models/movie'


@Injectable({
  providedIn: 'root'
})
export class MovieToBackendService {

  private readonly toLocalPort : String = 'http://localhost:8085/';


  constructor(private httpclient : HttpClient) { }

  overrideNull(): string {
    if (sessionStorage.getItem('token') === null) return '';
    return sessionStorage.getItem('token') as any;
  }



  public generateToken(movie : Movie) : Observable<String> {
    
    console.log("Doing The Service Thing");

    const httpOptions = {
        headers: new HttpHeaders({
          Authorization: this.overrideNull(),
          responseType: 'text' as 'json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Access-Control-Allow-Credentials': 'true',
        }),
      }



    return this.httpclient.post<string>("http://localhost:8085/" + "movie", movie, httpOptions) as Observable<String>;

  }


  public welcome(token : string) {

    let tokenString = 'Bearer ' + token;

    const httpOptions = {

      headers : new HttpHeaders({
        "Authorization" : tokenString,
        "Content-Type" : "application/json",
        "Access-Control-Allow-Credentials" : "true",
        responseType : "text" as "json"
      })

    }

    return this.httpclient.get(this.toLocalPort + "welcome", httpOptions);

  }

  login(movie : Movie) { };

 
}






















/*
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Credentials': 'true'

    })
  }
*/



/*
 constructor(
      private service : UserServiceService, 
      private router: Router
  ) {}
  

  tokenized:any;
  
  forgetpass(){
      this.router.navigateByUrl("forgetpass")
  }
  
  doLogin(fdata: LoginInfo) {
  
   // console.log(fdata.username);
    this.service.generateToken(fdata).subscribe(
      data=>{
        this.tokenized =sessionStorage.setItem("token", data);
        console.log(data);
      }

    )
  }
 
*/

/*
public generateToken(request:LoginInfo):Observable<string> {
  return this.http.post<string>("http://localhost:8085/loginauth", request, {responseType:'text' as 'json'});
}
*/



