import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsDetailsTableComponent } from './projects-details-table.component';

describe('ProjectsDetailsTableComponent', () => {
  let component: ProjectsDetailsTableComponent;
  let fixture: ComponentFixture<ProjectsDetailsTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsDetailsTableComponent]
    });
    fixture = TestBed.createComponent(ProjectsDetailsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
