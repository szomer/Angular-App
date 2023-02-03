import { Injectable } from '@angular/core';

// service for performing http requests
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
// MovieService will be public, accessable from anywhere
export class MoviesService {
  // Instance of HttpClient with the name 'http'
  constructor(private http: HttpClient) {}

  getMovies() {
    // use the http instance for requests
    return this.http.get(
      'https://api.themoviedb.org/3/movie/popular?api_key=f749497778bc4747db38d41674f31bd5'
    );
  }
}
