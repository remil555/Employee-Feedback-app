import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;
  userRole: string | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkAuthStatus();
  }

  checkAuthStatus() {
    this.userRole = localStorage.getItem('role');
    this.isLoggedIn = !!this.userRole;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
    this.checkAuthStatus();
  }
}