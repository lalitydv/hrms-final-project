import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskTestComponent } from './add-task-test.component';

describe('AddTaskTestComponent', () => {
  let component: AddTaskTestComponent;
  let fixture: ComponentFixture<AddTaskTestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTaskTestComponent]
    });
    fixture = TestBed.createComponent(AddTaskTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
