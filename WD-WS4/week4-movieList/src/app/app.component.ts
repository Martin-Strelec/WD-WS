import { Component } from '@angular/core';
import { AddMovieComponent } from "./add-movie/add-movie.component";

@Component({
  selector: 'app-root',
  imports: [AddMovieComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'week4-movieList';
}
