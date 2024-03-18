import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceEdditComponent } from './device-eddit.component';

describe('DeviceEdditComponent', () => {
  let component: DeviceEdditComponent;
  let fixture: ComponentFixture<DeviceEdditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeviceEdditComponent]
    });
    fixture = TestBed.createComponent(DeviceEdditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
