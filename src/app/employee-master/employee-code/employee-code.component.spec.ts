import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCodeComponent } from './employee-code.component';

describe('EmployeeCodeComponent', () => {
  let component: EmployeeCodeComponent;
  let fixture: ComponentFixture<EmployeeCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeeCodeComponent]
    });
    fixture = TestBed.createComponent(EmployeeCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
