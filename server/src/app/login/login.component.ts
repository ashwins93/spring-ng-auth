import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [],
})
export class LoginComponent implements OnInit {
  credentials = { username: '', password: '' };
  error = '';

  constructor(private app: AppService, private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.app.authenticate(this.credentials).subscribe(
      () => {
        this.router.navigateByUrl('/');
      },
      (err) => {
        console.error(err);
        this.error = 'Someting went wrong. Check your credentials';
      }
    );
    return false;
  }
}
