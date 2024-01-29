import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentAutoAssignComponent } from './agent-auto-assign.component';

describe('AgentAutoAssignComponent', () => {
  let component: AgentAutoAssignComponent;
  let fixture: ComponentFixture<AgentAutoAssignComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgentAutoAssignComponent]
    });
    fixture = TestBed.createComponent(AgentAutoAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
