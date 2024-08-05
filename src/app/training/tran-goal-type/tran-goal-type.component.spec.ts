import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranGoalTypeComponent } from './tran-goal-type.component';

describe('TranGoalTypeComponent', () => {
  let component: TranGoalTypeComponent;
  let fixture: ComponentFixture<TranGoalTypeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TranGoalTypeComponent]
    });
    fixture = TestBed.createComponent(TranGoalTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
