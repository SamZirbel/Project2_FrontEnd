import { Movie } from './movie';

export class Favorite {

    public userID : number;
    public movie : Movie;

    constructor (userID : number, movie : Movie) {

        this.userID = userID;
        this.movie = movie;

    }
}
