import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranGoalTypeComponent } from './tran-goal-type/tran-goal-type.component';
import { TranGoalTrackingComponent } from './tran-goal-tracking/tran-goal-tracking.component';
import { TranIndicatorComponent } from './tran-indicator/tran-indicator.component';

const routes: Routes = [
  {
    path:'goal-type' , component: TranGoalTypeComponent
  },
  {
    path:'goal-tracking' , component: TranGoalTrackingComponent
  },
  {
    path:'indicator' , component: TranIndicatorComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
