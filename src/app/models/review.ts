//import * as internal from "stream";
import { Movie } from "./movie";

export class Review {

    public username : string | null;
    public movie : Movie;
    public starRating : number;
    public reviewContent : string;

    constructor(user: {id: number, username: string, p: string, e: string, ph: string, sq: string} | null,
                movie: Movie, starRating: number, reviewContent: string){
        this.username = user ? user.username : null;
        this.movie = movie;
        this.starRating = starRating;
        this.reviewContent = reviewContent;
    }

}