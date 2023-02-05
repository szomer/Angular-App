import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Credits, Images, Movie, Video } from '../../models/Movie';
import { MoviesService } from '../../services/movies.service';
import { IMAGE_SIZES } from '../../constants/image-sizes';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit, OnDestroy {
  movie: Movie | null = null; // current movie to display
  videos: Video[] = []; // videos of current movie
  images: Images | null = null; // images of current movie
  credits: Credits | null = null; // cast of current movie
  movies: Movie[] = []; // similar movies

  imageSize = IMAGE_SIZES; // image url size

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    // retrieve the id from the route params -> /movie/23293
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getMovie(id); // get current movie
      this.getVideos(id); // get videos of current movie
      this.getImages(id); // get images of current movie
      this.getCredits(id); // get cast of current movie
      this.getSimilarMovies(id); // get similar movies
    });
  }

  ngOnDestroy() {}

  // Get movie
  getMovie(id: string) {
    this.moviesService.getMovie(id).subscribe((movieData) => {
      this.movie = movieData;
    });
  }

  // Get videos
  getVideos(id: string) {
    this.moviesService.getMovieVideos(id).subscribe((videoData) => {
      this.videos = videoData;
    });
  }

  // Get images
  getImages(id: string) {
    this.moviesService.getMovieImages(id).subscribe((imageData) => {
      this.images = imageData;
    });
  }

  // Get credits
  getCredits(id: string) {
    this.moviesService.getMovieCredits(id).subscribe((creditData) => {
      this.credits = creditData;
    });
  }

  // Get similar
  getSimilarMovies(id: string) {
    this.moviesService.getSimilarMovies(id).subscribe((similarMoviesData) => {
      this.movies = similarMoviesData;
    });
  }
}
