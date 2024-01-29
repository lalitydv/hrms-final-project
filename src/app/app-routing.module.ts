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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
