import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserManagerRoutingModule } from './user-manager-routing.module';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RoleeListComponent } from './rolee-list/rolee-list.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { SharedImportsModule } from '../shared-imports/shared-imports.module';


@NgModule({
  declarations: [
    MyProfileComponent,
    AddNewEmployeeComponent,
    EmployeeListComponent,
    RoleeListComponent,
    AddRoleComponent
  ],
  imports: [
    CommonModule,
    UserManagerRoutingModule,
    SharedImportsModule
  ]
})
export class UserManagerModule { }
