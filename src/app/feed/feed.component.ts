import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FeedService } from '../service/service.component';

@Component({
  selector: 'app-feed',
  standalone: true,
  imports: [CommonModule],
  providers:[FeedService],
  templateUrl: './feed.component.html',
  styleUrl: './feed.component.css',
})
export class FeedComponent {
  feedData: any[]; 
  constructor(public feedService: FeedService) {
    this.feedData = this.feedService.feed;
  }
}
