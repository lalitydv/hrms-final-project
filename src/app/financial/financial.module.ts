import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialRoutingModule } from './financial-routing.module';
import { FinancialListComponent } from './financial-list/financial-list.component';
import { FinancialAddComponent } from './financial-add/financial-add.component';
import { CustomTableComponent } from '../common/custom-table/custom-table.component';
import { MatTableModule } from '@angular/material/table';
import { SharedImportsModule } from '../shared-imports/shared-imports.module';
import { TablefinacialComponent } from './tablefinacial/tablefinacial.component';


@NgModule({
  declarations: [
    FinancialListComponent,
    FinancialAddComponent,
    CustomTableComponent,
    TablefinacialComponent
  ],
  imports: [
    CommonModule,
    FinancialRoutingModule,
    SharedImportsModule
    
  ]
})
export class FinancialModule { }
