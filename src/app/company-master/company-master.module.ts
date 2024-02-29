import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyMasterRoutingModule } from './company-master-routing.module';
import { SharedImportsModule } from '../shared-imports/shared-imports.module';
import { CompanyComponent } from './company/company.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { CategoryComponent } from './category/category.component';
import { DivisionComponent } from './division/division.component';
import { SubDivisionComponent } from './sub-division/sub-division.component';
import { DepartmentComponent } from './department/department.component';
import { SubDepartmentComponent } from './sub-department/sub-department.component';
import { CadreComponent } from './cadre/cadre.component';
import { CostCenterComponent } from './cost-center/cost-center.component';
import { DesignationComponent } from './designation/designation.component';
import { LocationComponent } from './location/location.component';


@NgModule({
  declarations: [
    CompanyComponent,
    EditCompanyComponent,
    CategoryComponent,
    DivisionComponent,
    SubDivisionComponent,
    DepartmentComponent,
    SubDepartmentComponent,
    CadreComponent,
    CostCenterComponent,
    DesignationComponent,
    LocationComponent
  ],
  imports: [
    CommonModule,
    CompanyMasterRoutingModule,
    SharedImportsModule
  ]
})
export class CompanyMasterModule { }
