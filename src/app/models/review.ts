import { Movie } from "./movie";

export class Review {

    public id : number;
    public username : string;
    public movie : Movie;
    public starRating : number;
    public reviewContent : string;

    constructor(id:number, username: string, movie: Movie, starRating: number, reviewContent: string){
        this.id = id;
        this.username = username;
        this.movie = movie;
        this.starRating = starRating;
        this.reviewContent = reviewContent;
    }

}