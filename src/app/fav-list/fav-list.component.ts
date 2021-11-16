import { Component, OnInit } from '@angular/core';
import { Favorite } from '../models/favorite';
import { Movie } from '../models/movie';
import { FavoriteService } from '../services/favorite.service';

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrls: ['./fav-list.component.css']
})
export class FavListComponent implements OnInit {

  constructor(public favoriteService : FavoriteService) { }

  public favorites : Array<Favorite> = [];

  ngOnInit(): void {
    let user = sessionStorage.getItem('user');
    if (user) {
      user = JSON.parse(user);
    }
    this.favoriteService.getMyFavorites(Object(user).userId).subscribe(
      data => {
        let tokenized : any = sessionStorage.setItem("token", data.toString());
        console.log(data);
        this.favorites = Object(data);
      }
    )

  }

}
