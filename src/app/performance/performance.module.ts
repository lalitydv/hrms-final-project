import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PerformanceRoutingModule } from './performance-routing.module';
import { GoalTypeComponent } from './goal-type/goal-type.component';
import { GoalTrackingComponent } from './goal-tracking/goal-tracking.component';
import { IndicatorComponent } from './indicator/indicator.component';
import { AppraisalComponent } from './appraisal/appraisal.component';
import { SharedImportsModule } from '../shared-imports/shared-imports.module';
import { GoalTypeAddComponent } from './goal-type/goal-type-add/goal-type-add.component';
import { AddNewGoalTrackingComponent } from './goal-tracking/add-new-goal-tracking/add-new-goal-tracking.component';
import { AddPerformanceAppraisalComponent } from './appraisal/add-performance-appraisal/add-performance-appraisal.component';
import { IndicatorAddComponent } from './indicator/indicator-add/indicator-add.component';


@NgModule({
  declarations: [
    GoalTypeComponent,
    GoalTrackingComponent,
    IndicatorComponent,
    AppraisalComponent,
    GoalTypeAddComponent,
    AddNewGoalTrackingComponent,
    AddPerformanceAppraisalComponent,
    IndicatorAddComponent
  ],
  imports: [
    CommonModule,
    PerformanceRoutingModule,
    SharedImportsModule
  ]
})
export class PerformanceModule { }
