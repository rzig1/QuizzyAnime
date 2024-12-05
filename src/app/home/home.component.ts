import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Import AuthService
import { QuizService } from '../quiz-service.service'; // Corrected import path

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  user: any;
  quizzes: any[] = [];
  showQuizPopup = false;
  name!:string; // Control visibility of the quiz popup

  constructor(
    private authService: AuthService,
    private router: Router,
    private quizService: QuizService // Inject QuizService
  ) {}

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    this.name = this.user?.name; // Get the user's name from the local storage if available 

    // Fetch quizzes from the QuizService
    this.quizService.getQuizzes().subscribe(
      (quizzes: any) => {
        this.quizzes = quizzes; // Store quizzes in the component
      },
      (error: any) => {
        console.error('Error fetching quizzes:', error);
      }
    );
  }

  logout(): void {
    this.authService.logout(); // Use AuthService to log the user out
    this.router.navigate(['/login']); // Navigate to login page after logout
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated(); // Check if user is authenticated
  }

  toggleQuizPopup(): void {
    this.showQuizPopup = !this.showQuizPopup; // Toggle the popup visibility
  }
}
