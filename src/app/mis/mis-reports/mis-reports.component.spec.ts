import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MISReportsComponent } from './mis-reports.component';

describe('MISReportsComponent', () => {
  let component: MISReportsComponent;
  let fixture: ComponentFixture<MISReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MISReportsComponent]
    });
    fixture = TestBed.createComponent(MISReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
