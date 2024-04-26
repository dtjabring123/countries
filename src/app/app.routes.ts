import { Routes } from '@angular/router';
import {
  CountriesPageComponent,
  LandingPageComponent,
  CountryPageComponent,
} from './components';
import { RouteConstants, RouteParameterConstants } from './constants';

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
  {
    path: `${RouteConstants.COUNTRY_PAGE}/:${RouteParameterConstants.CCA3}`,
    title: 'countries-page',
    component: CountryPageComponent,
  },
];
