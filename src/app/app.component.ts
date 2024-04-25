import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from './components';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MenuBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'countries';
}
