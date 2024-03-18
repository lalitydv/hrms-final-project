import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendEmployeeComponent } from './send-employee.component';

describe('SendEmployeeComponent', () => {
  let component: SendEmployeeComponent;
  let fixture: ComponentFixture<SendEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SendEmployeeComponent]
    });
    fixture = TestBed.createComponent(SendEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
