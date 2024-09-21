import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleeListComponent } from './rolee-list.component';

describe('RoleeListComponent', () => {
  let component: RoleeListComponent;
  let fixture: ComponentFixture<RoleeListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoleeListComponent]
    });
    fixture = TestBed.createComponent(RoleeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
