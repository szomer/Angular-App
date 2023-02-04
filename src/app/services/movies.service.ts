import { Injectable } from '@angular/core';

// service for performing http requests
import { HttpClient } from '@angular/common/http';
import { Images, Movie, MovieDto, MovieVideoDto } from '../models/Movie';

// rxjs: Reactive Extenstions library for JS
// used for dealing with events and integration points
// comes with angular
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
// MovieService will be public, accessable from anywhere
export class MoviesService {
  // URL properties
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'f749497778bc4747db38d41674f31bd5';

  // Instance of HttpClient with the name 'http'
  constructor(private http: HttpClient) {}

  // Method that makes API request and returns array of movies(max size 12)
  getMovies(route: string = 'popular', count: number = 12) {
    // use the http instance for requests
    // returns the first 20 movies of the response
    // of -> creates an observable
    return this.http
      .get<MovieDto>(`${this.baseUrl}/movie/${route}?api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, count));
        })
      );
  }

  // get movies of category popular/upcoming/toprated/etc
  getMoviesCategory(page: number = 1) {
    return this.http
      .get<MovieDto>(
        `${this.baseUrl}/movie/popular?page=${page}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  // get a specific movie
  getMovie(id: string) {
    return this.http.get<Movie>(
      `${this.baseUrl}/movie/${id}?api_key=${this.apiKey}`
    );
  }

  // get videos of a specific movie
  getMovieVideos(id: string) {
    return this.http
      .get<MovieVideoDto>(
        `${this.baseUrl}/movie/${id}/videos?api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getMovieImages(id: string) {
    return this.http.get<Images>(
      `${this.baseUrl}/movie/${id}/images?api_key=${this.apiKey}`
    );
  }
}
