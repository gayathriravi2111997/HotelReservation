import { Component } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title = 'GayuHotel Reservation';
  username = 'Admin';
  password = 'admin123';
  constructor(private router: Router) {}

  login() {
    if (this.username === 'Admin' && this.password === 'admin123') {
      this.router.navigate(['/customer']);
    } else {
      alert('Invalid credentials');
    }
  }
}

