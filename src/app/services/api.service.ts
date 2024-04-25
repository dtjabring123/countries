import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/yml' }),
  };
  private baseUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    const url = `${this.baseUrl}/all`;
    return this.http.get<any[]>(url).pipe(
      tap({
        next: (_) => {
          console.log(`get all success`);
          console.log(_[0]);
        },
        error: (err) => {
          console.error(`get all failed ${err}`);
        },
      })
    );
  }
}
