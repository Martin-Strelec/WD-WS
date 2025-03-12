import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OmbdpApiService } from '../../services/ombdp-api.service';
import { IOMDBResponse2 } from '../../omdbResponse2';

@Component({
  selector: 'app-search',
  imports: [CommonModule, ],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})

export class SearchComponent {
  constructor (private _omdbService:OmbdpApiService) {}
  movieData:IOMDBResponse2|undefined;
  currentPage:number = 1
  maxPages:number = 0
  errorMessage:any

  getMovieDetails(movieName:string): boolean {
    this._omdbService.getMoviesData(movieName,this.currentPage).subscribe(
      movieData => {
        this.movieData=movieData;
        //console.log("Director name : " + this.movieData.Director);
      }
    )
    return false;
  }

  getPreviousPage(movieName:string): boolean {
    this.currentPage--;
    if (this.currentPage<1)
      this.currentPage=1;
    this._omdbService.getMoviesData(movieName, this.currentPage).subscribe(
      movieData => {
        this.movieData=movieData;
      }
    )
    return false;
  }

  getNextPage(movieName:string): boolean {
    this.currentPage++;
    this._omdbService.getMoviesData(movieName, this.currentPage).subscribe(
      movieData => {
        this.movieData=movieData;
      }
    )
    return false;
  }
}
