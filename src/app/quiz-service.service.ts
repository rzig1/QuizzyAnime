import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private apiUrl = 'http://localhost:3000/quizzes'; // URL for JSON Server

  constructor(private http: HttpClient) { }

  // Fetch quizzes from the server
  getQuizzes(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
