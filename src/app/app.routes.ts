import { Routes } from '@angular/router';
import { CountriesPageComponent, LandingPageComponent } from './components';

export const routes: Routes = [
  { path: '', redirectTo: '/landing-page', pathMatch: 'full' },
  {
    path: 'landing-page',
    title: 'landing-page',
    component: LandingPageComponent,
  },
  {
    path: 'countries-page',
    title: 'countries-page',
    component: CountriesPageComponent,
  },
];
