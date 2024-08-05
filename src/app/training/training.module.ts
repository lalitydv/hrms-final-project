import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { TranGoalTypeComponent } from './tran-goal-type/tran-goal-type.component';
import { TranGoalTrackingComponent } from './tran-goal-tracking/tran-goal-tracking.component';
import { TranIndicatorComponent } from './tran-indicator/tran-indicator.component';
import { SharedImportsModule } from '../shared-imports/shared-imports.module';
import { TrainingListAddComponent } from './tran-goal-type/training-list-add/training-list-add.component';
import { TrainingTypeEditComponent } from './tran-goal-tracking/training-type-edit/training-type-edit.component';
import { AddTrainerComponent } from './tran-indicator/add-trainer/add-trainer.component';



@NgModule({
  declarations: [
   
  
    TranGoalTypeComponent,
           TranGoalTrackingComponent,
           TranIndicatorComponent,
           TrainingListAddComponent,
           TrainingTypeEditComponent,
           AddTrainerComponent
  ],
  imports: [
    CommonModule,
    TrainingRoutingModule,
    SharedImportsModule
  ]
})
export class TrainingModule { }
