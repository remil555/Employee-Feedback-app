import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  standalone:false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  login(): void {
    // Trim input fields to remove extra spaces
    const trimmedEmail = this.email.trim();
    const trimmedPassword = this.password.trim();

    // Validate inputs
    if (!trimmedEmail || !trimmedPassword) {
      alert('Email and password are required.');
      return;
    }

    // Call the login API
    this.apiService.login(trimmedEmail, trimmedPassword).subscribe(
      (response: any) => {
        // Save user role and ID in localStorage
        localStorage.setItem('role', response.role);
        localStorage.setItem('employeeId', response.id);

        // Redirect based on role
        if (response.role === 'admin') {
          this.router.navigate(['/employees']);
        } else if (response.role == 'employee' || response.role == 'admin') {
          this.router.navigate(['/reviews']);
        } else {
          this.router.navigate(['/welcome']);
        }


      },
      (error) => {
        console.error('Login error:', error);
        alert('Invalid credentials. Please try again.');
      }
    );
  }
}