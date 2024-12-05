import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private apiUrl = 'http://localhost:3000/users'; // JSON Server URL

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any[]> {
    // Verify user credentials
    return this.http.get<any[]>(`${this.apiUrl}?email=${email}&password=${password}`);
  }

  register(user: any): Observable<any> {
    // Add a new user
    return this.http.post(this.apiUrl, user);
  }
}
