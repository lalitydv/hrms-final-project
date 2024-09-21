import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { AddNewEmployeeComponent } from './add-new-employee/add-new-employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { RoleeListComponent } from './rolee-list/rolee-list.component';

const routes: Routes = [
  {
    path:'my-profile', component:MyProfileComponent
  },
  {
    path:'add-new-employee', component:AddNewEmployeeComponent
  },
  {
    path:'employee-list', component:EmployeeListComponent
  },
  {
    path:'add-role', component:AddRoleComponent
  },
  {
    path:'role-list', component:RoleeListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagerRoutingModule { }
