import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashProfileComponent } from './dash-profile/dash-profile.component';

const routes: Routes = [
  {
    path:'', component:DashProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashbordProfileRoutingModule { }
