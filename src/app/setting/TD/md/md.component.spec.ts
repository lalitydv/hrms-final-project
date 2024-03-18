import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MDComponent } from './md.component';

describe('MDComponent', () => {
  let component: MDComponent;
  let fixture: ComponentFixture<MDComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MDComponent]
    });
    fixture = TestBed.createComponent(MDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
