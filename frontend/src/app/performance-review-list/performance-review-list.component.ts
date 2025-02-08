import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-performance-review-list',
  standalone:false,
  templateUrl: './performance-review-list.component.html',
  styleUrls: ['./performance-review-list.component.css'],
})
export class PerformanceReviewListComponent implements OnInit {
  reviews: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    const employeeId = localStorage.getItem('employeeId');
    if (employeeId) {
      this.apiService.getPerformanceReviews(employeeId).subscribe(
        (data: any) => {
          this.reviews = data;
        },
        (error) => {
          console.error('Error fetching reviews:', error);
        }
      );
    }
  }
}