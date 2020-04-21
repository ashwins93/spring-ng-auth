import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: `./home.component.html`,
  styles: [],
})
export class HomeComponent implements OnInit {
  greeting: any = {};

  constructor(private app: AppService, private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('resource').subscribe((data) => (this.greeting = data));
  }

  authenticated() {
    return this.app.authenticated;
  }
}
