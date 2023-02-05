import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

import { IMAGE_SIZES } from '../../constants/image-sizes';
import { Item } from 'src/app/models/Item';

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

  @Input() items: Item[] = []; // Movies to display

  @Input() isBanner: boolean = false; // Banner validator

  readonly imageSizes = IMAGE_SIZES; // Image size URL

  currentSlideIndex: number = 0; // Slide index

  ngOnInit(): void {
    // Check if its a banner or slide show
    if (!this.isBanner) {
      // Every 6 seconds change the displayed slide
      setInterval(() => {
        this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
      }, 6000);
    }
  }
}
