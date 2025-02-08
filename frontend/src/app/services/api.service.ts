import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = 'http://localhost:3000/api'; // Update with your backend URL

  constructor(private http: HttpClient) {}

  // Login
  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/employees/login`, { email, password });
  }


  // Get all employees
  getEmployees(): Observable<any> {
    return this.http.get(`${this.baseUrl}/employees`);
  }

  // Add a new employee
  addEmployee(employee: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/employees`, employee);
  }

  // Get performance reviews for an employee
  getPerformanceReviews(employeeId: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/performance-reviews/${employeeId}`);
  }

  submitFeedback(reviewId: string, feedback: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/performance-reviews/${reviewId}/feedback`, { feedback });
  }
}