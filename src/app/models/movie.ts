export class Movie {

  public title : string;  // << Title On ?t= Api Query
  public release : string; // << Released On ?t= API Query 
  public synopsis : string; // << Plot On ?t= api Query
  public genre : string; // << Genre On ?t= API Query
  public director : string; // << Director On ?t= API Query

  constructor (title : string, release :string, synopsis : string,
    genre : string, director : string) {

    this.title = title;
    this.release = release;
    this.synopsis = synopsis;
    this.genre = genre;
    this.director = director;

  }

}
