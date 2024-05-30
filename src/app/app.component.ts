import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MesProduits';

  constructor(public authService: AuthService, private router: Router) {}

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    if (typeof localStorage !== 'undefined') {
      const isloggedin = localStorage.getItem('isloggedIn') || '';
      const loggedUser = localStorage.getItem('loggedUser') || '';

      if (isloggedin !== 'true' || !loggedUser) {
        this.router.navigate(['/login']);
      } else {
        this.authService.setLoggedUserFromLocalStorage(loggedUser);
      }
    } else {
      console.error('localStorage is not available');
      this.router.navigate(['/login']);
    }
  }
}
