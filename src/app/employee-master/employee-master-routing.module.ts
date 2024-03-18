import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardLetterComponent } from './card-letter/card-letter.component';
import { ConfirmationLetterComponent } from './card-letter/confirmation-letter/confirmation-letter.component';
import { ActiveEmployeeComponent } from './active-employee/active-employee.component';
import { InactiveEmployeeComponent } from './inactive-employee/inactive-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ResignEmployeeComponent } from './resign-employee/resign-employee.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { FileVaultComponent } from './list-employee/file-vault/file-vault.component';

const routes: Routes = [
  {
    path: 'card-letter', component:CardLetterComponent
  },
  {
    path: 'confirmation-letter', component:ConfirmationLetterComponent
  },
  {
    path: 'active', component:ActiveEmployeeComponent
  },
  {
    path: 'in-active', component:InactiveEmployeeComponent
  },
  {
    path: 'add-employee', component:AddEmployeeComponent
  },
  {
    path: 'resign-employee', component:ResignEmployeeComponent
  },
  {
    path: 'list-employee', component:ListEmployeeComponent
  },
  {
    path: 'file-vault', component:FileVaultComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeMasterRoutingModule { }
