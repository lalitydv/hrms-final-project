import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HrCalendarComponent } from './hr-calendar.component';

describe('HrCalendarComponent', () => {
  let component: HrCalendarComponent;
  let fixture: ComponentFixture<HrCalendarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HrCalendarComponent]
    });
    fixture = TestBed.createComponent(HrCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
