import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private token: string | null = null;

  login(token: string, user: any): void {
    this.token = token;
    localStorage.setItem('auth_token', token); // Persist token in local storage
    localStorage.setItem('user', JSON.stringify(user)); // Store user details as a string
  }
  logout(): void {
    this.token = null;
    localStorage.removeItem('auth_token');
    localStorage.removeItem("user"); // Remove token from local storage
  }

  isAuthenticated(): boolean {
    return !!this.token || !!localStorage.getItem('auth_token'); // Check if token is present
  }
  
  getUser(): any {
    try {
      const user = localStorage.getItem('user'); // Retrieve the 'user' item from localStorage
      return user ? JSON.parse(user) : null; // Parse the JSON string if it exists, otherwise return null
    } catch (error) {
      console.error('Failed to parse user data from localStorage:', error);
      return null; // Return null in case of a parsing error
    }
  }
  
}
