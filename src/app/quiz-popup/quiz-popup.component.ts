import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-popup',
  templateUrl: './quiz-popup.component.html',
  styleUrls: ['./quiz-popup.component.css'],
})
export class QuizPopupComponent implements OnInit {
  @Input() quiz: any;
  currentQuestionIndex = 0;
  selectedAnswer: string | null = null;
  score = 0;
  showResults = false;
  isQuizActive = true;

  constructor() {}

  ngOnInit(): void {}

  selectAnswer(answer: string): void {
    this.selectedAnswer = answer;
  }

  nextQuestion(): void {
    if (!this.selectedAnswer) return;

    if (this.selectedAnswer === this.quiz.questions[this.currentQuestionIndex].answer) {
      this.score++;
    }

    this.selectedAnswer = null;
    this.currentQuestionIndex++;

    if (this.currentQuestionIndex >= this.quiz.questions.length) {
      this.showResults = true;
    }
  }

  resetQuiz(): void {
    this.currentQuestionIndex = 0;
    this.selectedAnswer = null;
    this.score = 0;
    this.showResults = false;
  }
}
