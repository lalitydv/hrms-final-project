import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmPayslipComponent } from './pm-payslip.component';

describe('PmPayslipComponent', () => {
  let component: PmPayslipComponent;
  let fixture: ComponentFixture<PmPayslipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PmPayslipComponent]
    });
    fixture = TestBed.createComponent(PmPayslipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
