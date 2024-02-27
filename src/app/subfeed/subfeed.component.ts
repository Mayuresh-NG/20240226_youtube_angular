import { Component } from '@angular/core';
import { CategoryBarComponent } from '../category-bar/category-bar.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FeedService } from '../service/service.component';

@Component({
  selector: 'app-subfeed',
  standalone: true,
  imports: [
    CategoryBarComponent,
    SideMenuComponent,
    NavbarComponent,
    RouterOutlet,
    CommonModule,
  ],
  providers: [FeedService],
  templateUrl: './subfeed.component.html',
  styleUrl: './subfeed.component.css',
})
export class SubfeedComponent {
  Subscriptions: Array<string> = [
    'Aaj Tak',
    'Law&Crime',
    'BRIGHT SIDE',
    '5-Minute Crafts',
    'NASA',
  ];

  filteredFeed: any[] = [];
  feedData: any[]; 

  constructor(public feedService: FeedService) {
    this.feedData = this.feedService.feed;

    // Filter videos based on Subscriptions
    this.filteredFeed = this.feedData.filter((video) =>
      this.Subscriptions.includes(video.channel_name)
    );
  }

  filterBySubscription(subscription: string) {
    // Use this.feedData instead of just feedData
    this.filteredFeed = this.feedData.filter(
      (video) => video.channel_name === subscription
    );
  }
}
