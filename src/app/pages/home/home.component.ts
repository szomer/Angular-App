import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { mapMovieToItem } from '../../models/Movie';
import { Item } from 'src/app/models/Item';
import { mapTvShowToItem } from 'src/app/models/Tv';
import { TvshowsService } from 'src/app/services/tvshows.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  // initialize arrays for different types of movies
  popularMovies: Item[] = [];
  topRatedMovies: Item[] = [];
  upcomingMovies: Item[] = [];

  popularTvShows: Item[] = [];
  topRatedTvShows: Item[] = [];

  // create instance of MoviesService
  constructor(
    private moviesService: MoviesService,
    private tvShowsService: TvshowsService
  ) {}

  // component initialized/processed
  ngOnInit(): void {
    // get movies
    // subscribe means waiting for the data to be ready for me
    // call back function

    // get the movies from the MoviesService and populate arrays
    this.getMovies('popular'); // Get popular movies
    this.getMovies('top_rated'); // Get top rated movies
    this.getMovies('upcoming'); // Get upcoming movies

    this.getTvShows('popular'); // Get popular movies
    this.getTvShows('top_rated'); // Get top rated movies
  }

  getMovies(route: string) {
    this.moviesService.getMovies(route).subscribe((movies) => {
      // populate specific array
      switch (route) {
        case 'popular':
          this.popularMovies = movies.map((movie) => mapMovieToItem(movie));
          break;
        case 'top_rated':
          this.topRatedMovies = movies.map((movie) => mapMovieToItem(movie));
          break;
        case 'upcoming':
          this.upcomingMovies = movies.map((movie) => mapMovieToItem(movie));
          break;
      }
    });
  }

  getTvShows(route: string) {
    this.tvShowsService.getTvShows(route).subscribe((tvShows) => {
      // populate specific array
      switch (route) {
        case 'popular':
          this.popularTvShows = tvShows.map((tvShow) =>
            mapTvShowToItem(tvShow)
          );
          break;
        case 'top_rated':
          this.topRatedTvShows = tvShows.map((tvShow) =>
            mapTvShowToItem(tvShow)
          );
          break;
      }
    });
  }
}
