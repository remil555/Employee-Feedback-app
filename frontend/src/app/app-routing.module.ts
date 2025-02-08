import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PerformanceReviewListComponent } from './performance-review-list/performance-review-list.component';
import { LoginComponent } from './login/login.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'employees', component: EmployeeListComponent, canActivate: [AuthGuard], data: { role: 'admin' } },
  { path: 'add-employee', component: AddEmployeeComponent, canActivate: [AuthGuard], data: { role: 'admin' } }, 
  { path: 'submit-feedback', component: FeedbackComponent },
  { path: 'reviews', component: PerformanceReviewListComponent} ,
  { path: '', redirectTo: '/welcome', pathMatch: 'full' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
