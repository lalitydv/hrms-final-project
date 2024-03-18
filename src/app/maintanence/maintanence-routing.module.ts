import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SendEmployeeComponent } from './send-employee/send-employee.component';
import { SynchronizeFingerprintComponent } from './synchronize-fingerprint/synchronize-fingerprint.component';
import { CollectFingerprintComponent } from './collect-fingerprint/collect-fingerprint.component';
import { CollectAttendanceComponent } from './collect-attendance/collect-attendance.component';
import { EmployeeAttendanceComponent } from './employee-attendance/employee-attendance.component';

const routes: Routes = [
  {
    path:'send-employee' , component: SendEmployeeComponent
  },
  {
    path:'synchronize-fingerprint' , component: SynchronizeFingerprintComponent
  },
  {
    path:'collect-fingerprint' , component: CollectFingerprintComponent
  },
  {
    path:'collect-attendance' , component: CollectAttendanceComponent
  },
  {
    path:'employee-attendance' , component: EmployeeAttendanceComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaintanenceRoutingModule { }
