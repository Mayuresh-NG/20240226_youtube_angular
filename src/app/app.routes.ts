import { Routes } from '@angular/router';
import { AppBodyComponent } from './app-body/app-body.component';
import { SubfeedComponent } from './subfeed/subfeed.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { SettingComponent } from './setting/setting.component';

export const routes: Routes = [
  { path: '', component: AppBodyComponent },
  {
    path: 'mysubscription',
    component: SubfeedComponent,
  },
  { path: 'dropdown', component: DropdownComponent },
  {
    path: 'setting',
    component: SettingComponent,
  },
];
