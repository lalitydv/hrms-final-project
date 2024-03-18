import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftDeleteComponent } from './shift-delete.component';

describe('ShiftDeleteComponent', () => {
  let component: ShiftDeleteComponent;
  let fixture: ComponentFixture<ShiftDeleteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShiftDeleteComponent]
    });
    fixture = TestBed.createComponent(ShiftDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
