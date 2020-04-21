import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppService } from './app.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(
    private http: HttpClient,
    private app: AppService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.app.authenticate({});
  }

  logout(event: MouseEvent): void {
    event.preventDefault();
    this.http.post('logout', {}).subscribe({
      complete: () => {
        this.app.authenticated = false;
        this.router.navigateByUrl('/login');
      },
    });
  }
}
