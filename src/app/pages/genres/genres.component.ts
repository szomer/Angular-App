import { Component } from '@angular/core';
import { TvshowsService } from 'src/app/services/tvshows.service';
import { Genre } from '../../models/Genre';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss'],
})
export class GenresComponent {
  movieGenres: Genre[] = [];
  tvShowGenres: Genre[] = [];

  constructor(
    private moviesService: MoviesService,
    private tvShowsService: TvshowsService
  ) {}

  ngOnInit() {
    this.getMovieGenres(); // Get all movie genres
    this.getTvShowGenres(); // Get all tv genres
  }

  // Get genres
  getMovieGenres() {
    this.moviesService.getGenres().subscribe((genreData) => {
      this.movieGenres = genreData;
    });
  }

  // Get genres
  getTvShowGenres() {
    this.tvShowsService.getGenres().subscribe((genreData) => {
      this.tvShowGenres = genreData;
    });
  }
}
