import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectAttendanceComponent } from './collect-attendance.component';

describe('CollectAttendanceComponent', () => {
  let component: CollectAttendanceComponent;
  let fixture: ComponentFixture<CollectAttendanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollectAttendanceComponent]
    });
    fixture = TestBed.createComponent(CollectAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
