import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { AccountComponent } from '../account/account.component';

@Component({
  selector: 'app-setting',
  standalone: true,
  imports: [NavbarComponent,AccountComponent],
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.css'
})
export class SettingComponent {

}
