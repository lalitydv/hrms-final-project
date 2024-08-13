import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PayrollMasterRoutingModule } from './payroll-master-routing.module';
import { PmAllEmployeesComponent } from './pm-all-employees/pm-all-employees.component';
import { PmPayslipComponent } from './pm-payslip/pm-payslip.component';
import { PmConfigurationComponent } from './pm-configuration/pm-configuration.component';
import { PmBonusSettingComponent } from './pm-bonus-setting/pm-bonus-setting.component';
import { PmPayrollReportingComponent } from './pm-payroll-reporting/pm-payroll-reporting.component';
import { SharedImportsModule } from '../shared-imports/shared-imports.module';
import { RangepopupComponent } from './pm-payslip/rangepopup/rangepopup.component';
import { BulkImportPayrollMasterComponent } from './pm-configuration/bulk-import-payroll-master/bulk-import-payroll-master.component';
import { SharedTableModule } from '../shared-table/shared-table.module';


@NgModule({
  declarations: [
    PmAllEmployeesComponent,
    PmPayslipComponent,
    PmConfigurationComponent,
    PmBonusSettingComponent,
    PmPayrollReportingComponent,
    RangepopupComponent,
    BulkImportPayrollMasterComponent
  ],
  imports: [
    CommonModule,
    PayrollMasterRoutingModule,
    SharedImportsModule,
    SharedTableModule
  ]
})
export class PayrollMasterModule { }
