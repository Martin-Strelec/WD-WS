import { Component, Input } from '@angular/core';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-movie-detail',
  imports: [],
  templateUrl: './movie-detail.component.html',
  styleUrl: './movie-detail.component.css'
})
export class MovieDetailComponent {

  @Input() movieDetails!:Movie;

}
