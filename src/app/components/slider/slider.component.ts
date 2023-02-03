import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/Movie';

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
  @Input() items: Movie[] = [];

  currentSlideIndex: number = 0;

  ngOnInit(): void {
    setInterval(() => {
      this.currentSlideIndex = ++this.currentSlideIndex % this.items.length;
    }, 6000);
  }
}
