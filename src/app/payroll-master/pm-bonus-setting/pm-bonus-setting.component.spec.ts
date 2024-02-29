import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PmBonusSettingComponent } from './pm-bonus-setting.component';

describe('PmBonusSettingComponent', () => {
  let component: PmBonusSettingComponent;
  let fixture: ComponentFixture<PmBonusSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PmBonusSettingComponent]
    });
    fixture = TestBed.createComponent(PmBonusSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
