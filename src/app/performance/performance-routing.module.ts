import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GoalTypeComponent } from './goal-type/goal-type.component';
import { GoalTrackingComponent } from './goal-tracking/goal-tracking.component';
import { IndicatorComponent } from './indicator/indicator.component';
import { AppraisalComponent } from './appraisal/appraisal.component';

const routes: Routes = [
  {
    path: 'goal-type', component: GoalTypeComponent
  },
  {
    path: 'goal-tracking', component: GoalTrackingComponent
  },
  {
    path: 'indicator', component: IndicatorComponent
  },
  {
    path: 'appraisal', component: AppraisalComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerformanceRoutingModule { }
