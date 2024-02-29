import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablefinacialComponent } from './tablefinacial.component';

describe('TablefinacialComponent', () => {
  let component: TablefinacialComponent;
  let fixture: ComponentFixture<TablefinacialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablefinacialComponent]
    });
    fixture = TestBed.createComponent(TablefinacialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
