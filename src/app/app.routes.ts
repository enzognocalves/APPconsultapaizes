import { Routes } from '@angular/router';
import { HomePage } from './view/home/home.page';
import { CountriesPage } from './view/countries/countries.page';

export const routes: Routes = [
  { path: 'home', component: HomePage },
  { path: 'countries', component: CountriesPage },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
