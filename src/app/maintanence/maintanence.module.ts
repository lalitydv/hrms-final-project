import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintanenceRoutingModule } from './maintanence-routing.module';
import { SendEmployeeComponent } from './send-employee/send-employee.component';
import { SynchronizeFingerprintComponent } from './synchronize-fingerprint/synchronize-fingerprint.component';
import { CollectFingerprintComponent } from './collect-fingerprint/collect-fingerprint.component';
import { CollectAttendanceComponent } from './collect-attendance/collect-attendance.component';
import { EmployeeAttendanceComponent } from './employee-attendance/employee-attendance.component';
import { SharedImportsModule } from '../shared-imports/shared-imports.module';


@NgModule({
  declarations: [
    SendEmployeeComponent,
    SynchronizeFingerprintComponent,
    CollectFingerprintComponent,
    CollectAttendanceComponent,
    EmployeeAttendanceComponent
  ],
  imports: [
    CommonModule,
    MaintanenceRoutingModule,
    SharedImportsModule
  ]
})
export class MaintanenceModule { }
