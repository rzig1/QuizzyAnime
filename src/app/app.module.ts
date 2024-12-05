import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // For making HTTP requests
import { ReactiveFormsModule } from '@angular/forms'; // For handling reactive forms

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { InscriptionLoginComponent } from './inscription-login/inscription-login.component';
import { QuizPopupComponent } from './quiz-popup/quiz-popup.component';
import { QuizService } from './quiz-service.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    InscriptionLoginComponent,
    QuizPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // Added for HTTP requests
    ReactiveFormsModule // Added for form handling
  ],
  providers: [QuizService],
  bootstrap: [AppComponent]
})
export class AppModule { }
