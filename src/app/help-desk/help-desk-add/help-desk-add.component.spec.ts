import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpDeskAddComponent } from './help-desk-add.component';

describe('HelpDeskAddComponent', () => {
  let component: HelpDeskAddComponent;
  let fixture: ComponentFixture<HelpDeskAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpDeskAddComponent]
    });
    fixture = TestBed.createComponent(HelpDeskAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
