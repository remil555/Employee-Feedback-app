import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feedback',
  standalone: false,
  
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {
  reviewId: string = '';
  feedback: string = '';

  constructor(private apiService: ApiService, private router: Router) {}

  submitFeedback(): void {
    // Implement API call to submit feedback
    console.log('Submitting feedback:', { reviewId: this.reviewId, feedback: this.feedback });
    this.router.navigate(['/reviews']);
  }

}
