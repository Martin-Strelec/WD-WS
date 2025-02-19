import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../services/movie.service';
import { Movie } from '../movie.model';

@Component({
  selector: 'app-list-movies',
  imports: [CommonModule],
  templateUrl: './list-movies.component.html',
  styleUrl: './list-movies.component.css'
})
export class ListMoviesComponent {

  movies:any[]=[];
  private currentMovie!: Movie;

  constructor(private movieService:MovieService) {}

  ngOnInit() {
    this.movies=this.movieService.getMovies();
    console.log(this.movies);
  }

  selectMovie(myMovie:Movie):void {
    console.log(myMovie);
  }

  isSelected(movie:Movie):boolean {
    return false;
  }

}
