import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranIndicatorComponent } from './tran-indicator.component';

describe('TranIndicatorComponent', () => {
  let component: TranIndicatorComponent;
  let fixture: ComponentFixture<TranIndicatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TranIndicatorComponent]
    });
    fixture = TestBed.createComponent(TranIndicatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
