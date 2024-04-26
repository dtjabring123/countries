import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ApiService } from '../../services';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute } from '@angular/router';
import { RouteParameterConstants } from '../../constants';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-country-page',
  standalone: true,
  imports: [MatGridListModule, CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.scss',
})
export class CountryPageComponent {
  private cca3: string = '';
  protected country: any | undefined;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit() {
    this.route.params.subscribe((parameter) => {
      this.cca3 = parameter[`${RouteParameterConstants.CCA3}`];
      this.apiService
        .getCountry(this.cca3)
        .subscribe((result) => (this.country = result[0]));
    });
  }
}
