import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpDeskEditComponent } from './help-desk-edit.component';

describe('HelpDeskEditComponent', () => {
  let component: HelpDeskEditComponent;
  let fixture: ComponentFixture<HelpDeskEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelpDeskEditComponent]
    });
    fixture = TestBed.createComponent(HelpDeskEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
