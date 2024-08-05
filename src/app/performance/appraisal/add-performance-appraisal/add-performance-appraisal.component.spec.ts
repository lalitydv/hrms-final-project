import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPerformanceAppraisalComponent } from './add-performance-appraisal.component';

describe('AddPerformanceAppraisalComponent', () => {
  let component: AddPerformanceAppraisalComponent;
  let fixture: ComponentFixture<AddPerformanceAppraisalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddPerformanceAppraisalComponent]
    });
    fixture = TestBed.createComponent(AddPerformanceAppraisalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
