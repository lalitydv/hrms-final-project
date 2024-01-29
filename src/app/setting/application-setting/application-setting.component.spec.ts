import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationSettingComponent } from './application-setting.component';

describe('ApplicationSettingComponent', () => {
  let component: ApplicationSettingComponent;
  let fixture: ComponentFixture<ApplicationSettingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApplicationSettingComponent]
    });
    fixture = TestBed.createComponent(ApplicationSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
