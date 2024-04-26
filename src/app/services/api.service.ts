import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { ApiEnum } from '../enums';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/yml' }),
  };
  private baseUrl = 'https://restcountries.com/v3.1';
  private endpointUrl: string = ApiEnum.all;
  private filterUrl: string = '';

  constructor(private http: HttpClient, private snackBar: MatSnackBar) {}

  public getCountries(): Observable<any[]> {
    let url = '';
    if (this.filterUrl === '') {
      url = `${this.baseUrl}/${ApiEnum.all}`;
    } else {
      url = `${this.baseUrl}/${this.endpointUrl}/${this.filterUrl}`;
    }
    console.log(url);
    return this.http.get<any[]>(url).pipe(
      tap({
        next: (_) => {
          console.log(`get all success`);
        },
        error: (err) => {
          console.error(`get all failed ${err}`);
          this.showSnackBar();
        },
      })
    );
  }

  public getCountry(countryCca3: string): Observable<any> {
    const url = `${this.baseUrl}/${ApiEnum.code}/${countryCca3}`;
    console.log(url);
    return this.http.get<any>(url).pipe(
      tap({
        next: (_) => {
          console.log(`get success`);
        },
        error: (err) => {
          console.error(`get failed ${err}`);
          this.showSnackBar();
        },
      })
    );
  }

  public setUrl(endpoint: string, filter: string) {
    this.endpointUrl = endpoint;
    this.filterUrl = filter;
  }

  public showSnackBar() {
    this.snackBar.open(
      `No ${this.endpointUrl} matching your search of '${this.filterUrl}'`,
      'close',
      {
        duration: 3000,
        verticalPosition: 'top',
        panelClass: 'error-snackbar',
      }
    );
  }
}
