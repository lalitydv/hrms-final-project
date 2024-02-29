import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkImportPayrollMasterComponent } from './bulk-import-payroll-master.component';

describe('BulkImportPayrollMasterComponent', () => {
  let component: BulkImportPayrollMasterComponent;
  let fixture: ComponentFixture<BulkImportPayrollMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BulkImportPayrollMasterComponent]
    });
    fixture = TestBed.createComponent(BulkImportPayrollMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
