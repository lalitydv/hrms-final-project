import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLetterComponent } from './card-letter.component';

describe('CardLetterComponent', () => {
  let component: CardLetterComponent;
  let fixture: ComponentFixture<CardLetterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardLetterComponent]
    });
    fixture = TestBed.createComponent(CardLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
