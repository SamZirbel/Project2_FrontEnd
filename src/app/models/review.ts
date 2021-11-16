//import * as internal from "stream";
import { Movie } from "./movie";

export class Review {

    public user : any | null;
    public movie : Movie;
    public starRating : number;
    public reviewContent : string;

    constructor(//user: {id: number, username: string, p: string, e: string, ph: string, sq: string} | null,
                user: any | null, movie: Movie, starRating: number, reviewContent: string){
        this.user = user;
        this.movie = movie;
        this.starRating = starRating;
        this.reviewContent = reviewContent;
    }

}