import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  invalidCredentials = false;

  constructor(private router: Router) {}

  login() {
    if (this.username === 'Admin' && this.password === 'admin123') {
      this.router.navigate(['/customers']);
    } else {
      this.invalidCredentials = true;
    }
  }
}
