import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginInfo } from '../models/login-info';
import { Observable } from 'rxjs';
import { SignupInfo } from '../models/signup-info';
import { UserInfo } from '../models/user-info';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  URL = 'http://localhost:8085/';
  constructor(private http: HttpClient) {}

  public generateToken(request: LoginInfo): Observable<string> {
    return this.http.post<string>('http://localhost:8085/loginauth', request, {
      responseType: 'text' as 'json',
    });
  }

  overrideNull(): string {
    if (sessionStorage.getItem('token') === null) return '';
    return sessionStorage.getItem('token') as any;
  }

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: this.overrideNull(),
      responseType: 'text' as 'json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': '*',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Credentials': 'true',
    }),
  };

  public signup(register: any): Observable<SignupInfo> {
    console.log(register);
    return this.http.post<SignupInfo>(
      this.URL + 'register',
      JSON.stringify(register),
      this.httpOptions
    );
  }
  public getUserInfo(user: string): Observable<UserInfo> {
    return this.http.get(
      this.URL + 'user/' + user,
      this.httpOptions
    ) as Observable<UserInfo>;
  }
  
  public geUpdatePass(id: any, pass: UserInfo): Observable<any> {
    return this.http.put(
      this.URL + 'passupdate/' + id,
      JSON.stringify(pass),
      this.httpOptions
    );
  }

  

  // public welcome(token1:any): Observable<LoginInfo> {
  //   console.log(this.overrideNull());

  //  // return this.http.post<string>('http://localhost:8085/welcome',JSON.stringify({"username": "user1"}), httpOptions);

  //   return this.http.get(
  //    ' http://localhost:8085/user/user1',
  //     this.httpOptions
  //   ) as Observable<LoginInfo>;
  //   //return this.http.get(this.URL+"welcome", {headers, responseType:'text' as 'json'});
  //   //return this.http.post<LoginInfo>(URL+"login"+"/", JSON.stringify(data), this.httpOptions)
  // }
}
