import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/Movie';
import { IMAGE_SIZES } from '../../constants/image-sizes';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void => *', [animate('1s')]),
      transition('* => void', [animate('500ms')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  // @Input is called annotation
  // receive items -> array
  // items of type Movie-array
  // has to be initialized as empty array

  // get the movies
  @Input() items: Movie[] = [];

  // get boolean value to check if banner
  @Input() isBanner: boolean = false;

  // get the image url/sizes
  readonly imageSizes = IMAGE_SIZES;
  // create index variable
  currentSlideIndex: number = 0;

  ngOnInit(): void {
    // check if its a banner or slide show
    if (!this.isBanner) {
      // every 6 seconds change the displayed slide
      setInterval(() => {
        this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
      }, 6000);
    }
  }
}
