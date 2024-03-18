import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeavesAddComponent } from './leaves-add.component';

describe('LeavesAddComponent', () => {
  let component: LeavesAddComponent;
  let fixture: ComponentFixture<LeavesAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeavesAddComponent]
    });
    fixture = TestBed.createComponent(LeavesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
