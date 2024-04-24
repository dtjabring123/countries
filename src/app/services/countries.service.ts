import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/yml' }),
  };
  private baseUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    const url = `${this.baseUrl}/all`;
    return this.http
      .get<any[]>(url)
      .pipe(
        tap(
          (_) => console.log('success'),
          catchError(this.handleError<any>(`failure`))
        )
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
