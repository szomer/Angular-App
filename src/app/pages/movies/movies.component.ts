import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { Movie } from '../../models/Movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[] = []; // movies to display
  genreId: string | null = null; // id for genre
  searchValue: string | null = null; // input value of search

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // retrieve the id from params
    this.route.params.pipe(take(1)).subscribe(({ id }) => {
      if (id) {
        // route -> /movies/genre/:id
        this.genreId = id;
        this.getGenreMovies(id, 1);
      } else {
        // route -> /movies
        this.getPageMovies(1);
      }
    });
  }

  // Get movies of a page
  getPageMovies(page: number, searchKeyword?: string) {
    this.moviesService
      .getSearchedMovies(page, searchKeyword)
      .subscribe((movies) => {
        this.movies = movies;
      });
  }

  // Get genre movies
  getGenreMovies(genreId: string, page: number) {
    this.moviesService.getMoviesByGenre(genreId, page).subscribe((movies) => {
      this.movies = movies;
    });
  }

  // Page navigation
  paginate(event: any) {
    // event.page returns the page index (starting at 0)
    let pageNumber = event.page + 1;

    if (this.genreId) {
      // Get movies page of genre
      this.getGenreMovies(this.genreId, pageNumber);
    } else {
      if (this.searchValue) {
        // Get movies page of search input
        this.getPageMovies(pageNumber, this.searchValue);
      } else {
        // Get movies page
        this.getPageMovies(pageNumber);
      }
    }
  }

  // Text input changed
  inputChanged() {
    if (this.searchValue) {
      // Search movies
      this.getPageMovies(1, this.searchValue);
    }
  }
}
