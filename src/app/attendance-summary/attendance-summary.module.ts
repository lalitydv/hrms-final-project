import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceSummaryRoutingModule } from './attendance-summary-routing.module';
import { AttendanceSummaryComponent } from './attendance-summary/attendance-summary.component';
import { SharedImportsModule } from '../shared-imports/shared-imports.module';


@NgModule({
  declarations: [
    AttendanceSummaryComponent
  ],
  imports: [
    CommonModule,
    AttendanceSummaryRoutingModule,
    SharedImportsModule
  ]
})
export class AttendanceSummaryModule { }
