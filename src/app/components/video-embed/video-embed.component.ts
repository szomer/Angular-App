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

  // Video url - safe resource url
  videoUrl: SafeResourceUrl = '';

  // Create DomSanitizer obj for safe url
  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    // Create the video link depending on platform
    switch (this.site) {
      case 'YouTube': // YouTube
        this.videoUrl = this.getSafeUrl(
          'https://youtube.com/embed/' + this.key
        );
        break;
      case 'Vimeo': // Vimeo
        this.videoUrl = this.getSafeUrl('https://vimeo.com/embed/' + this.key);
        break;
    }
  }

  // Return a safe url for video
  getSafeUrl(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
