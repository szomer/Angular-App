import { Injectable } from '@angular/core';

// service for performing http requests
import { HttpClient } from '@angular/common/http';
import { MovieDto } from '../models/Movie';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
// MovieService will be public, accessable from anywhere
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'f749497778bc4747db38d41674f31bd5';

  // Instance of HttpClient with the name 'http'
  constructor(private http: HttpClient) {}

  getMovies(route: string = 'popular', count: number = 12) {
    // use the http instance for requests
    return this.http
      .get<MovieDto>(`${this.baseUrl}/movie/${route}?api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, count));
        })
      );
  }
}
