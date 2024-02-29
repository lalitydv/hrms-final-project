import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RangepopupComponent } from './rangepopup.component';

describe('RangepopupComponent', () => {
  let component: RangepopupComponent;
  let fixture: ComponentFixture<RangepopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RangepopupComponent]
    });
    fixture = TestBed.createComponent(RangepopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
