import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IOMDBResponse } from '../../omdbResponse';
import { OmbdpApiService } from '../../services/ombdp-api.service';

@Component({
  selector: 'app-searchtitle',
  imports: [CommonModule],
  templateUrl: './searchtitle.component.html',
  styleUrl: './searchtitle.component.css'
})
export class SearchtitleComponent {
  title = 'Movie Finder';
  movieData?:IOMDBResponse | undefined;
  errorMessage:any;

  constructor(private _omdbService:OmbdpApiService){}

  getMovieDetails(movieName:string): boolean {
    this._omdbService.getMovieData(movieName).subscribe(
      movieData => {
        this.movieData=movieData;
        console.log("Director name: " + this.movieData.Director);

      }
    )
    return false;
  }

  setDefaultImg(event: any) {
    event.target.src = '../../public/default.png'; // Ensure the default image is in the assets folder
  }
}