import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'dashbord' ,
    component: DashboardComponent
    
  },
  { path: '', loadChildren: () => import('./login/login.module').then(m => m.LoginModule)},
  { path: 'setting', loadChildren: () => import('./setting/setting.module').then(m => m.SettingModule)},
  { path: 'financial', loadChildren: () => import('./financial/financial.module').then(m => m.FinancialModule)},
  { path: 'company-master', loadChildren: () => import('./company-master/company-master.module').then(m => m.CompanyMasterModule)},
  { path: 'MIS-reports', loadChildren: () => import('./mis/mis.module').then(m => m.MISModule)},
  { path: 'payroll-master', loadChildren: () => import('./payroll-master/payroll-master.module').then(m => m.PayrollMasterModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
