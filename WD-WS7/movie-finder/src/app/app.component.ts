import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IOMDBResponse } from './omdbResponse';
import { OmbdpApiService } from './services/ombdp-api.service';


@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
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
