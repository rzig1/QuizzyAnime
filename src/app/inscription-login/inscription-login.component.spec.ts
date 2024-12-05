import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionLoginComponent } from './inscription-login.component';

describe('InscriptionLoginComponent', () => {
  let component: InscriptionLoginComponent;
  let fixture: ComponentFixture<InscriptionLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InscriptionLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
