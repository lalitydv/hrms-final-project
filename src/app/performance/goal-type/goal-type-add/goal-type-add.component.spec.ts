import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalTypeAddComponent } from './goal-type-add.component';

describe('GoalTypeAddComponent', () => {
  let component: GoalTypeAddComponent;
  let fixture: ComponentFixture<GoalTypeAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GoalTypeAddComponent]
    });
    fixture = TestBed.createComponent(GoalTypeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
