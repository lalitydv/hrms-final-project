import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmConfigurationComponent } from './pm-configuration.component';

describe('PmConfigurationComponent', () => {
  let component: PmConfigurationComponent;
  let fixture: ComponentFixture<PmConfigurationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PmConfigurationComponent]
    });
    fixture = TestBed.createComponent(PmConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
