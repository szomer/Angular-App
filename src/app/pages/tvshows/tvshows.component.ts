import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';
import { TvShow } from '../../models/Tv';
import { TvshowsService } from '../../services/tvshows.service';

@Component({
  selector: 'app-tvshows',
  templateUrl: './tvshows.component.html',
  styleUrls: ['./tvshows.component.scss'],
})
export class TvshowsComponent {
  tvShows: TvShow[] = []; // tvshows to display
  genreId: string | null = null; // id for genre
  searchValue: string | null = null; // input value of search

  constructor(
    private tvShowsService: TvshowsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // retrieve the id from params
    this.route.params.pipe(take(1)).subscribe(({ id }) => {
      if (id) {
        // route -> /tvshows/genre/:id
        this.genreId = id;
        this.getGenreTvShows(id, 1);
      } else {
        // route -> /tvshows
        this.getPageTvShows(1);
      }
    });
  }

  // Get tvshows of a page
  getPageTvShows(page: number, searchKeyword?: string) {
    this.tvShowsService
      .getSearchedTvShows(page, searchKeyword)
      .subscribe((tvShows) => {
        this.tvShows = tvShows;
      });
  }

  // Get genre tvshows
  getGenreTvShows(genreId: string, page: number) {
    this.tvShowsService
      .getTvShowsByGenre(genreId, page)
      .subscribe((tvShows) => {
        this.tvShows = tvShows;
      });
  }

  // Page navigation
  paginate(event: any) {
    // event.page returns the page index (starting at 0)
    let pageNumber = event.page + 1;

    if (this.genreId) {
      // Get tvshows page of genre
      this.getGenreTvShows(this.genreId, pageNumber);
    } else {
      if (this.searchValue) {
        // Get tvshows page of search input
        this.getPageTvShows(pageNumber, this.searchValue);
      } else {
        // Get tvshows page
        this.getPageTvShows(pageNumber);
      }
    }
  }

  // Text input changed
  inputChanged() {
    if (this.searchValue) {
      // Search tvshows
      this.getPageTvShows(1, this.searchValue);
    }
  }
}
