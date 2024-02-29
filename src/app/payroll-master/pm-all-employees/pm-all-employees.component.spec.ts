import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmAllEmployeesComponent } from './pm-all-employees.component';

describe('PmAllEmployeesComponent', () => {
  let component: PmAllEmployeesComponent;
  let fixture: ComponentFixture<PmAllEmployeesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PmAllEmployeesComponent]
    });
    fixture = TestBed.createComponent(PmAllEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
