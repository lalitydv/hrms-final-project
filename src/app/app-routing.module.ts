import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashbord' ,
    component: DashboardComponent 
  },
  { path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  { path: 'setting', loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule)},
  { path: 'financial', loadChildren: () => import('./financial/financial.module').then(m => m.FinancialModule)},
  { path: 'company-master', loadChildren: () => import('./company-master/company-master.module').then(m => m.CompanyMasterModule)},
  { path: 'MIS-reports', loadChildren: () => import('./mis/mis.module').then(m => m.MISModule)},
  { path: 'payroll-master', loadChildren: () => import('./payroll-master/payroll-master.module').then(m => m.PayrollMasterModule)},
  { path: 'employee-master', loadChildren: () => import('./employee-master/employee-master.module').then(m => m.EmployeeMasterModule)},
  { path: 'shift', loadChildren: () => import('./shift/shift.module').then(m => m.ShiftModule)},
  { path: 'holiday', loadChildren: () => import('./holidays/holidays.module').then(m => m.HolidaysModule)},
  { path: 'leaves', loadChildren: () => import('./leaves/leaves.module').then(m => m.LeavesModule)},
  { path: 'biometric', loadChildren: () => import('./biometric-device/biometric-device.module').then(m => m.BiometricDeviceModule)},
  { path: 'attendance-summary', loadChildren: () => import('./attendance-summary/attendance-summary.module').then(m => m.AttendanceSummaryModule)},
  { path: 'maintanence', loadChildren: () => import('./maintanence/maintanence.module').then(m => m.MaintanenceModule)},
  { path: 'file-manager', loadChildren: () => import('./file-manager/file-manager.module').then(m => m.FileManagerModule)},
  { path: 'hr', loadChildren: () => import('./hr/hr.module').then(m => m.HRModule)},
  { path: 'project-management', loadChildren: () => import('./project-management/project-management.module').then(m => m.ProjectManagementModule)},
  { path: 'help-desk', loadChildren: () => import('./help-desk/help-desk.module').then(m => m.HelpDeskModule)},
  { path: 'meeting', loadChildren: () => import('./meetings/meetings.module').then(m => m.MeetingsModule)},
  { path: 'performance', loadChildren: () => import('./performance/performance.module').then(m => m.PerformanceModule)},
  { path: 'training', loadChildren: () => import('./training/training.module').then(m => m.TrainingModule)},
  { path: 'hr-calendar', loadChildren: () => import('./hr-calendar/hr-calendar.module').then(m => m.HRCalendarModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
