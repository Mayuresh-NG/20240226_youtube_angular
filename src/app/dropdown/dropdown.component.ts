import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css',
})
export class DropdownComponent {
  settingsMenuToggle(): void {
    const settingsmenu = document.querySelector(
      '.settings-menu'
    ) as HTMLElement;
    settingsmenu.classList.toggle('settings-menu-height');
  }

  user: { image_url: string; name: string } = {
    image_url:
      'https://images.unsplash.com/photo-1708771754562-163e2994c815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Mayuresh Gorantiwar',
  };
}
