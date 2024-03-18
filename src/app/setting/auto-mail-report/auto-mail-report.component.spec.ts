import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoMailReportComponent } from './auto-mail-report.component';

describe('AutoMailReportComponent', () => {
  let component: AutoMailReportComponent;
  let fixture: ComponentFixture<AutoMailReportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AutoMailReportComponent]
    });
    fixture = TestBed.createComponent(AutoMailReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
