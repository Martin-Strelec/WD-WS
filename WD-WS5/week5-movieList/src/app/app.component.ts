import { Component } from '@angular/core';

import { AddMovieComponent } from "./add-movie/add-movie.component";
import { ListMoviesComponent } from "./list-movies/list-movies.component";
import { MovieDetailComponent } from "./movie-detail/movie-detail.component";

import { Movie } from './movie.model';

@Component({
  selector: 'app-root',
  imports: [AddMovieComponent, ListMoviesComponent, MovieDetailComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'week4-movieList';

  public mySelectedMovie!:Movie;

  setSelectedMovie(movie:Movie) {
    this.mySelectedMovie=movie;
  }
}
