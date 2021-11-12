import { Component, OnInit, Renderer2 } from '@angular/core';
import { Movie } from '../movie';
import { MovieToBackendService } from '../movie-to-backend.service';


@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})



export class SearchbarComponent implements OnInit {

  // VV API QUery URL Constant Variables
  // VV ==================================
  private readonly url : String = "http://www.omdbapi.com/";
  private readonly titleQuery : String = "?t=";
  private readonly apiKeyTag : String = "&apikey=";
  // VV Unique Per Account - It Is 1000 / Day
  private readonly apiKey : String = "a0e606bd";
 

  // VV Search Bar HTML Element Variables
  // VV ===================================
  private searchDiv : HTMLElement = document.createElement('div');

  private heading1 : HTMLElement = document.createElement('h1');
  private para1 : HTMLElement = document.createElement('p');

  private button1 : HTMLElement = document.createElement('button');
  private button2 : HTMLElement = document.createElement('button');

  private form1 : HTMLElement = document.createElement('form');
  private label1 : HTMLElement = document.createElement('label');
  private input1 : HTMLElement = document.createElement('input');

  private inputString : String = "";

  private movieQueryResult : Object = {title : String, director : String,
    genre : String, release : String, synopsis : String
  };


  constructor( private renderer : Renderer2,
    private movieToBackend : MovieToBackendService
  ) { }



  ngOnInit(): void {

    console.log("Search Init");

    this.renderer.appendChild(document.querySelector('app-searchbar'), this.searchDiv);

    this.renderer.setStyle(this.searchDiv, 'border', "solid");

    this.heading1.innerText = "Search Bar!!";
    this.renderer.appendChild(this.searchDiv, this.heading1);

    this.renderer.appendChild(this.searchDiv, this.form1);

    this.label1.innerText = "Enter Movie : ";
    this.renderer.setAttribute(this.label1, 'for', "searchEntry");
    this.renderer.appendChild(this.form1, this.label1);

    this.renderer.setAttribute(this.input1, 'type', "text");
    this.renderer.setAttribute(this.input1, 'id', "searchEntry");
    this.renderer.setAttribute(this.input1, 'name', "searchEntry");
    this.renderer.appendChild(this.form1, this.input1);

    this.button2.innerText = "  Search Movie  ";
    this.renderer.listen(this.button2, 'click', () => {
      this.getInputString(this.input1);
      this.queryAPI();
    });
    this.renderer.appendChild(this.searchDiv, this.button2);

    this.button1.innerText = "Hide Search Bar";
    this.renderer.listen(this.button1, 'click', () => {
      this.hideDiv(this.searchDiv);
    });
    this.renderer.appendChild(this.searchDiv, this.button1);

  }

  hideDiv(body : HTMLElement) { 

    console.log("Starting Hide Div");

    while (body.firstChild) {

      body.removeChild(body.firstChild);

    }

    this.renderer.setStyle(body, 'border', "none");

  }

  // VV Gets The Input String From The Input Field Of The Form
  // VV When The Search Movie Button Is Pressed
  getInputString( inputField : HTMLElement) {

    this.inputString = (document.getElementById(inputField.id) as HTMLInputElement).value;

    console.log("Input String : " + this.inputString);

    // VV Spaces Need To Be + In The API Request
    // VV ' Need To Be %27 In The API Request
    for (let i = 0; i < this.inputString.length; ++ i) {

      let regularExpression1 = /\s/;
      let replacement1 = "+";

      this.inputString = this.inputString.replace(regularExpression1, replacement1);

      let regularExpression2 = /'/;
      let replacement2 = "%27";

      this.inputString = this.inputString.replace(regularExpression2, replacement2);

      //console.log("Index " + i + " : " + this.inputString[i]);

    }

  }

  async queryAPI () {

    let apiquery : String = this.url.toString() 
      + this.titleQuery.toString() 
      + this.inputString.toString()
      + "+*"
      + this.apiKeyTag.toString() 
      + this.apiKey.toString();

    
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

    this.movieToBackend.addMovie(queryMovie);

  }

}
