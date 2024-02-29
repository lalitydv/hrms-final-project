import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmPayrollReportingComponent } from './pm-payroll-reporting.component';

describe('PmPayrollReportingComponent', () => {
  let component: PmPayrollReportingComponent;
  let fixture: ComponentFixture<PmPayrollReportingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PmPayrollReportingComponent]
    });
    fixture = TestBed.createComponent(PmPayrollReportingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
