import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../models/Movie';
import { IMAGE_SIZES } from '../../constants/image-sizes';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  @Input() itemData: Item | null = null; // Movie to display
  @Input() path: string | null = null;

  imageSizes = IMAGE_SIZES; // Image size URL

  constructor() {}

  ngOnInit(): void {}
}
