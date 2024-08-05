import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewGoalTrackingComponent } from './add-new-goal-tracking.component';

describe('AddNewGoalTrackingComponent', () => {
  let component: AddNewGoalTrackingComponent;
  let fixture: ComponentFixture<AddNewGoalTrackingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewGoalTrackingComponent]
    });
    fixture = TestBed.createComponent(AddNewGoalTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
