import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubDivisionComponent } from './sub-division.component';

describe('SubDivisionComponent', () => {
  let component: SubDivisionComponent;
  let fixture: ComponentFixture<SubDivisionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubDivisionComponent]
    });
    fixture = TestBed.createComponent(SubDivisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
