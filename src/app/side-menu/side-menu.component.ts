import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {
  subs: Array<{ img_srcs: string; name: string }> = [
    { img_srcs: './assets/images/aaj.png', name: 'Aaj Tak' },
    {
      img_srcs:'./assets/images/law.webp',
      name:'Law&Crime Net...'
    },
    {
      img_srcs:'./assets/images/br.webp',
      name:'BRIGHT SIDE'
    },
    {
      img_srcs:'./assets/images/5.jpg',
      name:'5-Minute Crafts'
    },
    {
      img_srcs:'./assets/images/nas.png',
      name:'NASA'
    }
  ];
}
