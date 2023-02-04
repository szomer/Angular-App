import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/Movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    // on load get page 1
    this.getPageMovies(1);
  }

  // Requests the movies for certain page
  getPageMovies(page: number) {
    this.moviesService
      .getMoviesCategory(page)
      .subscribe((movies) => (this.movies = movies));
  }

  // on page navigation clicked
  paginate(event: any) {
    // event.page returns the page index (starting at 0)
    this.getPageMovies(event.page + 1);
  }
}
