import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminationsComponent } from './terminations.component';

describe('TerminationsComponent', () => {
  let component: TerminationsComponent;
  let fixture: ComponentFixture<TerminationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TerminationsComponent]
    });
    fixture = TestBed.createComponent(TerminationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
