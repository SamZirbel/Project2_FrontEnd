import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-searchbar2',
  templateUrl: './searchbar2.component.html',
  styleUrls: ['./searchbar2.component.css'],
})
export class Searchbar2Component implements OnInit {
  constructor(private apiServicer: ApiService) {}
  rest: any[] = [];
  res2: any;
  dosomething(search: any) {
    if (!(sessionStorage.getItem('result2') == null)) {
      sessionStorage.removeItem('result2');
    }

    let res = this.apiServicer.fetchAllMovies(search.seah);
    console.log(res);
    for (let i: any = 0; i < Object(res).Search.length; i++) {
      this.rest.length = 0;
      this.res2 = this.apiServicer.fetchSeriesMovies(
        Object(res).Search[i].imdbID
      );
      console.log(this.res2);
      this.rest.push(this.res2);

      if (Object(res).Search.length - 1 == i) {
        console.log(this.rest);
        sessionStorage.setItem('result2', JSON.stringify(this.rest));
      }
    }
  }

  ngOnInit(): void {}
}
