import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service'; // Import AuthService
import { UsersService } from '../users.service'; // Assuming this is your service for user API calls

@Component({
  selector: 'app-inscription-login',
  templateUrl: './inscription-login.component.html',
  styleUrls: ['./inscription-login.component.css'],
})
export class InscriptionLoginComponent {
  loginForm: FormGroup;
  registerForm: FormGroup;
  isRegistering: boolean = false; // Toggle between login and register forms

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private authService: AuthService, // Inject AuthService
    private router: Router
  ) {
    // Login Form
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

    // Registration Form
    this.registerForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  login(): void {
    const { email, password } = this.loginForm.value;

    this.usersService.login(email, password).subscribe(
      (user) => {
        if (user) {
          const token = 'dummyToken'; // Normally, this would come from your backend
          this.authService.login(token, user); // Use AuthService to store token and user
          this.router.navigate(['/home']); // Redirect to the home page after login
        } else {
          alert('Invalid credentials. Please try again.');
        }
      },
      (error) => {
        console.error('Login failed', error);
        alert('Login failed. Please try again.');
      }
    );
  }

  register(): void {
    const newUser = this.registerForm.value;

    this.usersService.register(newUser).subscribe(
      () => {
        alert('Registration successful! You can now log in.');
        this.isRegistering = false; // Switch to login form
      },
      (error) => {
        console.error('Registration failed', error);
        alert('Registration failed. Please try again.');
      }
    );
  }

  toggleForm(): void {
    this.isRegistering = !this.isRegistering; // Toggle between login and register
  }

  logout(): void {
    this.authService.logout(); // Call AuthService logout method
    this.router.navigate(['/login']); // Redirect to login after logout
  }

  // Optional: Check if the user is logged in
  isAuthenticated(): boolean {
    return this.authService.isAuthenticated(); // Use AuthService to check authentication
  }
}
