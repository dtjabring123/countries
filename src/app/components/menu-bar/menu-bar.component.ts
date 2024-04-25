import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { AsyncPipe } from '@angular/common';
import { RouteConstants } from '../../constants';
import { RouterLink, RouterModule } from '@angular/router';

export interface ExampleTab {
  label: string;
  content: string;
}

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [MatTabsModule, AsyncPipe, RouterLink, RouterModule],
  templateUrl: './menu-bar.component.html',
  styleUrl: './menu-bar.component.scss',
})
export class MenuBarComponent {
  protected landingRoute = RouteConstants.LANDING_PAGE;
  protected countriesRoute = RouteConstants.COUNTRIES_PAGE;
}
