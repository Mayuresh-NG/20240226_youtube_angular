import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [],
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
}
