export class Movie {

  public id : string = "";
  public title : String;  // << Title On ?t= Api Query
  public release : String; // << Released On ?t= API Query 
  public synopsis : String; // << Plot On ?t= api Query
  public genre : String; // << Genre On ?t= API Query
  public director : String; // << Director On ?t= API Query

  constructor (id : string, title : String, release : String, synopsis : String,
    genre : String, director : String) {

    this.id = id;
    this.title = title;
    this.release = release;
    this.synopsis = synopsis;
    this.genre = genre;
    this.director = director;

  }

}
