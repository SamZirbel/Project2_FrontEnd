import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../services/favorite.service';

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrls: ['./fav-list.component.css']
})
export class FavListComponent implements OnInit {

  constructor(public favoriteService : FavoriteService) { }

  ngOnInit(): void {
    let user = sessionStorage.getItem('user');
    if (user) {
      user = JSON.parse(user);
    }
    console.log(this.favoriteService.getMyFavorites(Object(user).userId));

  }

}
