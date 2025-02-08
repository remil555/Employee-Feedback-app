import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  standalone: false,
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  name: string = '';
  role: string = '';
  email: string = '';
  password: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  addEmployee(): void {
    const newEmployee = { name: this.name, role: this.role, email: this.email, password: this.password };
    this.apiService.addEmployee(newEmployee).subscribe(
      () => {
        alert('Employee added successfully!');
        this.router.navigate(['/employees']);
      },
      (error) => {
        alert('Error adding employee');
      }
    );
  }
}