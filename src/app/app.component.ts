import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MenuBarComponent } from './components';
import { CommonModule } from '@angular/common';
import { RouteConstants } from './constants';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuBarComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'countries';
}
