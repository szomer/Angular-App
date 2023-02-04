import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-embed',
  templateUrl: './video-embed.component.html',
  styleUrls: ['./video-embed.component.scss'],
})
export class VideoEmbedComponent implements OnInit {
  @Input() site: string = 'Youtube';
  @Input() key: string | null = null;

  // var containing the video url - safe resource url
  videoUrl: SafeResourceUrl = '';

  // create DomSanitizer obj
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // Create the video link depending on platform
    switch (this.site) {
      case 'YouTube':
        this.videoUrl = this.getSafeUrl(
          'https://youtube.com/embed/' + this.key
        );
        break;
      case 'Vimeo':
        this.videoUrl = this.getSafeUrl('https://vimeo.com/embed/' + this.key);
        break;
    }
  }

  // return a safe url
  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
