import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/Movie';
import { IMAGE_SIZES } from '../../constants/image-sizes';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  // get the movie to display
  @Input() itemData: Movie | null = null;

  // image url with proper sizes
  imageSizes = IMAGE_SIZES;

  constructor() {}

  ngOnInit(): void {}
}
