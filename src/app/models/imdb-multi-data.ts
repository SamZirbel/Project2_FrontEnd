export class ImdbMultiData {

  public imdbID : string;
  public Title : string;
  public Type : string;
  public Year : string;
  public Poster : string;

  constructor (imdbID : string, Title : string, Type : string, 
    Year : string, Poster : string) {

    this.imdbID = imdbID;
    this.Title = Title;
    this.Type = Type;
    this.Year = Year;
    this.Poster = Poster;

  }

}
