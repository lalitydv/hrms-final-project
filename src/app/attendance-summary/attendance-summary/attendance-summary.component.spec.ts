import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendanceSummaryComponent } from './attendance-summary.component';

describe('AttendanceSummaryComponent', () => {
  let component: AttendanceSummaryComponent;
  let fixture: ComponentFixture<AttendanceSummaryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AttendanceSummaryComponent]
    });
    fixture = TestBed.createComponent(AttendanceSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
