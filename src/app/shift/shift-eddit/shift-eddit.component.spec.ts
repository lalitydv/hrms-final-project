import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftEdditComponent } from './shift-eddit.component';

describe('ShiftEdditComponent', () => {
  let component: ShiftEdditComponent;
  let fixture: ComponentFixture<ShiftEdditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShiftEdditComponent]
    });
    fixture = TestBed.createComponent(ShiftEdditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
