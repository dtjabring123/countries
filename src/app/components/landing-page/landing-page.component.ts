import { Component } from '@angular/core';
import { CountriesService } from '../../services';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss',
})
export class LandingPageComponent {
  constructor(private countriesService: CountriesService) {}

  ngOnInit() {
    this.countriesService
      .getAll()
      .subscribe((result) => console.log(result[0]));
  }
}
