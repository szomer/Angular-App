import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  Credits,
  Images,
  TvShow,
  TvShowDto,
  TvShowVideoDto,
} from '../models/Tv';
import { GenreDto } from '../models/Genre';

@Injectable({
  providedIn: 'root',
})
export class TvshowsService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = 'f749497778bc4747db38d41674f31bd5';

  constructor(private http: HttpClient) {}

  // Get movies of category
  getTvShows(route: string = 'popular', count: number = 12) {
    // use the http instance for requests
    // returns the first 20 movies of the response
    // of -> creates an observable
    return this.http
      .get<TvShowDto>(`${this.baseUrl}/tv/${route}?api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, count));
        })
      );
  }

  // Get movies of page
  getSearchedTvShows(page: number = 1, searchValue?: string) {
    const uri = searchValue ? '/search/tv' : '/tv/popular';

    return this.http
      .get<TvShowDto>(
        `${this.baseUrl}${uri}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  // Get similar movies of movie
  getSimilarTvShows(id: string, count = 12) {
    return this.http
      .get<TvShowDto>(
        `${this.baseUrl}/movie/${id}/similar?api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results.slice(0, count));
        })
      );
  }

  // Get TvShows of genre
  getTvShowsByGenre(id: string, pageNumber: number) {
    return this.http
      .get<TvShowDto>(
        `${this.baseUrl}/discover/tv?with_genres=${id}&page=${pageNumber}&api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  // Get movie
  getTvShow(id: string) {
    return this.http.get<TvShow>(
      `${this.baseUrl}/tv/${id}?api_key=${this.apiKey}`
    );
  }

  // Get videos of movie
  getTvShowVideos(id: string) {
    return this.http
      .get<TvShowVideoDto>(
        `${this.baseUrl}/tv/${id}/videos?api_key=${this.apiKey}`
      )
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  // Get images of movie
  getTvShowImages(id: string) {
    return this.http.get<Images>(
      `${this.baseUrl}/tv/${id}/images?api_key=${this.apiKey}`
    );
  }

  // Get credits of movie
  getTvShowCredits(id: string) {
    return this.http.get<Credits>(
      `${this.baseUrl}/tv/${id}/credits?api_key=${this.apiKey}`
    );
  }

  // Get genres
  getGenres() {
    return this.http
      .get<GenreDto>(`${this.baseUrl}/genre/tv/list?api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.genres);
        })
      );
  }
}
