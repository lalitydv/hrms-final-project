import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranGoalTrackingComponent } from './tran-goal-tracking.component';

describe('TranGoalTrackingComponent', () => {
  let component: TranGoalTrackingComponent;
  let fixture: ComponentFixture<TranGoalTrackingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TranGoalTrackingComponent]
    });
    fixture = TestBed.createComponent(TranGoalTrackingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
