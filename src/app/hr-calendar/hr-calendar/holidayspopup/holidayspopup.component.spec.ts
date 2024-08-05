import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayspopupComponent } from './holidayspopup.component';

describe('HolidayspopupComponent', () => {
  let component: HolidayspopupComponent;
  let fixture: ComponentFixture<HolidayspopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HolidayspopupComponent]
    });
    fixture = TestBed.createComponent(HolidayspopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
