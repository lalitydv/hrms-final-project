import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynchronizeFingerprintComponent } from './synchronize-fingerprint.component';

describe('SynchronizeFingerprintComponent', () => {
  let component: SynchronizeFingerprintComponent;
  let fixture: ComponentFixture<SynchronizeFingerprintComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SynchronizeFingerprintComponent]
    });
    fixture = TestBed.createComponent(SynchronizeFingerprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
