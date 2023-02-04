import { Component, Input, OnInit, ViewChild } from '@angular/core';
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
  movies: Movie[] = [];
  genreId: string | null = null;
  searchValue: string | null = null;

  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.pipe(take(1)).subscribe(({ id }) => {
      if (id) {
        this.genreId = id;
        this.getGenreMovies(id, 1);
      } else {
        this.getPageMovies(1);
      }
    });
  }

  // Requests the movies for certain page
  getPageMovies(page: number, searchKeyword?: string) {
    this.moviesService
      .getSearchedMovies(page, searchKeyword)
      .subscribe((movies) => {
        this.movies = movies;
      });
  }

  // get movies by genre
  getGenreMovies(genreId: string, page: number) {
    this.moviesService.getMoviesByGenre(genreId, page).subscribe((movies) => {
      this.movies = movies;
    });
  }

  // on page navigation clicked
  paginate(event: any) {
    // event.page returns the page index (starting at 0)
    let pageNumber = event.page + 1;

    if (this.genreId) {
      this.getGenreMovies(this.genreId, pageNumber);
    } else {
      if (this.searchValue) {
        this.getPageMovies(pageNumber, this.searchValue);
      } else {
        this.getPageMovies(pageNumber);
      }
    }
  }

  inputChanged() {
    if (this.searchValue) {
      this.getPageMovies(1, this.searchValue);
    }
  }
}
