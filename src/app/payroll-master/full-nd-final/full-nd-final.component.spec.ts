import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullNdFinalComponent } from './full-nd-final.component';

describe('FullNdFinalComponent', () => {
  let component: FullNdFinalComponent;
  let fixture: ComponentFixture<FullNdFinalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullNdFinalComponent]
    });
    fixture = TestBed.createComponent(FullNdFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
