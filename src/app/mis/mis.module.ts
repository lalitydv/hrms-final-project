import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MISRoutingModule } from './mis-routing.module';
import { MISReportsComponent } from './mis-reports/mis-reports.component';
import { SharedImportsModule } from '../shared-imports/shared-imports.module';


@NgModule({
  declarations: [
    MISReportsComponent
  ],
  imports: [
    CommonModule,
    MISRoutingModule,
    SharedImportsModule
  ]
})
export class MISModule { }
