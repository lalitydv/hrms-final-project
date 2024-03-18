import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResignEmployeeComponent } from './resign-employee.component';

describe('ResignEmployeeComponent', () => {
  let component: ResignEmployeeComponent;
  let fixture: ComponentFixture<ResignEmployeeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResignEmployeeComponent]
    });
    fixture = TestBed.createComponent(ResignEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
