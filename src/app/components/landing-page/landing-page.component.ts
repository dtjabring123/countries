import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouteConstants } from '../../constants';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  protected hide = true;
  protected username: string = '';
  protected password: string = '';

  constructor(private router: Router) {}

  protected detailsEntered(): boolean {
    if (this.username.length > 0 && this.password.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  protected onLoginClick() {
    this.router.navigate([`${RouteConstants.COUNTRIES_PAGE}`]);
  }
}
