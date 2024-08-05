import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingListAddComponent } from './training-list-add.component';

describe('TrainingListAddComponent', () => {
  let component: TrainingListAddComponent;
  let fixture: ComponentFixture<TrainingListAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingListAddComponent]
    });
    fixture = TestBed.createComponent(TrainingListAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
