export class Movie {

  public title : String;
  public release : Date;
  public synopsis : String;
  public genre : String;
  public director : String;

  constructor (title : String, release : Date, synopsis : String,
    genre : String, director : String) {

    this.title = title;
    this.release = release;
    this.synopsis = synopsis;
    this.genre = genre;
    this.director = director;

  }

}
