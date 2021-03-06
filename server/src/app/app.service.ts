import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AppService {
  authenticated = false;
  constructor(private http: HttpClient) {}

  authenticate(credentials): Observable<any> {
    const headers = new HttpHeaders(
      credentials
        ? {
            authorization:
              'Basic ' +
              btoa(`${credentials.username}:${credentials.password}`),
          }
        : {}
    );

    return this.http.get('user', { headers }).pipe(
      tap((response) => {
        if (response.name) {
          this.authenticated = true;
        } else {
          this.authenticated = false;
        }
      })
    );
  }
}
