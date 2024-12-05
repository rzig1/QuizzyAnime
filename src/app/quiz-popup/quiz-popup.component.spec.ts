import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizPopupComponent } from './quiz-popup.component';

describe('QuizPopupComponent', () => {
  let component: QuizPopupComponent;
  let fixture: ComponentFixture<QuizPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
