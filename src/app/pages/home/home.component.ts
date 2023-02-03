import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movies: any = [];

  // create instance of MoviesService
  constructor(private moviesService: MoviesService) {}

  // component initialized/processed
  ngOnInit(): void {
    // get movies
    // subscribe means waiting for the data to be ready for me
    // call back function
    this.moviesService.getMovies().subscribe((response: any) => {
      this.movies = response.results;
      console.log(this.movies);
    });
  }
}
