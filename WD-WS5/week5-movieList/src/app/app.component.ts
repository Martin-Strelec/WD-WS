import { Component } from '@angular/core';
import { AddMovieComponent } from "./add-movie/add-movie.component";
import { ListMoviesComponent } from "./list-movies/list-movies.component";

@Component({
  selector: 'app-root',
  imports: [AddMovieComponent, ListMoviesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'week4-movieList';
}
