import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeMasterRoutingModule } from './employee-master-routing.module';
import { CardLetterComponent } from './card-letter/card-letter.component';
import { ResignEmployeeComponent } from './resign-employee/resign-employee.component';
import { InactiveEmployeeComponent } from './inactive-employee/inactive-employee.component';
import { ActiveEmployeeComponent } from './active-employee/active-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { SharedImportsModule } from '../shared-imports/shared-imports.module';
import { ConfirmationLetterComponent } from './card-letter/confirmation-letter/confirmation-letter.component';
import { CommenEmpMasterComponent } from './commen-emp-master/commen-emp-master.component';
import { OrgWideSearchComponent } from './org-wide-search/org-wide-search.component';
import { FileVaultComponent } from './list-employee/file-vault/file-vault.component';
import { FileVaultTableComponent } from './list-employee/file-vault-table/file-vault-table.component';
import { EmployeeCodeComponent } from './employee-code/employee-code.component';
import { SearchIconComponent } from './search-icon/search-icon.component';
import { SalaryComponent } from './salary/salary.component';
@NgModule({
  declarations: [
    CardLetterComponent,
    ResignEmployeeComponent,
    InactiveEmployeeComponent,
    ActiveEmployeeComponent,
    ListEmployeeComponent,
    AddEmployeeComponent,
    ConfirmationLetterComponent,
    CommenEmpMasterComponent,
    OrgWideSearchComponent,
    FileVaultComponent,
    FileVaultTableComponent,
    EmployeeCodeComponent,
    SearchIconComponent,
    SalaryComponent
  ],
  imports: [
    CommonModule,
    EmployeeMasterRoutingModule,
    SharedImportsModule
  ]
})
export class EmployeeMasterModule { }
