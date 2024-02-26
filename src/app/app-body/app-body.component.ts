import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { CategoryBarComponent } from '../category-bar/category-bar.component';
import { FeedComponent } from '../feed/feed.component';

@Component({
  selector: 'app-app-body',
  standalone: true,
  imports: [NavbarComponent,SideMenuComponent,CategoryBarComponent,FeedComponent],
  templateUrl: './app-body.component.html',
  styleUrl: './app-body.component.css'
})
export class AppBodyComponent {

}
