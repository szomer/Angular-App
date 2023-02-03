import { Injectable } from '@angular/core';

// service for performing http requests
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
// MovieService will be public, accessable from anywhere
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'f749497778bc4747db38d41674f31bd5';

  // Instance of HttpClient with the name 'http'
  constructor(private http: HttpClient) {}

  getMovies(route: string = 'popular') {
    // use the http instance for requests
    return this.http.get(
      `${this.baseUrl}/movie/${route}?api_key=${this.apiKey}`
    );
  }
}
