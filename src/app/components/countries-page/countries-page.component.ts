import { Component, ElementRef, ViewChild, viewChild } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { ApiService } from '../../services';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  fromEvent,
  map,
  debounceTime,
  distinctUntilChanged,
  Observable,
} from 'rxjs';
import { MatSelectModule } from '@angular/material/select';
import { ApiEnum, FieldEnum } from '../../enums';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { RouteConstants, RouteParameterConstants } from '../../constants';

@Component({
  selector: 'app-countries-page',
  standalone: true,
  imports: [
    MatGridListModule,
    CommonModule,
    MatCardModule,
    MatChipsModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatPaginator,
    MatSort,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './countries-page.component.html',
  styleUrl: './countries-page.component.scss',
})
export class CountriesPageComponent {
  @ViewChild('filter') filterInput!: ElementRef;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  protected dataSource!: MatTableDataSource<any>;
  protected observableCountries!: Observable<any>;
  protected filterValue: string;
  protected endpointValue: string;

  protected endpointOptions = [
    ApiEnum.name,
    ApiEnum.code,
    ApiEnum.currency,
    ApiEnum.demonym,
    ApiEnum.language,
    ApiEnum.capital,
    ApiEnum.region,
    ApiEnum.subregion,
    ApiEnum.translation,
  ];
  protected displayedColumns: string[] = [
    'area',
    'name',
    'population',
    'region',
    'subregion',
  ];

  constructor(private apiService: ApiService, private router: Router) {
    this.filterValue = '';
    this.endpointValue = this.endpointOptions[0];
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.dataSource.sortingDataAccessor = (item, property) => {
      switch (property) {
        case FieldEnum.name:
          return item.name.common;
        default:
          return item[property];
      }
    };
    this.getData();
  }

  ngAfterViewInit() {
    const key = 'keyup';
    fromEvent(this.filterInput.nativeElement, key)
      .pipe(
        map((event: any) => event.target.value),
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe((res) => {
        this.filterValue = res;
        this.getData();
      });
  }

  private getData() {
    console.log(this.endpointValue, this.filterValue);
    this.apiService.setUrl(this.endpointValue, this.filterValue);
    this.apiService
      .getCountries()
      .subscribe((result) => this.populateDataSource(result));
  }

  private populateDataSource(data: any) {
    this.dataSource.data = data;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.observableCountries = this.dataSource.connect();
  }

  protected onClearFilter() {
    this.filterValue = '';
    this.getData();
  }

  protected onOptionSelected(endpointValue: string) {
    this.endpointValue = endpointValue;
    this.getData();
  }

  protected onCardClick(countryCca3: string) {
    this.router.navigate([`${RouteConstants.COUNTRY_PAGE}/${countryCca3}`]);
  }
}
