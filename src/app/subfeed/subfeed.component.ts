import { Component } from '@angular/core';
import { CategoryBarComponent } from '../category-bar/category-bar.component';
import { SideMenuComponent } from '../side-menu/side-menu.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-subfeed',
  standalone: true,
  imports: [CategoryBarComponent,SideMenuComponent,NavbarComponent,RouterOutlet],
  templateUrl: './subfeed.component.html',
  styleUrl: './subfeed.component.css'
})
export class SubfeedComponent {

}
