import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { ImdbMultiData } from '../models/imdb-multi-data';
import { Movie } from '../models/movie';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly toLocalPort : String = 'http://localhost:8085/';

  private readonly apiURL : String = "http://www.omdbapi.com/";
  private readonly dataQuery : String = "?t=";
  private readonly resultsQuery : String = "?s=";
  private readonly idQuery : String = "?i=";
  private readonly apiKeyTag : String = "&apikey=";
  // VV Unique Per Account - It Is 1000 / Day
  private readonly apiKey : String = "a0e606bd";

  private imdbID : String = "Empty IMDBID : NOt Initialized";

  private foundMovie : Movie | null = null;
  private returnMovies : Array<Array<Movie>> = new Array(1);

  constructor(private httpclient : HttpClient) { }


getAllMovies(data:string): Observable<ImdbMultiData[]>{
   
    return this.httpclient.get<ImdbMultiData[]>("http://www.omdbapi.com/?s="+ data +this.apiKeyTag+ this.apiKey) as  Observable<ImdbMultiData[]>
  }
  getSeriesMovies(id:any): Observable<ImdbMultiData[]>{
   
    return this.httpclient.get<ImdbMultiData[]>("http://www.omdbapi.com/?i="+ id +this.apiKeyTag+ this.apiKey) as  Observable<ImdbMultiData[]>
  }



  public getMovies(imdbID : String) : Observable<any> {

    console.log(imdbID);

    return new Observable<any>();

  }

/*
  public queryAPI(title : String) : Observable<Array<Array<Movie>>> {

    console.log("Querying API For Title : " + title);

    this.queryResults(title).pipe(
      switchMap( (movieData : any) this.queryID().pipe(
          map( (movies : any) => ({movies, movieData}) )
        ))
      )

  }*/



  public queryTitle(title : String) : Observable<ArrayBuffer> {

    console.log("Title Check For : " + title);

    let titleURL = this.formatURLDataT(title);

    console.log("Prepared URL : " + titleURL);

    //return new Observable<ArrayBuffer>();

    return this.httpclient.get<ArrayBuffer>(titleURL.toString()) as Observable<ArrayBuffer>;

  }

  public queryResults(title : String) : Observable<any> {

    console.log("Results Check For : " + title);

    let resultsURL = this.formatURLResultsS(title);

    console.log("Prepared URL : " + resultsURL);

    //return new Observable<ArrayBuffer>();

    return this.httpclient.get<any>(resultsURL.toString());

  }
  
  public queryID(ID : String) : Observable<ArrayBuffer> {

    console.log("Results Check For : " + ID);

    let resultsURL = this.formatURLimdbID(ID);

    console.log("Prepared URL : " + resultsURL);

    //return new Observable<ArrayBuffer>();

    return this.httpclient.get<ArrayBuffer>(resultsURL.toString());

  }


  public formatURLDataT(title : String) : String {

    console.log("Starting Title : " + title);

    let apiquery : String = 
      this.apiURL.toString()
      + this.dataQuery.toString()
      + title.toString()
      + this.apiKeyTag.toString()
      + this.apiKey.toString()
    ;
      
    console.log("created URL : " + apiquery);

    return apiquery;

  }


  public formatURLResultsS(title : String) : String {

    console.log("Starting Title : " + title);

    let apiquery : String = 
      this.apiURL.toString()
      + this.resultsQuery.toString()
      + title.toString()
      + this.apiKeyTag.toString()
      + this.apiKey.toString()
    ;
      
    console.log("created URL : " + apiquery);

    return apiquery;

  }

  
  public formatURLimdbID(ID : String) : String {

    console.log("Starting ID : " + ID);

    let apiquery : String = 
      this.apiURL.toString()
      + this.idQuery.toString()
      + ID.toString()
      + this.apiKeyTag.toString()
      + this.apiKey.toString()
    ;
      
    console.log("created URL : " + apiquery);

    return apiquery;

  }


}
