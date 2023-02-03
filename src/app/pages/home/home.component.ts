import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/Movie';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  popularMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];

  // create instance of MoviesService
  constructor(private moviesService: MoviesService) {}

  // component initialized/processed
  ngOnInit(): void {
    // get movies
    // subscribe means waiting for the data to be ready for me
    // call back function
    this.moviesService.getMovies('popular').subscribe((response: any) => {
      this.popularMovies = response.results;
    });
    this.moviesService.getMovies('top_rated').subscribe((response: any) => {
      this.topRatedMovies = response.results;
    });
    this.moviesService.getMovies('upcoming').subscribe((response: any) => {
      this.upcomingMovies = response.results;
    });
  }
}
