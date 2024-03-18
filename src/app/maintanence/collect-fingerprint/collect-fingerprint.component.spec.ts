import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollectFingerprintComponent } from './collect-fingerprint.component';

describe('CollectFingerprintComponent', () => {
  let component: CollectFingerprintComponent;
  let fixture: ComponentFixture<CollectFingerprintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollectFingerprintComponent]
    });
    fixture = TestBed.createComponent(CollectFingerprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
