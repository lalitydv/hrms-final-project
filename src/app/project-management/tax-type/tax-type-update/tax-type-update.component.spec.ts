import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxTypeUpdateComponent } from './tax-type-update.component';

describe('TaxTypeUpdateComponent', () => {
  let component: TaxTypeUpdateComponent;
  let fixture: ComponentFixture<TaxTypeUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaxTypeUpdateComponent]
    });
    fixture = TestBed.createComponent(TaxTypeUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
