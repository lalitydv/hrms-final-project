import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FinancialListComponent } from './financial-list/financial-list.component';
import { FinancialAddComponent } from './financial-add/financial-add.component';

const routes: Routes = [
  {
    path:'list',component:FinancialListComponent
  },
  {
    path:'add',component:FinancialAddComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinancialRoutingModule { }
