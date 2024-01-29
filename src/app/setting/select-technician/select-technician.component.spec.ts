import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTechnicianComponent } from './select-technician.component';

describe('SelectTechnicianComponent', () => {
  let component: SelectTechnicianComponent;
  let fixture: ComponentFixture<SelectTechnicianComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelectTechnicianComponent]
    });
    fixture = TestBed.createComponent(SelectTechnicianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
