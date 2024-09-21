import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PmAllEmployeesComponent } from './pm-all-employees/pm-all-employees.component';
import { PmBonusSettingComponent } from './pm-bonus-setting/pm-bonus-setting.component';
import { PmConfigurationComponent } from './pm-configuration/pm-configuration.component';
import { PmPayrollReportingComponent } from './pm-payroll-reporting/pm-payroll-reporting.component';
import { PmPayslipComponent } from './pm-payslip/pm-payslip.component';
import { BulkImportPayrollMasterComponent } from './pm-configuration/bulk-import-payroll-master/bulk-import-payroll-master.component';
import { FullNdFinalComponent } from './full-nd-final/full-nd-final.component';

const routes: Routes = [
  {
    path:'all-employees',component: PmAllEmployeesComponent
  },
  {
    path:'bouns-setting',component: PmBonusSettingComponent
  },
  {
    path:'configuration',component: PmConfigurationComponent
  },
 
  {
    path:'payroll-reporting',component: PmPayrollReportingComponent
  },
  {
    path:'payslip',component: PmPayslipComponent
  },
  {
    path:'full-and-final',component: FullNdFinalComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PayrollMasterRoutingModule { }
