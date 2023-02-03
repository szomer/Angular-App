import { Component, Input } from '@angular/core';
import { Movie } from '../../models/Movie';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  // @Input is called annotation
  // receive items -> array
  @Input() items: Movie[] = [];
}
