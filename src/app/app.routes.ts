import { Routes } from '@angular/router';
import { AppBodyComponent } from './app-body/app-body.component';
import { SubfeedComponent } from './subfeed/subfeed.component';
import { DropdownComponent } from './dropdown/dropdown.component';

export const routes: Routes = [
  { path: '', component: AppBodyComponent },
  {
    path: 'mysubscription',
    component: SubfeedComponent,
  },
  { path: 'dropdown', component: DropdownComponent }, // Use the correct component for your dropdown

];
