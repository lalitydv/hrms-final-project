import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgWideSearchComponent } from './org-wide-search.component';

describe('OrgWideSearchComponent', () => {
  let component: OrgWideSearchComponent;
  let fixture: ComponentFixture<OrgWideSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrgWideSearchComponent]
    });
    fixture = TestBed.createComponent(OrgWideSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
