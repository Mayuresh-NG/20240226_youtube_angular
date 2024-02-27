import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FeedService } from './service/service.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers: [FeedService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'youtube';
}
