import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { IOMDBResponse } from './omdbResponse';
import { OmbdpApiService } from './services/ombdp-api.service';
import { SearchtitleComponent } from './components/searchtitle/searchtitle.component';


@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
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
