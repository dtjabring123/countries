import { Routes } from '@angular/router';
import { CountriesPageComponent, LandingPageComponent } from './components';
import { RouteConstants } from './constants';

export const routes: Routes = [
  {
    path: '',
    redirectTo: `/${RouteConstants.LANDING_PAGE}`,
    pathMatch: 'full',
  },
  {
    path: `${RouteConstants.LANDING_PAGE}`,
    title: 'landing-page',
    component: LandingPageComponent,
  },
  {
    path: `${RouteConstants.COUNTRIES_PAGE}`,
    title: 'countries-page',
    component: CountriesPageComponent,
  },
];
