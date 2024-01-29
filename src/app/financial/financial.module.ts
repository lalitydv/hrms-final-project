import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinancialRoutingModule } from './financial-routing.module';
import { FinancialListComponent } from './financial-list/financial-list.component';
import { FinancialAddComponent } from './financial-add/financial-add.component';


@NgModule({
  declarations: [
    FinancialListComponent,
    FinancialAddComponent
  ],
  imports: [
    CommonModule,
    FinancialRoutingModule
  ]
})
export class FinancialModule { }
