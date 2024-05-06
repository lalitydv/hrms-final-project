import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProjectOverviewComponent } from './view-project-overview.component';

describe('ViewProjectOverviewComponent', () => {
  let component: ViewProjectOverviewComponent;
  let fixture: ComponentFixture<ViewProjectOverviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewProjectOverviewComponent]
    });
    fixture = TestBed.createComponent(ViewProjectOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
