import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/models/Item';
import { ItemComponent } from '../item/item.component';

@Component({
  selector: 'app-items-banner',
  templateUrl: './items-banner.component.html',
  styleUrls: ['./items-banner.component.scss'],
})
export class ItemsBannerComponent implements OnInit {
  @Input() items: Item[] = []; // Items to display
  @Input() header: string = ''; // Header Name

  ngOnInit(): void {}
}
