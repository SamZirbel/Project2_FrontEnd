import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueryAPIService {

  
  // VV API QUery URL Constant Variables
  // VV ==================================
  private readonly url : String = "http://www.omdbapi.com/";
  private readonly titleQuery : String = "?t=";
  private readonly apiKeyTag : String = "&apikey=";
  // VV Unique Per Account - It Is 1000 / Day
  private readonly apiKey : String = "a0e606bd";
 

  constructor() { }

  searchAPI (movie : String) {

    console.log("Searching API For Movie : " + movie);

    let apiquery : String = this.url.toString() 
      + this.titleQuery.toString() 
      + movie.toString()
      + "+*"
      + this.apiKeyTag.toString() 
      + this.apiKey.toString()
    ;

    let result = new Observable ( (observer) => {

      return

    });



  }


  queryAPI () {

    

    
    console.log("API Query : " + apiquery);

    let response = await fetch(apiquery.toString());

    let data = await response.json();

    console.log("Response Data : " + data);

    console.log("Title : " + Object(data).Title);
    console.log("Released : " + Object(data).Released);
    console.log("Plot : " + Object(data).Plot);
    console.log("Genre : " + Object(data).Genre);
    console.log("Director : " + Object(data).Director);

    this.movieQueryResult = {
      title : Object(data).Title,
      director : Object(data).Director,
      genre : Object(data).Genre,
      release : Object(data).Released,
      synopsis : Object(data).Plot
    }

    console.log("\n");
    console.log("Object Created : " + this.movieQueryResult);

    console.log("title : " + Object(this.movieQueryResult).title);
    console.log("release : " + Object(this.movieQueryResult).release);
    console.log("synopsis : " + Object(this.movieQueryResult).synopsis);
    console.log("genre : " + Object(this.movieQueryResult).genre);
    console.log("director : " + Object(this.movieQueryResult).director);

    let queryMovie : Movie = {
      title : Object(data).Title,
      director : Object(data).Director,
      genre : Object(data).Genre,
      release : Object(data).Released,
      synopsis : Object(data).Plot
    }

    console.log(queryMovie);

    //this.movieToBackend.addMovie(queryMovie);

  }

}
