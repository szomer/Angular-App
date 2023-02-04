import { Component } from '@angular/core';
import { Genre } from 'src/app/models/Genre';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss'],
})
export class GenresComponent {
  genres: Genre[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit() {
    this.moviesService.getGenres().subscribe((genreData) => {
      this.genres = genreData;
    });
  }
}
