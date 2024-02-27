import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  user: { image_url: string; name: string } = {
    image_url:
      'https://images.unsplash.com/photo-1708771754562-163e2994c815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw2OHx8fGVufDB8fHx8fA%3D%3D',
    name: 'Mayuresh Gorantiwar',
  };
}
