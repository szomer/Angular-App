import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Images, Movie, Video } from 'src/app/models/Movie';
import { MoviesService } from 'src/app/services/movies.service';
import { IMAGE_SIZES } from 'src/app/constants/image-sizes';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  movie: Movie | null = null;
  videos: Video[] = [];
  images: Images | null = null;

  imageSize = IMAGE_SIZES;

  constructor(
    private route: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    // retrieve the id from the route params -> /movie/23293
    this.route.params.subscribe(({ id }) => {
      this.getMovie(id);
      this.getVideos(id);
      this.getImages(id);
    });
  }

  // get the movie data
  getMovie(id: string) {
    this.moviesService.getMovie(id).subscribe((movieData) => {
      this.movie = movieData;
    });
  }

  // get the videos data
  getVideos(id: string) {
    this.moviesService.getMovieVideos(id).subscribe((videoData) => {
      this.videos = videoData;
    });
  }

  getImages(id: string) {
    this.moviesService.getMovieImages(id).subscribe((imageData) => {
      this.images = imageData;
    });
  }
}
