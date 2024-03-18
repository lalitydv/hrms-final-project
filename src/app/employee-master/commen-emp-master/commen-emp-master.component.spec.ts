import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommenEmpMasterComponent } from './commen-emp-master.component';

describe('CommenEmpMasterComponent', () => {
  let component: CommenEmpMasterComponent;
  let fixture: ComponentFixture<CommenEmpMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommenEmpMasterComponent]
    });
    fixture = TestBed.createComponent(CommenEmpMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
