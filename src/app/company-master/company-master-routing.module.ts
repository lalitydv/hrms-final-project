import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './company/company.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { CategoryComponent } from './category/category.component';
import { DivisionComponent } from './division/division.component';
import { SubDivisionComponent } from './sub-division/sub-division.component';
import { DepartmentComponent } from './department/department.component';
import { SubDepartmentComponent } from './sub-department/sub-department.component';
import { CadreComponent } from './cadre/cadre.component';
import { DesignationComponent } from './designation/designation.component';
import { CostCenterComponent } from './cost-center/cost-center.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  {
    path:'company', component: CompanyComponent
  },
  {
    path:'edit-company', component: EditCompanyComponent
  }
  ,
  {
    path:'category', component: CategoryComponent
  }
  ,
  {
    path:'division', component:DivisionComponent
  }
  ,
  {
    path:'sub-division', component:SubDivisionComponent
  }
  ,
  {
    path:'department', component: DepartmentComponent
  }
  ,
  {
    path:'sub-department', component: SubDepartmentComponent
  }
  ,
  {
    path:'cadre', component: CadreComponent
  }
  ,
  {
    path:'designation', component: DesignationComponent
  }
  ,
  {
    path:'cost-centre', component: CostCenterComponent
  }
  ,
  {
    path:'location', component: LocationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyMasterRoutingModule { }
