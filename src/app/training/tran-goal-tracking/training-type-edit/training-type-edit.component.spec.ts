import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingTypeEditComponent } from './training-type-edit.component';

describe('TrainingTypeEditComponent', () => {
  let component: TrainingTypeEditComponent;
  let fixture: ComponentFixture<TrainingTypeEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingTypeEditComponent]
    });
    fixture = TestBed.createComponent(TrainingTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
