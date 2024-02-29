import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MISReportsComponent } from './mis-reports/mis-reports.component';

const routes: Routes = [
  {
    path:'reports',component:MISReportsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MISRoutingModule { }
