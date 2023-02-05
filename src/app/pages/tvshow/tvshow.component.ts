import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  Credits,
  Images,
  mapTvShowToItem,
  TvShow,
  Video,
} from '../../models/Tv';
import { TvshowsService } from '../../services/tvshows.service';
import { IMAGE_SIZES } from '../../constants/image-sizes';
import { first } from 'rxjs/operators';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-tvshow',
  templateUrl: './tvshow.component.html',
  styleUrls: ['./tvshow.component.scss'],
})
export class TvshowComponent implements OnInit, OnDestroy {
  tvShow: TvShow | null = null; // current tvShow to display
  videos: Video[] = []; // videos of current tvShow
  images: Images | null = null; // images of current tvShow
  credits: Credits | null = null; // cast of current tvShow
  tvShowBanner: Item | null = null;

  imageSize = IMAGE_SIZES; // image url size

  constructor(
    private route: ActivatedRoute,
    private tvShowsService: TvshowsService
  ) {}

  ngOnInit(): void {
    // retrieve the id from the route params -> /tvShow/23293
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getTvShow(id); // get current tvShow
      this.getVideos(id); // get videos of current tvShow
      this.getImages(id); // get images of current tvShow
      this.getCredits(id); // get cast of current tvShow
    });
  }

  ngOnDestroy() {}

  // Get tvShow
  getTvShow(id: string) {
    this.tvShowsService.getTvShow(id).subscribe((tvShowData) => {
      this.tvShowBanner = mapTvShowToItem(tvShowData);
      this.tvShow = tvShowData;
    });
  }

  // Get videos
  getVideos(id: string) {
    this.tvShowsService.getTvShowVideos(id).subscribe((videoData) => {
      this.videos = videoData;
    });
  }

  // Get images
  getImages(id: string) {
    this.tvShowsService.getTvShowImages(id).subscribe((imageData) => {
      this.images = imageData;
    });
  }

  // Get credits
  getCredits(id: string) {
    this.tvShowsService.getTvShowCredits(id).subscribe((creditData) => {
      this.credits = creditData;
    });
  }
}
