import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWarningComponent } from './add-warning.component';

describe('AddWarningComponent', () => {
  let component: AddWarningComponent;
  let fixture: ComponentFixture<AddWarningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddWarningComponent]
    });
    fixture = TestBed.createComponent(AddWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
