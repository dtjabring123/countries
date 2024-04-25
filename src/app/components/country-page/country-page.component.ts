import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
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
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-country-page',
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
  templateUrl: './country-page.component.html',
  styleUrl: './country-page.component.scss',
})
export class CountryPageComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public country: any) {
    console.log(country);
  }
}
