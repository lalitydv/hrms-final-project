import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceEmployeeComponent } from './device-employee.component';

describe('DeviceEmployeeComponent', () => {
  let component: DeviceEmployeeComponent;
  let fixture: ComponentFixture<DeviceEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeviceEmployeeComponent]
    });
    fixture = TestBed.createComponent(DeviceEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
